// ==========================================================================
// Artwork Dataset
// ==========================================================================
const ARTWORKS_DATA = [
    {
        id: 1,
        title: "The Orange Dress",
        artist: "George Spencer Watson",
        image: "assets/orange_dress.png",
        price: "$45,000",
        numericPrice: 45000,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: false,
        description: `"The Orange Dress" (1926) by British artist George Spencer Watson is a refined oil portrait featuring a seated woman in a vivid orange dress. The work exemplifies Watson's classical style, influenced by the Italian Renaissance, with a strong emphasis on elegance and subtle emotion. The contrast between the luminous garment and the dark background creates a striking visual focus. Thought to possibly depict the artist's daughter, the painting is celebrated for its grace and timeless beauty.`
    },
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
        shippingNote: "배송비 별도 (액자는 선택사항이며, 선택 시 배송비가 추가됩니다.) / Shipping charged separately (framing is optional; selecting a frame will increase shipping cost).",
        description: `"The Flowerpot of Time" (시간의 화분, 2023) is an oil on canvas work measuring 116.8 x 91.0cm.`
    },
    {
        id: 3,
        title: "A White Cat",
        artist: "John Frederick Herring",
        image: "assets/white_cat.png",
        price: "$28,000",
        numericPrice: 28000,
        category: "ORIGINAL",
        color: "teal",
        isNew: false,
        description: `"A White Cat" by John Frederick Herring features an elegant, fluffy white cat resting on a luxurious velvet green cushion. The painting captures the fine details of the cat's fur and the soft, ambient lighting of a grand classical library. Herring's work is celebrated for its precise animal portraiture and rich textures.`
    },
    {
        id: 4,
        title: "The Four Seasons",
        artist: "Christopher R. W. Nevinson",
        image: "assets/cubist_seasons.png",
        price: "$8,500",
        numericPrice: 8500,
        category: "LIMITED",
        color: "mustard",
        isNew: true,
        description: `"The Four Seasons" is a cubist-futurist landscape painting by Christopher R. W. Nevinson. It features blocky geometric shapes depicting agricultural fields, seasonal trees, and a train moving through the valley. The work explores the industrial and natural cycles using contrasting colors and sharp, dynamic angles.`
    },
    {
        id: 5,
        title: "The Red Fan",
        artist: "Francis Campbell Boileau Cadell",
        image: "assets/red_fan.png",
        price: "$15,000",
        numericPrice: 15000,
        category: "LIMITED",
        color: "sage",
        isNew: false,
        description: `"The Red Fan" by Scottish Colorist Francis Campbell Boileau Cadell shows a glamorous woman in a black gown holding a large, vibrant red fan. With bold brushstrokes and strong light-shadow contrast, the piece displays the vibrant Scottish colorist movement's focus on pure, bright oil paint and elegant interior settings.`
    },
    {
        id: 6,
        title: "The Girl from California",
        artist: "Helene Schjerfbeck",
        image: "assets/girl_california.png",
        price: "$3,200",
        numericPrice: 3200,
        category: "POSTER",
        color: "purple",
        isNew: true,
        description: `"The Girl from California" by Helene Schjerfbeck is a minimalist expressionist portrait featuring soft peach, light rose, and sage green tones. Schjerfbeck's signature brushwork highlights the internal emotional state of the subject, creating an intimate and raw depiction of youth and introspection.`
    },
    {
        id: 7,
        title: "Composition",
        artist: "Otto Freundlich",
        image: "assets/abstract_red.png",
        price: "$1,800",
        numericPrice: 1800,
        category: "POSTER",
        color: "brown",
        isNew: false,
        description: `Otto Freundlich's abstract compositions are known for their heavy, blocky, and geometric structures. This piece showcases interlocking color blocks that construct a balanced architectural space, illustrating the intersection of cubism and early abstraction.`
    },
    {
        id: 8,
        title: "Zwei mit Katzen",
        artist: "Ernst Ludwig Kirchner",
        image: "assets/girl_california.png",
        price: "$9,500",
        numericPrice: 9500,
        category: "LIMITED",
        color: "slate",
        isNew: false,
        description: `"Zwei mit Katzen" by expressionist Ernst Ludwig Kirchner shows two figures interacting with cats in a highly stylized, colorful room. The composition utilizes sharp, aggressive brushstrokes and unnatural color combinations to express psychological intensity and modern alienation.`
    },
    {
        id: 9,
        title: "Bildnis Nikolaus",
        artist: "Wilhelm Trübner",
        image: "assets/orange_dress.png",
        price: "$2,500",
        numericPrice: 2500,
        category: "POSTER",
        color: "clay",
        isNew: false,
        description: `"Bildnis Nikolaus" by Wilhelm Trübner is a classic portrait painted with thick, confident brushstrokes and dark atmospheric tones. It captures the solemn character of the subject, focusing on the dramatic plays of light across facial features.`
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
        shippingNote: "배송비 별도 (액자는 선택사항이며, 선택 시 배송비가 추가됩니다.)",
        description: "Flowerpot of the Body\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world.\n\nThe body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions.\n\nBy placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence.\n\nThis work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity."
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
const viewSelect = document.getElementById("view-select");
const sortSelect = document.getElementById("sort-select");
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

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    renderCatalog();
});

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function initEventListeners() {
    // View Switcher
    viewSelect.addEventListener("change", (e) => {
        currentView = e.target.value;
        catalogGrid.className = `view-${currentView.toLowerCase()}`;
        renderCatalog();
    });

    // Sorting
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderCatalog();
    });

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

    // Inquiry Buttons in Details Panel
    document.getElementById("btn-purchase-inquiry").addEventListener("click", () => {
        const title = detailSubtitle.textContent;
        const artist = detailTitle.textContent;
        scrollToContactForm(`안녕하세요, ${artist} 작가의 "${title}" 작품 구매에 관해 문의드립니다. (Hello, I would like to inquire about purchasing "${title}" by ${artist}.)`);
        closeDetailPanel();
    });

    document.getElementById("btn-sponsor-inquiry").addEventListener("click", () => {
        const title = detailSubtitle.textContent;
        const artist = detailTitle.textContent;
        scrollToContactForm(`안녕하세요, ${artist} 작가의 "${title}" 작품 협찬/대여에 관해 문의드립니다. (Hello, I would like to inquire about sponsorship/rental for "${title}" by ${artist}.)`);
        closeDetailPanel();
    });

    // Cart Checkout button
    cartCheckoutBtn.addEventListener("click", () => {
        if (inquiryCart.length === 0) return;
        
        const artList = inquiryCart.map(item => `  - ${item.artist} : "${item.title}"`).join("\n");
        const queryMsg = `안녕하세요, 관심 등록한 아래 작품들의 견적 및 상세 내용에 관한 통합 문의 드립니다. (Hello, I would like a combined quote and details for the following artworks on my inquiry list.)\n\n${artList}`;
        
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
            fileNameLabel.textContent = "선택된 파일 없음 (No file selected)";
            fileNameLabel.style.color = "var(--text-muted-light)";
        }
    });

    // Contact Form Submission
    inquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("input-name").value;
        const email = document.getElementById("input-email").value;
        const phone = document.getElementById("input-phone").value;
        const agree = document.getElementById("input-agree").checked;

        if (!name || !email || !phone || !agree) {
            alert("필수 입력 값을 입력해 주세요. (Please fill in all required fields.)");
            return;
        }

        alert(`감사합니다, ${name}님! 문의가 정상적으로 접수되었습니다. 담당 큐레이터가 빠르게 연락드리겠습니다. (Thank you, ${name}! Your inquiry has been received. A curator will contact you shortly.)`);
        inquiryForm.reset();
        fileNameLabel.textContent = "선택된 파일 없음 (No file selected)";
        charCount.textContent = 0;
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
        // Highlight active card showing description text and a "View Product" trigger as in reference image 2
        const isHighlighted = card.classList.contains("card-highlight");
        
        card.innerHTML = `
            ${isHighlighted ? '' : `<div class="card-image-container"><img src="${art.image}" alt="${art.title}"></div>`}
            <div class="card-info">
                <h3 class="card-title">${isHighlighted ? `${art.title}: A MASTERPIECE BY ${art.artist}` : art.title}</h3>
                <p class="card-artist">${isHighlighted ? art.description : art.artist}</p>
                <div class="card-meta">
                    <span class="card-price">${isHighlighted ? 'Price on Request' : art.price}</span>
                    <span class="card-badge">${isHighlighted ? 'View Artwork' : art.category}</span>
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
                    <span class="card-badge"># ${art.category}</span>
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
        btnAddToCart.textContent = "관심 목록에서 제거 (Remove)";
        btnAddToCart.classList.add("in-cart");
    } else {
        btnAddToCart.textContent = "관심 작품 목록에 추가 (Add to Inquiry)";
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
        btnAddToCart.textContent = "관심 작품 목록에 추가 (Add to Inquiry)";
        btnAddToCart.classList.remove("in-cart");
    } else {
        // Add
        inquiryCart.push(art);
        btnAddToCart.textContent = "관심 목록에서 제거 (Remove)";
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
        cartItemsList.innerHTML = '<div class="empty-cart-message">관심 목록에 추가된 작품이 없습니다. (No artworks added yet.)</div>';
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
                <button class="cart-item-remove" onclick="removeCartItem(${item.id})">제거 (Remove)</button>
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
