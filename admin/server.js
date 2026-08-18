// ==========================================================================
// RAWFAW Art Catalog — Local Admin Server
//
// Run with:  node admin/server.js
// Then open the printed http://127.0.0.1:PORT/ address in a browser.
//
// Two things you can do from the page:
//   1. Add a new artwork — saves the image into ../assets/ and appends a new
//      entry to ../app.js (ARTWORKS_DATA)
//   2. Edit an existing artwork — change its title, price, description,
//      dimensions, etc. (and optionally replace its image)
//
// Either way, after saving it runs `git add -A && git commit && git push`
// so the live site updates automatically.
//
// This server only listens on 127.0.0.1 (your own machine) — it is not
// reachable from the network or the internet.
// ==========================================================================

const http = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PORT = 5057;
const REPO_ROOT = path.join(__dirname, "..");
const APP_JS_PATH = path.join(REPO_ROOT, "app.js");
const ASSETS_DIR = path.join(REPO_ROOT, "assets");
const ADMIN_HTML_PATH = path.join(__dirname, "index.html");

const MIME_TO_EXT = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif",
};

function slugify(text) {
    // Keep it simple/ASCII; Korean titles fall back to "artwork".
    const base = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    return base || "artwork";
}

function uniqueAssetPath(baseName, ext) {
    let candidate = `${baseName}.${ext}`;
    let n = 2;
    while (fs.existsSync(path.join(ASSETS_DIR, candidate))) {
        candidate = `${baseName}-${n}.${ext}`;
        n += 1;
    }
    return candidate;
}

// --------------------------------------------------------------------------
// Reading / writing ARTWORKS_DATA
//
// We regenerate the whole array every time (rather than trying to find/
// replace one entry's text in place) — it's simpler and can't get confused
// by braces or quotes inside a description.
// --------------------------------------------------------------------------

function findArtworksBlock(content) {
    const startIdx = content.indexOf("const ARTWORKS_DATA");
    if (startIdx === -1) throw new Error("Could not find ARTWORKS_DATA in app.js");
    const openIdx = content.indexOf("[", startIdx);
    const closeIdx = content.indexOf("\n];", startIdx);
    if (openIdx === -1 || closeIdx === -1) throw new Error("Could not find the ARTWORKS_DATA array bounds in app.js");
    return { startIdx, openIdx, closeIdx: closeIdx + 3 }; // include "];"
}

function readArtworks() {
    const content = fs.readFileSync(APP_JS_PATH, "utf8");
    const { startIdx, closeIdx } = findArtworksBlock(content);
    const arrayLiteralCode = content.slice(startIdx, closeIdx).replace(/^const ARTWORKS_DATA\s*=\s*/, "return ");
    // Evaluated locally, on the artist's own trusted file — never reachable
    // from the network (server binds to 127.0.0.1 only).
    const getArtworks = new Function(arrayLiteralCode);
    return getArtworks();
}

function serializeArtwork(entry) {
    // Built as a list of [key, alreadySerializedValue] pairs so optional
    // trailing fields (priceKrw, descriptionKo) can be appended without
    // fragile "is this the last field?" comma bookkeeping.
    const fields = [
        ["id", entry.id],
        ["title", JSON.stringify(entry.title)],
        ["artist", JSON.stringify(entry.artist)],
        ["image", JSON.stringify(entry.image)],
        ["price", JSON.stringify(entry.price)],
        ["numericPrice", entry.numericPrice],
        ["category", JSON.stringify(entry.category)],
        ["color", JSON.stringify(entry.color)],
        ["isNew", entry.isNew ? "true" : "false"],
        ["dimensions", JSON.stringify(entry.dimensions)],
        ["material", JSON.stringify(entry.material)],
        ["year", JSON.stringify(entry.year)],
        ["shippingNote", JSON.stringify(entry.shippingNote)],
        ["description", JSON.stringify(entry.description)],
    ];
    // priceKrw: the artist's own hand-set domestic (KRW) price. When present
    // it takes over from the automatic live-exchange-rate conversion.
    if (entry.priceKrw) fields.push(["priceKrw", JSON.stringify(entry.priceKrw)]);
    if (entry.descriptionKo) fields.push(["descriptionKo", JSON.stringify(entry.descriptionKo)]);

    const lines = fields.map(([key, value]) => `        ${key}: ${value}`);
    return ["    {", lines.join(",\n"), "    }"].join("\n");
}

function writeArtworks(artworks) {
    const content = fs.readFileSync(APP_JS_PATH, "utf8");
    const { startIdx, closeIdx } = findArtworksBlock(content);

    const before = content.slice(0, startIdx);
    const after = content.slice(closeIdx);

    const newBlock = `const ARTWORKS_DATA = [\n${artworks.map(serializeArtwork).join(",\n")}\n];`;

    fs.writeFileSync(APP_JS_PATH, `${before}${newBlock}${after}`, "utf8");
}

function nextId(artworks) {
    const ids = artworks.map((a) => a.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
}

function runGit(commitMessage) {
    const opts = { cwd: REPO_ROOT, stdio: "pipe" };
    execSync("git add -A", opts);
    // Nothing to commit is not an error we want to crash on.
    try {
        execSync(`git commit -m ${JSON.stringify(commitMessage)}`, opts);
    } catch (e) {
        const out = (e.stdout || "").toString();
        if (!/nothing to commit/i.test(out)) throw e;
    }
    const pushOut = execSync("git push", { ...opts, stdio: "pipe" });
    return pushOut.toString();
}

function sendJson(res, status, obj) {
    const body = JSON.stringify(obj);
    res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(body),
    });
    res.end(body);
}

function readRequestBody(req, maxBytes) {
    return new Promise((resolve, reject) => {
        let chunks = [];
        let size = 0;
        req.on("data", (chunk) => {
            size += chunk.length;
            if (size > maxBytes) {
                req.destroy();
                reject(new Error("TOO_LARGE"));
                return;
            }
            chunks.push(chunk);
        });
        req.on("end", () => {
            if (size > maxBytes) return; // already rejected above
            resolve(Buffer.concat(chunks).toString("utf8"));
        });
        req.on("error", reject);
    });
}

function saveImageIfProvided(imageBase64, imageMimeType, titleForName) {
    if (!imageBase64 || !imageMimeType) return null;
    const ext = MIME_TO_EXT[imageMimeType];
    if (!ext) throw new Error(`지원하지 않는 이미지 형식입니다: ${imageMimeType}`);
    if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
    const assetFileName = uniqueAssetPath(slugify(titleForName), ext);
    fs.writeFileSync(path.join(ASSETS_DIR, assetFileName), Buffer.from(imageBase64, "base64"));
    return `assets/${assetFileName}`;
}

function fieldsFromPayload(data) {
    const {
        title,
        artist,
        price,
        priceKrw,
        category,
        color,
        isNew,
        dimensions,
        material,
        year,
        shippingNote,
        description,
        descriptionKo,
    } = data;

    if (!title || !title.trim()) throw new Error("작품제목을 입력해주세요.");
    if (!price || !price.trim()) throw new Error("가격을 입력해주세요.");

    const numericPrice = parseInt(String(price).replace(/[^0-9]/g, ""), 10) || 0;

    return {
        title: title.trim(),
        artist: (artist && artist.trim()) || "Rawfaw",
        price: price.trim(),
        priceKrw: (priceKrw && priceKrw.trim()) || "",
        numericPrice,
        category: category || "ORIGINAL",
        color: color || "terracotta",
        isNew: !!isNew,
        dimensions: dimensions || "",
        material: material || "",
        year: year || "",
        shippingNote: shippingNote || "",
        description: description || "",
        descriptionKo: descriptionKo || "",
    };
}

const server = http.createServer((req, res) => {
    if (req.method === "GET" && (req.url === "/" || req.url === "/index.html")) {
        const html = fs.readFileSync(ADMIN_HTML_PATH, "utf8");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
        return;
    }

    // Serve saved artwork images so the edit form can preview them
    // (e.g. GET /assets/foo.png -> ../assets/foo.png)
    if (req.method === "GET" && req.url.startsWith("/assets/")) {
        const requested = decodeURIComponent(req.url.slice("/assets/".length).split("?")[0]);
        const filePath = path.join(ASSETS_DIR, requested);
        if (!filePath.startsWith(ASSETS_DIR) || !fs.existsSync(filePath)) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not found");
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const contentType =
            { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif" }[ext] ||
            "application/octet-stream";
        res.writeHead(200, { "Content-Type": contentType });
        fs.createReadStream(filePath).pipe(res);
        return;
    }

    if (req.method === "GET" && req.url === "/artworks") {
        try {
            const artworks = readArtworks().sort((a, b) => a.id - b.id);
            sendJson(res, 200, { ok: true, artworks });
        } catch (err) {
            sendJson(res, 500, { ok: false, error: err.message });
        }
        return;
    }

    if (req.method === "POST" && req.url === "/add-artwork") {
        const MAX_BYTES = 20 * 1024 * 1024; // 20MB safety cap (base64 image + fields)
        readRequestBody(req, MAX_BYTES)
            .then((raw) => {
                let data;
                try {
                    data = JSON.parse(raw);
                } catch (e) {
                    sendJson(res, 400, { ok: false, error: "잘못된 요청 형식입니다." });
                    return;
                }

                try {
                    const { imageBase64, imageMimeType } = data;
                    if (!imageBase64 || !imageMimeType) throw new Error("이미지를 선택해주세요.");

                    const fields = fieldsFromPayload(data);
                    const image = saveImageIfProvided(imageBase64, imageMimeType, fields.title);

                    const artworks = readArtworks();
                    const id = nextId(artworks);
                    const entry = { id, image, ...fields };
                    artworks.push(entry);
                    writeArtworks(artworks);

                    let gitOutput = "";
                    let pushed = true;
                    try {
                        gitOutput = runGit(`Add artwork: ${entry.title}`);
                    } catch (gitErr) {
                        pushed = false;
                        gitOutput = (gitErr.stderr || gitErr.stdout || gitErr.message || "").toString();
                    }

                    sendJson(res, 200, { ok: true, id, image: entry.image, pushed, gitOutput });
                } catch (err) {
                    sendJson(res, 400, { ok: false, error: err.message });
                }
            })
            .catch(() => {
                sendJson(res, 413, { ok: false, error: "이미지가 너무 큽니다 (최대 약 15MB)." });
            });
        return;
    }

    if (req.method === "POST" && req.url === "/update-artwork") {
        const MAX_BYTES = 20 * 1024 * 1024;
        readRequestBody(req, MAX_BYTES)
            .then((raw) => {
                let data;
                try {
                    data = JSON.parse(raw);
                } catch (e) {
                    sendJson(res, 400, { ok: false, error: "잘못된 요청 형식입니다." });
                    return;
                }

                try {
                    const id = parseInt(data.id, 10);
                    if (!id) throw new Error("수정할 작품을 선택해주세요.");

                    const artworks = readArtworks();
                    const idx = artworks.findIndex((a) => a.id === id);
                    if (idx === -1) throw new Error(`id ${id} 작품을 찾을 수 없습니다.`);

                    const fields = fieldsFromPayload(data);
                    const { imageBase64, imageMimeType } = data;
                    const newImage = saveImageIfProvided(imageBase64, imageMimeType, fields.title);

                    const existing = artworks[idx];
                    const updated = { id, image: newImage || existing.image, ...fields };
                    artworks[idx] = updated;
                    writeArtworks(artworks);

                    let gitOutput = "";
                    let pushed = true;
                    try {
                        gitOutput = runGit(`Update artwork: ${updated.title}`);
                    } catch (gitErr) {
                        pushed = false;
                        gitOutput = (gitErr.stderr || gitErr.stdout || gitErr.message || "").toString();
                    }

                    sendJson(res, 200, { ok: true, id, image: updated.image, pushed, gitOutput });
                } catch (err) {
                    sendJson(res, 400, { ok: false, error: err.message });
                }
            })
            .catch(() => {
                sendJson(res, 413, { ok: false, error: "이미지가 너무 큽니다 (최대 약 15MB)." });
            });
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`\n  RAWFAW Admin running at: http://127.0.0.1:${PORT}/\n`);
});
