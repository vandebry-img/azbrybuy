// ===== KONFIGURASI =====
const CONFIG = {
    ADMIN_PHONE: "6285189988271",
    ADMIN_NAME: "Admin FebryWesker",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 50,
    TOAST_DURATION: 3000
};

// ===== VARIABEL GLOBAL =====
let currentProduct = null;
let currentSlide = 0;
let totalSlides = 0;

// ===== ELEMEN DOM =====
const elements = {
    loading: document.getElementById('loading'),
    header: document.getElementById('header'),
    scrollProgress: document.getElementById('scrollProgress'),
    themeToggle: document.getElementById('themeToggle'),
    backToTop: document.getElementById('backToTop'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.getElementById('navLinks'),
    productListsContainer: document.getElementById('product-lists'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage'),
    clock: document.getElementById('clock'),
    typingText: document.getElementById('typingText'),
    particles: document.getElementById('particles')
};

// ===== DATA PRODUK =====
const products = {
    script: {
        title: "🚀 PAKET SCRIPT AZBRY-MD",
        subtitle: "Harga lengkap chat admin untuk info detail",
        items: [
            {
                title: "📦 BASIC PACKAGE",
                price: "Rp XX.000",
                period: "",
                features: [
                    "Script bot terbaru",
                    "Update berkala gratis",
                    "Support via grup",
                    "Dokumentasi lengkap"
                ],
                note: "Untuk yang sudah berpengalaman",
                popular: false
            },
            {
                title: "📦 PREMIUM PACKAGE",
                price: "Rp XX.000",
                period: "",
                features: [
                    "Script original 100%",
                    "Tutorial instalasi lengkap",
                    "Bimbingan sampai jadi",
                    "No encrypt (No enc)",
                    "Support 24 jam",
                    "Priority response"
                ],
                note: "⭐ Rekomendasi untuk pemula!",
                popular: true
            }
        ],
        terms: [
            "➤ WAJIB punya panel sendiri",
            "➤ TIDAK menyediakan panel gratis",
            "➤ Beli = Paham konsekuensi",
            "➤ Bot berisiko banned? ITU NORMAL!",
            "➤ No refund & no garansi"
        ]
    },
    rental: {
        title: "💰 PAKET SEWA BOT",
        subtitle: "NOTE: 1 TRANSAKSI UNTUK 1 GRUP",
        items: [
            {
                title: "📅 3 HARI",
                price: "Rp 10.000",
                period: "3 Hari",
                features: [
                    "Fitur utama lengkap",
                    "Bot masuk ke grup Anda",
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
                    "Priority queue",
                    "Bonus stiker pack"
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
                    "Advanced anti-spam",
                    "Free extend 1 hari"
                ],
                note: "💎 Hemat 30% dari perminggu!",
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
                    "VIP customer status",
                    "Free extend 3 hari"
                ],
                note: "🔥 Paling hemat! Hanya 1.5K/hari",
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
        subtitle: "Upgrade status Anda di bot!",
        items: [
            {
                title: "📅 1 MINGGU",
                price: "Rp 7.000",
                period: "7 Hari",
                features: [
                    "Unlimited Limit",
                    "Akses fitur AI",
                    "Auto naik role",
                    "Auto Responder AI",
                    "Badge premium"
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
                    "Custom AI personality",
                    "Exclusive sticker"
                ],
                note: "💎 Hemat 30% dari perminggu!",
                popular: true
            },
            {
                title: "📅 1 BULAN",
                price: "Rp 15.000",
                period: "30 Hari",
                features: [
                    "Semua fitur 2 minggu",
                    "Max priority support",
                    "Auto naik role Final Boss",
                    "Unlimited AI requests",
                    "VIP badge & crown icon",
                    "Special mention di grup"
                ],
                note: "🔥 Paling hemat! Hanya 500/hari",
                popular: false
            }
        ],
        benefits: [
            "✅ Unlimited Limit semua command",
            "✅ Akses fitur AI premium",
            "✅ Auto naik role Final Boss",
            "✅ Auto Responder AI",
            "✅ Priority queue",
            "✅ VIP badge & status"
        ]
    },
    nokos: {
        title: "🔐 NOKOS INDO FRESH",
        subtitle: "Nomor siap pakai untuk bot WhatsApp",
        items: [
            {
                title: "📱 NOKOS INDO FRESH",
                price: "Rp 7.000",
                period: "per Nomor",
                features: [
                    "Nomor Indonesia fresh",
                    "Siap pakai untuk bot",
                    "Aman dari banned utama",
                    "Instant delivery",
                    "Garansi aktif 24 jam"
                ],
                note: "🔥 Stok selalu tersedia!",
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
    console.log('%c🚀 AZBRY-MD WEBSITE INITIALIZED 🚀', 'font-size: 16px; font-weight: bold; color: #00D9FF; text-shadow: 0 0 10px #00D9FF;');
    
    // Setup
    initLoading();
    initTheme();
    initClock();
    initParticles();
    initTypingEffect();
    initScrollProgress();
    initEventListeners();
    initIntersectionObserver();
    animateStats();
    updateWhatsAppLink();
    
    // Hide loading after everything is ready
    setTimeout(() => {
        hideLoading();
    }, 1500);
});

// ===== LOADING SCREEN =====
function initLoading() {
    elements.loading.classList.add('active');
}

function hideLoading() {
    elements.loading.style.opacity = '0';
    setTimeout(() => {
        elements.loading.classList.remove('active');
        elements.loading.style.display = 'none';
    }, 500);
}

// ===== THEME FUNCTIONS =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
    
    showToast(`Tema ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`);
}

function updateThemeIcon() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const moonIcon = elements.themeToggle.querySelector('.fa-moon');
    const sunIcon = elements.themeToggle.querySelector('.fa-sun');
    
    if (currentTheme === 'dark') {
        moonIcon.style.opacity = '1';
        moonIcon.style.transform = 'rotate(0)';
        sunIcon.style.opacity = '0';
        sunIcon.style.transform = 'rotate(90deg)';
    } else {
        moonIcon.style.opacity = '0';
        moonIcon.style.transform = 'rotate(90deg)';
        sunIcon.style.opacity = '1';
        sunIcon.style.transform = 'rotate(0)';
    }
}

// ===== CLOCK FUNCTIONS =====
function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    if (elements.clock) {
        elements.clock.textContent = `${hours}:${minutes}`;
    }
}

// ===== PARTICLES ANIMATION =====
function initParticles() {
    if (!elements.particles) return;
    
    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const startX = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    elements.particles.appendChild(particle);
    
    // Remove and recreate after animation
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, (duration + delay) * 1000);
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    if (!elements.typingText) return;
    
    const text = "AZBRY-MD";
    let index = 0;
    elements.typingText.textContent = '';
    
    function type() {
        if (index < text.length) {
            elements.typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, CONFIG.TYPING_SPEED);
        }
    }
    
    setTimeout(type, 500);
}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
    window.addEventListener('scroll', updateScrollProgress);
}

function updateScrollProgress() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    elements.scrollProgress.style.width = `${scrolled}%`;
}

// ===== STATS COUNTER ANIMATION =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== INTERSECTION OBSERVER =====
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    const observeElements = document.querySelectorAll('.product-card, .contact-card, .product-terms, .product-features-list, .product-security, .product-benefits, .product-info');
    observeElements.forEach(el => observer.observe(el));
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top
    window.addEventListener('scroll', handleScroll);
    elements.backToTop.addEventListener('click', scrollToTop);
    
    // Mobile menu
    elements.hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu on outside click
    document.addEventListener('click', handleOutsideClick);
    
    // Navigation links
    setupNavigationLinks();
    
    // Product selector buttons
    setupProductSelector();
    
    // Product links in footer
    setupProductLinks();
}

// ===== SCROLL HANDLERS =====
function handleScroll() {
    // Back to top button
    if (window.pageYOffset > 300) {
        elements.backToTop.classList.add('visible');
    } else {
        elements.backToTop.classList.remove('visible');
    }
    
    // Header scroll effect
    if (window.pageYOffset > 50) {
        elements.header.classList.add('scrolled');
    } else {
        elements.header.classList.remove('scrolled');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== MOBILE MENU =====
function toggleMobileMenu(e) {
    e.stopPropagation();
    elements.navLinks.classList.toggle('active');
    
    const icon = elements.hamburger.querySelector('i');
    if (elements.navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        document.body.style.overflow = 'auto';
    }
}

function handleOutsideClick(e) {
    if (!elements.hamburger.contains(e.target) && !elements.navLinks.contains(e.target)) {
        if (elements.navLinks.classList.contains('active')) {
            elements.navLinks.classList.remove('active');
            const icon = elements.hamburger.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    }
}

// ===== NAVIGATION =====
function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = elements.header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Close mobile menu
                    if (window.innerWidth < 768) {
                        elements.navLinks.classList.remove('active');
                        const icon = elements.hamburger.querySelector('i');
                        icon.classList.replace('fa-times', 'fa-bars');
                        document.body.style.overflow = 'auto';
                    }
                }
            }
        });
    });
}

// ===== PRODUCT SELECTOR =====
function setupProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    selectorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            
            // Update button state
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show product container
            elements.productListsContainer.classList.add('active');
            
            // Load product
            loadProduct(product);
            
            // Scroll to products
            setTimeout(() => {
                const headerHeight = elements.header.offsetHeight;
                const targetPosition = elements.productListsContainer.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
            
            showToast(`Produk ${product.toUpperCase()} dipilih`);
        });
    });
}

// ===== LOAD PRODUCT =====
function loadProduct(product) {
    currentProduct = product;
    const productData = products[product];
    
    let html = `
        <div class="container">
            <div class="product-list">
                <h2 class="section-title">${productData.title}</h2>
    `;
    
    if (productData.subtitle) {
        html += `<p class="section-subtitle">${productData.subtitle}</p>`;
    }
    
    // Product Carousel
    html += `
        <div class="product-carousel">
            <div class="product-track" id="productTrack">
    `;
    
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
                    <h4><i class="fas fa-check-circle"></i> Fitur:</h4>
                    <ul class="feature-list">
                        ${item.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                ${item.note ? `<div class="product-note">${item.note}</div>` : ''}
                
                <button class="btn-order" data-product="${product}" data-index="${index}">
                    <i class="fab fa-whatsapp"></i>
                    <span>Pesan Sekarang</span>
                </button>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    // Carousel Controls
    if (productData.items.length > 1) {
        html += `
            <div class="carousel-controls">
                <button class="carousel-btn" id="prevBtn"><i class="fas fa-chevron-left"></i></button>
                <div class="carousel-dots" id="carouselDots"></div>
                <button class="carousel-btn" id="nextBtn"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
    }
    
    // Additional sections
    if (productData.terms) {
        html += `
            <div class="product-terms">
                <h3><i class="fas fa-exclamation-triangle"></i> Syarat & Ketentuan:</h3>
                <ul>
                    ${productData.terms.map(term => `<li>${term}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (productData.features) {
        html += `
            <div class="product-features-list">
                <h3><i class="fas fa-rocket"></i> Fitur Utama:</h3>
                <div class="features-grid">
                    ${productData.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.security) {
        html += `
            <div class="product-security">
                <h3><i class="fas fa-shield-alt"></i> Keamanan:</h3>
                <ul>
                    ${productData.security.map(security => `<li>${security}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (productData.benefits) {
        html += `
            <div class="product-benefits">
                <h3><i class="fas fa-gem"></i> Benefit:</h3>
                <div class="benefits-grid">
                    ${productData.benefits.map(benefit => `<div class="benefit-item">${benefit}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.info) {
        html += `
            <div class="product-info">
                <h3><i class="fas fa-info-circle"></i> Info:</h3>
                <ul>
                    ${productData.info.map(info => `<li>${info}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    html += `</div></div>`;
    
    elements.productListsContainer.innerHTML = html;
    
    // Setup carousel
    totalSlides = productData.items.length;
    currentSlide = 0;
    if (totalSlides > 1) {
        setupCarousel();
    }
    
    // Setup order buttons
    setupOrderButtons();
    
    // Re-init intersection observer for new elements
    initIntersectionObserver();
}

// ===== CAROUSEL =====
function setupCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const track = document.getElementById('productTrack');
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
    
    updateCarousel();
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('productTrack');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!track) return;
    
    const slideWidth = track.children[0].offsetWidth + 16; // card width + gap
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Update buttons
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

// ===== ORDER BUTTONS =====
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const index = parseInt(this.dataset.index);
            const item = products[product].items[index];
            
            // Create WhatsApp message
            let message = `🛒 *PEMESANAN BARU*\n\n`;
            message += `📦 *Produk:* ${item.title}\n`;
            message += `💰 *Harga:* ${item.price}`;
            if (item.period) message += ` (${item.period})`;
            message += `\n\n`;
            
            message += `✅ *Fitur yang didapat:*\n`;
            item.features.forEach(feature => {
                message += `• ${feature}\n`;
            });
            message += `\n`;
            
            message += `📝 Mohon informasi lebih lanjut dan cara pembayaran.\n\n`;
            message += `Terima kasih! 🙏`;
            
            // Send to WhatsApp
            sendToWhatsApp(message);
            
            showToast('Membuka WhatsApp...');
        });
    });
}

// ===== WHATSAPP FUNCTIONS =====
function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

function updateWhatsAppLink() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        const message = `Halo ${CONFIG.ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`;
        whatsappBtn.href = `https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    }
}

// ===== PRODUCT LINKS =====
function setupProductLinks() {
    const productLinks = document.querySelectorAll('.product-link');
    
    productLinks.forEach(link => {
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

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, CONFIG.TOAST_DURATION);
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== CONSOLE LOG =====
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00D9FF');
console.log('%c        AZBRY-MD MARKETPLACE', 'color: #00D9FF; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00D9FF');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00D9FF');
console.log('%c🚀 Website Status: READY', 'color: #25D366; font-weight: bold');
console.log('%c💎 Version: 2.0', 'color: #6366F1; font-weight: bold');
console.log('%c⚡ Performance: Optimized', 'color: #F59E0B; font-weight: bold');
console.log('%c━━━━━━━━━━━━━━━━