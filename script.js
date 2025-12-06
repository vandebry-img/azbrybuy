// ===== KONFIGURASI =====
const ADMIN_PHONE = "6285189988271"; // Nomor sudah diganti
const ADMIN_NAME = "Admin FebryWesker";

// ===== VARIABEL =====
let currentProduct = null;

// ===== ELEMEN DOM =====
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const loading = document.getElementById('loading');
const productListsContainer = document.getElementById('product-lists');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// ===== DATA PRODUK =====
const products = {
    script: {
        title: "🚀 PAKET SCRIPT AZBRY-MD (Harga langsung chat admin saja)",
        items: [
            {
                title: "📦 BASIC - xxK",
                price: "Rp xx.000",
                period: "",
                features: [
                    "Script terbaru",
                    "Update berkala",
                    "Support terbatas",
                    "Tanpa bimbingan"
                ],
                note: "Untuk yang sudah berpengalaman",
                popular: false
            },
            {
                title: "📦 PREMIUM - xxK",
                price: "Rp xx.000",
                period: "",
                features: [
                    "Script original",
                    "Tutorial lengkap",
                    "Bimbingan sampai jadi",
                    "No enc 100%",
                    "Support 24 jam",
                    "Priority response"
                ],
                note: "Rekomendasi untuk pemula!",
                popular: true
            }
        ],
        terms: [
            "➤ WAJIB punya panel sendiri",
            "➤ TIDAK menyediakan panel gratis",
            "➤ Beli = Paham konsekuensi",
            "➤ Bot resiko banned? ITU NORMAL!",
            "➤ No refund garansi jiwa"
        ]
    },
    rental: {
        title: "💰 PAKET SEWA BOT",
        subtitle: "NOTE : 1 TRANSAKSI UNTUK 1 GRUP",
        items: [
            {
                title: "📅 3 HARI",
                price: "Rp 10.000",
                period: "3 Hari",
                features: [
                    "Fitur utama lengkap",
                    "Bot masuk ke grup",
                    "Nomor Anda aman",
                    "Support 24/7"
                ],
                note: "Cocok untuk testing",
                popular: false
            },
            {
                title: "📅 1 MINGGU",
                price: "Rp 15.000",
                period: "7 Hari",
                features: [
                    "Semua fitur 3 hari",
                    "Update rutin",
                    "Priority queue"
                ],
                note: "Untuk kebutuhan mingguan",
                popular: false
            },
            {
                title: "📅 2 MINGGU",
                price: "Rp 25.000",
                period: "14 Hari",
                features: [
                    "Semua fitur 1 minggu",
                    "Double priority",
                    "Custom command",
                    "Advanced anti-spam"
                ],
                note: "Hemat 30% dari perminggu!",
                popular: true
            },
            {
                title: "📅 1 BULAN",
                price: "Rp 45.000",
                period: "30 Hari",
                features: [
                    "Semua fitur 2 minggu",
                    "Max priority support",
                    "Unlimited custom command",
                    "Full maintenance",
                    "VIP customer status"
                ],
                note: "Paling hemat! Hanya 1.5K/hari",
                popular: false
            }
        ],
        features: [
            "✅ Downloader ALL SOSMED",
            "✅ Antilink & Antitag",
            "✅ Auto Welcome/Goodbye",
            "✅ Tools Admin Lengkap",
            "✅ Auto Responder AI",
            "✅ Support 24/7 Active"
        ],
        security: [
            "🛡️ NOMOR BOT KAMI MASUK KE GRUP",
            "🛡️ TIDAK PAKAI NOMOR ANDA",
            "🛡️ NO RISIKO BANNED NOMOR ANDA",
            "🛡️ BOT KAMI YANG TANGGUNG RISIKO",
            "🛡️ 100% AMAN UNTUK NOMOR UTAMA"
        ]
    },
    role: {
        title: "💎 ROLE PREMIUM",
        items: [
            {
                title: "📅 1 MINGGU",
                price: "Rp 7.000",
                period: "7 Hari",
                features: [
                    "Unlimited Limit",
                    "Akses fitur AI",
                    "Auto naik role",
                    "Auto Responder AI"
                ],
                note: "Untuk user yang sudah punya bot",
                popular: false
            },
            {
                title: "📅 2 MINGGU",
                price: "Rp 10.000",
                period: "14 Hari",
                features: [
                    "Semua fitur 1 minggu",
                    "Double priority",
                    "Early access fitur baru",
                    "Custom AI personality"
                ],
                note: "Hemat 30% dari perminggu!",
                popular: true
            },
            {
                title: "📅 1 BULAN",
                price: "Rp 15.000",
                period: "30 Hari",
                features: [
                    "Semua fitur 2 minggu",
                    "Max priority support",
                    "Auto naik role Final boss",
                    "Unlimited AI requests",
                    "VIP badge in bot"
                ],
                note: "Paling hemat! Hanya 500/hari",
                popular: false
            }
        ],
        benefits: [
            "✅ Unlimited Limit semua command",
            "✅ Akses fitur AI premium",
            "✅ Auto naik role Final boss",
            "✅ Auto Responder AI",
            "✅ Priority queue",
            "✅ VIP badge & status"
        ]
    },
    nokos: {
        title: "🔐 NOKOS INDO FRESH",
        items: [
            {
                title: "📱 NOKOS INDO FRESH",
                price: "Rp 7.000",
                period: "per Nomor",
                features: [
                    "Nomor Indonesia fresh",
                    "Siap pakai untuk bot",
                    "Aman dari banned utama",
                    "Instant delivery"
                ],
                note: "Stok selalu tersedia!",
                popular: true
            }
        ],
        info: [
            "🔐 UNTUK KEAMANAN, PAKAI NOKOS!",
            "🔐 Jangan pakai nomor utama",
            "🔐 Bot bisa kena banned anytime",
            "🔐 Nomor tumbal = aman nomor utama",
            "🔐 No ribet, no takut banned"
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Azbry-MD Website Loaded');
    
    // 1. Setup real-time clock
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 2. Setup theme
    initTheme();
    
    // 3. Setup event listeners
    setupEventListeners();
    
    // 4. Setup product selector
    setupProductSelector();
    
    // 5. Update WhatsApp link
    updateWhatsAppLink();
});

// ===== FUNGSI JAM =====
function updateDateTime() {
    const now = new Date();
    
    // Format waktu: HH:MM
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const timeElement = document.getElementById('clock');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// ===== FUNGSI TEMA =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    if (currentTheme === 'dark') {
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'rotate(90deg)';
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'rotate(0)';
    } else {
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'rotate(0)';
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'rotate(90deg)';
    }
}

// ===== FUNGSI PRODUK SELECTOR =====
function setupProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    console.log(`Found ${selectorButtons.length} selector buttons`);
    
    selectorButtons.forEach(button => {
        // Clone button untuk reset event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });
    
    // Re-select after clone
    document.querySelectorAll('.selector-btn').forEach(button => {
        button.addEventListener('click', handleProductSelect, { 
            passive: false,
            capture: true 
        });
        
        // Style untuk memastikan bisa diklik
        button.style.cursor = 'pointer';
        button.style.pointerEvents = 'auto';
        button.style.userSelect = 'none';
        button.style.webkitUserSelect = 'none';
        button.style.touchAction = 'manipulation';
    });
}

function handleProductSelect(event) {
    console.log('=== PRODUCT BUTTON CLICKED ===');
    console.log('Product:', this.dataset.product);
    
    event.preventDefault();
    event.stopPropagation();
    
    const product = this.dataset.product;
    
    // 1. Update button state
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = 'scale(1)';
    });
    
    this.classList.add('active');
    this.style.transform = 'scale(0.98)';
    
    // 2. Tampilkan product container
    const productContainer = document.getElementById('product-lists');
    productContainer.style.display = 'block';
    productContainer.classList.add('active');
    productContainer.style.visibility = 'visible';
    productContainer.style.opacity = '1';
    
    // 3. Load product content
    loadProduct(product);
    
    // 4. Scroll ke posisi yang TEPAT
    setTimeout(() => {
        scrollToProductContainer();
    }, 50);
}

function scrollToProductContainer() {
    const productContainer = document.getElementById('product-lists');
    const header = document.querySelector('header');
    
    if (!productContainer || !header) return;
    
    // Hitung posisi dengan benar
    const headerHeight = header.offsetHeight;
    const containerTop = productContainer.offsetTop;
    
    // Scroll ke posisi container minus header height
    const targetScroll = containerTop - headerHeight;
    
    console.log(`Scrolling to: ${targetScroll}px`);
    console.log(`Container top: ${containerTop}px`);
    console.log(`Header height: ${headerHeight}px`);
    
    window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
    });
}

function loadProduct(product) {
    console.time('Load Product');
    
    currentProduct = product;
    const productData = products[product];
    const productContainer = document.getElementById('product-lists');
    
    // Generate HTML
    let html = `
        <div class="container">
            <div class="product-list active">
                <h2 class="section-title">${productData.title}</h2>
    `;
    
    if (productData.subtitle) {
        html += `<p class="section-subtitle">${productData.subtitle}</p>`;
    }
    
    html += `<div class="product-grid">`;
    
    // Product cards
    productData.items.forEach((item, index) => {
        const popularClass = item.popular ? 'popular' : '';
        
        html += `
            <div class="product-card ${popularClass}">
                <div class="product-header">
                    <h3>${item.title}</h3>
                    <div class="price">
                        ${item.price}
                        ${item.period ? `<span class="price-period">/${item.period}</span>` : ''}
                    </div>
                </div>
                
                <div class="product-features">
                    <h4><i class="fas fa-check"></i> Fitur:</h4>
                    <ul class="feature-list">
                        ${item.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                ${item.note ? `<div class="product-note">${item.note}</div>` : ''}
                
                <button class="btn-order" data-product="${product}" data-index="${index}">
                    <i class="fab fa-whatsapp"></i> Pesan Sekarang
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Additional sections
    if (productData.terms && productData.terms.length > 0) {
        html += `
            <div class="product-terms">
                <h3><i class="fas fa-exclamation-triangle"></i> Syarat & Ketentuan:</h3>
                <ul>
                    ${productData.terms.map(term => `<li>${term}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (productData.features && productData.features.length > 0) {
        html += `
            <div class="product-features-list">
                <h3><i class="fas fa-rocket"></i> Fitur Utama:</h3>
                <div class="features-grid">
                    ${productData.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.security && productData.security.length > 0) {
        html += `
            <div class="product-security">
                <h3><i class="fas fa-shield-alt"></i> Keamanan:</h3>
                <div class="security-content">
                    <ul>
                        ${productData.security.map(security => `<li>${security}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    if (productData.benefits && productData.benefits.length > 0) {
        html += `
            <div class="product-benefits">
                <h3><i class="fas fa-gem"></i> Benefit:</h3>
                <div class="benefits-grid">
                    ${productData.benefits.map(benefit => `<div class="benefit-item">${benefit}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.info && productData.info.length > 0) {
        html += `
            <div class="product-info">
                <h3><i class="fas fa-info-circle"></i> Info:</h3>
                <div class="info-content">
                    <ul>
                        ${productData.info.map(info => `<li>${info}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    html += `</div></div>`;
    
    // Render ke container
    productContainer.innerHTML = html;
    
    // Setup order buttons
    setupOrderButtons();
    
    console.timeEnd('Load Product');
}

// ===== FUNGSI ORDER BUTTONS =====
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    console.log(`Found ${orderButtons.length} order buttons`);
    
    orderButtons.forEach(button => {
        // Clone untuk reset listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    });
    
    // Re-select after clone
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', handleOrderClick, { 
            passive: false,
            capture: true 
        });
        
        button.style.cursor = 'pointer';
        button.style.pointerEvents = 'auto';
    });
}

function handleOrderClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Order button clicked!');
    
    const product = this.dataset.product;
    const index = parseInt(this.dataset.index);
    const item = products[product].items[index];
    
    // Click feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Create message
    let message = `Halo ${ADMIN_NAME}, saya mau pesan:\n\n`;
    message += `📦 *${item.title}*\n`;
    message += `💰 ${item.price}${item.period ? ` (${item.period})` : ''}\n\n`;
    
    message += `Mohon info untuk pemesanan. Terima kasih!`;
    
    // Send to WhatsApp
    sendToWhatsApp(message);
}

function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

function updateWhatsAppLink() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(`Halo ${ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`)}`;
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top
    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', scrollToTop);
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu
    document.addEventListener('click', closeMobileMenuOnClickOutside);
    
    // Navigation
    setupNavigationLinks();
    
    // Product links in footer
    setupProductLinks();
}

function handleScroll() {
    // Show/hide back to top button
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.classList.remove('visible');
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    
    // Change hamburger icon
    const icon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenuOnClickOutside(event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

function setupNavigationLinks() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu
                if (window.innerWidth < 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
}

function setupProductLinks() {
    document.querySelectorAll('.product-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.dataset.product;
            
            const selectorBtn = document.querySelector(`.selector-btn[data-product="${product}"]`);
            if (selectorBtn) {
                selectorBtn.click();
            }
        });
    });
}

// ===== DEBUG FUNCTIONS =====
window.debugPosition = function() {
    console.log('=== DEBUG POSITIONING ===');
    
    // Debug header
    const header = document.querySelector('header');
    const headerRect = header.getBoundingClientRect();
    console.log('Header:', {
        top: headerRect.top,
        height: headerRect.height,
        offsetTop: header.offsetTop
    });
    
    // Debug hero
    const hero = document.querySelector('.hero');
    const heroRect = hero.getBoundingClientRect();
    console.log('Hero:', {
        top: heroRect.top,
        height: heroRect.height,
        offsetTop: hero.offsetTop
    });
    
    // Debug product container
    const productContainer = document.getElementById('product-lists');
    const containerRect = productContainer.getBoundingClientRect();
    console.log('Product Container:', {
        top: containerRect.top,
        height: containerRect.height,
        offsetTop: productContainer.offsetTop,
        display: window.getComputedStyle(productContainer).display
    });
    
    // Debug selector buttons
    const selectorButtons = document.querySelectorAll('.selector-btn');
    selectorButtons.forEach((btn, i) => {
        const rect = btn.getBoundingClientRect();
        console.log(`Button ${i}:`, {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        });
    });
};

// ===== FIX ALL BUTTONS EMERGENCY =====
window.fixAllButtons = function() {
    console.log('Fixing all buttons...');
    
    // Fix semua buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.zIndex = '9999';
        btn.style.cursor = 'pointer';
        btn.style.pointerEvents = 'auto';
        btn.style.outline = 'none';
    });
    
    // Fix product container
    const container = document.getElementById('product-lists');
    if (container) {
        container.style.position = 'relative';
        container.style.zIndex = '100';
        container.style.display = 'block';
        container.style.top = '0';
        container.style.left = '0';
    }
    
    alert('All buttons should work now!');
};

// Add emergency CSS fix
const emergencyStyle = document.createElement('style');
emergencyStyle.textContent = `
    /* EMERGENCY FIX - FORCE BUTTONS TO WORK */
    .selector-btn {
        z-index: 99999 !important;
        position: relative !important;
    }
    
    #product-lists {
        position: relative !important;
        z-index: 100 !important;
        margin-top: 0 !important;
        padding-top: 20px !important;
    }
    
    /* Ensure click area */
    button::after {
        content: '' !important;
        position: absolute !important;
        top: -10px !important;
        left: -10px !important;
        right: -10px !important;
        bottom: -10px !important;
        z-index: -1 !important;
        pointer-events: none !important;
    }
`;
document.head.appendChild(emergencyStyle);

console.log('%c🚀 AZBRY-MD WEBSITE READY 🚀', 'font-size: 16px; font-weight: bold; color: #25D366;');
console.log('%cUntuk debugging, ketik: window.debugPosition()', 'color: #667EEA;');
console.log('%cUntuk emergency fix, ketik: window.fixAllButtons()', 'color: #FF6B6B;');
