// WhatsApp Configuration - GANTI DENGAN NOMOR ADMIN ANDA
const ADMIN_PHONE = "6285189988271"; // Ganti dengan nomor admin (tanpa +)

// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Order Functions
function orderScript(type) {
    const packageName = type === 'basic' ? 'PAKET BASIC - 15K' : 'PAKET PREMIUM - 20K';
    const price = type === 'basic' ? 'Rp 15.000' : 'Rp 20.000';
    
    const message = `Halo admin, saya mau pesan script Azbry-MD:\n\n` +
                   `📦 *${packageName}*\n` +
                   `💰 Harga: ${price}\n\n` +
                   `Saya ingin memesan paket ini, bagaimana cara pembayarannya?`;
    
    sendWhatsApp(message);
}

function orderRental(duration) {
    const durations = {
        '3hari': { name: '3 Hari', price: 'Rp 10.000' },
        '1minggu': { name: '1 Minggu', price: 'Rp 15.000' },
        '2minggu': { name: '2 Minggu', price: 'Rp 25.000' },
        '1bulan': { name: '1 Bulan', price: 'Rp 45.000' }
    };
    
    const selected = durations[duration];
    
    const message = `Halo admin, saya mau sewa bot Azbry-MD:\n\n` +
                   `📅 *${selected.name}*\n` +
                   `💰 Harga: ${selected.price}\n\n` +
                   `Mohon info lengkap untuk proses sewa bot.`;
    
    sendWhatsApp(message);
}

function orderRole(duration) {
    const durations = {
        '1minggu': { name: '1 Minggu', price: 'Rp 7.000' },
        '2minggu': { name: '2 Minggu', price: 'Rp 10.000' },
        '1bulan': { name: '1 Bulan', price: 'Rp 15.000' }
    };
    
    const selected = durations[duration];
    
    const message = `Halo admin, saya mau beli Role Premium Azbry-MD:\n\n` +
                   `💎 *${selected.name}*\n` +
                   `💰 Harga: ${selected.price}\n\n` +
                   `Saya ingin membeli role premium ini.`;
    
    sendWhatsApp(message);
}

function orderNokos() {
    const message = `Halo admin, saya mau pesan NOKOS INDO FRESH:\n\n` +
                   `🔐 *NOKOS INDO FRESH*\n` +
                   `💰 Harga: Rp 7.000 / Nomor\n\n` +
                   `Saya ingin memesan NOKOS untuk keamanan bot.`;
    
    sendWhatsApp(message);
}

// Send WhatsApp Message
function sendWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${ADMIN_PHONE}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappURL, '_blank');
}

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Simple animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.package-card, .rental-card, .role-card').forEach(el => {
    observer.observe(el);
});
