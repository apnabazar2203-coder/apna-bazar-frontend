/* ---------------------------------------
   APNA BAZAR SELLER - App Logic (Optimized)
   State-aware - No layout shift - Disabled states
   --------------------------------------- */

const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://seller.apnabazarmart.in';

const SHOP_CATEGORIES = [
    'Clothing',
    'Footwear',
    'Cosmetics',
    'Grocery',
    'Electronics',
    'Accessories',
    'Furniture'
];

const translations = {
    en: {
        enterMobile: 'Enter your mobile number',
        productName: 'Product Name',
        price: 'Price',
        quantity: 'Quantity Available',
        postProduct: 'Post Product',
        updateProduct: 'Update Product',
        start_selling_local: 'Start selling to your local customers',
        enter_mobile: 'Enter your mobile number',
        enter_mobile_placeholder: 'Enter 10-digit mobile number',
        valid_phone_number: 'Enter a valid 10-digit number',
        send_otp: 'Send OTP',
        verify_continue: 'Verify & Continue',
        resend_otp: 'Resend OTP',
        no_products: 'No products yet',
        no_products_hint: 'Tap "Add Product" to get started',
        no_products_in_category: 'No products in this category',
        no_products_filter_hint: 'Try another filter to see more products',
        add_product: 'Add Product',
        add_short: '+ Add',
        home_nav: 'Home',
        add_nav: 'Add',
        orders_nav: 'Orders',
        profile_title: 'Profile',
        my_products: 'My Products',
        recent_orders: 'Recent Orders',
        view_all: 'View All',
        no_orders: 'No orders yet',
        no_orders_hint: 'Orders will show up here when customers buy your products',
        recent_orders_hint: 'Orders appear here when customers buy your products',
        commission_banner: '0% commission for 30 days after your first order!',
        today_summary: "Today's Summary",
        earnings: 'Earnings',
        next_payout: 'Next Payout',
        product_photos: 'Product Photos',
        product_photos_hint: 'Add 1-5 photos. First photo is the main image.',
        category: 'Category',
        details: 'Details',
        product_name: 'Product Name',
        price_label: 'Price (₹) *',
        quantity_available: 'Quantity Available *',
        description_optional: 'Description (optional)',
        color_optional: 'Color (optional)',
        color_hint: 'Multiple colors allowed (separate with /)',
        live_preview: 'Live Preview',
        add_error: 'Select category, subcategory, enter price & quantity',
        post_product: 'Post Product',
        update_product: 'Update Product',
        all: 'All',
        new: 'New',
        accepted: 'Accepted',
        packed: 'Packed',
        ready: 'Ready',
        delivered: 'Delivered',
        product_label: 'Product',
        quantity_label: 'Quantity',
        buyer_area: 'Buyer Area',
        delivery_address: 'Delivery Address',
        delivery: 'Delivery',
        delivery_handled: 'Handled by Apna Bazar',
        order_amount: 'Order Amount',
        commission: 'Commission (10%)',
        net_earnings: 'Net Earnings',
        payout_date: 'Payout Date',
        verification_in_progress: "Verification in progress. We'll notify you once approved.",
        shop_details: 'Shop Details',
        shop_timings: 'Shop Timings',
        contact_number: 'Contact Number',
        bank_details: 'Bank Details (Payout)',
        settings: 'Settings',
        language: 'Language',
        dark_mode: 'Dark Mode',
        logout: 'Logout',
        help: 'Help',
        help_intro: 'For any support, contact:',
        email_label: 'Email:',
        terms: 'Terms & Conditions',
        terms_intro: 'By using Apna Bazar, you agree:',
        terms_rule_1: 'You will list genuine products',
        terms_rule_2: 'Prices must be accurate',
        terms_rule_3: 'No illegal items allowed',
        terms_rule_4: 'Orders must be fulfilled responsibly',
        terms_rule_5: 'Platform may suspend misuse',
        switched_english: 'Switched to English',
        switched_hindi: 'Switched to Hindi'
    },
    hi: {
        enterMobile: 'अपना मोबाइल नंबर दर्ज करें',
        productName: 'प्रोडक्ट का नाम',
        price: 'कीमत',
        quantity: 'उपलब्ध मात्रा',
        postProduct: 'प्रोडक्ट पोस्ट करें',
        updateProduct: 'प्रोडक्ट अपडेट करें',
        start_selling_local: 'अपने स्थानीय ग्राहकों को बेचने की शुरुआत करें',
        enter_mobile: 'अपना मोबाइल नंबर दर्ज करें',
        enter_mobile_placeholder: '10 अंकों का मोबाइल नंबर दर्ज करें',
        valid_phone_number: 'कृपया सही 10 अंकों का नंबर दर्ज करें',
        send_otp: 'ओटीपी भेजें',
        verify_continue: 'सत्यापित करें और आगे बढ़ें',
        resend_otp: 'ओटीपी दोबारा भेजें',
        no_products: 'अभी तक कोई प्रोडक्ट नहीं',
        no_products_hint: '"Add Product" दबाकर शुरू करें',
        no_products_in_category: 'इस कैटेगरी में कोई प्रोडक्ट नहीं',
        no_products_filter_hint: 'और प्रोडक्ट देखने के लिए दूसरा फ़िल्टर चुनें',
        add_product: 'प्रोडक्ट जोड़ें',
        add_short: '+ जोड़ें',
        home_nav: 'होम',
        add_nav: 'जोड़ें',
        orders_nav: 'ऑर्डर',
        profile_title: 'प्रोफ़ाइल',
        my_products: 'मेरे प्रोडक्ट',
        recent_orders: 'हाल के ऑर्डर',
        view_all: 'सभी देखें',
        no_orders: 'अभी तक कोई ऑर्डर नहीं',
        no_orders_hint: 'जब ग्राहक आपके प्रोडक्ट खरीदेंगे, ऑर्डर यहां दिखेंगे',
        recent_orders_hint: 'जब ग्राहक आपके प्रोडक्ट खरीदेंगे, ऑर्डर यहां दिखेंगे',
        commission_banner: 'पहले ऑर्डर के बाद 30 दिनों तक 0% कमीशन!',
        today_summary: 'आज का सारांश',
        earnings: 'कमाई',
        next_payout: 'अगला भुगतान',
        product_photos: 'प्रोडक्ट फोटो',
        product_photos_hint: '1-5 फोटो जोड़ें। पहली फोटो मुख्य फोटो होगी।',
        category: 'कैटेगरी',
        details: 'विवरण',
        product_name: 'प्रोडक्ट का नाम',
        price_label: 'कीमत (₹) *',
        quantity_available: 'उपलब्ध मात्रा *',
        description_optional: 'विवरण (वैकल्पिक)',
        color_optional: 'रंग (वैकल्पिक)',
        color_hint: 'एक से अधिक रंग लिखें (/ से अलग करें)',
        live_preview: 'लाइव प्रीव्यू',
        add_error: 'कैटेगरी, सबकैटेगरी, कीमत और मात्रा चुनें',
        post_product: 'प्रोडक्ट पोस्ट करें',
        update_product: 'प्रोडक्ट अपडेट करें',
        all: 'सभी',
        new: 'नया',
        accepted: 'स्वीकृत',
        packed: 'पैक्ड',
        ready: 'तैयार',
        delivered: 'डिलीवर',
        product_label: 'प्रोडक्ट',
        quantity_label: 'मात्रा',
        buyer_area: 'खरीदार का क्षेत्र',
        delivery_address: 'डिलीवरी पता',
        delivery: 'डिलीवरी',
        delivery_handled: 'Apna Bazar द्वारा संभाला गया',
        order_amount: 'ऑर्डर राशि',
        commission: 'कमीशन (10%)',
        net_earnings: 'शुद्ध कमाई',
        payout_date: 'भुगतान तिथि',
        verification_in_progress: 'वेरिफिकेशन जारी है। अनुमोदन होने पर हम आपको बताएंगे।',
        shop_details: 'दुकान विवरण',
        shop_timings: 'दुकान का समय',
        contact_number: 'संपर्क नंबर',
        bank_details: 'बैंक विवरण (भुगतान)',
        settings: 'सेटिंग्स',
        language: 'भाषा',
        dark_mode: 'डार्क मोड',
        logout: 'लॉगआउट',
        help: 'मदद',
        help_intro: 'किसी भी सहायता के लिए संपर्क करें:',
        email_label: 'ईमेल:',
        terms: 'नियम और शर्तें',
        terms_intro: 'Apna Bazar का उपयोग करके आप सहमत हैं:',
        terms_rule_1: 'आप केवल असली प्रोडक्ट लिस्ट करेंगे',
        terms_rule_2: 'कीमतें सही होंगी',
        terms_rule_3: 'कोई अवैध सामान अनुमति नहीं है',
        terms_rule_4: 'ऑर्डर जिम्मेदारी से पूरे किए जाएंगे',
        terms_rule_5: 'गलत उपयोग पर प्लेटफ़ॉर्म निलंबित कर सकता है',
        switched_english: 'अंग्रेज़ी चुनी गई',
        switched_hindi: 'हिंदी चुनी गई'
    }
};

let currentLanguage = localStorage.getItem('lang') || 'en';
let editMode = false;
let editingProductId = null;
let existingImages = [];
let selectedSizes = [];

const AppState = {
    page: 'home',
    history: [],
    loggedIn: false,
    profileComplete: false,
    darkMode: false,
    lang: currentLanguage,
    shopName: '',
    categories: [],
    shopArea: 'Patan',
    shopCity: '',
    shopPhone: '',
    shopLat: null,
    shopLng: null,
    shopTimings: '9 AM - 9 PM',
    shopContact: '',
    shopBank: 'Not set',
    verificationStatus: '',
    verified: false,
    verifyPending: false,
    verificationFile: null,
    verifyDoc: null,
    products: [],
    orders: [],
    productImages: [],
    addCat: '',
    addSelectedSizes: [],
    addSizeMode: '',
    editField: null,
    editMode: false,
    editingProductId: null,
    prefillProductForm: false,
    selectedSubcategory: '',
    selectedFilter: 'all'
};

function t(key) {
    return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function renderLanguageControls() {
    const markup = `
        <button type="button" onclick="setLanguage('en')" class="${currentLanguage === 'en' ? 'active' : ''}">English</button>
        <button type="button" onclick="setLanguage('hi')" class="${currentLanguage === 'hi' ? 'active' : ''}">हिंदी</button>
    `;

    ['loginLangToggle', 'profileLangToggle'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = markup;
        }
    });
}

function renderApp() {
    applyTranslations();
    renderLanguageControls();
    syncProductSubmitButton();
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    localStorage.setItem('lang', lang);
    renderApp();
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (!key) return;
        element.textContent = t(key);
    });

    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.dataset.placeholderKey;
        if (!key) return;
        element.placeholder = t(key);
    });

    AppState.lang = currentLanguage;
    document.documentElement.lang = currentLanguage === 'hi' ? 'hi' : 'en';

    if (document.getElementById('emptyProducts')) {
        renderProducts();
    }
}

function normalizeCoordinate(value) {
    if (value === null || value === undefined || value === '') return null;
    const num = Number(value);
    return Number.isFinite(num) ? num : null;
}

function normalizeBoolean(value) {
    return value === true || value === 'true' || value === 1 || value === '1';
}

function normalizeVerificationStatus(value) {
    return String(value || '').trim().toLowerCase();
}

function normalizeShopCategoryName(category) {
    const value = String(category || '').trim();
    if (!value) return '';

    if (value.toLowerCase().startsWith('cosmetics')) {
        return 'Cosmetics';
    }

    const match = SHOP_CATEGORIES.find(item => item.toLowerCase() === value.toLowerCase());
    return match || value;
}

function normalizeSellerCategories(value) {
    if (Array.isArray(value)) {
        return Array.from(new Set(
            value
                .map(category => normalizeShopCategoryName(category))
                .filter(Boolean)
        ));
    }

    if (typeof value !== 'string') return [];

    const trimmed = value.trim();
    if (!trimmed) return [];

    try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
            return normalizeSellerCategories(parsed);
        }
    } catch (err) {
        // Older payloads may store categories as comma-separated text.
    }

    return Array.from(new Set(
        trimmed
            .split(',')
            .map(category => normalizeShopCategoryName(category))
            .filter(Boolean)
    ));
}

function renderSetupCategoryChips() {
    const container = document.getElementById('setupCategoryChips');
    if (!container) return;

    container.innerHTML = SHOP_CATEGORIES.map(category => `
        <button
            type="button"
            class="cat-chip ${AppState.categories.includes(category) ? 'active' : ''}"
            onclick="toggleSetupCategory('${category}')"
        >
            ${category}
        </button>
    `).join('');
}

function getCategoryEmoji(category) {
    switch (category) {
        case 'Clothing': return '👗';
        case 'Footwear': return '👟';
        case 'Cosmetics': return '💄';
        case 'Grocery': return '🛒';
        case 'Electronics': return '📱';
        case 'Accessories': return '🎧';
        case 'Furniture': return '🪑';
        default: return '🛍️';
    }
}

function renderAddCategoryChips() {
    const container = document.getElementById('addCategoryChips');
    if (!container) return;

    container.innerHTML = SHOP_CATEGORIES.map(category => `
        <button
            type="button"
            class="cat-chip ${AppState.addCat === category ? 'active' : ''}"
            data-cat="${category}"
            onclick="selectAddCategory(this)"
        >
            ${getCategoryEmoji(category)} ${category}
        </button>
    `).join('');
}

function toggleSetupCategory(category) {
    if (AppState.categories.includes(category)) {
        AppState.categories = AppState.categories.filter(item => item !== category);
    } else {
        AppState.categories = [...AppState.categories, category];
    }

    const error = document.getElementById('setupError');
    if (error && AppState.categories.length > 0 && error.textContent === 'Please select at least one category') {
        error.classList.remove('show');
    }

    renderSetupCategoryChips();
}

function hydrateSellerState(seller, isProfileComplete = null) {
    if (!seller || typeof seller !== 'object') return;

    const hasVerificationDocument = Boolean(String(seller.document_name || '').trim());
    const verificationStatus = hasVerificationDocument
        ? normalizeVerificationStatus(seller.verification_status)
        : '';

    AppState.loggedIn = true;
    AppState.profileComplete = isProfileComplete === null
        ? normalizeBoolean(seller.isProfileComplete ?? seller.is_profile_complete)
        : normalizeBoolean(isProfileComplete);
    AppState.shopName = seller.shop_name || '';
    AppState.categories = normalizeSellerCategories(seller.categories || seller.shop_category);
    AppState.shopArea = seller.area || '';
    AppState.shopCity = seller.city || '';
    AppState.shopPhone = seller.phone || '';
    AppState.shopLat = normalizeCoordinate(seller.latitude);
    AppState.shopLng = normalizeCoordinate(seller.longitude);
    AppState.verificationStatus = verificationStatus;
    AppState.verified = verificationStatus === 'verified' || verificationStatus === 'approved';
    AppState.verifyPending = !verificationStatus || verificationStatus === 'pending';

    renderSetupCategoryChips();
}

function syncShopSetupForm() {
    const shopNameInput = document.getElementById('setupShopName');
    const areaInput = document.getElementById('setupArea');

    if (shopNameInput) {
        shopNameInput.value = AppState.shopName || '';
    }

    if (areaInput) {
        areaInput.value = AppState.shopArea || '';
        areaInput.dataset.auto = AppState.shopArea ? 'true' : 'false';
    }

    renderSetupCategoryChips();
}

function showOtpOnboarding() {
    AppState.loggedIn = false;
    AppState.profileComplete = false;
    AppState.verificationStatus = '';
    AppState.verified = false;
    AppState.verifyPending = false;
    AppState.page = 'home';
    stopResendTimer();
    document.getElementById('onboardingOtp').classList.remove('hidden');
    document.getElementById('onboardingShop').classList.add('hidden');
    document.getElementById('onboardingVerify').classList.add('hidden');
    document.getElementById('bottomNav').classList.add('hidden');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
}

function showShopOnboarding() {
    if (!Auth.isLoggedIn() || !AppState.loggedIn) {
        showOtpOnboarding();
        return;
    }

    AppState.page = 'home';
    syncShopSetupForm();
    document.getElementById('onboardingOtp').classList.add('hidden');
    document.getElementById('onboardingVerify').classList.add('hidden');
    document.getElementById('onboardingShop').classList.remove('hidden');
    document.getElementById('bottomNav').classList.add('hidden');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
}

function sellerNeedsVerification() {
    return !AppState.verificationStatus;
}

function showVerificationOnboarding() {
    if (!Auth.isLoggedIn() || !AppState.loggedIn) {
        showOtpOnboarding();
        return;
    }

    if (!AppState.profileComplete) {
        showShopOnboarding();
        return;
    }

    if (!sellerNeedsVerification()) {
        showDashboard('home');
        return;
    }

    AppState.page = 'home';
    document.getElementById('onboardingOtp').classList.add('hidden');
    document.getElementById('onboardingShop').classList.add('hidden');
    document.getElementById('onboardingVerify').classList.remove('hidden');
    document.getElementById('bottomNav').classList.add('hidden');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
}

function openDashboard(page = 'home') {
    document.getElementById('onboardingOtp').classList.add('hidden');
    document.getElementById('onboardingShop').classList.add('hidden');
    document.getElementById('onboardingVerify').classList.add('hidden');
    document.getElementById('bottomNav').classList.remove('hidden');
    navigateTo(page);
}

function showDashboard(page = 'home') {
    if (!Auth.isLoggedIn() || !AppState.loggedIn) {
        showOtpOnboarding();
        return;
    }

    if (!AppState.profileComplete) {
        showShopOnboarding();
        return;
    }

    if (sellerNeedsVerification()) {
        showVerificationOnboarding();
        return;
    }

    openDashboard(page);
}

function routeAuthenticatedSeller(page = 'home') {
    if (!Auth.isLoggedIn() || !AppState.loggedIn) {
        showOtpOnboarding();
    } else if (!AppState.profileComplete) {
        showShopOnboarding();
    } else if (sellerNeedsVerification()) {
        showVerificationOnboarding();
    } else {
        openDashboard(page);
    }
}

function showMainApp(page = 'home') {
    showDashboard(page);
}

let googleMapsLoadPromise = null;
let onboardingLocationMap = null;
let onboardingLocationMarker = null;
let onboardingLocationDragEnabled = false;
let onboardingGeocoder = null;
let resendTimer = null;
let resendSeconds = 30;

function getGoogleMapsApiKey() {
    const metaKey = document.querySelector('meta[name="google-maps-api-key"]')?.content?.trim();
    const windowKey = typeof window.GOOGLE_MAPS_API_KEY === 'string' ? window.GOOGLE_MAPS_API_KEY.trim() : '';
    return windowKey || metaKey || '';
}

function hideOnboardingLocationMap() {
    const mapEl = document.getElementById('shopLocationMap');
    if (mapEl) mapEl.classList.add('hidden');
    const adjustBtn = document.getElementById('adjustLocationBtn');
    if (adjustBtn) adjustBtn.classList.add('hidden');
}

function updateLocationStatus(lat, lng, prefix = 'Lat') {
    const status = document.getElementById('locationStatus');
    if (!status || lat == null || lng == null) return;

    status.textContent = `${prefix}: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
    status.style.display = 'block';
}

function stopResendTimer() {
    if (resendTimer) {
        clearInterval(resendTimer);
        resendTimer = null;
    }

    const resendBtn = document.getElementById('resendOtpBtn');
    if (!resendBtn) return;

    resendBtn.disabled = false;
    resendBtn.innerText = 'Resend OTP';
}

function startResendTimer() {
    const resendBtn = document.getElementById('resendOtpBtn');
    if (!resendBtn) return;

    stopResendTimer();
    resendBtn.disabled = true;
    resendSeconds = 30;
    resendBtn.innerText = `Resend OTP in ${resendSeconds}s`;

    resendTimer = setInterval(() => {
        resendSeconds--;

        if (resendSeconds <= 0) {
            stopResendTimer();
        } else {
            resendBtn.innerText = `Resend OTP in ${resendSeconds}s`;
        }
    }, 1000);
}

function setLocationAdjustmentMode(enabled) {
    onboardingLocationDragEnabled = enabled;

    if (onboardingLocationMarker) {
        onboardingLocationMarker.setDraggable(enabled);
    }

    const adjustBtn = document.getElementById('adjustLocationBtn');
    if (adjustBtn) {
        adjustBtn.classList.toggle('hidden', !onboardingLocationMarker);
        adjustBtn.textContent = enabled ? 'Drag marker to adjust' : 'Adjust location';
    }
}

function getAddressComponent(components, preferredTypes) {
    if (!Array.isArray(components)) return '';

    for (const type of preferredTypes) {
        const match = components.find(component => Array.isArray(component.types) && component.types.includes(type));
        if (match?.long_name) return match.long_name;
    }

    return '';
}

function applyResolvedShopAddress(area, city) {
    const areaInput = document.getElementById('setupArea');
    if (area) {
        const canAutoFill = !areaInput || !areaInput.value.trim() || areaInput.dataset.auto === 'true';
        if (canAutoFill && areaInput) {
            areaInput.value = area;
            areaInput.dataset.auto = 'true';
        }
        AppState.shopArea = canAutoFill ? area : (areaInput?.value.trim() || AppState.shopArea);
    }

    if (city) {
        AppState.shopCity = city;
    }
}

async function reverseGeocodeShopLocation(lat, lng) {
    if (lat == null || lng == null) return;

    try {
        await loadGoogleMapsApi();
    } catch (error) {
        return;
    }

    if (!onboardingGeocoder) {
        onboardingGeocoder = new google.maps.Geocoder();
    }

    try {
        const response = await onboardingGeocoder.geocode({
            location: { lat, lng }
        });

        const result = Array.isArray(response?.results) ? response.results[0] : null;
        const components = result?.address_components || [];

        const area = getAddressComponent(components, [
            'sublocality_level_1',
            'sublocality',
            'neighborhood',
            'route',
            'locality',
            'administrative_area_level_2'
        ]);

        const city = getAddressComponent(components, [
            'locality',
            'administrative_area_level_3',
            'administrative_area_level_2',
            'administrative_area_level_1'
        ]);

        applyResolvedShopAddress(area, city);
    } catch (error) {
        console.warn('Reverse geocoding failed:', error.message);
    }
}

function loadGoogleMapsApi() {
    if (window.google?.maps) {
        return Promise.resolve(window.google.maps);
    }

    if (googleMapsLoadPromise) {
        return googleMapsLoadPromise;
    }

    const apiKey = getGoogleMapsApiKey();
    if (!apiKey) {
        return Promise.reject(new Error('Google Maps API key missing'));
    }

    googleMapsLoadPromise = new Promise((resolve, reject) => {
        const callbackName = '__apnaBazarSellerMapsReady';
        const existingScript = document.getElementById('googleMapsScript');

        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(window.google.maps), { once: true });
            existingScript.addEventListener('error', () => {
                googleMapsLoadPromise = null;
                reject(new Error('Google Maps JS API failed to load'));
            }, { once: true });
            return;
        }

        window[callbackName] = () => {
            resolve(window.google.maps);
            delete window[callbackName];
        };

        const script = document.createElement('script');
        script.id = 'googleMapsScript';
        script.async = true;
        script.defer = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async&callback=${callbackName}&v=weekly`;
        script.onerror = () => {
            googleMapsLoadPromise = null;
            delete window[callbackName];
            reject(new Error('Google Maps JS API failed to load'));
        };

        document.head.appendChild(script);
    });

    return googleMapsLoadPromise;
}

async function renderOnboardingLocationMap(lat, lng) {
    const mapEl = document.getElementById('shopLocationMap');
    if (!mapEl || lat == null || lng == null) return;

    try {
        await loadGoogleMapsApi();
    } catch (error) {
        console.warn('Google Maps preview unavailable:', error.message);
        hideOnboardingLocationMap();
        return;
    }

    const center = { lat, lng };
    mapEl.classList.remove('hidden');
    setLocationAdjustmentMode(false);

    if (!onboardingLocationMap) {
        onboardingLocationMap = new google.maps.Map(mapEl, {
            center,
            zoom: 16,
            disableDefaultUI: true,
            gestureHandling: 'greedy'
        });

        onboardingLocationMarker = new google.maps.Marker({
            position: center,
            map: onboardingLocationMap,
            title: 'Detected location',
            draggable: false
        });

        onboardingLocationMarker.addListener('dragend', () => {
            const position = onboardingLocationMarker.getPosition();
            if (!position) return;

            AppState.shopLat = position.lat();
            AppState.shopLng = position.lng();
            onboardingLocationMap.setCenter({
                lat: AppState.shopLat,
                lng: AppState.shopLng
            });
            updateLocationStatus(AppState.shopLat, AppState.shopLng, 'Adjusted');
            setLocationAdjustmentMode(false);
            reverseGeocodeShopLocation(AppState.shopLat, AppState.shopLng);
        });
        setLocationAdjustmentMode(false);
        return;
    }

    onboardingLocationMap.setOptions({
        gestureHandling: 'greedy'
    });
    onboardingLocationMap.setCenter(center);
    onboardingLocationMap.setZoom(16);
    if (onboardingLocationMarker) onboardingLocationMarker.setPosition(center);
    window.setTimeout(() => {
        google.maps.event.trigger(onboardingLocationMap, 'resize');
        onboardingLocationMap.setCenter(center);
    }, 0);
}

// -- Mock Data --
const PRODUCTS = [
    { id: 1, name: 'Cotton Kurti Blue', cat: 'Clothing', price: 499, qty: 12, emoji: '👗' },
    { id: 2, name: 'Running Shoes', cat: 'Footwear', price: 899, qty: 5, emoji: '👟' },
    { id: 3, name: 'Lipstick Set', cat: 'Cosmetics', price: 299, qty: 0, emoji: '💄' },
    { id: 4, name: 'Men Formal Shirt', cat: 'Clothing', price: 699, qty: 8, emoji: '👗' },
];

const ORDERS = [
    { id: 'AB1001', name: 'Cotton Kurti Blue', emoji: '👗', qty: 1, area: 'Patan Station Road', addr: '23, Shivaji Nagar, Patan', amount: 499, status: 'new', date: '12 Feb 2026' },
    { id: 'AB1002', name: 'Running Shoes', emoji: '👟', qty: 1, area: 'Dharampeth', addr: '45, Gopal Nagar, Patan', amount: 899, status: 'accepted', date: '12 Feb 2026' },
    { id: 'AB1003', name: 'Men Formal Shirt', emoji: '👗', qty: 2, area: 'Itwari', addr: '12, Laxmi Colony, Patan', amount: 1398, status: 'packed', date: '11 Feb 2026' },
    { id: 'AB1004', name: 'Cotton Kurti Blue', emoji: '👗', qty: 1, area: 'Sadar', addr: '78, Rajiv Nagar, Patan', amount: 499, status: 'delivered', date: '10 Feb 2026' },
    { id: 'AB1005', name: 'Lipstick Set', emoji: '💄', qty: 3, area: 'Sitabuldi', addr: '56, MG Road, Patan', amount: 897, status: 'ready', date: '11 Feb 2026' },
];

function trackEvent(n, d = {}) { console.log(`[T] ${n}`, d); }

// -- Toast --
let _tt;
function toast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(_tt);
    _tt = setTimeout(() => el.classList.remove('show'), 2500);
}

function showToast(msg) {
    toast(msg);
}

// -- Button Loading Helper --
function setLoading(btnId, loading) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (loading) {
        btn.disabled = true;
        btn.classList.add('loading');
        btn._origText = btn.innerHTML;
        btn.innerHTML = '<span class="material-symbols-outlined">hourglass_top</span> Wait...';
    } else {
        btn.disabled = false;
        btn.classList.remove('loading');
        if (btn._origText) btn.innerHTML = btn._origText;
    }
}

// ------------------
// NAVIGATION
// ------------------
const MAIN = ['home', 'add', 'orders', 'profile'];
const PROTECTED_PAGES = ['home', 'add', 'orders', 'order-detail', 'profile', 'help', 'terms'];

function navigateTo(page, push = true) {
    if (PROTECTED_PAGES.includes(page)) {
        if (!Auth.isLoggedIn() || !AppState.loggedIn) {
            showOtpOnboarding();
            return;
        }

        if (!AppState.profileComplete) {
            showShopOnboarding();
            return;
        }

        if (sellerNeedsVerification()) {
            showVerificationOnboarding();
            return;
        }
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) {
        target.classList.add('active');
        target.style.animation = 'none';
        target.offsetHeight; // reflow
        target.style.animation = '';
    }

    const nav = document.getElementById('bottomNav');
    nav.classList.toggle('hidden', !MAIN.includes(page));

    document.querySelectorAll('.nav-item').forEach(i => i.classList.toggle('active', i.dataset.page === page));

    if (push && AppState.page !== page) AppState.history.push(AppState.page);
    AppState.page = page;
    trackEvent(`${page}_view`);

    if (page === 'home') renderHome();
    else if (page === 'add') renderAdd();
    else if (page === 'orders') renderOrders();
    else if (page === 'profile') renderProfile();
}

function goBack() {
    navigateTo(AppState.history.length ? AppState.history.pop() : 'home', false);
}

function isImageLikeFile(file) {
    if (!(file instanceof File)) return false;

    const name = String(file.name || '').toLowerCase();
    return file.type.startsWith('image/') || /\.(jpe?g|png|webp|gif|bmp|heic|heif)$/i.test(name);
}

function loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
        const objectUrl = URL.createObjectURL(file);
        const img = new Image();

        img.onload = () => {
            URL.revokeObjectURL(objectUrl);
            resolve(img);
        };

        img.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error('Unsupported image file. Please choose a clear photo.'));
        };

        img.src = objectUrl;
    });
}

async function compressImage(file) {
    if (!(file instanceof File)) {
        throw new Error('Invalid file selected');
    }

    if (!isImageLikeFile(file)) {
        return file;
    }

    const image = await loadImageFromFile(file);
    const maxWidth = 1024;
    const scale = image.width > maxWidth ? maxWidth / image.width : 1;
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d', { alpha: false });
    if (!context) {
        throw new Error('Image processing is not supported on this device');
    }

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);

    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
            (result) => {
                if (result) {
                    resolve(result);
                    return;
                }

                reject(new Error('Failed to process image. Please try another photo.'));
            },
            'image/jpeg',
            0.8
        );
    });

    const safeName = String(file.name || 'image')
        .replace(/\.[^.]+$/, '')
        .replace(/[^\w.-]+/g, '_');

    return new File(
        [blob],
        `${safeName || 'image'}.jpg`,
        {
            type: 'image/jpeg',
            lastModified: Date.now()
        }
    );
}

function revokePreviewUrl(item) {
    if (!item || !item.preview || !item.file) return;

    try {
        URL.revokeObjectURL(item.preview);
    } catch (error) {
        // Ignore preview cleanup issues.
    }
}

function getDraftProductImages() {
    return Array.isArray(AppState.productImages) ? AppState.productImages : [];
}

function getRetainedProductImages() {
    return Array.isArray(existingImages) ? existingImages : [];
}

async function uploadVerificationImage(documentType, file) {
    const formData = new FormData();
    formData.append('document_type', documentType);
    formData.append('document', file, file.name);
    console.log('FORM DATA:', [...formData.entries()]);
    return apiFetch('/sellers/verify', {
        method: 'POST',
        body: formData
    });
}

async function uploadProductImages(payload) {
    const formData = new FormData();
    const sizes = normalizeSizeList(payload.sizes);
    const retainedImages = Array.isArray(payload.existingImages) ? payload.existingImages.filter(Boolean) : [];
    const newImages = Array.isArray(payload.newImages)
        ? payload.newImages
        : (Array.isArray(payload.images) ? payload.images : []);

    formData.append('name', payload.title);
    formData.append('category', payload.category);
    formData.append('price', Number(payload.price));
    formData.append('quantity', Number(payload.stock));
    formData.append('subcategory', payload.subcategory);

    if (payload.description) formData.append('description', payload.description);
    if (payload.color && payload.color.trim()) {
        formData.append('color', payload.color);
    }
    formData.append('sizes', JSON.stringify(sizes || []));

    if (editMode && payload.productId !== null) {
        formData.append('existingImages', JSON.stringify(retainedImages));
    }

    newImages.forEach(item => {
        if (item && item.file instanceof File) {
            formData.append('images', item.file, item.file.name);
        }
    });

    console.log('FORM DATA:', [...formData.entries()]);

    if (editMode && payload.productId !== null) {
        return ProductAPI.updateProduct(payload.productId, formData);
    }

    return ProductAPI.addProduct(formData);
}

// ------------------
// ONBOARDING
// ------------------
const Onboarding = {
    detectLocation() {
        const btn = document.getElementById('detectLocationBtn');
        const status = document.getElementById('locationStatus');
        if (!navigator.geolocation) {
            setLocationAdjustmentMode(false);
            hideOnboardingLocationMap();
            status.textContent = 'Unable to fetch location';
            status.style.display = 'block';
            status.style.color = 'var(--error, red)';
            return;
        }
        btn.disabled = true;
        btn.textContent = 'Detecting location...';
        navigator.geolocation.getCurrentPosition(
            (position) => {
                AppState.shopLat = position.coords.latitude;
                AppState.shopLng = position.coords.longitude;
                console.log('GPS accuracy (meters):', position.coords.accuracy);
                btn.textContent = 'Location detected';
                status.style.color = 'var(--success, green)';
                updateLocationStatus(AppState.shopLat, AppState.shopLng);
                renderOnboardingLocationMap(AppState.shopLat, AppState.shopLng);
                reverseGeocodeShopLocation(AppState.shopLat, AppState.shopLng);
            },
            (err) => {
                btn.disabled = false;
                btn.textContent = '📍 Detect My Location';
                setLocationAdjustmentMode(false);
                hideOnboardingLocationMap();
                if (err.code === err.PERMISSION_DENIED) {
                    status.textContent = '⚠️ Please enable location permission';
                } else if (err.code === err.POSITION_UNAVAILABLE) {
                    status.textContent = 'Unable to fetch location';
                } else if (err.code === err.TIMEOUT) {
                    status.textContent = 'Unable to fetch location';
                } else {
                    status.textContent = 'Unable to fetch location';
                }
                status.style.display = 'block';
                status.style.color = 'var(--error, red)';
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0
            }
        );
    },

    enableLocationAdjustment() {
        if (!onboardingLocationMarker) return;
        setLocationAdjustmentMode(true);
    },

    async sendOtp() {
        const ph = document.getElementById('otpPhone').value.trim();
        if (!/^\d{10}$/.test(ph)) {
            document.getElementById('phoneError').classList.add('show');
            return;
        }
        document.getElementById('phoneError').classList.remove('show');
        AppState.shopPhone = ph;

        setLoading('sendOtpBtn', true);
        try {
            const response = await SellerAPI.sendOtp(ph);
            if (response?.data?.otp) {
                alert('Your OTP is: ' + response.data.otp);
            }
            document.getElementById('otpSentMsg').textContent = `OTP sent to +91 ${ph.slice(0, 5)}XXXXX`;
            document.getElementById('otpPhoneStep').classList.add('hidden');
            document.getElementById('otpVerifyStep').classList.remove('hidden');
            setTimeout(setupOtpInputs, 50);
            startResendTimer();
        } catch (err) {
            toast(err.message || 'Failed to send OTP. Check your connection.');
        } finally {
            setLoading('sendOtpBtn', false);
        }
    },

    async verifyOtp() {
        const otp = getOTPValue();
        if (otp.length !== 6) {
            document.getElementById('otpError').classList.add('show');
            return;
        }
        document.getElementById('otpError').classList.remove('show');

        setLoading('verifyOtpBtn', true);
        try {
            const res = await SellerAPI.verifyOtp(AppState.shopPhone, otp);
            const authData = res?.data || {};
            stopResendTimer();
            Auth.setToken(authData.token);
            hydrateSellerState(
                authData.seller,
                res.isProfileComplete ??
                res.is_profile_complete ??
                authData.isProfileComplete ??
                authData.is_profile_complete ??
                authData.seller?.isProfileComplete ??
                authData.seller?.is_profile_complete
            );
            routeAuthenticatedSeller('home');
        } catch (err) {
            document.getElementById('otpError').classList.add('show');
            document.getElementById('otpError').textContent = err.message || 'Invalid OTP. Try again.';
        } finally {
            setLoading('verifyOtpBtn', false);
        }
    },

    async resendOtp() {
        await window.resendOtp();
    },

    async saveShop() {
        const name = document.getElementById('setupShopName').value.trim();
        const selectedCategories = [...AppState.categories];
        const area = document.getElementById('setupArea').value.trim();
        const setupError = document.getElementById('setupError');

        if (!selectedCategories.length) {
            setupError.textContent = 'Please select at least one category';
            setupError.classList.add('show');
            return;
        }

        if (!name || !area || AppState.shopLat === null || AppState.shopLng === null) {
            setupError.textContent = AppState.shopLat === null || AppState.shopLng === null ? 'Please detect your shop location first' : 'Fill all required fields';
            setupError.classList.add('show');
            return;
        }
        setupError.classList.remove('show');
        AppState.shopName = name;
        AppState.categories = selectedCategories;
        AppState.shopArea = area;

        setLoading('saveShopBtn', true);
        try {
            const res = await SellerAPI.updateProfile({
                shop_name: name,
                categories: selectedCategories,
                area: area,
                city: AppState.shopCity || undefined,
                latitude: AppState.shopLat,
                longitude: AppState.shopLng
            });
            hydrateSellerState(
                res.seller,
                res.isProfileComplete ?? res.is_profile_complete ?? res.seller?.isProfileComplete ?? res.seller?.is_profile_complete
            );
            syncShopSetupForm();
            showVerificationOnboarding();
        } catch (err) {
            toast('Failed to save shop details. Try again.');
        } finally {
            setLoading('saveShopBtn', false);
        }
    },

    ensureVerifyDocInput() {
        let input = document.getElementById('verifyDocInput');
        if (input) return input;

        input = document.createElement('input');
        input.type = 'file';
        input.id = 'verifyDocInput';
        input.accept = 'image/*,application/pdf,.pdf';
        input.style.display = 'none';
        input.addEventListener('change', Onboarding.handleVerifyDocSelection);
        document.body.appendChild(input);
        return input;
    },

    async handleVerifyDocSelection(e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const fileName = file.name.toLowerCase();
        const allowedTypes = ['application/pdf'];
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.pdf'];
        const isAllowedFile = allowedTypes.includes(file.type) || allowedExtensions.some(ext => fileName.endsWith(ext));

        if (!isAllowedFile) {
            AppState.verificationFile = null;
            AppState.verifyDoc = null;
            alert('Please select a valid image or PDF file.');
            e.target.value = '';
            return;
        }

        try {
            const processedFile = await compressImage(file);
            AppState.verificationFile = processedFile;
            AppState.verifyDoc = processedFile;

            const preview = document.getElementById('verifyPreview');
            const previewLabel = preview ? preview.querySelector('span:last-child') : null;
            if (previewLabel) previewLabel.textContent = processedFile.name;
            if (preview) preview.classList.remove('hidden');
        } catch (error) {
            AppState.verificationFile = null;
            AppState.verifyDoc = null;
            alert(error.message || 'Failed to process image');
            e.target.value = '';
        }
    },

    pickDoc() {
        const input = this.ensureVerifyDocInput();
        input.value = '';
        input.click();
    },

    async submitVerification() {
        if (!AppState.verificationFile) {
            showToast('Please upload a document to verify your shop');
            return;
        }

        const typeInput = document.querySelector('input[name="docType"]:checked');
        const document_type = typeInput ? typeInput.value : 'Shop Photo';

        const btn = document.querySelector('button[onclick="Onboarding.submitVerification()"]');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span class="material-symbols-outlined">hourglass_top</span> Wait...';
        }

        try {
            await uploadVerificationImage(document_type, AppState.verificationFile);
            AppState.verificationStatus = 'pending';
            AppState.verifyPending = true;
            AppState.verified = false;
            AppState.verificationFile = null;
            AppState.verifyDoc = null;
            showToast('Verification submitted successfully');
            setTimeout(() => {
                showDashboard();
            }, 800);
        } catch (err) {
            showToast(err.message || 'Verification failed. Try again.');
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = 'Submit & Start Selling';
            }
        }
    },

    _finish() {
        AppState.loggedIn = true;
        AppState.products = [];
        AppState.orders = [];
        routeAuthenticatedSeller('home');
        toast(`Welcome, ${AppState.shopName}!`);
    }
};

Onboarding.sendOTP = (...args) => Onboarding.sendOtp(...args);

function sendOTP() {
    return Onboarding.sendOtp();
}

function getOTPValue() {
    return Array.from(document.querySelectorAll('.otp-input'))
        .map(input => input.value)
        .join('');
}

async function resendOtp() {
    const resendBtn = document.getElementById('resendOtpBtn');
    if (resendBtn?.disabled) return;

    if (!AppState.shopPhone) {
        toast('Enter your phone number first');
        return;
    }

    try {
        if (resendBtn) resendBtn.disabled = true;
        const response = await SellerAPI.sendOtp(AppState.shopPhone);
        if (response?.data?.otp) {
            alert('Your OTP is: ' + response.data.otp);
        }
        const otpError = document.getElementById('otpError');
        if (otpError) {
            otpError.classList.remove('show');
            otpError.textContent = 'Invalid OTP. Try again.';
        }
        setupOtpInputs();
        startResendTimer();
        toast('New OTP sent');
    } catch (err) {
        stopResendTimer();
        toast(err.message || 'Failed to resend OTP');
    }
}

function setupOtpInputs() {
    const existingInputs = Array.from(document.querySelectorAll('.otp-input'));
    existingInputs.forEach(input => {
        const freshInput = input.cloneNode(true);
        input.replaceWith(freshInput);
    });

    const inputs = document.querySelectorAll('.otp-input');

    inputs.forEach((input, idx) => {
        input.value = '';

        input.addEventListener('input', (e) => {
            const digitsOnly = e.target.value.replace(/\D/g, '');

            if (digitsOnly.length > 1) {
                const chars = digitsOnly.slice(0, inputs.length).split('');
                inputs.forEach((otpInput, index) => {
                    otpInput.value = chars[index] || '';
                });
                if (chars.length > 0) {
                    inputs[Math.min(chars.length - 1, inputs.length - 1)].focus();
                }
                return;
            }

            const value = digitsOnly.slice(0, 1);
            e.target.value = value;

            if (value && idx < inputs.length - 1) {
                inputs[idx + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && idx > 0) {
                inputs[idx - 1].focus();
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();

            const pasteData = e.clipboardData.getData('text').trim().replace(/\D/g, '');
            if (!pasteData) return;

            const chars = pasteData.slice(0, inputs.length).split('');
            inputs.forEach((otpInput, index) => {
                otpInput.value = chars[index] || '';
            });

            if (chars.length > 0) {
                inputs[Math.min(chars.length - 1, inputs.length - 1)].focus();
            }
        });
    });

    if (inputs.length > 0) inputs[0].focus();
}

// ------------------
// HOME
// ------------------
async function loadProducts() {
    const res = await ProductAPI.getMyProducts();
    AppState.products = normalizeProductsWithSizes(res.data || res.products || []);
}

async function renderHome() {
    document.getElementById('homeShopName').textContent = AppState.shopName;

    try {
        await loadProducts();
    } catch (err) {
        console.error('Failed to load products:', err);
    }

    renderProductFilters();
    renderProducts();

    // Load orders from API if not already loaded
    if (AppState.orders.length === 0) {
        try {
            const res = await OrderAPI.getMyOrders();
            AppState.orders = res.orders || [];
        } catch (err) {
            console.error('Failed to load orders:', err);
        }
    }

    // Today's summary
    const todayOrders = AppState.orders.filter(o => {
        const d = new Date(o.created_at);
        const today = new Date();
        return d.toDateString() === today.toDateString();
    });
    const todayEarnings = todayOrders
        .filter(o => o.status === 'delivered')
        .reduce((sum, o) => sum + Number(o.total_amount || 0), 0);

    document.getElementById('todayOrders').textContent = todayOrders.length;
    document.getElementById('todayEarnings').textContent = `₹${todayEarnings.toLocaleString('en-IN')}`;
    document.getElementById('nextPayout').textContent = 'Tomorrow';

    // Recent orders (last 3)
    const recentEl = document.getElementById('recentOrders');
    const emptyEl = document.getElementById('emptyRecentOrders');
    const recent = [...AppState.orders].slice(0, 3);

    if (!recent.length) {
        recentEl.innerHTML = '';
        if (emptyEl) emptyEl.classList.remove('hidden');
    } else {
        if (emptyEl) emptyEl.classList.add('hidden');
        recentEl.innerHTML = recent.map(o => `
            <div class="order-card" onclick="viewOrder('${o.id}')">
                <div class="order-card-row">
                    <span class="order-name">${o.buyer_name || 'Customer'}</span>
                    <span class="status-badge status-${o.status}">${o.status}</span>
                </div>
                <div class="order-card-row">
                <span class="order-meta">₹${Number(o.total_amount || 0).toLocaleString('en-IN')}</span>
                </div>
            </div>`).join('');
    }
}

// ------------------
// ORDERS
// ------------------
function orderCard(o, compact = false) {
    const sc = o.status.toLowerCase();
    const sl = o.status[0].toUpperCase() + o.status.slice(1);
    let act = '';
    if (!compact && o.status === 'new') {
        act = `<div class="order-card-actions"><button class="btn btn-success btn-sm" onclick="updateOrder('${o.id}','accepted');event.stopPropagation()"><span class="material-symbols-outlined" style="font-size:16px">check</span> Accept</button></div>`;
    }
    return `<div class="order-card" onclick="openOrderDetail('${o.id}')">
    <div class="order-card-header">
      <div class="order-thumb">${o.emoji}</div>
      <div class="order-info">
        <div class="order-product">${o.name}</div>
        <div class="order-meta">Qty: ${o.qty} - ${o.area}</div>
      </div>
    </div>
    <div class="order-footer">
                <span class="order-amount">₹${o.amount.toLocaleString('en-IN')}</span>
      <span class="status-badge ${sc}">${sl}</span>
    </div>${act}
  </div>`;
}

async function renderOrders() {
    const list = document.getElementById('orderList');
    const empty = document.getElementById('emptyOrders');

    if (list) list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-secondary)">Loading orders...</div>';

    try {
        const res = await OrderAPI.getMyOrders();
        AppState.orders = res.orders || [];
    } catch (err) {
        console.error('Failed to load orders:', err);
        if (list) list.innerHTML = '<div style="padding:20px;text-align:center;color:var(--error)">Failed to load orders</div>';
        return;
    }

    if (!AppState.orders.length) {
        if (list) list.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
        return;
    }

    if (empty) empty.classList.add('hidden');

    if (list) list.innerHTML = AppState.orders.map(o => `
        <div class="order-card" onclick="viewOrder('${o.id}')">
            <div class="order-card-top">
                <span class="order-id">#${o.order_number || o.id}</span>
                <span class="status-badge status-${o.status}">${o.status.replace('_', ' ')}</span>
            </div>
            <div class="order-card-row">
                <span class="order-name">${o.buyer_name || 'Customer'}</span>
                <span class="order-amount">₹${Number(o.total_amount || 0).toLocaleString('en-IN')}</span>
            </div>
            <div class="order-card-row">
                <span class="order-meta">${o.area || ''}</span>
            </div>
        </div>`).join('');
}

function filterOrders(filter, el) {
    document.querySelectorAll('#orderFilters .filter-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    renderOrders(filter);
}

function updateOrder(id, status) {
    const o = AppState.orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    toast(`Order ${id} - ${status[0].toUpperCase() + status.slice(1)}`);
    if (AppState.page === 'orders') renderOrders(document.querySelector('#orderFilters .filter-chip.active')?.dataset.filter || 'all');
    if (AppState.page === 'home') renderHome();
    if (AppState.page === 'order-detail') openOrderDetail(id);
}

function cancelOrder(id) {
    const o = AppState.orders.find(x => x.id === id);
    if (o) { o.status = 'cancelled'; toast(`Order ${id} cancelled`); goBack(); }
}

function viewOrder(id) {
    const o = AppState.orders.find(x => x.id === id);
    if (!o) return;

    document.getElementById('orderDetailTitle').textContent = `Order #${o.id}`;
    const st = document.getElementById('odStatus');
    st.textContent = o.status[0].toUpperCase() + o.status.slice(1);
    st.className = `status-badge ${o.status}`;

    document.getElementById('odProduct').textContent = o.name;
    document.getElementById('odQty').textContent = o.qty;
    document.getElementById('odBuyerArea').textContent = o.area;
    document.getElementById('odAddress').textContent = o.addr;
    document.getElementById('odAmount').textContent = `₹${o.amount.toLocaleString('en-IN')}`;

    const comm = Math.round(o.amount * 0.10);
    document.getElementById('odCommission').textContent = `-₹${comm}`;
    document.getElementById('odNet').textContent = `₹${o.amount - comm}`;
    document.getElementById('odPayout').textContent = 'Tomorrow (T+1)';

    const actions = document.getElementById('odActions');
    if (o.status === 'pending' || o.status === 'new') {
        actions.innerHTML = `
            <button class="btn btn-primary btn-full" onclick="acceptOrder('${o.id}')">
                <span class="material-symbols-outlined">check_circle</span> Accept Order
            </button>
            <button class="btn btn-danger btn-full" style="margin-top:8px" onclick="rejectOrder('${o.id}')">
                <span class="material-symbols-outlined">cancel</span> Reject Order
            </button>`;
    } else {
        actions.innerHTML = `<div class="status-info">Status: <strong>${(o.status || '').replace('_', ' ')}</strong></div>`;
    }

    navigateTo('order-detail');
}

// ------------------
// ADD PRODUCT
// ------------------
let _pid = 10;

const SUBCATEGORIES = {
    "Clothing": [
        "Kurti","Salwar Suit","Saree","Shirt","T-shirt","Pant","Others",
        "Jeans","Leggings","Blouse","Frock","Nightwear","Kids Wear",
        "Jacket / Hoodie","Sweater","Lehenga / Ethnic Wear","Innerwear",
        "Bag","Handloom","Men's Ethnic"
    ],
    "Footwear": [
        "Shoes","Sandals","Slippers","Sports Shoes","School Shoes","Formal Shoes","Others",
        "Heels","Flats","Boots","Baby Footwear",
        "Loafers","Sneakers","Kolhapuri","Safety Shoes",
        "Rain Footwear","Chappal"
    ],
    "Cosmetics": [
        "Lipstick","Kajal / Eyeliner","Foundation","Face Cream",
        "Face Wash","Shampoo","Others","Hair Oil","Perfume",
        "Compact Powder","Nail Polish","Body Lotion","Sunscreen",
        "Makeup Kit","Serum","Hair Color","Beard Care"
    ],
    "Grocery": [
        "Rice","Wheat / Atta","Dal","Oil","Sugar","Salt","Others","Milk",
        "Tea / Coffee","Biscuits","Snacks","Spices",
        "Noodles / Pasta","Cold Drinks","Dry Fruits",
        "Soap / Detergent","Pickle / Sauces"
    ],
    "Electronics": [
        "Mobile","Charger","Earphones","Power Bank","Smart Watch",
        "TV","Others","Speaker","Mixer / Grinder","Iron","Fan","Trimmer",
        "LED Lights","CCTV","Extension Board",
        "Laptop Accessories","Router"
    ],
    "Accessories": [
        "Watch","Sunglasses","Handbag","Wallet","Belt","Jewellery","Others",
        "Hair Accessories","Scarf","Cap","Backpack","Travel Bag",
        "Keychain","Purse","Socks","Tie","Brooch / Badge"
    ],
    "Furniture": [
        "Chair","Table","Bed","Sofa","Cupboard","Study Table","Others",
        "Dressing Table","Mattress","TV Unit","Shoe Rack",
        "Bookshelf","Plastic Furniture","Office Furniture",
        "Dining Table","Storage Cabinet","Garden Furniture"
    ]
};

function normalizeSizeList(sizes) {
    if (!sizes) return [];

    if (Array.isArray(sizes)) {
        return sizes.filter(Boolean);
    }

    if (typeof sizes === 'string') {
        const trimmed = sizes.trim();
        if (!trimmed) return [];

        try {
            const parsed = JSON.parse(trimmed);
            if (Array.isArray(parsed)) {
                return parsed.filter(Boolean);
            }
        } catch (error) {
            // Fallback to plain string size below.
        }

        return [trimmed];
    }

    return [];
}

function setSelectedSizes(nextSizes) {
    selectedSizes = normalizeSizeList(nextSizes);
    AppState.addSelectedSizes = [...selectedSizes];
}

function normalizeProductSizes(product) {
    if (!product) return product;

    return {
        ...product,
        sizes: normalizeSizeList(product.sizes)
    };
}

function normalizeProductsWithSizes(products) {
    return (products || []).map(normalizeProductSizes);
}

function getSizeToggleOptions(category, subcategory) {
    if (!category || !subcategory || subcategory === 'Others') {
        return [];
    }

    if (category === 'Clothing' && ['Shirt', 'T-shirt', 'Jacket / Hoodie', 'Sweater', 'Pant', 'Jeans'].includes(subcategory)) {
        return ['MEN', 'KIDS'];
    }

    if (category === 'Footwear') {
        return ['MEN/WOMEN', 'KIDS'];
    }

    return [];
}

function getDefaultSizeType(category, subcategory) {
    const toggleOptions = getSizeToggleOptions(category, subcategory);
    return toggleOptions[0] || '';
}

function getSizes(subcategory, sizeType = '') {
    if (!subcategory || subcategory === 'Others' || subcategory === 'Saree') {
        return [];
    }

    if (['Kurti', 'Salwar Suit', 'Leggings', 'Blouse', 'Nightwear'].includes(subcategory)) {
        return ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', 'FREE SIZE'];
    }

    if (['Shirt', 'T-shirt', 'Jacket / Hoodie', 'Sweater', 'Pant', 'Jeans'].includes(subcategory)) {
        if (sizeType === 'KIDS') {
            return ['20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'];
        }

        return ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', 'FREE SIZE'];
    }

    if (['Kids Wear', 'Frock'].includes(subcategory)) {
        return ['0', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'];
    }

    if (['Lehenga / Ethnic Wear', 'Lehenga / Ethnic Set'].includes(subcategory)) {
        return ['FREE SIZE'];
    }

    if (subcategory === 'Innerwear') {
        return ['0', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110', '115'];
    }

    if (subcategory === 'Bag') {
        return ['S', 'M', 'L', 'XL', 'FREE SIZE'];
    }

    if (subcategory === 'Handloom') {
        return ['4X4', '6X6', '8X6', 'KING SIZE', 'FREE SIZE'];
    }

    if (subcategory === "Men's Ethnic") {
        return ['34', '36', '38', '40', '42', '44', '46', '48'];
    }

    if ((SUBCATEGORIES.Footwear || []).includes(subcategory)) {
        if (sizeType === 'KIDS') {
            return ['0', '7', '8', '9', '10', '11', '12', '13', '1', '2', '3', '4', '5'];
        }

        return ['6', '7', '8', '9', '10', '11', '12'];
    }

    return [];
}

function getInitialSizeType(category, subcategory, selectedSizes) {
    const toggleOptions = getSizeToggleOptions(category, subcategory);
    if (!toggleOptions.length) {
        return '';
    }

    const sizes = normalizeSizeList(selectedSizes);
    if (!sizes.length) {
        return getDefaultSizeType(category, subcategory);
    }

    for (const mode of toggleOptions) {
        const options = getSizes(subcategory, mode);
        if (sizes.every(size => options.includes(size))) {
            return mode;
        }
    }

    return getDefaultSizeType(category, subcategory);
}

function renderAdd() {
    const shouldPrefill = editMode && editingProductId !== null && AppState.prefillProductForm;

    if (!shouldPrefill) {
        resetProductEditorState();
        (AppState.productImages || []).forEach(revokePreviewUrl);
        AppState.productImages = [];
        AppState.addCat = '';
        AppState.selectedSubcategory = '';
        setSelectedSizes([]);
        AppState.addSizeMode = '';
        document.getElementById('addName').value = '';
        document.getElementById('addPrice').value = '';
        document.getElementById('addQty').value = '10';
        document.getElementById('addDesc').value = '';
        document.getElementById('colorInput').value = '';
    }

    AppState.prefillProductForm = false;
    document.getElementById('addError').classList.remove('show');
    renderAddCategoryChips();
    document.getElementById('sizeSection').style.display = 'none';
    document.getElementById('sizeSection').innerHTML = '';
    AppState.showAllSubcategories = false;
    document.getElementById('generalQtyWrap').style.display = '';
    document.getElementById('detailsStepNum').textContent = '3';
    renderImageGrid();
    updatePreview();
    syncProductSubmitButton();
}

// -- Product Image Picker --
function ensureProductImageInput() {
    let input = document.getElementById('productImageInput');
    if (!input) {
        input = document.createElement('input');
        input.type = 'file';
        input.id = 'productImageInput';
        input.accept = 'image/*';
        input.multiple = true;
        input.style.display = 'none';
        input.addEventListener('change', handleProductImageSelection);
        document.body.appendChild(input);
    }
    return input;
}

async function handleProductImageSelection(e) {
    const files = Array.from(e.target.files);
    if (!files.length) {
        e.target.value = '';
        return;
    }

    const currentImages = getDraftProductImages();
    const totalImageCount = getRetainedProductImages().length + currentImages.length + files.length;
    if (totalImageCount > 5) {
        alert('Maximum 5 images allowed');
        e.target.value = '';
        return;
    }

    const processedImages = [];

    try {
        for (const file of files) {
            const processedFile = await compressImage(file);
            processedImages.push({
                file: processedFile,
                preview: URL.createObjectURL(processedFile),
                color: ''
            });
        }

        AppState.productImages = [
            ...currentImages,
            ...processedImages
        ];
        renderImageGrid();
        updatePreview();
    } catch (error) {
        processedImages?.forEach(revokePreviewUrl);
        toast(error.message || 'Failed to process image');
    } finally {
        e.target.value = '';
    }
}

function triggerImageUpload() {
    const input = ensureProductImageInput();
    input.value = '';
    input.click();
}

function addProductImage() {
    triggerImageUpload();
}

function removeImage(index, source = 'new') {
    if (source === 'existing') {
        existingImages = getRetainedProductImages();
        existingImages.splice(index, 1);
    } else {
        const draftImages = getDraftProductImages();
        const removedImage = draftImages[index];
        revokePreviewUrl(removedImage);
        draftImages.splice(index, 1);
        AppState.productImages = draftImages;
    }

    renderImageGrid();
    updatePreview();
}

function resolveProductImageUrl(image) {
    if (!image) return `${API_BASE_URL}/placeholder.png`;

    if (typeof image === 'string') {
        return `${API_BASE_URL}${image}`;
    }

    if (typeof image === 'object' && image.url) {
        return `${API_BASE_URL}${image.url}`;
    }

    return `${API_BASE_URL}/placeholder.png`;
}

function renderImageGrid() {
    const container = document.getElementById('imageGrid');
    const newImages = getDraftProductImages();
    const retainedImages = getRetainedProductImages();

    if (!container) return;

    container.innerHTML = '';

    retainedImages.forEach((image, index) => {
        const url = resolveProductImageUrl(image);
        if (!url) return;

        const item = document.createElement('div');
        item.className = 'image-item';

        const img = document.createElement('img');
        img.src = url;
        img.alt = `Existing product photo ${index + 1}`;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-image-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => removeImage(index, 'existing');

        item.appendChild(img);
        item.appendChild(removeBtn);
        container.appendChild(item);
    });

    newImages.forEach((item, index) => {
        if (!item?.preview) return;

        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const img = document.createElement('img');
        img.src = item.preview;
        img.alt = `New product photo ${index + 1}`;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-image-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => removeImage(index, 'new');

        imageItem.appendChild(img);
        imageItem.appendChild(removeBtn);
        container.appendChild(imageItem);
    });

    if (retainedImages.length + newImages.length < 5) {
        const addBox = document.createElement('div');
        addBox.className = 'image-add-box';
        addBox.onclick = triggerImageUpload;
        addBox.innerHTML = '<span>+</span><p>Add</p>';
        container.appendChild(addBox);
    }
}

function selectAddCategory(el) {
    document.querySelectorAll('#addCategoryChips .cat-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    AppState.addCat = el.dataset.cat;
    AppState.selectedSubcategory = '';
    AppState.showAllSubcategories = false;
    setSelectedSizes([]);
    AppState.addSizeMode = '';

    // Open bottom sheet immediately
    const subs = SUBCATEGORIES[AppState.addCat];
    if (subs && subs.length) {
        openSubcategoryModal();
    }

    renderSizeSection();
    autoName();
    updatePreview();
}

// -- Subcategory Bottom Sheet --
function openSubcategoryModal() {
    const subs = SUBCATEGORIES[AppState.addCat];
    if (!subs || !subs.length) return;
    AppState.showAllSubcategories = false;
    document.getElementById('subcategorySearchInput').value = '';
    renderSubcategoryList();
    document.getElementById('subcategoryModal').classList.add('show');
}

function closeSubcategoryModal() {
    document.getElementById('subcategoryModal').classList.remove('show');
}

function renderSubcategoryList() {
    const subs = SUBCATEGORIES[AppState.addCat] || [];
    const query = (document.getElementById('subcategorySearchInput').value || '').toLowerCase().trim();
    const list = document.getElementById('subcategoryModalList');
    const seeAllBtn = document.getElementById('seeAllSubcategoriesBtn');

    let filtered = subs;
    if (query) {
        filtered = subs.filter(s => s.toLowerCase().includes(query));
    }

    const showAll = AppState.showAllSubcategories || query.length > 0;
    const visible = showAll ? filtered : filtered.slice(0, 7);

    // Show/hide See All button
    if (!query && filtered.length > 7 && !AppState.showAllSubcategories) {
        seeAllBtn.style.display = '';
        seeAllBtn.textContent = 'See All';
    } else {
        seeAllBtn.style.display = 'none';
    }

    list.innerHTML = visible.map(item => {
        const isActive = AppState.selectedSubcategory === item;
        const escaped = item.replace(/'/g, "\\'");
        return `<button class="${isActive ? 'cat-chip active' : 'cat-chip'}" style="margin:4px;" onclick="selectSubcategory('${escaped}')">${item}</button>`;
    }).join('');
}

function toggleSeeAllSubcategories() {
    AppState.showAllSubcategories = true;
    renderSubcategoryList();
}

function selectSubcategory(subcategory) {
    console.log('SELECTED SUBCATEGORY:', subcategory);
    AppState.selectedSubcategory = subcategory;
    setSelectedSizes([]);
    AppState.addSizeMode = '';
    renderSubcategoryList();
    closeSubcategoryModal();
    renderSizeSection();
    updatePreview();
}

function renderSizeSection() {
    const sec = document.getElementById('sizeSection');
    const toggleOptions = getSizeToggleOptions(AppState.addCat, AppState.selectedSubcategory);
    const hasSizeOptions = getSizes(
        AppState.selectedSubcategory,
        AppState.addSizeMode || getDefaultSizeType(AppState.addCat, AppState.selectedSubcategory)
    ).length > 0;

    if (!hasSizeOptions) {
        sec.style.display = 'none';
        sec.innerHTML = '';
        document.getElementById('detailsStepNum').textContent = '3';
        updateQuantityVisibility();
        return;
    }

    const activeSizes = normalizeSizeList(selectedSizes);
    let toggleBlock = '';
    let sizeOptions = [];

    if (toggleOptions.length) {
        if (!toggleOptions.includes(AppState.addSizeMode)) {
            AppState.addSizeMode = getDefaultSizeType(AppState.addCat, AppState.selectedSubcategory);
        }

        sizeOptions = getSizes(AppState.selectedSubcategory, AppState.addSizeMode);
        setSelectedSizes(activeSizes.filter(size => sizeOptions.includes(size)));

        const toggleButtons = toggleOptions.map(mode => {
            const active = AppState.addSizeMode === mode ? ' active' : '';
            return `<button class="size-chip${active}" onclick="setSizeMode('${mode}')">${mode}</button>`;
        }).join('');

        toggleBlock = `
        <div class="variant-hint">Choose type</div>
        <div class="size-chips">${toggleButtons}</div>`;
    } else {
        AppState.addSizeMode = '';
        sizeOptions = getSizes(AppState.selectedSubcategory, '');
        setSelectedSizes(activeSizes.filter(size => sizeOptions.includes(size)));
    }

    document.getElementById('detailsStepNum').textContent = '4';
    const chips = sizeOptions.map(s => {
        const active = selectedSizes.includes(s) ? ' active' : '';
        return `<button class="size-chip${active}" onclick="toggleSize('${s}')">${s}</button>`;
    }).join('');

    sec.style.display = '';
    sec.innerHTML = `<div class="size-section">
        <div class="form-section-title"><span class="step-num">3</span> Sizes</div>
        ${toggleBlock}
        <div class="size-chips">${chips}</div>
        <div class="variant-hint">Select sizes if applicable.</div>
    </div>`;

    updateQuantityVisibility();
}

function setSizeMode(mode) {
    const toggleOptions = getSizeToggleOptions(AppState.addCat, AppState.selectedSubcategory);
    if (!toggleOptions.includes(mode)) return;

    AppState.addSizeMode = mode;
    const validSizes = getSizes(AppState.selectedSubcategory, mode);
    setSelectedSizes(selectedSizes.filter(size => validSizes.includes(size)));
    renderSizeSection();
}

function toggleSize(size) {
    if (selectedSizes.includes(size)) {
        setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
        setSelectedSizes([...selectedSizes, size]);
    }

    console.log('SELECTED SIZES:', selectedSizes);
    renderSizeSection();
}

function updateQuantityVisibility() {
    const wrap = document.getElementById('generalQtyWrap');
    if (wrap) wrap.style.display = '';
}

function autoName() {
    // Product name NOT auto-filled
    const n = document.getElementById('addName');
    if (n.dataset.auto === 'true') {
        n.dataset.auto = 'false';
    }
}

function updatePreview() {
    const name = document.getElementById('addName').value || AppState.addCat || 'Product Name';
    const price = document.getElementById('addPrice').value || '0';
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewPrice').textContent = `₹${parseInt(price || 0).toLocaleString('en-IN')}`;
    document.getElementById('previewShop').textContent = AppState.shopName;
    const pi = document.getElementById('previewImage');
    
    const images = getDraftProductImages();
    const newImageUrl = images.find(item => item && item.preview)?.preview || '';
    const existingImageUrl = getRetainedProductImages().map(resolveProductImageUrl).find(Boolean) || '';
    const url = newImageUrl || existingImageUrl;

    if (url) {
        pi.innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />`;
    } else {
        pi.innerHTML = '<div class="ph-img">📦</div>';
    }
    
    autoName();
}

function resetProductEditorState() {
    editMode = false;
    editingProductId = null;
    existingImages = [];
    AppState.editMode = false;
    AppState.editingProductId = null;
    AppState.prefillProductForm = false;
}

function syncProductSubmitButton() {
    const btn = document.getElementById('postProductBtn');
    if (!btn) return;

    const label = editMode
        ? `<span>${t('update_product')}</span>`
        : `<span data-key="post_product">${t('post_product')}</span>`;

    btn.innerHTML = `<span class="material-symbols-outlined">publish</span> ${label}`;
}

async function postProduct() {
    const isEditing = editMode && editingProductId !== null;
    const p = document.getElementById('addPrice').value;
    const q = document.getElementById('addQty').value;
    const color = document.getElementById('colorInput').value.trim();
    const sizes = [...selectedSizes];
    const retainedImages = getRetainedProductImages();
    const newImages = getDraftProductImages();
    const images = [
        ...retainedImages,
        ...newImages
    ];
    console.log("RAW sizes:", selectedSizes);
    console.log("FINAL sizes:", sizes);
    console.log("IS ARRAY:", Array.isArray(sizes));

    if (!images || images.length === 0) {
        alert('At least one image required');
        return;
    }

    if (images.length > 5) {
        alert('Maximum 5 images allowed');
        return;
    }

    if (!AppState.addCat || !p || !q || !AppState.selectedSubcategory) {
        document.getElementById('addError').classList.add('show');
        if (!AppState.selectedSubcategory) {
            alert('Please select subcategory');
        }
        return;
    }
    document.getElementById('addError').classList.remove('show');

    const name = document.getElementById('addName').value.trim();
    const description = document.getElementById('addDesc') ? document.getElementById('addDesc').value.trim() : '';

    setLoading('postProductBtn', true);
    try {
        const uploadPayload = {
            productId: editingProductId,
            title: name,
            category: AppState.addCat,
            price: p,
            stock: q,
            subcategory: AppState.selectedSubcategory,
            description,
            color,
            sizes,
            existingImages: retainedImages,
            newImages
        };

        await uploadProductImages(uploadPayload);
        resetProductEditorState();
        (AppState.productImages || []).forEach(revokePreviewUrl);
        AppState.productImages = [];
        AppState.addCat = '';
        AppState.selectedSubcategory = '';
        setSelectedSizes([]);
        AppState.addSizeMode = '';
        syncProductSubmitButton();

        await loadProducts();
        renderProducts();
        navigateTo('home');
        toast(isEditing ? 'Product updated! ✅' : 'Product posted! 🎉');
    } catch (err) {
        toast(err.message || (isEditing ? 'Failed to update product' : 'Failed to post product'));
    } finally {
        setLoading('postProductBtn', false);
        syncProductSubmitButton();
    }
}

// ------------------
// PROFILE
// ------------------
function getSubcategoryFilters() {
    const products = AppState.products || [];

    const set = new Set();

    products.forEach(p => {
        if (!p || typeof p !== 'object') return;

        if (p.subcategory) {
            set.add(p.subcategory);
        }
    });

    return ['all', ...Array.from(set)];
}

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function ensureSelectedProductFilter() {
    const filters = getSubcategoryFilters(AppState.products);
    const normalizedFilter = String(AppState.selectedFilter || 'all').trim().toLowerCase();
    const normalizedFilters = filters.map(filter => String(filter || '').trim().toLowerCase());

    if (!normalizedFilters.includes(normalizedFilter)) {
        AppState.selectedFilter = 'all';
    }

    return filters;
}

function getFilteredProducts() {
    const selected = (AppState.selectedFilter || 'all').toLowerCase();

    if (selected === 'all') return AppState.products || [];

    return (AppState.products || []).filter(p => {
        if (!p || typeof p !== 'object') return false;

        const sub = (p?.subcategory || '').toLowerCase();
        return sub === selected;
    });
}

function setProductEmptyState(hasAnyProducts, isFilteredEmpty) {
    const emptyState = document.getElementById('emptyProducts');
    if (!emptyState) return;

    const title = emptyState.querySelector('h3');
    const message = emptyState.querySelector('p');
    const action = emptyState.querySelector('button');

    if (!hasAnyProducts) {
        if (title) title.textContent = t('no_products');
        if (message) message.textContent = t('no_products_hint');
        if (action) action.textContent = t('add_product');
        if (action) action.classList.remove('hidden');
        return;
    }

    if (isFilteredEmpty) {
        if (title) title.textContent = t('no_products_in_category');
        if (message) message.textContent = t('no_products_filter_hint');
        if (action) action.textContent = `+ ${t('add_product')}`;
        if (action) action.classList.remove('hidden');
        return;
    }

    if (action) action.textContent = t('add_product');
    if (action) action.classList.remove('hidden');
}

function renderProductFilters() {
    const container = document.getElementById('productFilters');
    if (!container) return;

    const filters = ensureSelectedProductFilter();

    container.innerHTML = filters.map(filter => {
        const safeFilter = escapeHtml(filter);
        const normalizedFilter = String(filter || 'all').trim().toLowerCase();
        return `
            <button
              class="filter-chip ${AppState.selectedFilter === normalizedFilter ? 'active' : ''}"
              data-filter="${escapeHtml(normalizedFilter)}"
              onclick="selectFilter(this.dataset.filter)"
            >
              ${safeFilter}
            </button>
        `;
    }).join('');

    container.querySelector('.filter-chip.active')?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
    });
}

function selectFilter(filter) {
    AppState.selectedFilter = (filter || 'all').toLowerCase();
    ensureSelectedProductFilter();
    renderProducts();
    renderProductFilters();
}

function selectProductFilter(filter) {
    selectFilter(filter);
}

async function renderProfile() {
    document.getElementById('profileShopName').textContent = AppState.shopName;
    document.getElementById('profileAvatar').textContent = AppState.shopName[0].toUpperCase();
    document.getElementById('profileMeta').textContent = `Active since Feb 2026 - ${AppState.shopArea}`;
    document.getElementById('profileOrders').textContent = `${AppState.orders.filter(o => o.status === 'delivered').length} completed orders`;
    document.getElementById('profileVerified').classList.toggle('hidden', !AppState.verified);
    document.getElementById('verificationBanner').classList.toggle('hidden', !(AppState.verifyPending && !AppState.verified));
    document.getElementById('shopTimings').textContent = AppState.shopTimings;
    document.getElementById('shopContact').textContent = AppState.shopPhone ? `+91 ${AppState.shopPhone}` : '+91 -';
    document.getElementById('shopBank').textContent = AppState.shopBank;
    try {
        await loadProducts();
    } catch (err) {
        console.error('Failed to load products:', err);
    }
    renderProductFilters();
    renderProducts();
}

function renderProducts() {
    const g = document.getElementById('productList');
    const e = document.getElementById('emptyProducts');

    if (!g || !e) return;

    ensureSelectedProductFilter();
    const products = getFilteredProducts();
    console.log("PRODUCTS:", products);

    if (!Array.isArray(products)) {
        console.error("Invalid products:", products);
        return;
    }

    if (!AppState.products.length) {
        g.innerHTML = '';
        setProductEmptyState(false, false);
        e.classList.remove('hidden');
        return;
    }

    if (!products.length) {
        g.innerHTML = '';
        setProductEmptyState(true, true);
        e.classList.remove('hidden');
        return;
    }

    setProductEmptyState(true, false);
    e.classList.add('hidden');
    g.innerHTML = products.map(p => {
        try {
            return renderProductCard(p);
        } catch (err) {
            console.error("Render error:", err, p);
            return '';
        }
    }).join('');
}

function renderProductCard(product) {
    console.log("RENDERING:", product);

    const image = Array.isArray(product.images) && product.images.length > 0
        ? resolveProductImageUrl(product.images[0])
        : `${API_BASE_URL}/placeholder.png`;
    const productSizes = normalizeSizeList(product?.sizes);
    const sizeSummary = productSizes.length > 0 ? escapeHtml(productSizes.join(', ')) : '';

    console.log("IMAGE URL:", image);

    const id = escapeHtml(product?.id || '');
    const name = escapeHtml(product?.title || product?.name || 'Product');
    const price = Number(product?.price || 0);
    const stockCount = Number(product?.stock || product?.quantity || 0);
    const isOutOfStock = stockCount <= 0;

    return `
        <div class="product-tile product-card">
          ${isOutOfStock ? '<div class="oos-badge">Out of Stock</div>' : ''}
          <div class="product-tile-img">
            <img
              src="${image}"
              alt="${name}"
              style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"
              onerror="this.onerror=null;this.src='${API_BASE_URL}/placeholder.png';"
            />
          </div>
          <div class="product-tile-body">
            <div class="product-tile-name">${name}</div>
            <div class="product-tile-price">₹${price.toLocaleString('en-IN')}</div>
            ${sizeSummary ? `<div class="product-tile-stock">${sizeSummary}</div>` : ''}
            <div class="product-tile-stock">${!isOutOfStock ? `In stock (${stockCount})` : 'Out of stock'}</div>
          </div>
          <div class="product-tile-actions">
            <button onclick="onEditProduct('${id}')"><span class="material-symbols-outlined">edit</span> Edit</button>
            <button onclick="deleteProduct('${id}')"><span class="material-symbols-outlined">delete</span> Delete</button>
          </div>
        </div>`;
}

function renderProductGrid() {
    renderProducts();
}

function onEditProduct(productOrId) {
    const product = typeof productOrId === 'object' && productOrId !== null
        ? productOrId
        : (AppState.products || []).find(item => String(item.id) === String(productOrId));
    if (!product) return;

    const numericId = Number(product.id);
    editMode = true;
    editingProductId = Number.isNaN(numericId) ? product.id : numericId;
    AppState.editMode = editMode;
    AppState.editingProductId = editingProductId;
    AppState.prefillProductForm = true;

    navigateTo('add');

    AppState.addCat = normalizeShopCategoryName(product.category);
    AppState.selectedSubcategory = product.subcategory || '';
    setSelectedSizes(product.sizes);
    AppState.addSizeMode = getInitialSizeType(
        AppState.addCat,
        AppState.selectedSubcategory,
        selectedSizes
    );

    document.getElementById('addName').value = product.title || product.name || '';
    document.getElementById('addPrice').value = product.price ?? '';
    document.getElementById('addQty').value = product.stock ?? product.quantity ?? product.qty ?? '';
    document.getElementById('addDesc').value = product.description || '';

    renderAddCategoryChips();

    let images = [];

    if (typeof product.images === 'string') {
        try {
            images = JSON.parse(product.images);
        } catch {
            images = [];
        }
    } else if (Array.isArray(product.images)) {
        images = product.images;
    }

    const existingColor = product.color || images.find(img => img && img.color)?.color || '';
    document.getElementById('colorInput').value = existingColor;

    existingImages = images.filter(Boolean);
    AppState.productImages = [];

    syncProductSubmitButton();
    renderSizeSection();
    renderImageGrid();
    updatePreview();
}

async function acceptOrder(orderId) {
    try {
        await OrderAPI.acceptOrder(orderId);
        toast('Order accepted');
        AppState.orders = [];
        goBack();
    } catch (err) {
        toast(err.message || 'Failed to accept order');
    }
}

async function rejectOrder(orderId) {
    if (!confirm('Are you sure you want to reject this order?')) return;
    try {
        await OrderAPI.rejectOrder(orderId);
        toast('Order rejected');
        AppState.orders = [];
        goBack();
    } catch (err) {
        toast(err.message || 'Failed to reject order');
    }
}
async function deleteProduct(id) {
  try {
    await ProductAPI.deleteProduct(id);

    AppState.products = AppState.products.filter(p => p.id !== id);

    await loadProducts();
    renderProducts();

    toast('Product deleted');

  } catch (err) {
    console.error(err);
    toast('Delete failed');
  }
}

// -- Edit Field Modal --
function editField(field) {
    AppState.editField = field;
    document.getElementById('editModalTitle').textContent = `Edit ${field}`;
    const inp = document.getElementById('editModalInput');
    inp.type = 'text';
    if (field === 'Shop Timings') { inp.value = AppState.shopTimings; inp.placeholder = '9 AM - 9 PM'; }
    else if (field === 'Contact Number') { inp.value = AppState.shopContact || AppState.shopPhone; inp.placeholder = '10-digit number'; inp.type = 'tel'; }
    else if (field === 'Bank Details') { inp.value = AppState.shopBank === 'Not set' ? '' : AppState.shopBank; inp.placeholder = 'UPI ID / Account'; }
    document.getElementById('editModal').classList.add('show');
    inp.focus();
}

function saveEditField() {
    const v = document.getElementById('editModalInput').value.trim();
    if (!v) { toast('Please enter a value'); return; }
    if (AppState.editField === 'Shop Timings') AppState.shopTimings = v;
    else if (AppState.editField === 'Contact Number') AppState.shopContact = v;
    else if (AppState.editField === 'Bank Details') AppState.shopBank = v;
    document.getElementById('editModal').classList.remove('show');
    toast(`${AppState.editField} updated`);
    renderProfile();
}

document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-bg')) e.target.classList.remove('show');
});

// ------------------
// SETTINGS
// ------------------
function toggleDarkMode() {
    AppState.darkMode = !AppState.darkMode;
    document.documentElement.setAttribute('data-theme', AppState.darkMode ? 'dark' : 'light');
    document.getElementById('darkModeToggle').classList.toggle('active', AppState.darkMode);
    document.querySelector('meta[name="theme-color"]').content = AppState.darkMode ? '#0F0F1A' : '#4F46E5';
}

function toggleLanguage() {
    setLanguage(currentLanguage === 'en' ? 'hi' : 'en');
    toast(currentLanguage === 'en' ? t('switched_english') : t('switched_hindi'));
}

function logout() {
    if (!confirm('Are you sure you want to logout?')) return;
    stopResendTimer();
    Auth.removeToken();
    AppState.loggedIn = false;
    AppState.profileComplete = false;
    AppState.verificationStatus = '';
    AppState.verified = false;
    AppState.verifyPending = false;
    AppState.verificationFile = null;
    AppState.verifyDoc = null;
    AppState.products = [];
    AppState.orders = [];
    AppState.shopName = '';
    AppState.categories = [];
    AppState.shopArea = '';
    AppState.shopCity = '';
    AppState.shopPhone = '';
    AppState.shopLat = null;
    AppState.shopLng = null;
    document.getElementById('bottomNav').classList.add('hidden');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('onboardingOtp').classList.remove('hidden');
    document.getElementById('otpPhoneStep').classList.remove('hidden');
    document.getElementById('otpVerifyStep').classList.add('hidden');
    document.getElementById('otpPhone').value = '';
    document.querySelectorAll('.otp-input').forEach(input => { input.value = ''; });
    renderSetupCategoryChips();
    toast('Logged out');
}

// ------------------
// OFFLINE / INIT
// ------------------
window.addEventListener('online', () => { document.getElementById('offlineOverlay').classList.remove('show'); toast('Back online!'); });
window.addEventListener('offline', () => { document.getElementById('offlineOverlay').classList.add('show'); });

document.addEventListener('DOMContentLoaded', async () => {
    renderSetupCategoryChips();
    renderAddCategoryChips();
    renderApp();

    // Check for existing token - auto-login returning sellers
    if (Auth.isLoggedIn()) {
        try {
            const res = await SellerAPI.getMe();
            hydrateSellerState(
                res.seller,
                res.isProfileComplete ?? res.is_profile_complete ?? res.seller?.isProfileComplete ?? res.seller?.is_profile_complete
            );
            routeAuthenticatedSeller('home');
        } catch (err) {
            // Token expired or invalid - clear and show login
            Auth.removeToken();
            showOtpOnboarding();
        }
    } else {
        showOtpOnboarding();
    }

    window.addEventListener('popstate', () => {
        navigateTo(AppState.history.length ? AppState.history.pop() : 'home', false);
    });

    // Auto-clear manual flag on name focus
    const nf = document.getElementById('addName');
    if (nf) nf.addEventListener('focus', () => { nf.dataset.auto = 'false'; });

    const areaInput = document.getElementById('setupArea');
    if (areaInput) {
        areaInput.addEventListener('input', () => {
            areaInput.dataset.auto = 'false';
            AppState.shopArea = areaInput.value.trim();
        });
    }
});

