// ==========================================================================
// Artwork Dataset
// ==========================================================================
const ARTWORKS_DATA = [
    {
        id: 2,
        title: "The Flowerpot of Time | 시간의 화분",
        artist: "Rawfaw",
        image: "assets/the-flowerpot-of-time-2.png",
        price: "$2,300",
        numericPrice: 2300,
        category: "ORIGINAL",
        color: "dustyrose",
        isNew: true,
        dimensions: "116.8 x 91.0cm",
        material: "캔버스에 유화 (Oil on canvas)",
        year: "2023",
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "I believe that a person is made up of three elements: the body, the mind, and the soul. The central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nThe plants in my paintings represent people who long to discover their own identity, yet still feel rooted within invisible boundaries.\n\nFlowerpot of Time reflects on the experience of remaining in the same place while time continues to move forward. Seasons change, years pass, and life quietly moves on, yet the flowerpot remains where it has always been.\n\nThe flowerpot symbolizes the invisible limitations that keep us from taking root on our own, while the passing seasons represent the relentless flow of time. Although growth continues, true independence has not yet been reached.\n\nThrough this work, I ask a simple question: How much time must pass before we are finally ready to leave the flowerpot?",
        priceKrw: "2,300,000원",
        descriptionKo: "저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다. 제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다.\n\n그림 속 식물들은 자신만의 정체성을 찾고 싶어하면서도, 여전히 보이지 않는 경계 안에 뿌리내린 채 살아가는 사람들을 상징합니다.\n\n〈시간의 화분〉은 시간이 계속 흘러가는 동안에도 같은 자리에 머물러 있는 경험을 담고 있습니다. 계절이 바뀌고 세월이 흐르며 삶은 조용히 나아가지만, 화분은 늘 있던 그 자리에 그대로 남아 있습니다.\n\n화분은 스스로 뿌리내리지 못하게 하는 보이지 않는 한계를, 지나가는 계절은 멈추지 않는 시간의 흐름을 상징합니다. 성장은 계속되지만, 진정한 독립에는 아직 이르지 못했습니다.\n\n이 작품을 통해 저는 하나의 질문을 던집니다: 우리가 마침내 화분을 떠날 준비가 되기까지, 얼마나 많은 시간이 흘러야 할까요?",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
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
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "Flowerpot of the Body\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world.\n\nThe body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions.\n\nBy placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence.\n\nThis work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity.",
        priceKrw: "1,200,000원",
        descriptionKo: "육체의 화분\n\n저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다.\n\n제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다.\n\n〈육체의 화분〉은 인간 존재의 물리적인 측면을 나타냅니다. 화분 안에는 눈알이 담겨 있는데, 이는 우리가 세상을 처음 인식하고 경험하는 매개체로서의 몸을 상징합니다.\n\n몸은 우리가 주변을 보고, 만지고, 상호작용할 수 있게 해주지만, 동시에 신체적 한계와 외부 조건에 의해 형태 지어지고 갇히기도 합니다.\n\n눈을 화분 안에 배치함으로써, 저는 몸을 여전히 뿌리내린 채 독립의 가능성을 향해 성장해가는 존재로 시각화합니다.\n\n이 작품은 몸, 마음, 영혼을 서로 구분되지만 연결된 인간 정체성의 측면들로 탐구하는 연작의 일부입니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
    },
    {
        id: 11,
        title: "Flowerpot of the Soul | 영혼의화분",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-soul-2.png",
        price: "$2,300",
        numericPrice: 2300,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "116.8 x 80.3 cm",
        material: "Oil on panel",
        year: "2025",
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "Flowerpot of the Soul\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Soul explores the question of whether the soul can ever become truly free.\n\nThe soul is often considered the deepest and most essential part of who we are. Yet it is easily confined by fear, desire, memory, and the expectations of the world.\n\nThe flowerpot represents those invisible boundaries that keep the soul rooted in one place.\n\nThrough this work, I ask a simple question:\n\nCan my soul leave the flowerpot and take root in the earth?\n\nRather than offering an answer, the work leaves that question open, inviting viewers to reflect on the possibility of spiritual independence and growth.",
        priceKrw: "2,300,000원",
        descriptionKo: "영혼의 화분\n\n저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다.\n\n제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다.\n\n〈영혼의 화분〉은 영혼이 과연 진정으로 자유로워질 수 있는가라는 질문을 탐구합니다.\n\n영혼은 흔히 우리 존재의 가장 깊고 본질적인 부분으로 여겨지지만, 두려움과 욕망, 기억, 그리고 세상의 기대에 의해 쉽게 갇히곤 합니다.\n\n화분은 영혼을 한 곳에 뿌리내리게 하는 보이지 않는 경계를 상징합니다.\n\n이 작품을 통해 저는 하나의 단순한 질문을 던집니다:\n\n제 영혼은 화분을 떠나 땅에 뿌리내릴 수 있을까요?\n\n이 작품은 답을 제시하기보다, 그 질문을 열어둔 채 보는 이들이 영적 독립과 성장의 가능성에 대해 스스로 생각해보도록 초대합니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
    },
    {
        id: 12,
        title: "Flowerpot of the Mind (Summer) | 정신의 화분(여름)",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-mind-summer.png",
        price: "$3,500",
        numericPrice: 3500,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "145.5 x 112.1 cm",
        material: "Oil on panel",
        year: "2025",
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "Flowerpot of the Mind (Summer)\n\nI believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Mind (Summer) explores the paradox of growth without freedom.\n\nSummer brings warmth, light, and abundant life. Everything appears to flourish, yet the mind remains inside the same flowerpot.\n\nEven when conditions seem perfect for growth, we can still find ourselves unable to move beyond the invisible boundaries we have lived within for so long.\n\nThis work asks whether true growth is possible without independence.\n\nCan the mind truly grow if it never leaves the flowerpot?\n\nSummer symbolizes vitality and possibility, while the flowerpot represents the limitations that continue to shape the mind.",
        priceKrw: "3,800,000원",
        descriptionKo: "정신의 화분 (여름)\n\n저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다.\n\n제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다.\n\n〈정신의 화분 (여름)〉은 자유 없는 성장이라는 역설을 탐구합니다.\n\n여름은 따뜻함과 빛, 그리고 풍요로운 생명력을 가져다줍니다. 모든 것이 활짝 피어나는 듯 보이지만, 정신은 여전히 같은 화분 안에 머물러 있습니다.\n\n성장하기에 완벽한 조건처럼 보일 때조차, 우리는 여전히 오랫동안 살아온 보이지 않는 경계를 넘어서지 못하는 자신을 발견하곤 합니다.\n\n이 작품은 독립 없이도 진정한 성장이 가능한지를 묻습니다.\n\n화분을 떠나지 않고도 정신은 정말로 자랄 수 있을까요?\n\n여름은 생명력과 가능성을 상징하고, 화분은 정신을 계속해서 형성하는 한계를 상징합니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
    },
    {
        id: 13,
        title: "Flowerpot of the Mind (Winter) | 정신의 화분(겨울)",
        artist: "Rawfaw",
        image: "assets/flowerpot-of-the-mind-winter.png",
        price: "$3,500",
        numericPrice: 3500,
        category: "ORIGINAL",
        color: "terracotta",
        isNew: true,
        dimensions: "145.5 x 112.1cm ",
        material: "Oil on panel",
        year: "2026",
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "I believe that a person is made up of three elements: the body, the mind, and the soul.\n\nThe central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot.\n\nFlowerpot of the Mind (Winter) reflects on the passage of time within an unchanged state.\n\nWhile trapped inside the flowerpot, the seasons continue to pass. Winter fades, summer returns, and the cycle repeats endlessly. Although the world keeps changing, the mind often remains rooted in the same place.\n\nThis work asks what it means to remain emotionally or mentally confined while time moves forward without waiting.\n\nHow many seasons must pass before the mind can finally leave the flowerpot?\n\nThe changing seasons symbolize the flow of time, while the flowerpot represents the invisible boundaries that keep the mind from moving freely.",
        priceKrw: "3,800,000원",
        descriptionKo: "저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다.\n\n제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다.\n\n〈정신의 화분 (겨울)〉은 변하지 않는 상태 속에서 흘러가는 시간을 돌아봅니다.\n\n화분 안에 갇혀 있는 동안에도 계절은 계속 지나갑니다. 겨울이 저물고 여름이 다시 찾아오며, 이 순환은 끝없이 반복됩니다. 세상은 계속 변해가지만, 정신은 종종 같은 자리에 그대로 뿌리내려 있습니다.\n\n이 작품은 시간이 기다려주지 않고 흘러가는 동안 정서적으로 혹은 정신적으로 갇혀 있다는 것이 무엇을 의미하는지를 묻습니다.\n\n정신이 마침내 화분을 떠나기까지, 얼마나 많은 계절이 지나야 할까요?\n\n계절의 변화는 시간의 흐름을, 화분은 정신이 자유롭게 움직이지 못하게 하는 보이지 않는 경계를 상징합니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
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
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "Flowerpot of the Body I believe that a person is made up of three elements: the body, the mind, and the soul. The central aim of my practice is to imagine these three elements becoming independent from one another, symbolized through the form of a flowerpot. Flowerpot of the Body represents the physical aspect of human existence. The flowerpot contains an eyeball, symbolizing the body as the medium through which we first perceive and experience the world. The body allows us to see, touch, and interact with our surroundings, yet it is also shaped and confined by physical limitations and external conditions. By placing the eye inside a flowerpot, I visualize the body as something that is still rooted, growing toward the possibility of independence. This work is part of an ongoing series exploring the body, the mind, and the soul as separate yet interconnected aspects of human identity.",
        priceKrw: "1,200,000원",
        descriptionKo: "육체의 화분. 저는 사람이 몸, 마음, 영혼이라는 세 가지 요소로 이루어져 있다고 믿습니다. 제 작업의 핵심은 이 세 요소가 서로 독립된 존재가 되어가는 모습을 화분이라는 형태로 상상해보는 것입니다. 〈육체의 화분〉은 인간 존재의 물리적인 측면을 나타냅니다. 화분 안에는 눈알이 담겨 있는데, 이는 우리가 세상을 처음 인식하고 경험하는 매개체로서의 몸을 상징합니다. 몸은 우리가 주변을 보고 만지고 상호작용할 수 있게 해주지만, 동시에 신체적 한계와 외부 조건에 의해 형태 지어지고 갇히기도 합니다. 눈을 화분 안에 배치함으로써, 저는 몸을 여전히 뿌리내린 채 독립의 가능성을 향해 성장해가는 존재로 시각화합니다. 이 작품은 몸, 마음, 영혼을 서로 구분되지만 연결된 인간 정체성의 측면들로 탐구하는 연작의 일부입니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
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
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "Dart Human Series - Room 223\n\nThe Dart Human series began with a simple question:\n\nWhat if life is like throwing darts?\n\nEvery decision, attempt, failure, and dream is another dart thrown toward a target we can’t fully see.\n\nSome darts miss.\nSome land close.\nA few hit the center.\n\nBut no one reaches the target without throwing.\n\nThis woman has spent a long time climbing.\n\nStep by step, she built her life with her own strength.\nShe kept moving even when nobody was watching.\nEven when progress felt slow.\n\nNow, for the first time in a while, she pauses.\n\nShe looks back at the path she has climbed and realizes how far she has come.\n\nThere is no regret in her expression.\nNo doubt.\n\nOnly confidence.\n\nNot because her journey is finished,\nbut because she finally trusts herself.\n\nThe target is still ahead.\nThere are many more darts left to throw.\n\nBut wherever they land,\nshe knows she has the courage to keep aiming.\n\nMay her next dart fly even farther than the last.\nAnd may yours, too. 🎯✨",
        priceKrw: "2,300,000원",
        descriptionKo: "Dart Human 연작 - 223호의 여자\n\n〈Dart Human〉 연작은 하나의 단순한 질문에서 시작되었습니다:\n\n인생이 다트를 던지는 것과 같다면 어떨까?\n\n모든 선택과 시도, 실패와 꿈은 완전히 보이지 않는 과녁을 향해 던지는 또 하나의 다트가 됩니다.\n\n어떤 다트는 빗나가고,\n어떤 다트는 근처에 떨어지고,\n몇몇 다트만이 중심에 꽂힙니다.\n\n하지만 던지지 않고서는 누구도 과녁에 닿을 수 없습니다.\n\n이 여자는 오랫동안 오르막을 걸어왔습니다.\n\n한 걸음씩, 그녀는 자신의 힘으로 삶을 쌓아 올렸습니다.\n아무도 지켜보지 않을 때도 계속 나아갔습니다.\n속도가 더디게 느껴질 때도요.\n\n이제, 오랜만에 그녀는 잠시 멈춰 섭니다.\n\n자신이 올라온 길을 돌아보며, 얼마나 멀리 왔는지를 깨닫습니다.\n\n그녀의 표정에는 후회가 없습니다.\n의심도 없습니다.\n\n오직 확신뿐입니다.\n\n여정이 끝나서가 아니라,\n마침내 스스로를 믿게 되었기 때문입니다.\n\n과녁은 아직 저 앞에 있습니다.\n던져야 할 다트는 아직 많이 남아 있습니다.\n\n하지만 다트가 어디에 떨어지든,\n그녀는 계속 겨눌 용기가 있다는 것을 압니다.\n\n그녀의 다음 다트가 지난번보다 더 멀리 날아가기를.\n그리고 당신의 다트도요. 🎯✨",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
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
        shippingNote: "Shipping charged separately. Framing is not included.",
        description: "This is one piece from my “Dart Human” series.\n\nI think life is about throwing darts toward the center of a target.\nWe keep walking forward, throwing darts toward the middle of our lives.\n\nMost of them miss.\nSometimes, maybe we barely hit the edge.\n\nBut I think that’s what life is.\n\nThis person is one of my friends.\nI painted this portrait while thinking about his life.\n\nHe quietly keeps walking his own path.\n\nEven when the road feels like a desert,\nhe never forgets to notice the beautiful cactus flowers along the way.",
        priceKrw: "1,200,000원",
        descriptionKo: "이 작품은 저의 〈Dart Human〉 연작 중 하나입니다.\n\n저는 인생이 과녁의 중심을 향해 다트를 던지는 것과 같다고 생각합니다.\n우리는 계속 앞으로 걸어가며, 삶의 한가운데를 향해 다트를 던집니다.\n\n대부분은 빗나갑니다.\n어쩌다 겨우 가장자리에 닿을 때도 있습니다.\n\n하지만 저는 그것이 바로 인생이라고 생각합니다.\n\n이 사람은 제 친구 중 한 명입니다.\n저는 그의 삶을 생각하며 이 초상화를 그렸습니다.\n\n그는 조용히 자신만의 길을 걸어갑니다.\n\n그 길이 마치 사막처럼 느껴질 때조차,\n그는 길가에 핀 아름다운 선인장 꽃을 알아보는 것을 잊지 않습니다.",
        shippingNoteKo: "배송비는 별도이며, 액자는 포함되지 않습니다."
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
const formNextUrlInput = document.getElementById("form-next-url");
const inputPhone = document.getElementById("input-phone");
const phoneRequiredTag = document.getElementById("phone-required-tag");
const inquiryTypeGeneral = document.getElementById("inquiry-type-general");
const inquiryTypePurchase = document.getElementById("inquiry-type-purchase");
const purchaseOnlyFields = document.getElementById("purchase-only-fields");

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
    label_inquiry_type: { en: "Inquiry Type", ko: "문의 유형" },
    inquiry_type_general: { en: "General Inquiry", ko: "일반 문의" },
    inquiry_type_purchase: { en: "Purchase Inquiry", ko: "구매 문의" },
    label_name: { en: "Name", ko: "이름" },
    placeholder_name: { en: "Please enter your name.", ko: "이름을 입력해 주세요." },
    label_company: { en: "Company", ko: "회사명" },
    placeholder_company: { en: "Please enter your company name.", ko: "회사명을 입력해 주세요." },
    label_email: { en: "Email", ko: "이메일" },
    placeholder_email: { en: "Please enter your email address.", ko: "이메일 주소를 입력해 주세요." },
    label_phone: { en: "Phone", ko: "전화번호" },
    placeholder_phone: { en: "Please enter numbers only, without '-'.", ko: "'-' 없이 입력해 주세요." },
    optional_tag: { en: "(Optional)", ko: "(선택)" },
    label_address: { en: "Shipping Address", ko: "배송 희망 주소" },
    placeholder_address: { en: "Where should we ship the artwork?", ko: "작품을 받으실 주소를 입력해 주세요." },
    label_message: { en: "Message", ko: "문의내용" },
    placeholder_message_general: {
        en: "Questions or requests? (Please write within 1000 characters.)",
        ko: "궁금한 점이나 요청사항이 있으신가요? (1000자 이내로 작성해 주세요.)",
    },
    placeholder_message_purchase: {
        en: "Please include the artwork's title along with any other questions — we'll follow up with the details. (Please write within 1000 characters.)",
        ko: "작품 이름과 그 밖에 궁금하신 내용을 적어주시면 안내해드리겠습니다. (1000자 이내로 작성해 주세요.)",
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

// First-time visitors get their language auto-detected from the browser's
// locale (navigator.language). Once they've been here before — or once they
// toggle EN/KO themselves — the saved preference in localStorage always wins.
let currentLang = localStorage.getItem("rawfaw_lang");
if (!currentLang) {
    const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    currentLang = browserLang.startsWith("ko") ? "ko" : "en";
}

function t(key) {
    const entry = I18N[key];
    if (!entry) return key;
    return entry[currentLang] || entry.en;
}

// Artwork descriptions are long, hand-written artist statements — each one
// optionally carries a Korean version (descriptionKo). Falls back to the
// English description if no Korean translation has been written yet
// (e.g. a brand-new artwork added before its KO text is ready).
function getDescription(art) {
    if (currentLang === "ko" && art.descriptionKo) return art.descriptionKo;
    return art.description;
}

// Same bilingual fallback pattern as getDescription(), for the shipping/
// framing note shown in the detail panel.
function getShippingNote(art) {
    if (currentLang === "ko" && art.shippingNoteKo) return art.shippingNoteKo;
    return art.shippingNote;
}

// ==========================================================================
// Currency: visitors in Korea see an approximate KRW price (live exchange
// rate); everyone else sees the exact USD price as always. Geolocation +
// exchange rate are looked up once per day (cached in localStorage) so we're
// not hitting free public APIs on every page view, and if either lookup
// fails for any reason we just silently keep showing USD.
// ==========================================================================
const GEO_CACHE_KEY = "rawfaw_geo_cache";
const GEO_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

let isKoreanVisitor = false;
let krwRate = null; // 1 USD in KRW

function formatPrice(art) {
    if (isKoreanVisitor) {
        // priceKrw is a domestic price the artist sets by hand in the admin
        // tool — when present it's the real price, not an estimate, so it's
        // shown exactly as entered (no "≈"). Only falls back to the live
        // exchange-rate conversion when no domestic price has been set.
        if (art.priceKrw) return art.priceKrw;
        if (krwRate) {
            const krw = Math.round((art.numericPrice * krwRate) / 10000) * 10000; // round to nearest 만원
            return "≈ ₩" + krw.toLocaleString("ko-KR");
        }
    }
    return art.price;
}

function readGeoCache() {
    try {
        const raw = localStorage.getItem(GEO_CACHE_KEY);
        if (!raw) return null;
        const cached = JSON.parse(raw);
        if (!cached || typeof cached.timestamp !== "number") return null;
        if (Date.now() - cached.timestamp > GEO_CACHE_TTL_MS) return null;
        return cached;
    } catch {
        return null;
    }
}

function writeGeoCache(data) {
    try {
        localStorage.setItem(GEO_CACHE_KEY, JSON.stringify({ ...data, timestamp: Date.now() }));
    } catch {
        // localStorage unavailable (private browsing, etc.) — just skip caching.
    }
}

function refreshPriceDisplays() {
    if (catalogGrid) renderCatalog();
    if (detailPanel && detailPanel.classList.contains("open") && currentDetailArt) {
        detailPrice.textContent = formatPrice(currentDetailArt);
    }
}

async function detectRegionAndCurrency() {
    const cached = readGeoCache();
    if (cached) {
        isKoreanVisitor = !!cached.isKorean;
        krwRate = cached.krwRate || null;
        if (isKoreanVisitor && krwRate) refreshPriceDisplays();
        return;
    }

    try {
        const geoRes = await fetch("https://ipwho.is/");
        const geo = await geoRes.json();
        // A rate-limited or otherwise failed lookup comes back as
        // {success: false, ...} with no country_code — that's a shrug, not a
        // "not Korean" answer, so don't cache it. Just retry on the next visit.
        if (!geo || geo.success === false) return;

        if (geo.country_code !== "KR") {
            writeGeoCache({ isKorean: false, krwRate: null });
            return;
        }

        const rateRes = await fetch("https://open.er-api.com/v6/latest/USD");
        const rateData = await rateRes.json();
        const rate = rateData && rateData.result === "success" && rateData.rates && rateData.rates.KRW;

        if (!rate) return; // exchange-rate API hiccup — leave it, retry next visit

        writeGeoCache({ isKorean: true, krwRate: rate });
        isKoreanVisitor = true;
        krwRate = rate;
        refreshPriceDisplays();
    } catch {
        // Geolocation/exchange-rate API unreachable — quietly keep USD, don't cache the failure.
    }
}

function badgeLabel(category) {
    if (category === "ORIGINAL") return t("badge_original");
    if (category === "LIMITED") return t("badge_limited");
    if (category === "POSTER") return t("badge_poster");
    return category;
}

function thankYouMessage(name) {
    // name is blank when this runs after the page reload from a native (non-AJAX)
    // form submission — see the attachment path in initEventListeners().
    const greeting = name
        ? (currentLang === "ko" ? `감사합니다, ${name}님! ` : `Thank you, ${name}! `)
        : "";
    return greeting + (currentLang === "ko"
        ? "문의가 정상적으로 접수되었습니다. 담당 큐레이터가 빠르게 연락드리겠습니다."
        : "Your inquiry has been received. A curator will contact you shortly.");
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
        detailDesc.textContent = getDescription(currentDetailArt);
        renderDetailSpecs(currentDetailArt);
        if (currentDetailArt.shippingNote) {
            detailShippingNote.textContent = getShippingNote(currentDetailArt);
        }
    }
    // Re-apply after the generic data-i18n loop above, which would otherwise
    // reset the phone tag back to "(Optional)" regardless of inquiry type.
    updatePhoneRequirement();
}

// Purchase Inquiry vs General Inquiry: phone becomes required, and the
// shipping address field reveals itself, only for a purchase inquiry.
// (contact.html only; no-ops elsewhere.)
function updatePhoneRequirement() {
    if (!inputPhone || !inquiryTypePurchase) return;
    const isPurchase = inquiryTypePurchase.checked;
    inputPhone.required = isPurchase;
    if (phoneRequiredTag) {
        phoneRequiredTag.textContent = isPurchase ? "*" : t("optional_tag");
        phoneRequiredTag.className = isPurchase ? "required" : "optional-tag";
    }
    if (purchaseOnlyFields) {
        purchaseOnlyFields.classList.toggle("hidden", !isPurchase);
    }
    if (inputMessage) {
        inputMessage.placeholder = t(isPurchase ? "placeholder_message_purchase" : "placeholder_message_general");
    }
}

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initEventListeners();
    applyLanguage(currentLang);
    applyContactPrefill();
    checkFormSentFlag();
    // Only pages that actually display a price need to look up region/currency.
    if (catalogGrid || detailPanel) detectRegionAndCurrency();
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
        // Phone is required only for Purchase Inquiry
        [inquiryTypeGeneral, inquiryTypePurchase].forEach((radio) => {
            radio.addEventListener("change", updatePhoneRequirement);
        });
        updatePhoneRequirement();

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
        //
        // FormSubmit's AJAX endpoint (formsubmit.co/ajax/...) silently drops
        // file attachments — only a normal, full-page multipart POST actually
        // delivers them. So when a file is attached, we let the browser
        // submit the form natively (no preventDefault, no fetch) instead of
        // going through the no-reload AJAX path used otherwise. `_next`
        // brings the visitor back here with `?sent=1` so they still see a
        // confirmation message, just after a brief page reload.
        inquiryForm.addEventListener("submit", (e) => {
            const name = document.getElementById("input-name").value;
            const email = document.getElementById("input-email").value;
            const phone = inputPhone.value;
            const agree = document.getElementById("input-agree").checked;
            const phoneMissing = inputPhone.required && !phone;

            if (!name || !email || phoneMissing || !agree) {
                e.preventDefault();
                alert(t("required_field_alert"));
                return;
            }

            const submitBtn = inquiryForm.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === "ko" ? "전송 중..." : "Sending...";

            const hasAttachment = inputFile && inputFile.files && inputFile.files.length > 0;
            if (hasAttachment) {
                if (formNextUrlInput) {
                    formNextUrlInput.value = window.location.origin + window.location.pathname + "?sent=1";
                }
                return; // let the native (non-AJAX) submission proceed as-is
            }

            e.preventDefault();

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
                <p class="card-artist">${isHighlighted ? getDescription(art) : art.artist}</p>
                <div class="card-meta">
                    <span class="card-price">${formatPrice(art)}</span>
                    <span class="card-badge">${isHighlighted ? t('view_artwork') : badgeLabel(art.category)}</span>
                </div>
            </div>
            ${isHighlighted
                ? `<div class="card-hover-image"><img src="${art.image}" alt="${art.title}"></div>`
                : `<div class="card-hover-highlight">
                    <h3 class="card-title">${art.title}: A MASTERPIECE BY ${art.artist}</h3>
                    <p class="card-hover-desc">${getDescription(art)}</p>
                    <div class="card-meta">
                        <span class="card-price">${formatPrice(art)}</span>
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
                <p class="card-description">${getDescription(art)}</p>
                <div class="card-meta">
                    <span class="card-price">${formatPrice(art)}</span>
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
    detailDesc.textContent = getDescription(art);
    detailPrice.textContent = formatPrice(art);
    renderDetailSpecs(art);
    if (art.shippingNote) {
        detailShippingNote.textContent = getShippingNote(art);
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

    // Arriving here always means the visitor clicked "Send Purchase Inquiry"
    // — default the inquiry type accordingly so phone becomes required.
    if (inquiryTypePurchase) {
        inquiryTypePurchase.checked = true;
        updatePhoneRequirement();
    }
}

// Landing back on contact.html after a native (non-AJAX) form submission —
// see the attachment path in initEventListeners() — shows up as `?sent=1`.
// Confirm to the visitor and strip the flag from the URL.
function checkFormSentFlag() {
    if (!inquiryForm) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") !== "1") return;

    alert(thankYouMessage(""));
    window.history.replaceState({}, "", window.location.pathname);
}
