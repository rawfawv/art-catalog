// ==========================================================================
// Artwork Dataset
// ==========================================================================
const ARTWORKS_DATA = [
    {
        id: 2,
        title: "The Flowerpot of Time | 시간의 화분",
        artist: "Rawfaw",
        image: "assets/still_life_vase.png",
        price: "$2,300",
        numericPrice: 2300,
        category: "ORIGINAL",
        color: "dustyrose",
        isNew: true,
        dimensions: "116.8 x 91.0cm",
        material: "캔버스에 유화 (Oil on canvas)",
        year: "2023",
        shippingNote: "Shipping charged separately. Framing is optional; selecting a frame will increase shipping cost.",
        description: "I believe that a person is made up of three elements: the body, the mind, and the soul. The central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nThe plants in my paintings represent people who long to discover their own identity, yet still feel rooted within invisible boundaries.\n\nFlowerpot of Time reflects on the experience of remaining in the same place while time continues to move forward. Seasons change, years pass, and life quietly moves on, yet the flowerpot remains where it has always been.\n\nThe flowerpot symbolizes the invisible limitations that keep us from taking root on our own, while the passing seasons represent the relentless flow of time. Although growth continues, true independence has not yet been reached.\n\nThrough this work, I ask a simple question: How much time must pass before we are finally ready to leave the flowerpot?"
    },
    {
        id: 10,
        title: "Flowerpot of the Body (Eye) | 육체의 화분(눈알)",
        artist: "Rawfaw",
        image: "assets/artwork.png",
        price: "$950",
        numericPrice: 950,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "63.6 x 46.9cm ",
        material: "판넬에 유화 (Oil on panel)",
        year: "2024",
        shippingNote: "Shipping charged separately. Framing is optional; selecting a frame will increase shipping cost.",
        description: "Flowerpot of the Body\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world.\n\nThe body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions.\n\nBy placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence.\n\nThis work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity."
    },
    {
        id: 11,
        title: "Flowerpot of the Soul | 영혼의화분",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-soul-2.png",
        price: "$2,000",
        numericPrice: 2000,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "116.8 x 80.3 cm",
        material: "Oil on panel",
        year: "2025",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "Flowerpot of the Soul\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Soul explores the question of whether the soul can ever become truly free.\n\nThe soul is often considered the deepest and most essential part of who we are. Yet it is easily confined by fear, desire, memory, and the expectations of the world.\n\nThe flowerpot represents those invisible boundaries that keep the soul rooted in one place.\n\nThrough this work, I ask a simple question:\n\nCan my soul leave the flowerpot and take root in the earth?\n\nRather than offering an answer, the work leaves that question open, inviting viewers to reflect on the possibility of spiritual independence and growth."
    },
    {
        id: 12,
        title: "Flowerpot of the Mind (Summer) | 정신의 화분(여름)",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-mind-summer.png",
        price: "$3,000",
        numericPrice: 3000,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "145.5 x 112.1 cm",
        material: "Oil on panel",
        year: "2025",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "Flowerpot of the Mind (Summer)\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Mind (Summer) explores the paradox of growth without freedom.\n\nSummer brings warmth, light, and abundant life. Everything appears to flourish, yet the mind remains inside the same flowerpot.\n\nEven when conditions seem perfect for growth, we can still find ourselves unable to move beyond the invisible boundaries we have lived within for so long.\n\nThis work asks whether true growth is possible without independence.\n\nCan the mind truly grow if it never leaves the flowerpot?\n\nSummer symbolizes vitality and possibility, while the flowerpot represents the limitations that continue to shape the mind."
    },
    {
        id: 13,
        title: "Flowerpot of the Mind (Winter) | 정신의 화분(겨울)",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-mind-winter.png",
        price: "$3,000",
        numericPrice: 3000,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "145.5 x 112.1cm ",
        material: "Oil on panel",
        year: "2026",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "I believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Mind (Winter) reflects on the passage of time within an unchanged state.\n\nWhile trapped inside the flowerpot, the seasons continue to pass. Winter fades, summer returns, and the cycle repeats endlessly. Although the world keeps changing, the mind often remains rooted in the same place.\n\nThis work asks what it means to remain emotionally or mentally confined while time moves forward without waiting.\n\nHow many seasons must pass before the mind can finally leave the flowerpot?\n\nThe changing seasons symbolize the flow of time, while the flowerpot represents the invisible boundaries that keep the mind from moving freely."
    },
    {
        id: 14,
        title: "The Flowerpot of the Body (Eyes) | 육체의 화분(눈알)",
        artist: "Rawfaw",
        image: "assets/the-flowerpot-of-the-body-eyes.png",
        price: "$950",
        numericPrice: 950,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "63.6 x 46.9cm ",
        material: "Oil on panel",
        year: "2024",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "Flowerpot of the Body I believe that a person is made up of three elements: the body, the mind, and the soul. The central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot. Flowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world. The body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions. By placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence. This work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity."
    },
    {
        id: 15,
        title: "Room 223 | 223호의 여자",
        artist: "Rawfaw",
        image: "assets/room-223-223.png",
        price: "$2,300",
        numericPrice: 2300,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "116.8 x 91.0cm ",
        material: "Oil on panel",
        year: "2023",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "Dart Human Series - Room 223\n\nThe Dart Human series began with a simple question:\n\nWhat if life is like throwing darts?\n\nEvery decision, attempt, failure, and dream is another dart thrown toward a target we can’t fully see.\n\nSome darts miss.\nSome land close.\nA few hit the center.\n\nBut no one reaches the target without throwing.\n\nThis woman has spent a long time climbing.\n\nStep by step, she built her life with her own strength.\nShe kept moving even when nobody was watching.\nEven when progress felt slow.\n\nNow, for the first time in a while, she pauses.\n\nShe looks back at the path she has climbed and realizes how far she has come.\n\nThere is no regret in her expression.\nNo doubt.\n\nOnly confidence.\n\nNot because her journey is finished,\nbut because she finally trusts herself.\n\nThe target is still ahead.\nThere are many more darts left to throw.\n\nBut wherever they land,\nshe knows she has the courage to keep aiming.\n\nMay her next dart fly even farther than the last.\nAnd may yours, too. 🎯✨"
    },
    {
        id: 16,
        title: "Room 1017 | 1017호의 남자",
        artist: "Rawfaw",
        image: "assets/room-1017-1017.png",
        price: "$950",
        numericPrice: 950,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "63.6 x 46.9cm",
        material: "Oil on panel",
        year: "2023",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "This is one piece from my “Dart Human” series.\n\nI think life is about throwing darts toward the center of a target.\nWe keep walking forward, throwing darts toward the middle of our lives.\n\nMost of them miss.\nSometimes, maybe we barely hit the edge.\n\nBut I think that’s what life is.\n\nThis person is one of my friends.\nI painted this portrait while thinking about his life.\n\nHe quietly keeps walking his own path.\n\nEven when the road feels like a desert,\nhe never forgets to notice the beautiful cactus flowers along the way."
    }
];

// ==========================================================================
// Application State
// ==========================================================================
let currentView = "GRID"; // GRID, POSTER, COMPACT
let currentSearchQuery = "";
let currentSort = "NEW"; // NEW, ARTIST, TITLE

// DOM Elements
const catalogGrid = document.getElementById("catalog-grid");
const searchInput = document.getElementById("catalog-search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
const noResults = document.getElementById("no-results");
const resetFiltersBtn = document.getElementById("reset-filters-btn");

// Detail Panel Elements
const detailPanel = document.getElementById("detail-panel");
const detailCloseBtn = document.getElementById("detail-close-btn");
const detailOverlay = document.getElementById("detail-overlay");
const detailTitle = document.getElementById("detail-title");
const detailSubtitle = document.getElementById("detail-subtitle");
const detailDesc = document.getElementById("detail-desc");
const detailPrice = document.getElementById("detail-price");
const detailShippingNote = document.getElementById("detail-shipping-note");
const detailSpecs = document.getElementById("detail-specs");
const detailImg = document.getElementById("detail-img");
const btnEmailInquiry = document.getElementById("btn-email-inquiry");

// Form Elements
const inquiryForm = document.getElementById("inquiry-form");
const inputMessage = document.getElementById("input-message");
const charCount = document.getElementById("char-count");
const inputFile = document.getElementById("input-file");
const fileNameLabel = document.getElementById("file-name-label");

// Mobile Menu
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileNavMenu = document.getElementById("mobile-nav-menu");

// Language Switch
const langButtons = document.querySelectorAll(".lang-btn");

// ==========================================================================
// i18n (English / Korean toggle for site chrome — artwork data itself is
// already bilingual inline and is not affected by this toggle)
// ==========================================================================
const I18N = {
    search: { en: "SEARCH", ko: "검색" },
    nav_bio: { en: "Artist Bio", ko: "작가약력" },
    nav_contact: { en: "Contact", ko: "문의하기" },
    bio_heading: { en: "About RAWFAW", ko: "RAWFAW" },
    bio_para_1: { en: "I create paintings about the body, the mind, and the soul.", ko: "저는 육체, 정신, 영혼에 대한 그림을 그립니다." },
    bio_para_2: {
        en: "The flowerpots that appear throughout my work are metaphors for people. They represent the invisible boundaries we live within—our fears, expectations, environments, and identities that continue to shape us.",
        ko: "제 작업에 반복해서 등장하는 화분은 사람을 상징합니다. 그것은 두려움, 환경, 타인의 기대, 그리고 스스로 만든 한계처럼 우리를 둘러싸고 있는 보이지 않는 경계입니다.",
    },
    bio_para_3: {
        en: "Each series explores a different part of what it means to be human. <strong>The Body Flowerpot</strong> reflects the physical self that experiences the world. <strong>The Mind Flowerpot</strong> questions the invisible limits that keep our thoughts rooted in place. <strong>The Soul Flowerpot</strong> imagines the possibility of finally becoming free.",
        ko: "각 연작은 인간 존재의 서로 다른 측면을 탐구합니다. <strong>〈육체의 화분〉</strong>은 세상을 경험하는 육체를, <strong>〈정신의 화분〉</strong>은 정신을 붙잡고 있는 보이지 않는 한계를, <strong>〈영혼의 화분〉</strong>은 마침내 자유를 향해 나아가는 가능성을 이야기합니다.",
    },
    bio_para_4: {
        en: "Alongside these works, my <strong>Dart Human</strong> series views life as a journey of throwing darts toward an unseen target. Every choice, failure, hope, and dream becomes another throw. Missing is inevitable, but growth comes from continuing to aim.",
        ko: "또 다른 연작인 <strong>〈Dart Human〉</strong>은 인생을 보이지 않는 과녁을 향해 다트를 던지는 과정으로 바라봅니다. 선택과 실패, 희망과 꿈은 모두 또 하나의 다트가 되고, 빗나감은 피할 수 없지만 계속 던지는 과정 속에서 우리는 성장합니다.",
    },
    bio_para_5: {
        en: "Although my paintings use playful characters, bold colors, and graphic forms, they are rooted in questions about identity, independence, and the quiet hope of becoming who we truly are.",
        ko: "제 그림은 선명한 색과 유쾌한 형태를 가지고 있지만, 그 안에는 정체성, 독립, 그리고 진정한 자신이 되어가는 과정에 대한 질문이 담겨 있습니다.",
    },
    bio_para_6: {
        en: "Rather than offering answers, I hope each painting leaves space for viewers to discover their own.",
        ko: "저는 작품이 답을 제시하기보다, 보는 사람 각자가 자신의 이야기를 발견할 수 있는 공간이 되기를 바랍니다.",
    },
    bio_view_artworks: { en: "View Artworks", ko: "작품 보기" },
    bio_get_in_touch: { en: "Get in Touch", ko: "문의하기" },
    search_placeholder: { en: "Search artworks or artists...", ko: "작품명 또는 작가명으로 검색..." },
    no_results: { en: "No results found.", ko: "검색 결과가 없습니다." },
    reset_filters: { en: "Reset Filters", ko: "필터 초기화" },
    contact_heading: { en: "Contact", ko: "문의하기" },
    contact_intro: {
        en: "Hello, Our goal is to establish a virtuous cycle in the art industry by connecting various media industries, ultimately creating a vibrant world filled with diverse artworks. We are looking forward to having you join us.",
        ko: "안녕하세요, 저희의 목표는 다양한 미디어 산업을 연결하여 예술 산업에 선순환을 만드는 것입니다. 다채로운 작품으로 가득한 활기찬 세상을 만들어가고자 하며, 함께해 주시길 기대합니다.",
    },
    label_name: { en: "Name", ko: "이름" },
    placeholder_name: { en: "Please enter your name.", ko: "이름을 입력해 주세요." },
    label_company: { en: "Company", ko: "회사명" },
    placeholder_company: { en: "Please enter your company name.", ko: "회사명을 입력해 주세요." },
    label_email: { en: "Email", ko: "이메일" },
    placeholder_email: { en: "Please enter your email address.", ko: "이메일 주소를 입력해 주세요." },
    label_phone: { en: "Phone", ko: "전화번호" },
    placeholder_phone: { en: "Please enter numbers only, without '-'.", ko: "'-' 없이 입력해 주세요." },
    label_message: { en: "Message", ko: "문의내용" },
    placeholder_message: {
        en: "Let us know your shipping address and whether you'd like a frame, and we'll confirm the total cost. (Please write within 1000 characters.)",
        ko: "배송 주소와 액자 여부를 알려주시면 총 금액을 안내해드립니다. (1000자 이내로 작성해 주세요.)",
    },
    label_attach: { en: "Attach File", ko: "파일첨부" },
    no_file_selected: { en: "No file selected", ko: "선택된 파일 없음" },
    privacy_agree: { en: "I agree to the Privacy Policy.", ko: "개인정보 처리 방침에 동의합니다." },
    submit_btn: { en: "Submit", ko: "보내기" },
    footer_company: { en: "RAWFAW House", ko: "라파의 집" },
    footer_biz: { en: "Business Reg. No. 150-09-02984", ko: "사업자등록번호 150-09-02984" },
    footer_address: { en: "Address: Seongdong-gu, Seoul, South Korea", ko: "주소: 서울시 성동구" },
    artwork_info: { en: "Artwork Information", ko: "작품 정보" },
    spec_dimensions: { en: "Dimensions", ko: "실제규격" },
    spec_material: { en: "Material", ko: "재질" },
    spec_year: { en: "Year", ko: "제작연도" },
    estimated_price: { en: "Estimated Price:", ko: "예상 가격:" },
    purchase_heading: { en: "Purchase Inquiry", ko: "구매 문의" },
    purchase_inquiry_text: {
        en: "Interested in this piece? I'd love to hear from you — I check my inbox every single day, so send a quick note and I'll get back to you soon.",
        ko: "이 작품이 마음에 드셨나요? 언제든 편하게 문의해주세요. 메일함은 매일 확인하고 있어서 빠르게 답장드리겠습니다.",
    },
    send_purchase_inquiry: { en: "Send Purchase Inquiry", ko: "구매 문의 보내기" },
    view_artwork: { en: "View Artwork", ko: "작품 보기" },
    badge_original: { en: "ORIGINAL", ko: "오리지널" },
    badge_limited: { en: "LIMITED", ko: "리미티드" },
    badge_poster: { en: "POSTER", ko: "포스터" },
    required_field_alert: { en: "Please fill in all required fields.", ko: "필수 입력 값을 입력해 주세요." },
};

let currentLang = localStorage.getItem("rawfaw_lang") || "en";

function t(key) {
    const entry = I18N[key];
    if (!entry) return key;
    return entry[currentLang] || entry.en;
}

function badgeLabel(category) {
    if (category === "ORIGINAL") return t("badge_original");
    if (category === "LIMITED") return t("badge_limited");
    if (category === "POSTER") return t("badge_poster");
    return category;
}

function thankYouMessage(name) {
    return currentLang === "ko"
        ? `감사합니다, ${name}님! 문의가 정상적으로 접수되었습니다. 담당 큐레이터가 빠르게 연락드리겠습니다.`
        : `Thank you, ${name}! Your inquiry has been received. A curator will contact you shortly.`;
}

function purchaseInquiryMessage(artist, title) {
    return currentLang === "ko"
        ? `안녕하세요, ${artist} 작가의 "${title}" 작품 구매에 관해 문의드립니다.`
        : `Hello, I would like to inquire about purchasing "${title}" by ${artist}.`;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("rawfaw_lang", lang);
    document.documentElement.lang = lang;

    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        // innerHTML (not textContent) so translations may contain simple inline
        // markup like <strong> (e.g. the artist bio's series names).
        el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Re-render dynamic pieces that carry translated text (guarded — not
    // every page has a catalog or detail panel in its DOM)
    if (catalogGrid) renderCatalog();
    if (detailPanel && detailPanel.classList.contains("open") && currentDetailArt) {
        renderDetailSpecs(currentDetailArt);
    }
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    applyLanguage(currentLang);
    applyContactPrefill();
});

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function initEventListeners() {
    // Search input (index.html only)
    if (searchInput && searchClearBtn) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim().toLowerCase();
            searchClearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
            renderCatalog();
        });

        searchClearBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearchQuery = "";
            searchClearBtn.style.display = "none";
            renderCatalog();
            searchInput.focus();
        });
    }

    // Header Nav: close the mobile menu after tapping a link (plain page navigation otherwise)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavMenu.classList.remove("show");
            mobileNavMenu.style.display = "none";
            mobileMenuToggle.classList.remove("active");
        });
    });

    // Reset Filters Button (index.html only)
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearchQuery = "";
            searchClearBtn.style.display = "none";
            renderCatalog();
        });
    }

    // Language Switch (EN / KO)
    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    // Mobile Hamburger Toggle
    mobileMenuToggle.addEventListener("click", () => {
        mobileMenuToggle.classList.toggle("active");
        if (mobileMenuToggle.classList.contains("active")) {
            mobileNavMenu.style.display = "flex";
        } else {
            mobileNavMenu.style.display = "none";
        }
    });

    // Detail Panel Close (index.html only)
    if (detailPanel) {
        detailCloseBtn.addEventListener("click", closeDetailPanel);
        detailOverlay.addEventListener("click", closeDetailPanel);
    }

    // Purchase Inquiry button: stash a prefilled message and hand off to the
    // standalone Contact page.
    if (btnEmailInquiry) {
        btnEmailInquiry.addEventListener("click", () => {
            if (!currentDetailArt) return;
            const msg = purchaseInquiryMessage(currentDetailArt.artist, currentDetailArt.title);
            sessionStorage.setItem("rawfaw_contact_prefill", msg);
            window.location.href = "contact.html";
        });
    }

    // Contact form (contact.html only)
    if (inquiryForm) {
        // Textarea Character Counter
        inputMessage.addEventListener("input", () => {
            const len = inputMessage.value.length;
            charCount.textContent = len;
        });

        // File Input Label updater
        inputFile.addEventListener("change", (e) => {
            if (e.target.files && e.target.files.length > 0) {
                fileNameLabel.textContent = e.target.files[0].name;
                fileNameLabel.style.color = "var(--black)";
            } else {
                fileNameLabel.textContent = t("no_file_selected");
                fileNameLabel.style.color = "var(--text-muted-light)";
            }
        });

        // Submission (delivered via FormSubmit.co — see form's action= attribute)
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("input-name").value;
            const email = document.getElementById("input-email").value;
            const phone = document.getElementById("input-phone").value;
            const agree = document.getElementById("input-agree").checked;

            if (!name || !email || !phone || !agree) {
                alert(t("required_field_alert"));
                return;
            }

            const submitBtn = inquiryForm.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === "ko" ? "전송 중..." : "Sending...";

            const ajaxUrl = inquiryForm.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
            const formData = new FormData(inquiryForm);

            fetch(ajaxUrl, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Submit failed");
                    alert(thankYouMessage(name));
                    inquiryForm.reset();
                    fileNameLabel.textContent = t("no_file_selected");
                    charCount.textContent = 0;
                })
                .catch(() => {
                    alert(currentLang === "ko"
                        ? "문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요."
                        : "Failed to send your inquiry. Please try again in a moment.");
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                });
        });
    }
}

// ==========================================================================
// Catalog Rendering Logic
// ==========================================================================
function renderCatalog() {
    if (!catalogGrid) return; // this page has no catalog (bio.html / contact.html)

    // 1. Filter Data
    let filteredArtworks = ARTWORKS_DATA.filter(art => {
        // Search text check
        if (currentSearchQuery.length > 0) {
            const matchTitle = art.title.toLowerCase().includes(currentSearchQuery);
            const matchArtist = art.artist.toLowerCase().includes(currentSearchQuery);
            if (!matchTitle && !matchArtist) return false;
        }

        return true;
    });

    // 2. Sort Data
    filteredArtworks.sort((a, b) => {
        if (currentSort === "NEW") {
            // New items first
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return a.id - b.id; // Keep original id order
        } else if (currentSort === "ARTIST") {
            return a.artist.localeCompare(b.artist);
        } else if (currentSort === "TITLE") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    // 3. Update UI
    catalogGrid.innerHTML = "";
    
    if (filteredArtworks.length === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
        
        filteredArtworks.forEach((art, index) => {
            const cardElement = createCardHTML(art, index);
            catalogGrid.appendChild(cardElement);
        });
    }
}

// Helper: Create Card HTML based on currentView
function createCardHTML(art, index) {
    const card = document.createElement("div");
    card.className = "catalog-card";
    card.dataset.id = art.id;

    // Poster mode needs background color data-attribute
    if (currentView === "POSTER") {
        card.setAttribute("data-color", art.color);
    }

    // Grid mode: Highlight the first item as in Reference Image 2
    if (currentView === "GRID" && index === 1) {
        card.classList.add("card-highlight");
    }

    card.addEventListener("click", () => openDetailPanel(art));

    if (currentView === "GRID") {
        // Highlight card keeps the original all-text layout.
        // Regular cards fully transform into that same highlight look on hover.
        const isHighlighted = card.classList.contains("card-highlight");

        card.innerHTML = `
            ${isHighlighted ? '' : `<div class="card-image-container"><img src="${art.image}" alt="${art.title}"></div>`}
            <div class="card-info">
                <h3 class="card-title">${isHighlighted ? `${art.title}: A MASTERPIECE BY ${art.artist}` : art.title}</h3>
                <p class="card-artist">${isHighlighted ? art.description : art.artist}</p>
                <div class="card-meta">
                    <span class="card-price">${art.price}</span>
                    <span class="card-badge">${isHighlighted ? t('view_artwork') : badgeLabel(art.category)}</span>
                </div>
            </div>
            ${isHighlighted
                ? `<div class="card-hover-image"><img src="${art.image}" alt="${art.title}"></div>`
                : `<div class="card-hover-highlight">
                    <h3 class="card-title">${art.title}: A MASTERPIECE BY ${art.artist}</h3>
                    <p class="card-hover-desc">${art.description}</p>
                    <div class="card-meta">
                        <span class="card-price">${art.price}</span>
                        <span class="card-badge">${t('view_artwork')}</span>
                    </div>
                </div>`}
        `;
    } else if (currentView === "POSTER") {
        // Style matching Image 1: colorful card, image frame, title, description, logo placeholder
        card.innerHTML = `
            <h3 class="card-title">${art.title}</h3>
            <div class="card-image-container">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="card-info">
                <h4 class="card-artist">${art.artist}</h4>
                <p class="card-description">${art.description}</p>
                <div class="card-meta">
                    <span class="card-price">${art.price}</span>
                    <span class="card-badge"># ${badgeLabel(art.category)}</span>
                </div>
            </div>
        `;
    } else if (currentView === "COMPACT") {
        // Image 3: Minimal tag underneath the image
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${art.image}" alt="${art.title}">
            </div>
            <div class="card-info">
                <h4 class="card-artist">${art.artist}</h4>
                <p class="card-title">${art.title}</p>
            </div>
        `;
    }

    return card;
}

// ==========================================================================
// Detail Panel Actions
// ==========================================================================
let currentDetailArt = null;

function renderDetailSpecs(art) {
    const rows = [
        { label: t("spec_dimensions"), value: art.dimensions },
        { label: t("spec_material"), value: art.material },
        { label: t("spec_year"), value: art.year },
    ].filter((row) => row.value);

    if (rows.length === 0) {
        detailSpecs.innerHTML = "";
        detailSpecs.classList.add("hidden");
        return;
    }

    detailSpecs.innerHTML = rows
        .map((row) => `<div class="detail-spec-row"><span class="spec-label">${row.label}</span><span class="spec-value">${row.value}</span></div>`)
        .join("");
    detailSpecs.classList.remove("hidden");
}

function openDetailPanel(art) {
    currentDetailArt = art;
    detailTitle.textContent = art.artist;
    detailSubtitle.textContent = art.title;
    detailDesc.textContent = art.description;
    detailPrice.textContent = art.price;
    renderDetailSpecs(art);
    if (art.shippingNote) {
        detailShippingNote.textContent = art.shippingNote;
        detailShippingNote.classList.remove("hidden");
    } else {
        detailShippingNote.textContent = "";
        detailShippingNote.classList.add("hidden");
    }
    detailImg.src = art.image;
    detailImg.alt = art.title;

    detailPanel.classList.add("open");
}

function closeDetailPanel() {
    detailPanel.classList.remove("open");
}

// ==========================================================================
// Form & Navigation Helpers
// ==========================================================================
// If the purchase inquiry button stashed a prefill message before redirecting
// here, drop it into the message field (contact.html only) and clear it so a
// refresh doesn't re-apply it.
function applyContactPrefill() {
    if (!inquiryForm) return;

    const prefill = sessionStorage.getItem("rawfaw_contact_prefill");
    if (!prefill) return;

    inputMessage.value = prefill;
    charCount.textContent = prefill.length;
    sessionStorage.removeItem("rawfaw_contact_prefill");
}
