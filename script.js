// ===== KONFIGURASI =====
const ADMIN_PHONE = "6285189988271"; // ⚠️ GANTI DENGAN NOMOR ANDA
const ADMIN_NAME = "Febry";

// ===== VARIABEL =====
let currentProduct = null;
let isProductLoaded = false;

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
        title: "🚀 PAKET SCRIPT AZBRY-MD (Price tanya admin)",
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
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
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
    
    // Add click effect
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
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

// ===== FUNGSI PRODUK SELECTOR (TOMBOL DI BERANDA) =====
function setupProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    console.log(`Found ${selectorButtons.length} selector buttons`);
    
    selectorButtons.forEach(button => {
        // Remove existing listeners
        button.removeEventListener('click', handleProductSelect);
        // Add new listener
        button.addEventListener('click', handleProductSelect, { passive: true });
        
        // Add pointer cursor
        button.style.cursor = 'pointer';
    });
}

function handleProductSelect(event) {
    console.log('Product button clicked:', event.target);
    
    const product = this.dataset.product;
    console.log(`Selected product: ${product}`);
    
    // Remove active class from all buttons
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    this.classList.add('active');
    this.style.transform = 'translateY(-3px)';
    
    // Add click effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Show loading
    showLoading();
    
    // Load product with delay for animation
    setTimeout(() => {
        loadProduct(product);
        hideLoading();
    }, 400);
}

function loadProduct(product) {
    console.log(`Loading product: ${product}`);
    currentProduct = product;
    isProductLoaded = true;
    
    // Show product lists container
    productListsContainer.classList.add('active');
    productListsContainer.style.display = 'block';
    
    // Scroll to products with offset for header
    setTimeout(() => {
        const offset = 80; // Height of header
        const elementPosition = productListsContainer.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }, 100);
    
    // Load product HTML
    const productHTML = generateProductHTML(product);
    productListsContainer.innerHTML = productHTML;
    
    // Setup order buttons after HTML is loaded
    setTimeout(setupOrderButtons, 50);
}

function generateProductHTML(product) {
    const productData = products[product];
    let html = `
        <div class="container">
            <div class="product-list active">
                <h2 class="section-title">${productData.title}</h2>
                ${productData.subtitle ? `<p style="text-align: center; color: var(--gray); margin-bottom: 2rem; font-size: 0.9rem;">${productData.subtitle}</p>` : ''}
                
                <div class="product-grid">
    `;
    
    // Product cards
    productData.items.forEach((item, index) => {
        html += `
            <div class="product-card ${item.popular ? 'popular' : ''}" style="cursor: default;">
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
                        ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${item.note ? `<div class="product-note">${item.note}</div>` : ''}
                
                <button class="btn-order" data-product="${product}" data-index="${index}" style="cursor: pointer; z-index: 10; position: relative;">
                    <i class="fab fa-whatsapp"></i> Pesan Sekarang
                </button>
            </div>
        `;
    });
    
    html += `
                </div>
    `;
    
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
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// ===== FUNGSI ORDER BUTTONS (TOMBOL "PESAN SEKARANG") =====
function setupOrderButtons() {
    const orderButtons = productListsContainer.querySelectorAll('.btn-order');
    
    console.log(`Found ${orderButtons.length} order buttons`);
    
    orderButtons.forEach(button => {
        // Remove existing listeners first
        button.removeEventListener('click', handleOrderClick);
        // Add new listener
        button.addEventListener('click', handleOrderClick, { passive: true });
        
        // Make sure button is clickable
        button.style.cursor = 'pointer';
        button.style.pointerEvents = 'auto';
        button.style.zIndex = '10';
        button.style.position = 'relative';
    });
}

function handleOrderClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Order button clicked:', event.target);
    
    const product = this.dataset.product;
    const index = parseInt(this.dataset.index);
    
    const productData = products[product];
    const item = productData.items[index];
    
    let message = `Halo ${ADMIN_NAME}, saya mau pesan:\n\n`;
    message += `📦 *${item.title}*\n`;
    message += `💰 ${item.price}${item.period ? ` (${item.period})` : ''}\n\n`;
    
    if (product === 'nokos') {
        message += `🔐 NOKOS INDO FRESH\n`;
        message += `Saya ingin memesan NOKOS untuk bot WhatsApp.\n\n`;
    } else if (product === 'script') {
        message += `🚀 SCRIPT AZBRY-MD\n`;
        message += `Saya ingin membeli script ${item.title.includes('PREMIUM') ? 'Premium' : 'Basic'}.\n\n`;
    } else if (product === 'rental') {
        message += `🤖 SEWA BOT AZBRY-MD\n`;
        message += `Saya ingin menyewa bot untuk ${item.period}.\n\n`;
    } else if (product === 'role') {
        message += `💎 ROLE PREMIUM\n`;
        message += `Saya ingin membeli role premium untuk ${item.period}.\n\n`;
    }
    
    message += `Mohon info untuk proses pemesanan. Terima kasih!`;
    
    // Send to WhatsApp
    sendToWhatsApp(message);
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
}

function sendToWhatsApp(message) {
    console.log('Sending message:', message);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

function updateWhatsAppLink() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(`Halo ${ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`)}`;
    }
}

// ===== FUNGSI LOADING =====
function showLoading() {
    loading.classList.add('active');
    loading.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    loading.classList.remove('active');
    loading.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== EVENT LISTENERS UTAMA =====
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.style.cursor = 'pointer';
    
    // Back to top
    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', scrollToTop);
    backToTop.style.cursor = 'pointer';
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    hamburger.style.cursor = 'pointer';
    
    // Close mobile menu on outside click
    document.addEventListener('click', closeMobileMenuOnClickOutside);
    
    // Navigation links
    setupNavigationLinks();
    
    // Product links in footer
    setupProductLinks();
    
    // Touch events for mobile
    setupTouchEvents();
    
    // Window resize
    window.addEventListener('resize', handleResize);
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
    const navLinksElements = document.querySelectorAll('.nav-links a');
    
    navLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            // For anchor links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate offset for header
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
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
    const productLinks = document.querySelectorAll('.product-link');
    
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.dataset.product;
            
            // Find and click the corresponding selector button
            const selectorBtn = document.querySelector(`.selector-btn[data-product="${product}"]`);
            if (selectorBtn) {
                selectorBtn.click();
                
                // Scroll to hero section first
                const heroSection = document.getElementById('home');
                if (heroSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const heroPosition = heroSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: heroPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function setupTouchEvents() {
    // Better touch handling for mobile
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Prevent zoom on double tap for buttons
    const buttons = document.querySelectorAll('button, .btn-order, .selector-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
        }, { passive: false });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function handleResize() {
    // Close mobile menu on large screens
    if (window.innerWidth >= 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// ===== INITIAL ANIMATION =====
window.addEventListener('load', function() {
    console.log('Window loaded');
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = [
        '.hero-badge',
        '.hero-title',
        '.hero-subtitle',
        '.product-selector',
        '.hero-stats'
    ];
    
    heroElements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
    
    // Make sure all buttons are clickable
    setTimeout(() => {
        document.querySelectorAll('button').forEach(btn => {
            btn.style.cursor = 'pointer';
            btn.style.pointerEvents = 'auto';
        });
    }, 500);
});

// ===== DEBUG FUNCTIONS =====
// Untuk debugging, buka console dan ketik:
// window.testButtons() - untuk test semua tombol
// window.testProduct('script') - untuk test produk tertentu

window.testButtons = function() {
    console.log('=== TESTING BUTTONS ===');
    
    // Test selector buttons
    const selectorButtons = document.querySelectorAll('.selector-btn');
    console.log(`Selector buttons: ${selectorButtons.length}`);
    selectorButtons.forEach((btn, i) => {
        console.log(`Button ${i}:`, btn.dataset.product, btn.style.cursor);
    });
    
    // Test order buttons
    const orderButtons = document.querySelectorAll('.btn-order');
    console.log(`Order buttons: ${orderButtons.length}`);
}

window.testProduct = function(product) {
    console.log(`Testing product: ${product}`);
    loadProduct(product);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 AZBRY-MD WEBSITE 🚀', 'font-size: 16px; font-weight: bold; color: #25D366;');
console.log('%cSemua tombol seharusnya bisa diklik sekarang!', 'color: #128C7E;');
console.log('%cJika ada masalah, buka console dan ketik: window.testButtons()', 'color: #FF6B6B;');
