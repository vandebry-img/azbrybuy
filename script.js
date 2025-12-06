// ===== KONFIGURASI UTAMA =====
const ADMIN_PHONE = "628xxxxxxxxxx"; // ⚠️ GANTI DENGAN NOMOR ADMIN ANDA!
const ADMIN_NAME = "Admin Azbry-MD";

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
        title: "🚀 PAKET SCRIPT AZBRY-MD",
        items: [
            {
                title: "📦 PAKET BASIC - 15K",
                price: "Rp 15.000",
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
                title: "📦 PAKET PREMIUM - 20K",
                price: "Rp 20.000",
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
    
    if (productData
