const ADMIN_PHONE = "6285189988271";
const ADMIN_NAME = "Admin FebryWesker";

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website loaded');
    
    // Jam realtime
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Event listeners
    setupButtons();
    
    // WhatsApp link
    updateWhatsAppLink();
});

// Update jam & tanggal
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour12: false });
    const date = now.toLocaleDateString('id-ID', { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    });
    
    document.getElementById('clock').textContent = time;
    document.getElementById('date').textContent = date;
}

// Setup semua button
function setupButtons() {
    console.log('🔧 Setting up buttons...');
    
    // Tombol produk (4 tombol utama)
    const productButtons = document.querySelectorAll('.selector-btn');
    productButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Product clicked:', this.dataset.product);
            
            // Highlight tombol yang diklik
            productButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Load produk
            loadProduct(this.dataset.product);
        });
    });
    
    // Tombol order (akan dibuat dinamis)
    setupOrderButtons();
    
    // Nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            if (target === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (target === '#contact') {
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // WhatsApp button di footer
    document.getElementById('whatsapp-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const message = `Halo ${ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`;
        const url = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

// Load produk
function loadProduct(product) {
    console.log('Loading:', product);
    
    // Scroll ke produk
    const productSection = document.getElementById('product-lists');
    productSection.innerHTML = '<h2>Loading...</h2>';
    productSection.classList.add('active');
    
    // Contoh produk sederhana
    let html = `<div class="container"><h2>${product.toUpperCase()}</h2>`;
    
    if (product === 'script') {
        html += `<p>Script bot WhatsApp premium dengan fitur lengkap</p>`;
    } else if (product === 'rental') {
        html += `<p>Sewa bot dengan harga terjangkau</p>`;
    } else if (product === 'role') {
        html += `<p>Role premium untuk akses fitur khusus</p>`;
    } else if (product === 'nokos') {
        html += `<p>Nomor kosong untuk keamanan bot</p>`;
    }
    
    html += `
        <div class="product-card" style="margin: 20px; padding: 20px; background: white; border-radius: 10px;">
            <h3>Produk ${product}</h3>
            <button class="btn-order" data-product="${product}">
                <i class="fab fa-whatsapp"></i> Pesan via WhatsApp
            </button>
        </div>
    </div>`;
    
    productSection.innerHTML = html;
    
    // Setup tombol order yang baru dibuat
    setupOrderButtons();
    
    // Scroll smooth
    setTimeout(() => {
        productSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Setup tombol order
function setupOrderButtons() {
    document.querySelectorAll('.btn-order').forEach(btn => {
        btn.addEventListener('click', function() {
            const product = this.dataset.product;
            console.log('Ordering:', product);
            
            // Pesan WhatsApp
            let message = `Halo ${ADMIN_NAME}, saya mau pesan:\n\n`;
            message += `📦 Produk: ${product.toUpperCase()}\n`;
            message += `💰 Mohon info harga dan cara pemesanan. Terima kasih!`;
            
            const url = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
}

// Update WhatsApp link di contact
function updateWhatsAppLink() {
    const btn = document.getElementById('whatsapp-btn');
    if (btn) {
        const message = `Halo ${ADMIN_NAME}, saya mau tanya tentang produk Azbry-MD`;
        btn.href = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
    }
}
