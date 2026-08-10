// ==========================================================================
// LUAS Art Catalog — Local Admin Upload Server
//
// Run with:  node admin/server.js
// Then open the printed http://127.0.0.1:PORT/ address in a browser.
//
// What it does when you submit the form:
//   1. Saves the uploaded image into ../assets/
//   2. Appends a new artwork entry into ../app.js (ARTWORKS_DATA)
//   3. Runs `git add -A && git commit && git push` so the live site updates
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

function nextId(content) {
    const ids = [...content.matchAll(/id:\s*(\d+)/g)].map((m) => parseInt(m[1], 10));
    return ids.length ? Math.max(...ids) + 1 : 1;
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

function insertArtwork(entry) {
    const content = fs.readFileSync(APP_JS_PATH, "utf8");
    const startIdx = content.indexOf("const ARTWORKS_DATA");
    if (startIdx === -1) throw new Error("Could not find ARTWORKS_DATA in app.js");
    const closeIdx = content.indexOf("\n];", startIdx);
    if (closeIdx === -1) throw new Error("Could not find the end of ARTWORKS_DATA in app.js");

    const before = content.slice(0, closeIdx);
    const after = content.slice(closeIdx);

    const lines = [
        "    {",
        `        id: ${entry.id},`,
        `        title: ${JSON.stringify(entry.title)},`,
        `        artist: ${JSON.stringify(entry.artist)},`,
        `        image: ${JSON.stringify(entry.image)},`,
        `        price: ${JSON.stringify(entry.price)},`,
        `        numericPrice: ${entry.numericPrice},`,
        `        category: ${JSON.stringify(entry.category)},`,
        `        color: ${JSON.stringify(entry.color)},`,
        `        isNew: ${entry.isNew ? "true" : "false"},`,
        `        dimensions: ${JSON.stringify(entry.dimensions)},`,
        `        material: ${JSON.stringify(entry.material)},`,
        `        year: ${JSON.stringify(entry.year)},`,
        `        shippingNote: ${JSON.stringify(entry.shippingNote)},`,
        `        description: ${JSON.stringify(entry.description)}`,
        "    }",
    ].join("\n");

    const newContent = `${before},\n${lines}${after}`;
    fs.writeFileSync(APP_JS_PATH, newContent, "utf8");
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

const server = http.createServer((req, res) => {
    if (req.method === "GET" && (req.url === "/" || req.url === "/index.html")) {
        const html = fs.readFileSync(ADMIN_HTML_PATH, "utf8");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
        return;
    }

    if (req.method === "POST" && req.url === "/add-artwork") {
        let chunks = [];
        let size = 0;
        const MAX_BYTES = 20 * 1024 * 1024; // 20MB safety cap (base64 image + fields)

        req.on("data", (chunk) => {
            size += chunk.length;
            if (size > MAX_BYTES) {
                req.destroy();
                return;
            }
            chunks.push(chunk);
        });

        req.on("end", () => {
            if (size > MAX_BYTES) {
                sendJson(res, 413, { ok: false, error: "이미지가 너무 큽니다 (최대 약 15MB)." });
                return;
            }
            let data;
            try {
                data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
            } catch (e) {
                sendJson(res, 400, { ok: false, error: "잘못된 요청 형식입니다." });
                return;
            }

            try {
                const {
                    title,
                    artist,
                    price,
                    category,
                    color,
                    isNew,
                    dimensions,
                    material,
                    year,
                    shippingNote,
                    description,
                    imageBase64,
                    imageMimeType,
                } = data;

                if (!title || !title.trim()) throw new Error("작품제목을 입력해주세요.");
                if (!price || !price.trim()) throw new Error("가격을 입력해주세요.");
                if (!imageBase64 || !imageMimeType) throw new Error("이미지를 선택해주세요.");

                const ext = MIME_TO_EXT[imageMimeType];
                if (!ext) throw new Error(`지원하지 않는 이미지 형식입니다: ${imageMimeType}`);

                if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

                const assetFileName = uniqueAssetPath(slugify(title), ext);
                const assetFullPath = path.join(ASSETS_DIR, assetFileName);
                fs.writeFileSync(assetFullPath, Buffer.from(imageBase64, "base64"));

                const appJsContent = fs.readFileSync(APP_JS_PATH, "utf8");
                const id = nextId(appJsContent);

                const numericPrice = parseInt(String(price).replace(/[^0-9]/g, ""), 10) || 0;

                const entry = {
                    id,
                    title: title.trim(),
                    artist: (artist && artist.trim()) || "Rawfaw",
                    image: `assets/${assetFileName}`,
                    price: price.trim(),
                    numericPrice,
                    category: category || "ORIGINAL",
                    color: color || "terracotta",
                    isNew: !!isNew,
                    dimensions: dimensions || "",
                    material: material || "",
                    year: year || "",
                    shippingNote: shippingNote || "",
                    description: description || "",
                };

                insertArtwork(entry);

                let gitOutput = "";
                let pushed = true;
                try {
                    gitOutput = runGit(`Add artwork: ${entry.title}`);
                } catch (gitErr) {
                    pushed = false;
                    gitOutput = (gitErr.stderr || gitErr.stdout || gitErr.message || "").toString();
                }

                sendJson(res, 200, {
                    ok: true,
                    id,
                    image: entry.image,
                    pushed,
                    gitOutput,
                });
            } catch (err) {
                sendJson(res, 400, { ok: false, error: err.message });
            }
        });
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`\n  LUAS Admin Upload running at: http://127.0.0.1:${PORT}/\n`);
});
