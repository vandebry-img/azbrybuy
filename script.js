// ===== KONFIGURASI =====
const ADMIN_PHONE = "6285189988271"; // ⚠️ GANTI DENGAN NOMOR ANDA
const ADMIN_NAME = "Febry";

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
        title: "🚀 PAKET SCRIPT AZBRY-MD (PRICE TANYA LANGSUNG)",
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
                title: "📦 PREMIUM - 20K",
                price: "Rp 20.000",
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
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
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

// ===== FUNGSI PRODUK =====
function setupProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    selectorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            
            // Remove active class
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class
            this.classList.add('active');
            
            // Show loading
            showLoading();
            
            // Load product
            setTimeout(() => {
                loadProduct(product);
                hideLoading();
            }, 300);
        });
    });
}

function loadProduct(product) {
    currentProduct = product;
    
    // Show container
    productListsContainer.classList.add('active');
    
    // Scroll to products
    setTimeout(() => {
        productListsContainer.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
    
    // Load HTML
    productListsContainer.innerHTML = generateProductHTML(product);
    
    // Setup order buttons
    setupOrderButtons();
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
            <div class="product-card ${item.popular ? 'popular' : ''}">
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
                
                <button class="btn-order" data-product="${product}" data-index="${index}">
                    <i class="fab fa-whatsapp"></i> Pesan Sekarang
                </button>
            </div>
        `;
    });
    
    html += `
                </div>
    `;
    
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

// ===== FUNGSI ORDER =====
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const index = this.dataset.index;
            
            const productData = products[product];
            const item = productData.items[index];
            
            let message = `Halo ${ADMIN_NAME}, saya mau pesan:\n\n`;
            message += `📦 *${item.title}*\n`;
            message += `💰 ${item.price}${item.period ? ` (${item.period})` : ''}\n\n`;
            
            if (product === 'nokos') {
                message += `🔐 NOKOS INDO FRESH\n`;
            } else if (product === 'script') {
                message += `🚀 SCRIPT AZBRY-MD\n`;
            } else if (product === 'rental') {
                message += `🤖 SEWA BOT AZBRY-MD\n`;
            } else if (product === 'role') {
                message += `💎 ROLE PREMIUM\n`;
            }
            
            message += `Mohon info untuk pemesanan.`;
            
            sendToWhatsApp(message);
        });
    });
}

function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
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
}

function hideLoading() {
    loading.classList.remove('active');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Back to top
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Change icon
        const icon = this.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu on click outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Product links in footer
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
    
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Close mobile menu
                if (window.innerWidth < 768) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
}

// ===== INITIAL ANIMATION =====
window.addEventListener('load', function() {
    // Add fade-in animation to hero
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .product-selector');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
