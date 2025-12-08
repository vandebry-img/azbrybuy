// ===== CONFIGURATION =====
const CONFIG = {
    ADMIN_PHONE: "6285189988271",
    ADMIN_NAME: "Admin Azbry-MD",
    TYPING_SPEED: 100,
    PARTICLE_COUNT: 50,
    COUNTER_DURATION: 2000
};

// ===== STATE =====
let currentProduct = null;
let currentSlide = 0;
let totalSlides = 0;
let isAnimating = false;

// ===== DOM ELEMENTS =====
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
    whatsappBtn: document.getElementById('whatsapp-btn'),
    clock: document.getElementById('clock'),
    typingText: document.getElementById('typingText'),
    particles: document.getElementById('particles')
};

// ===== PRODUCT DATA =====
const products = {
    script: {
        title: "🚀 PAKET SCRIPT AZBRY-MD",
        subtitle: "Harga chat admin saja untuk info lebih lanjut",
        items: [
            {
                title: "📦 BASIC",
                price: "Rp XX.000",
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
                title: "📦 PREMIUM",
                price: "Rp XX.000",
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
        subtitle: "NOTE: 1 TRANSAKSI UNTUK 1 GRUP",
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
        subtitle: "Upgrade akun bot Anda ke Premium",
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
        subtitle: "Nomor Indonesia untuk bot WhatsApp",
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
    console.log('%c🚀 AZBRY-MD WEBSITE LOADED', 'font-size: 16px; font-weight: bold; color: #00D9FF;');
    
    // Initialize all features
    initLoading();
    initClock();
    initTheme();
    initParticles();
    initTypingEffect();
    initCounters();
    initEventListeners();
    updateWhatsAppLink();
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        hideLoading();
    }, 2000);
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

// ===== CLOCK =====
function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    if (elements.clock) {
        elements.clock.textContent = `${hours}:${minutes}`;
    }
}

// ===== THEME =====
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
    
    showToast(`Tema ${newTheme === 'dark' ? 'Gelap' : 'Terang'} aktif`);
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

// ===== PARTICLES =====
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
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startX}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    elements.particles.appendChild(particle);
}

// ===== TYPING EFFECT =====
function initTypingEffect() {
    if (!elements.typingText) return;
    
    const text = "AZBRY-MD";
    let index = 0;
    elements.typingText.textContent = "";
    
    function type() {
        if (index < text.length) {
            elements.typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, CONFIG.TYPING_SPEED);
        }
    }
    
    setTimeout(type, 500);
}

// ===== COUNTER ANIMATION =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const duration = CONFIG.COUNTER_DURATION;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        }
    }, 16);
}

// ===== EVENT LISTENERS =====
function initEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top
    elements.backToTop.addEventListener('click', scrollToTop);
    
    // Hamburger menu
    elements.hamburger.addEventListener('click', toggleMobileMenu);
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Navigation links
    setupNavigationLinks();
    
    // Product selector buttons
    setupProductSelector();
    
    // Product links in footer
    setupProductLinks();
    
    // Close menu on outside click
    document.addEventListener('click', handleOutsideClick);
}

// ===== SCROLL HANDLER =====
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    // Update scroll progress
    elements.scrollProgress.style.width = `${scrollPercent}%`;
    
    // Header scroll effect
    if (scrollTop > 50) {
        elements.header.classList.add('scrolled');
    } else {
        elements.header.classList.remove('scrolled');
    }
    
    // Back to top button
    if (scrollTop > 300) {
        elements.backToTop.classList.add('visible');
    } else {
        elements.backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    elements.navLinks.classList.toggle('active');
    
    const icon = elements.hamburger.querySelector('i');
    if (elements.navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

function handleOutsideClick(event) {
    if (!elements.hamburger.contains(event.target) && 
        !elements.navLinks.contains(event.target) &&
        elements.navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// ===== NAVIGATION =====
function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
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
                    
                    // Close mobile menu if open
                    if (elements.navLinks.classList.contains('active')) {
                        toggleMobileMenu();
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
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (isAnimating) return;
            isAnimating = true;
            
            const product = this.getAttribute('data-product');
            
            // Update button states
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load product
            loadProduct(product);
            
            // Scroll to product section
            setTimeout(() => {
                scrollToProductSection();
                isAnimating = false;
            }, 300);
        });
    });
}

function scrollToProductSection() {
    const productSection = elements.productListsContainer;
    const headerHeight = elements.header.offsetHeight;
    const targetPosition = productSection.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ===== LOAD PRODUCT =====
function loadProduct(productKey) {
    currentProduct = productKey;
    const productData = products[productKey];
    
    if (!productData) {
        console.error('Product not found:', productKey);
        return;
    }
    
    // Show container
    elements.productListsContainer.classList.add('active');
    
    // Build HTML
    let html = `
        <div class="container">
            <h2 class="section-title">${productData.title}</h2>
            ${productData.subtitle ? `<p class="section-subtitle">${productData.subtitle}</p>` : ''}
            
            <div class="product-carousel">
                <div class="product-track" id="productTrack">
    `;
    
    // Add product cards
    productData.items.forEach((item, index) => {
        html += `
            <div class="product-card ${item.popular ? 'popular' : ''}">
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
                
                ${item.note ? `<div class="product-note">💡 ${item.note}</div>` : ''}
                
                <button class="btn-order" data-product="${productKey}" data-index="${index}">
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
    
    // Add carousel controls if more than 1 item
    if (productData.items.length > 1) {
        html += `
            <div class="carousel-controls">
                <button class="carousel-btn" id="prevBtn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <div class="carousel-dots" id="carouselDots"></div>
                <button class="carousel-btn" id="nextBtn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
    }
    
    // Add additional sections
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
                    ${productData.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.security) {
        html += `
            <div class="product-security">
                <h3><i class="fas fa-shield-alt"></i> Keamanan:</h3>
                <ul>
                    ${productData.security.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (productData.benefits) {
        html += `
            <div class="product-benefits">
                <h3><i class="fas fa-gem"></i> Benefit:</h3>
                <div class="benefits-grid">
                    ${productData.benefits.map(b => `<div class="benefit-item">${b}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.info) {
        html += `
            <div class="product-info">
                <h3><i class="fas fa-info-circle"></i> Info Penting:</h3>
                <ul>
                    ${productData.info.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    html += `</div>`;
    
    // Render
    elements.productListsContainer.innerHTML = html;
    
    // Setup carousel
    if (productData.items.length > 1) {
        setupCarousel(productData.items.length);
    }
    
    // Setup order buttons
    setupOrderButtons();
    
    showToast(`Produk ${productKey.toUpperCase()} ditampilkan`);
}

// ===== CAROUSEL =====
function setupCarousel(itemCount) {
    totalSlides = itemCount;
    currentSlide = 0;
    
    const track = document.getElementById('productTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Button events
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) changeSlide(1);
        if (touchEndX > touchStartX + 50) changeSlide(-1);
    }
    
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
    
    // Update track position
    const slideWidth = track.children[0].offsetWidth + 16; // card width + gap
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Update buttons
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
}

// ===== ORDER BUTTONS =====
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productKey = this.getAttribute('data-product');
            const index = parseInt(this.getAttribute('data-index'));
            
            handleOrder(productKey, index);
        });
    });
}

function handleOrder(productKey, index) {
    const productData = products[productKey];
    const item = productData.items[index];
    
    if (!item) {
        console.error('Item not found');
        return;
    }
    
    // Create WhatsApp message
    let message = `🛒 *PEMESANAN BARU*\n\n`;
    message += `📦 *Produk:* ${item.title}\n`;
    message += `💰 *Harga:* ${item.price}`;
    
    if (item.period) {
        message += ` (${item.period})`;
    }
    
    message += `\n\n✅ *Fitur yang didapat:*\n`;
    item.features.forEach(feature => {
        message += `• ${feature}\n`;
    });
    
    message += `\n📝 Mohon informasi lebih lanjut dan cara pembayaran.\n\n`;
    message += `Terima kasih! 🙏`;
    
    // Send to WhatsApp
    sendToWhatsApp(message);
    
    showToast('Membuka WhatsApp...');
}

function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}

function updateWhatsAppLink() {
    if (elements.whatsappBtn) {
        const message = `Halo ${CONFIG.ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`;
        elements.whatsappBtn.href = `https://wa.me/${CONFIG.ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    }
}

// Floating buttons hover effect for mobile
document.addEventListener('DOMContentLoaded', function() {
    const floatingBtns = document.querySelectorAll('.floating-btn');
    
    // For mobile devices, show text on tap
    if ('ontouchstart' in window) {
        floatingBtns.forEach(btn => {
            let timeout;
            
            btn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.classList.add('hover');
                
                // Auto hide after 3 seconds
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    this.classList.remove('hover');
                }, 3000);
            });
            
            // Hide when touching elsewhere
            document.addEventListener('touchstart', function(e) {
                if (!btn.contains(e.target)) {
                    btn.classList.remove('hover');
                }
            });
        });
    }
    
    // Add ripple effect on click
    floatingBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// CSS untuk ripple effect (tambahkan di style.css)
.floating-btn {
    position: relative;
    overflow: hidden;
}

.floating-btn .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

// Untuk mobile, class hover akan menampilkan teks
.floating-btn.hover {
    max-width: 200px !important;
}

.floating-btn.hover .btn-text {
    opacity: 1 !important;
    transform: translateX(0) !important;
}

// ===== PRODUCT LINKS =====
function setupProductLinks() {
    const productLinks = document.querySelectorAll('.product-link');
    
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            
            // Trigger selector button
            const selectorBtn = document.querySelector(`.selector-btn[data-product="${product}"]`);
            if (selectorBtn) {
                selectorBtn.click();
            }
        });
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, duration = 3000) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, duration);
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

// ===== DEBUG HELPERS =====
window.azbryDebug = {
    showProduct: (key) => loadProduct(key),
    currentProduct: () => currentProduct,
    products: products,
    config: CONFIG
};

console.log('%c💡 Debug Helper Available', 'color: #00D9FF; font-weight: bold;');
console.log('%cUse window.azbryDebug for debugging', 'color: #94A3B8;');
console.log('%cExample: window.azbryDebug.showProduct("script")', 'color: #94A3B8;');
