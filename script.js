// ===== KONFIGURASI UTAMA =====
const ADMIN_PHONE = "6285189988271"; // ⚠️ GANTI DENGAN NOMOR ADMIN ANDA!
const ADMIN_NAME = "FebryWesker";

// ===== VARIABEL GLOBAL =====
let currentProduct = null;
let currentTheme = localStorage.getItem('theme') || 'light';

// ===== ELEMEN DOM =====
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const loading = document.getElementById('loading');
const productListsContainer = document.getElementById('product-lists');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const whatsappBtn = document.getElementById('whatsapp-btn');

// ===== DATA PRODUK =====
const products = {
    script: {
        title: "🚀 PAKET SCRIPT AZBRY-MD (Tanyakan ke admin)",
        items: [
            {
                title: "📦 PAKET BASIC - xxK",
                price: "Rp xx.000",
                period: "",
                features: [
                    "Script terbaru & original",
                    "Update berkala",
                    "Support terbatas",
                    "Tanpa bimbingan pemasangan",
                    "Tanpa tutorial lengkap",
                    "No enc 100%"
                ],
                note: "Untuk yang sudah berpengalaman dengan bot WhatsApp",
                popular: false
            },
            {
                title: "📦 PAKET PREMIUM - xxK",
                price: "Rp xx.000",
                period: "",
                features: [
                    "✅ Script original & terbaru",
                    "✅ Tutorial lengkap pemula",
                    "✅ Bimbingan sampai jadi",
                    "✅ No enc 100%",
                    "✅ Support 24 jam",
                    "✅ Priority response",
                    "✅ Update lifetime",
                    "✅ Backup & restore guide"
                ],
                note: "Rekomendasi untuk pemula! Support full sampai bot jalan",
                popular: true
            }
        ],
        terms: [
            "➤ WAJIB punya panel sendiri (RDP/VPS)",
            "➤ TIDAK menyediakan panel gratis",
            "➤ Beli = Paham konsekuensi",
            "➤ Tidak accept komplain gagal paham",
            "➤ Bot resiko banned? ITU NORMAL!",
            "➤ No refund garansi jiwa"
        ]
    },
    rental: {
        title: "💰 PAKET SEWA BOT AZBRY-MD",
        subtitle: "📝 NOTE : 1 TRANSAKSI UNTUK 1 GRUP",
        items: [
            {
                title: "📅 3 HARI",
                price: "Rp 10.000",
                period: "3 Hari",
                features: [
                    "Fitur utama bot lengkap",
                    "Bot kami yang masuk ke grup",
                    "Nomor Anda 100% aman",
                    "Support 24/7",
                    "Instant activation"
                ],
                note: "Cocok untuk testing atau event singkat",
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
                    "Backup data",
                    "Custom welcome message"
                ],
                note: "Rekomendasi untuk kebutuhan mingguan",
                popular: false
            },
            {
                title: "📅 2 MINGGU",
                price: "Rp 25.000",
                period: "14 Hari",
                features: [
                    "Semua fitur 1 minggu",
                    "Double priority support",
                    "Custom command request",
                    "Advanced anti-spam",
                    "Auto backup daily"
                ],
                note: "Hemat 30% dari sewa perminggu!",
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
                    "Weekly report",
                    "Emergency restore",
                    "VIP customer status"
                ],
                note: "Paling hemat! Hanya 1.5K/hari",
                popular: false
            }
        ],
        features: [
            "✅ Downloader ALL SOSMED (YT, IG, TikTok, FB, Twitter)",
            "✅ Antilink, Antitag, Anti Virtex",
            "✅ Auto Welcome/Goodbye Message",
            "✅ Tools Admin Lengkap (kick, add, promote, dll)",
            "✅ Auto Responder AI (GPT-based)",
            "✅ Sticker Maker & Converter",
            "✅ Game & Fun Commands",
            "✅ Music Player & Downloader",
            "✅ Support 24/7 Active"
        ],
        security: [
            "🛡️ NOMOR BOT KAMI MASUK KE GRUP ANDA",
            "🛡️ TIDAK PAKAI NOMOR ANDA SAMA SEKALI",
            "🛡️ TIDAK ADA RISIKO BANNED NOMOR ANDA",
            "🛡️ BOT KAMI YANG MENANGGUNG RISIKO",
            "🛡️ 100% AMAN UNTUK NOMOR UTAMA ANDA"
        ]
    },
    role: {
        title: "💎 ROLE PREMIUM AZBRY-MD",
        items: [
            {
                title: "📅 1 MINGGU",
                price: "Rp 7.000",
                period: "7 Hari",
                features: [
                    "Unlimited Limit semua fitur",
                    "Akses fitur AI premium",
                    "Auto naik role di bot",
                    "Auto Responder AI",
                    "Priority queue"
                ],
                note: "Untuk user yang sudah punya bot Azbry-MD",
                popular: false
            },
            {
                title: "📅 2 MINGGU",
                price: "Rp 10.000",
                period: "14 Hari",
                features: [
                    "Semua fitur 1 minggu",
                    "Double priority support",
                    "Early access fitur baru",
                    "Custom AI personality",
                    "Extended command limits"
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
                    "Auto naik role Yapping Final boss",
                    "Unlimited AI requests",
                    "VIP badge in bot",
                    "Exclusive commands",
                    "Beta tester access"
                ],
                note: "Paling hemat! Hanya 500/hari",
                popular: false
            }
        ],
        benefits: [
            "✅ Unlimited Limit semua command",
            "✅ Akses fitur AI premium & custom",
            "✅ Auto naik role Yapping Final boss",
            "✅ Auto Responder AI dengan konteks",
            "✅ Priority dalam semua queue",
            "✅ Early access fitur baru",
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
                    "Sudah terverifikasi",
                    "Aman dari banned utama",
                    "No ribet setting",
                    "Instant delivery"
                ],
                note: "Stok selalu tersedia! Garansi 24 jam",
                popular: true
            }
        ],
        info: [
            "🔐 UNTUK KEAMANAN, PAKAI NOKOS!",
            "🔐 Jangan pakai nomor utama/pribadi",
            "🔐 Bot bisa kena banned anytime",
            "🔐 Kami sediakan NOKOS INDO FRESH (7K)",
            "🔐 Nomor tumbal = aman nomor utama",
            "🔐 No ribet, no takut banned",
            "🔐 Recommended by 500+ users"
        ]
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Azbry-MD Website Loaded');
    
    // 1. Initialize real-time clock
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 2. Setup theme
    initTheme();
    
    // 3. Setup all event listeners
    setupEventListeners();
    
    // 4. Initialize product selector
    initProductSelector();
    
    // 5. Update WhatsApp link
    updateWhatsAppLink();
    
    // 6. Add scroll animations
    initScrollAnimations();
});

// ===== FUNGSI JAM & TANGGAL REAL-TIME =====
function updateDateTime() {
    const now = new Date();
    
    // Format waktu: HH:MM:SS
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const time = now.toLocaleTimeString('id-ID', timeOptions);
    document.getElementById('clock').textContent = time;
    
    // Format tanggal: Hari, DD MMM YYYY
    const dateOptions = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };
    const date = now.toLocaleDateString('id-ID', dateOptions);
    document.getElementById('date').textContent = date;
}

// ===== FUNGSI TEMA (DARK/LIGHT) =====
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update icon tema
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply theme change
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Update icon
    updateThemeIcon();
    
    // Add transition effect
    document.body.style.opacity = '0.9';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
    
    // Play sound effect (optional)
    playSound('click');
}

function updateThemeIcon() {
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
function initProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    selectorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            
            // Remove active class from all buttons
            selectorButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'translateY(0)';
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.style.transform = 'translateY(-8px) scale(1.02)';
            
            // Play sound
            playSound('select');
            
            // Show loading animation
            showLoading();
            
            // Load product after short delay
            setTimeout(() => {
                loadProduct(product);
                hideLoading();
            }, 600);
        });
    });
}

function loadProduct(product) {
    currentProduct = product;
    
    // Show product lists container
    productListsContainer.classList.add('active');
    
    // Scroll to products with smooth animation
    setTimeout(() => {
        productListsContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
    
    // Load product HTML
    productListsContainer.innerHTML = generateProductHTML(product);
    
    // Setup order buttons for this product
    setupOrderButtons();
    
    // Add animation to product cards
    animateProductCards();
}

function generateProductHTML(product) {
    const productData = products[product];
    let html = `
        <div class="container">
            <div class="product-list active">
                <h2 class="section-title">${productData.title}</h2>
                ${productData.subtitle ? `<p class="section-subtitle" style="text-align: center; margin-bottom: 2rem; color: var(--text-light);">${productData.subtitle}</p>` : ''}
                
                <div class="product-grid">
    `;
    
    // Generate product cards
    productData.items.forEach((item, index) => {
        const popularClass = item.popular ? 'popular' : '';
        const premiumClass = item.title.includes('PREMIUM') ? 'premium' : '';
        
        html += `
            <div class="product-card ${popularClass} ${premiumClass}" data-index="${index}">
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
                        ${item.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${item.note ? `<div class="product-note"><i class="fas fa-info-circle"></i> ${item.note}</div>` : ''}
                
                <button class="btn-order" data-product="${product}" data-index="${index}">
                    <i class="fab fa-whatsapp"></i> Pesan Sekarang
                </button>
            </div>
        `;
    });
    
    html += `
                </div>
    `;
    
    // Add terms/features/security sections if available
    if (productData.terms) {
        html += `
            <div class="product-terms animate-on-scroll">
                <h3><i class="fas fa-exclamation-triangle"></i> Syarat & Ketentuan:</h3>
                <ul>
                    ${productData.terms.map(term => `<li>${term}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (productData.features) {
        html += `
            <div class="product-features-list animate-on-scroll">
                <h3><i class="fas fa-rocket"></i> Fitur Utama Bot:</h3>
                <div class="features-grid">
                    ${productData.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.security) {
        html += `
            <div class="product-security animate-on-scroll">
                <h3><i class="fas fa-shield-alt"></i> Sistem 100% Aman:</h3>
                <div class="security-content">
                    <ul>
                        ${productData.security.map(security => `<li>${security}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    if (productData.benefits) {
        html += `
            <div class="product-benefits animate-on-scroll">
                <h3><i class="fas fa-gem"></i> Benefit Role Premium:</h3>
                <div class="benefits-grid">
                    ${productData.benefits.map(benefit => `<div class="benefit-item">${benefit}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.info) {
        html += `
            <div class="product-info animate-on-scroll">
                <h3><i class="fas fa-info-circle"></i> Keamanan & Rekomendasi:</h3>
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

// ===== FUNGSI ORDER / PEMESANAN =====
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const index = parseInt(this.dataset.index);
            
            const productData = products[product];
            const item = productData.items[index];
            
            // Create order message
            let message = `Halo ${ADMIN_NAME}, saya mau pesan produk Azbry-MD:\n\n`;
            message += `📦 *${item.title}*\n`;
            message += `💰 Harga: ${item.price}${item.period ? ` (${item.period})` : ''}\n\n`;
            
            // Add specific product info
            if (product === 'nokos') {
                message += `🔐 *NOKOS INDO FRESH*\n`;
                message += `Saya ingin memesan NOKOS untuk keamanan bot WhatsApp.\n\n`;
            } else if (product === 'script') {
                message += `🚀 *SCRIPT AZBRY-MD*\n`;
                message += `Saya ingin membeli script ${item.title.includes('PREMIUM') ? 'Premium' : 'Basic'} untuk bot WhatsApp.\n\n`;
            } else if (product === 'rental') {
                message += `🤖 *SEWA BOT AZBRY-MD*\n`;
                message += `Saya ingin menyewa bot untuk ${item.period}.\n\n`;
            } else if (product === 'role') {
                message += `💎 *ROLE PREMIUM AZBRY-MD*\n`;
                message += `Saya ingin membeli role premium untuk ${item.period}.\n\n`;
            }
            
            message += `Mohon info lengkap untuk proses pemesanan dan pembayaran. Terima kasih!`;
            
            // Send to WhatsApp
            sendToWhatsApp(message);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Play sound
            playSound('order');
        });
    });
}

function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
}

function updateWhatsAppLink() {
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(`Halo ${ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`)}`;
    }
}

// ===== FUNGSI LOADING =====
function showLoading() {
    loading.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    loading.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== FUNGSI ANIMASI =====
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== FUNGSI SOUND EFFECTS =====
function playSound(type) {
    // Create audio context for sound effects
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        if (type === 'click') {
            createClickSound(audioContext);
        } else if (type === 'select') {
            createSelectSound(audioContext);
        } else if (type === 'order') {
            createOrderSound(audioContext);
        }
    } catch (e) {
        console.log('Audio not supported');
    }
}

function createClickSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function createSelectSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.2);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
}

function createOrderSound(audioContext) {
    // Create multiple oscillators for a "cha-ching" sound
    for (let i = 0; i < 3; i++) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        const freq = 800 + (i * 200);
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(freq + 400, audioContext.currentTime + 0.1);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1 + (i * 0.05));
        
        oscillator.start(audioContext.currentTime + (i * 0.05));
        oscillator.stop(audioContext.currentTime + 0.15 + (i * 0.05));
    }
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top button
    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', scrollToTop);
    
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', closeMobileMenuOnClickOutside);
    
    // Navigation links
    setupNavigationLinks();
    
    // Product links in footer
    setupProductLinks();
    
    // Keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Window resize handler
    window.addEventListener('resize', handleResize);
}

function handleScroll() {
    // Show/hide back to top button
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    playSound('click');
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Change hamburger icon
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    
    playSound('click');
}

function closeMobileMenuOnClickOutside(event) {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function setupNavigationLinks() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Update active class
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            playSound('click');
        });
    });
}

function setupProductLinks() {
    document.querySelectorAll('.product-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.dataset.product;
            
            // Find and click the corresponding selector button
            const selectorBtn = document.querySelector(`.selector-btn[data-product="${product}"]`);
            if (selectorBtn) {
                selectorBtn.click();
                
                // Scroll to hero section first
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }
            
            playSound('select');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Toggle theme with Ctrl+T / Cmd+T
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            toggleTheme();
        }
        
        // Escape to close mobile menu
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Number keys 1-4 to select products
        if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            const products = ['script', 'rental', 'role', 'nokos'];
            
            if (products[index]) {
                const selectorBtn = document.querySelector(`.selector-btn[data-product="${products[index]}"]`);
                if (selectorBtn) {
                    selectorBtn.click();
                    e.preventDefault();
                }
            }
        }
    });
}

function handleResize() {
    // Close mobile menu on large screens
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// ===== INITIAL ANIMATION ON LOAD =====
window.addEventListener('load', function() {
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    // Animate hero elements sequentially
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .product-selector, .hero-stats');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ===== CONSOLE GREETING =====
console.log('%c🚀 AZBRY-MD WEBSITE 🚀', 'font-size: 24px; font-weight: bold; color: #25D366;');
console.log('%cWebsite pemesanan script WhatsApp Bot premium', 'font-size: 16px; color: #667EEA;');
console.log('%c📞 WhatsApp Admin: ' + ADMIN_PHONE, 'font-size: 14px; color: #128C7E;');
console.log('%cMade with ❤️ by Azbry-MD Team', 'font-size: 12px; color: #FF6B6B;');
