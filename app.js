// ==========================================================================
// Artwork Dataset
// ==========================================================================
const ARTWORKS_DATA = [
    {
        id: 2,
        title: "The Flowerpot of Time (시간의 화분)",
        artist: "Rawfaw",
        image: "assets/still_life_vase.png",
        price: "$3,000",
        numericPrice: 3000,
        category: "ORIGINAL",
        color: "dustyrose",
        isNew: true,
        dimensions: "116.8 x 91.0cm",
        material: "캔버스에 유화 (Oil on canvas)",
        year: "2023",
        shippingNote: "Shipping charged separately. Framing is optional; selecting a frame will increase shipping cost.",
        description: `"The Flowerpot of Time" (시간의 화분, 2023) is an oil on canvas work measuring 116.8 x 91.0cm.`
    },
    {
        id: 10,
        title: "육체의 화분(눈알)",
        artist: "Rawfaw",
        image: "assets/artwork.png",
        price: "$2,000",
        numericPrice: 2000,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "36.6x46.9cm",
        material: "판넬에 유화",
        year: "2024",
        shippingNote: "Shipping charged separately. Framing is optional; selecting a frame will increase shipping cost.",
        description: "Flowerpot of the Body\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world.\n\nThe body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions.\n\nBy placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence.\n\nThis work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity."
    },
    {
        id: 11,
        title: "Flowerpot of the Soul | 영혼의화분",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-soul.png",
        price: "$2,800",
        numericPrice: 2800,
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
        price: "$4,500",
        numericPrice: 4500,
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
        price: "$4,800",
        numericPrice: 4800,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "145.5 x 112.1cm ",
        material: "Oil on panel",
        year: "2026",
        shippingNote: "Shipping not included. Framing is optional. Additional shipping charges apply for framed artworks.",
        description: "I believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Mind (Winter) reflects on the passage of time within an unchanged state.\n\nWhile trapped inside the flowerpot, the seasons continue to pass. Winter fades, summer returns, and the cycle repeats endlessly. Although the world keeps changing, the mind often remains rooted in the same place.\n\nThis work asks what it means to remain emotionally or mentally confined while time moves forward without waiting.\n\nHow many seasons must pass before the mind can finally leave the flowerpot?\n\nThe changing seasons symbolize the flow of time, while the flowerpot represents the invisible boundaries that keep the mind from moving freely."
    }
];

// ==========================================================================
// Application State
// ==========================================================================
let currentView = "GRID"; // GRID, POSTER, COMPACT
let activeCategory = "ALL"; // ALL, ORIGINAL, LIMITED, POSTER
let activePillFilter = "ALL"; // ALL, NEW, ORIGINAL, LIMITED, POSTER
let currentSearchQuery = "";
let currentSort = "NEW"; // NEW, ARTIST, TITLE
let inquiryCart = [];

// DOM Elements
const catalogGrid = document.getElementById("catalog-grid");
const searchInput = document.getElementById("catalog-search-input");
const searchClearBtn = document.getElementById("search-clear-btn");
const pillsBar = document.querySelector(".pills-bar");
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
const detailImg = document.getElementById("detail-img");
const btnAddToCart = document.getElementById("btn-add-to-cart");

// Cart Elements
const cartDrawer = document.getElementById("cart-drawer");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsList = document.getElementById("cart-items-list");
const cartCountElement = document.getElementById("cart-count");
const cartItemsCountElement = document.getElementById("cart-items-count");
const cartCheckoutBtn = document.getElementById("cart-checkout-btn");

// 404 Screen Elements
const errorScreen = document.getElementById("error-screen");
const trigger404 = document.getElementById("trigger-404");
const trigger404Mobile = document.getElementById("trigger-404-mobile");
const errorBackBtn = document.getElementById("error-back-btn");

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
    cart_label: { en: "CART", ko: "장바구니" },
    nav_all: { en: "All Artworks", ko: "전체 작품" },
    nav_originals: { en: "Originals", ko: "오리지널" },
    nav_limited: { en: "Limited Editions", ko: "리미티드 에디션" },
    nav_posters: { en: "Art Posters", ko: "아트 포스터" },
    nav_contact: { en: "Contact", ko: "문의하기" },
    nav_404: { en: "Demo 404", ko: "데모 404" },
    search_placeholder: { en: "Search artworks or artists...", ko: "작품명 또는 작가명으로 검색..." },
    pill_all: { en: "All", ko: "전체보기" },
    pill_original: { en: "Originals", ko: "오리지널" },
    pill_limited: { en: "Limited Editions", ko: "리미티드 에디션" },
    pill_poster: { en: "Art Posters", ko: "아트 포스터" },
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
    placeholder_message: { en: "Please write within 1000 characters.", ko: "1000자 이내로 작성해 주세요." },
    label_attach: { en: "Attach File", ko: "파일첨부" },
    no_file_selected: { en: "No file selected", ko: "선택된 파일 없음" },
    privacy_agree: { en: "I agree to the Privacy Policy.", ko: "개인정보 처리 방침에 동의합니다." },
    submit_btn: { en: "Submit", ko: "보내기" },
    footer_company: { en: "RAWFAW House", ko: "라파의 집" },
    footer_biz: { en: "Business Reg. No. 150-09-02984", ko: "사업자등록번호 150-09-02984" },
    footer_address: { en: "Address: Seongdong-gu, Seoul, South Korea", ko: "주소: 서울시 성동구" },
    artwork_info: { en: "Artwork Information", ko: "작품 정보" },
    estimated_price: { en: "Estimated Price:", ko: "예상 가격:" },
    add_to_inquiry: { en: "Add to Inquiry", ko: "관심 작품 목록에 추가" },
    remove_from_inquiry: { en: "Remove from Inquiry", ko: "관심 목록에서 제거" },
    inquiry_cart_heading: { en: "Inquiry Cart", ko: "문의 목록" },
    cart_subtitle: { en: "Artworks you'd like to inquire about for purchase or rental.", ko: "구매 또는 대여 문의를 보내실 작품 목록입니다." },
    cart_empty: { en: "No artworks added yet.", ko: "관심 목록에 추가된 작품이 없습니다." },
    cart_checkout: { en: "Inquire About Selected Items", ko: "선택한 작품 문의하기" },
    cart_item_remove: { en: "Remove", ko: "제거" },
    error_warning: { en: "This page does not exist or is unavailable.", ko: "존재하지 않거나 사용할 수 없는 페이지입니다." },
    error_instruction: { en: "Please check that you entered the correct address.", ko: "입력하신 주소가 정확한지 다시 한 번 확인해 주세요." },
    error_detail: {
        en: "That's an error. The requested URL was not found on this server. That's all we know.",
        ko: "오류가 발생했습니다. 요청하신 URL을 이 서버에서 찾을 수 없습니다.",
    },
    return_home: { en: "Return to Home", ko: "돌아가기" },
    price_on_request: { en: "Price on Request", ko: "가격 문의" },
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

function sponsorInquiryMessage(artist, title) {
    return currentLang === "ko"
        ? `안녕하세요, ${artist} 작가의 "${title}" 작품 협찬/대여에 관해 문의드립니다.`
        : `Hello, I would like to inquire about sponsorship/rental for "${title}" by ${artist}.`;
}

function combinedInquiryMessage(artList) {
    return currentLang === "ko"
        ? `안녕하세요, 관심 등록한 아래 작품들의 견적 및 상세 내용에 관한 통합 문의 드립니다.\n\n${artList}`
        : `Hello, I would like a combined quote and details for the following artworks on my inquiry list.\n\n${artList}`;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("rawfaw_lang", lang);
    document.documentElement.lang = lang;

    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Re-render dynamic pieces that carry translated text
    renderCatalog();
    if (cartDrawer.classList.contains("open")) renderCart();
    if (detailPanel.classList.contains("open")) {
        const currentId = parseInt(btnAddToCart.dataset.artId, 10);
        const inCart = inquiryCart.some((item) => item.id === currentId);
        btnAddToCart.textContent = inCart ? t("remove_from_inquiry") : t("add_to_inquiry");
    }
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    applyLanguage(currentLang);
});

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function initEventListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
        currentSearchQuery = e.target.value.trim().toLowerCase();
        if (currentSearchQuery.length > 0) {
            searchClearBtn.style.display = "block";
        } else {
            searchClearBtn.style.display = "none";
        }
        renderCatalog();
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentSearchQuery = "";
        searchClearBtn.style.display = "none";
        renderCatalog();
        searchInput.focus();
    });

    // Pills Bar Filter (Reference Image 3 Tags)
    pillsBar.addEventListener("click", (e) => {
        const target = e.target.closest("button");
        if (!target) return;

        // Update active class
        pillsBar.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
        target.classList.add("active");

        activePillFilter = target.dataset.filter;
        
        // Sync header nav navigation highlights if category matches
        syncHeaderNav(activePillFilter);
        renderCatalog();
    });

    // Header Nav Filtering
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (link.id.includes("trigger-404") || link.getAttribute("href") === "#contact-section") return;
            e.preventDefault();

            activeCategory = link.dataset.category;

            // Update active states in header and mobile menus
            navLinks.forEach(l => {
                if (l.dataset.category === activeCategory) {
                    l.classList.add("active");
                } else {
                    l.classList.remove("active");
                }
            });

            // Update pills bar selection
            const matchingPill = pillsBar.querySelector(`button[data-filter="${activeCategory}"]`);
            if (matchingPill) {
                pillsBar.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
                matchingPill.classList.add("active");
                activePillFilter = activeCategory;
            }

            // Close mobile menu if open
            mobileNavMenu.classList.remove("show");
            mobileNavMenu.style.display = "none";
            mobileMenuToggle.classList.remove("active");

            renderCatalog();
        });
    });

    // Reset Filters Button
    resetFiltersBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentSearchQuery = "";
        searchClearBtn.style.display = "none";
        
        activeCategory = "ALL";
        activePillFilter = "ALL";
        
        pillsBar.querySelectorAll("button").forEach(btn => {
            if (btn.dataset.filter === "ALL") btn.classList.add("active");
            else btn.classList.remove("active");
        });

        navLinks.forEach(l => {
            if (l.dataset.category === "ALL") l.classList.add("active");
            else l.classList.remove("active");
        });

        renderCatalog();
    });

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

    // Detail Panel Close
    detailCloseBtn.addEventListener("click", closeDetailPanel);
    detailOverlay.addEventListener("click", closeDetailPanel);

    // Cart Panel Toggle
    cartToggleBtn.addEventListener("click", openCartDrawer);
    cartCloseBtn.addEventListener("click", closeCartDrawer);
    cartOverlay.addEventListener("click", closeCartDrawer);

    // Cart Checkout button
    cartCheckoutBtn.addEventListener("click", () => {
        if (inquiryCart.length === 0) return;

        const artList = inquiryCart.map(item => `  - ${item.artist} : "${item.title}"`).join("\n");
        const queryMsg = combinedInquiryMessage(artList);

        scrollToContactForm(queryMsg);
        closeCartDrawer();
    });

    // Contact Form Textarea Character Counter
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

    // Contact Form Submission (delivered via FormSubmit.co — see form's action= attribute)
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

    // Demo 404 Pages
    trigger404.addEventListener("click", (e) => {
        e.preventDefault();
        errorScreen.classList.remove("hidden");
    });

    trigger404Mobile.addEventListener("click", (e) => {
        e.preventDefault();
        mobileNavMenu.style.display = "none";
        mobileMenuToggle.classList.remove("active");
        errorScreen.classList.remove("hidden");
    });

    errorBackBtn.addEventListener("click", () => {
        errorScreen.classList.add("hidden");
    });
}

// Helper: Sync Header Navigation with Pills Filtering
function syncHeaderNav(filter) {
    let targetCategory = filter;
    if (filter === "NEW") targetCategory = "ALL"; // NEW is a tag filter, keep header at 'ALL' or equivalent
    
    navLinks.forEach(l => {
        if (l.dataset.category === targetCategory) {
            l.classList.add("active");
        } else {
            l.classList.remove("active");
        }
    });
}

// ==========================================================================
// Catalog Rendering Logic
// ==========================================================================
function renderCatalog() {
    // 1. Filter Data
    let filteredArtworks = ARTWORKS_DATA.filter(art => {
        // Category check (from header nav / main category filter)
        if (activeCategory !== "ALL" && art.category !== activeCategory) {
            return false;
        }

        // Pill filter check (from pills tags bar)
        if (activePillFilter === "NEW" && !art.isNew) {
            return false;
        } else if (activePillFilter !== "ALL" && activePillFilter !== "NEW" && art.category !== activePillFilter) {
            return false;
        }

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
        // Highlight card keeps the original all-text layout (no image swap).
        // Regular cards crossfade between the artwork image and its description on hover.
        const isHighlighted = card.classList.contains("card-highlight");

        card.innerHTML = `
            ${isHighlighted ? '' : `<div class="card-image-container">
                <div class="visual-image-layer"><img src="${art.image}" alt="${art.title}"></div>
                <div class="visual-text-layer"><p>${art.description}</p></div>
            </div>`}
            <div class="card-info">
                <h3 class="card-title">${isHighlighted ? `${art.title}: A MASTERPIECE BY ${art.artist}` : art.title}</h3>
                <p class="card-artist">${isHighlighted ? art.description : art.artist}</p>
                <div class="card-meta">
                    <span class="card-price">${isHighlighted ? t('price_on_request') : art.price}</span>
                    <span class="card-badge">${isHighlighted ? t('view_artwork') : badgeLabel(art.category)}</span>
                </div>
            </div>
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
// Side Panels (Detail & Cart) Actions
// ==========================================================================
function openDetailPanel(art) {
    detailTitle.textContent = art.artist;
    detailSubtitle.textContent = art.title;
    detailDesc.textContent = art.description;
    detailPrice.textContent = art.price;
    if (art.shippingNote) {
        detailShippingNote.textContent = art.shippingNote;
        detailShippingNote.classList.remove("hidden");
    } else {
        detailShippingNote.textContent = "";
        detailShippingNote.classList.add("hidden");
    }
    detailImg.src = art.image;
    detailImg.alt = art.title;

    // Configure Add to Cart button based on current inquiry list
    const inCart = inquiryCart.some(item => item.id === art.id);
    if (inCart) {
        btnAddToCart.textContent = t("remove_from_inquiry");
        btnAddToCart.classList.add("in-cart");
    } else {
        btnAddToCart.textContent = t("add_to_inquiry");
        btnAddToCart.classList.remove("in-cart");
    }

    // Set dataset ID on the button
    btnAddToCart.dataset.artId = art.id;

    // Reset button click event
    btnAddToCart.onclick = () => toggleCartItem(art);

    detailPanel.classList.add("open");
}

function closeDetailPanel() {
    detailPanel.classList.remove("open");
}

function openCartDrawer() {
    renderCart();
    cartDrawer.classList.add("open");
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
}

// ==========================================================================
// Inquiry Cart Logic
// ==========================================================================
function toggleCartItem(art) {
    const idx = inquiryCart.findIndex(item => item.id === art.id);
    if (idx > -1) {
        // Remove
        inquiryCart.splice(idx, 1);
        btnAddToCart.textContent = t("add_to_inquiry");
        btnAddToCart.classList.remove("in-cart");
    } else {
        // Add
        inquiryCart.push(art);
        btnAddToCart.textContent = t("remove_from_inquiry");
        btnAddToCart.classList.add("in-cart");
    }
    updateCartCount();
}

function removeCartItem(id) {
    inquiryCart = inquiryCart.filter(item => item.id !== id);
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const count = inquiryCart.length;
    cartCountElement.textContent = count;
    cartItemsCountElement.textContent = count;
}

function renderCart() {
    cartItemsList.innerHTML = "";
    if (inquiryCart.length === 0) {
        cartItemsList.innerHTML = `<div class="empty-cart-message">${t("cart_empty")}</div>`;
        return;
    }

    inquiryCart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-artist">${item.artist}</h4>
                <p class="cart-item-title">${item.title}</p>
                <div class="cart-item-price">${item.price}</div>
                <button class="cart-item-remove" onclick="removeCartItem(${item.id})">${t("cart_item_remove")}</button>
            </div>
        `;
        cartItemsList.appendChild(itemElement);
    });
}

// ==========================================================================
// Form & Navigation Helpers
// ==========================================================================
function scrollToContactForm(messageText) {
    const formSection = document.getElementById("contact-section");
    if (!formSection) return;

    inputMessage.value = messageText;
    charCount.textContent = messageText.length;
    
    formSection.scrollIntoView({ behavior: 'smooth' });
}
