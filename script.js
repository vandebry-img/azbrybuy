// Configuration
const ADMIN_PHONE = "6285189988271"; // Ganti dengan nomor admin

// Global Variables
let currentProduct = null;

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const loading = document.getElementById('loading');
const productListsContainer = document.getElementById('product-lists');

// Product Data
const products = {
    script: {
        title: "🚀 PAKET SCRIPT AZBRY-MD",
        items: [
            {
                title: "📦 PAKET 1: BASIC - 15K",
                price: "Rp 15.000",
                period: "",
                features: [
                    "Script terbaru saja",
                    "Tanpa tutor pemasangan",
                    "Tanpa bimbingan",
                    "Support terbatas"
                ],
                note: "",
                popular: false
            },
            {
                title: "📦 PAKET 2: PREMIUM - 20K",
                price: "Rp 20.000",
                period: "",
                features: [
                    "Script original & terbaru",
                    "Tutorial lengkap pemula",
                    "Bimbingan sampai jadi",
                    "No enc 100%",
                    "Support 24 jam",
                    "Priority response"
                ],
                note: "",
                popular: true
            }
        ],
        terms: [
            "WAJIB punya panel sendiri",
            "TIDAK menyediakan panel gratis",
            "Beli = Paham konsekuensi",
            "Tidak accept komplain gagal paham",
            "Bot resiko banned? ITU NORMAL!",
            "No refund garansi jiwa"
        ]
    },
    rental: {
        title: "💰 PAKET SEWA BOT",
        subtitle: "NOTE : 1 TRANSAKSI UNTUK 1 GRUP",
        items: [
            {
                title: "📅 3 Hari",
                price: "Rp 10.000",
                period: "3 Hari",
                features: [
                    "Fitur utama bot lengkap",
                    "Bot masuk ke grup Anda",
                    "Aman untuk nomor utama",
                    "Support 24/7"
                ],
                note: "Bot kami yang masuk ke grup, nomor Anda tetap aman"
            },
            {
                title: "📅 1 Minggu",
                price: "Rp 15.000",
                period: "7 Hari",
                features: [
                    "Fitur utama bot lengkap",
                    "Bot masuk ke grup Anda",
                    "Aman untuk nomor utama",
                    "Support 24/7",
                    "Update rutin"
                ],
                note: "Bot kami yang masuk ke grup, nomor Anda tetap aman"
            },
            {
                title: "📅 2 Minggu",
                price: "Rp 25.000",
                period: "14 Hari",
                features: [
                    "Fitur utama bot lengkap",
                    "Bot masuk ke grup Anda",
                    "Aman untuk nomor utama",
                    "Support 24/7",
                    "Update rutin",
                    "Priority support"
                ],
                note: "Bot kami yang masuk ke grup, nomor Anda tetap aman",
                popular: true
            },
            {
                title: "📅 1 Bulan",
                price: "Rp 45.000",
                period: "30 Hari",
                features: [
                    "Fitur utama bot lengkap",
                    "Bot masuk ke grup Anda",
                    "Aman untuk nomor utama",
                    "Support 24/7",
                    "Update rutin",
                    "Priority support",
                    "Maintenance gratis"
                ],
                note: "Bot kami yang masuk ke grup, nomor Anda tetap aman"
            }
        ],
        features: [
            "✅ Downloader ALL SOSMED",
            "✅ Antilink & Antitagsw",
            "✅ Auto Welcome/Bye",
            "✅ Tools Admin Lengkap",
            "✅ Auto Responder AI",
            "✅ Support 24/7 Active"
        ],
        security: [
            "NOMOR BOT KAMI MASUK KE GRUP ANDA",
            "TIDAK PAKAI NOMOR ANDA SAMA SEKALI",
            "TIDAK ADA RISIKO BANNED NOMOR ANDA",
            "BOT KAMI YANG MENANGGUNG RISIKO",
            "100% AMAN UNTUK NOMOR UTAMA ANDA"
        ]
    },
    role: {
        title: "💎 ROLE PREMIUM",
        items: [
            {
                title: "📅 1 Minggu",
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
                title: "📅 2 Minggu",
                price: "Rp 10.000",
                period: "14 Hari",
                features: [
                    "Unlimited Limit",
                    "Akses fitur AI",
                    "Auto naik role",
                    "Auto Responder AI",
                    "Priority support"
                ],
                note: "Untuk user yang sudah punya bot",
                popular: true
            },
            {
                title: "📅 1 Bulan",
                price: "Rp 15.000",
                period: "30 Hari",
                features: [
                    "Unlimited Limit",
                    "Akses semua fitur AI",
                    "Auto naik role Yapping Final boss",
                    "Auto Responder AI",
                    "Priority support",
                    "Early access fitur baru"
                ],
                note: "Untuk user yang sudah punya bot",
                popular: false
            }
        ],
        benefits: [
            "✅ Unlimited Limit",
            "✅ Akses fitur AI",
            "✅ Auto naik role Yapping Final boss",
            "✅ Auto Responder AI"
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
                    "No ribet setting"
                ],
                note: "Stok selalu tersedia",
                popular: true
            }
        ],
        info: [
            "UNTUK KEAMANAN, PAKAI NOKOS!",
            "Jangan pakai nomor utama/pribadi",
            "Bot bisa kena banned anytime",
            "Kami sediakan NOKOS INDO FRESH (7K)",
            "Nomor tumbal = aman nomor utama",
            "No ribet, no takut banned"
        ]
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize real-time clock
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Set up theme
    initTheme();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize product selector
    initProductSelector();
});

// Real-time Clock
function updateDateTime() {
    const now = new Date();
    
    // Format time
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };
    const time = now.toLocaleTimeString('id-ID', timeOptions);
    document.getElementById('clock').textContent = time;
    
    // Format date
    const dateOptions = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };
    const date = now.toLocaleDateString('id-ID', dateOptions);
    document.getElementById('date').textContent = date;
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add animation
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
}

// Product Selector
function initProductSelector() {
    const selectorButtons = document.querySelectorAll('.selector-btn');
    
    selectorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            
            // Remove active class from all buttons
            selectorButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show loading
            showLoading();
            
            // Load product after delay for animation
            setTimeout(() => {
                loadProduct(product);
                hideLoading();
            }, 500);
        });
    });
}

function loadProduct(product) {
    currentProduct = product;
    
    // Show product lists container
    productListsContainer.classList.add('active');
    
    // Scroll to products
    productListsContainer.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Load product HTML
    productListsContainer.innerHTML = generateProductHTML(product);
    
    // Set up order buttons
    setupOrderButtons();
}

function generateProductHTML(product) {
    const productData = products[product];
    let html = `
        <div class="container">
            <div class="product-list active">
                <h2 class="section-title">${productData.title}</h2>
                ${productData.subtitle ? `<p class="section-subtitle">${productData.subtitle}</p>` : ''}
                
                <div class="product-grid">
    `;
    
    // Generate product cards
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
    
    // Add terms/features if available
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
            <div class="product-benefits">
                <h3><i class="fas fa-gem"></i> Benefit Role Premium:</h3>
                <div class="benefits-grid">
                    ${productData.benefits.map(benefit => `<div class="benefit-item">${benefit}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (productData.info) {
        html += `
            <div class="product-info">
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

// Order Functions
function setupOrderButtons() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const index = this.dataset.index;
            
            const productData = products[product];
            const item = productData.items[index];
            
            let message = `Halo admin Azbry-MD, saya mau pesan:\n\n`;
            message += `📦 *${item.title}*\n`;
            message += `💰 Harga: ${item.price}${item.period ? `/${item.period}` : ''}\n\n`;
            
            if (product === 'nokos') {
                message += `🔐 *NOKOS INDO FRESH*\n`;
                message += `Saya ingin memesan NOKOS untuk keamanan bot.\n\n`;
            } else if (product === 'script') {
                message += `🚀 *SCRIPT AZBRY-MD*\n`;
                message += `Saya ingin membeli script ${item.title.includes('PREMIUM') ? 'Premium' : 'Basic'}.\n\n`;
            } else if (product === 'rental') {
                message += `🤖 *SEWA BOT AZBRY-MD*\n`;
                message += `Saya ingin menyewa bot untuk ${item.period}.\n\n`;
            } else if (product === 'role') {
                message += `💎 *ROLE PREMIUM AZBRY-MD*\n`;
                message += `Saya ingin membeli role premium untuk ${item.period}.\n\n`;
            }
            
            message += `Mohon info lengkap untuk proses pemesanan.`;
            
            sendWhatsApp(message);
        });
    });
}

function sendWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Loading Functions
function showLoading() {
    loading.classList.add('active');
}

function hideLoading() {
    loading.classList.remove('active');
}

// Event Listeners Setup
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // Navigation links
    document.querySelectorAll('.nav-links a, .product-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('product-link')) {
                e.preventDefault();
                const product = this.dataset.product;
                
                // Simulate button click
                document.querySelector(`.selector-btn[data-product="${product}"]`).click();
            }
            
            // Close mobile menu
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animation to elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.section-title, .contact-content').forEach(el => {
        observer.observe(el);
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Toggle theme with Ctrl+T
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Back to top with Escape
    if (e.key === 'Escape' && window.pageYOffset > 300) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
