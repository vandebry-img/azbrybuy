/* ════════════════════════════════════════
   Azbry Store — script.js v2
   © 2026 FebryWesker
   ════════════════════════════════════════ */

const ADMIN_PHONE = '6285189988271';

// ── PRODUCT DATA ─────────────────────────
const products = {
  script: {
    title: 'Script Bot',
    subtitle: 'Source code Azbry-MD versi terbaru',
    items: [
      {
        title: 'Script Azbry-MD',
        price: 'Rp 30.000',
        period: '',
        popular: true,
        features: [
          'Source script Azbry-MD versi terbaru',
          '400+ plugin siap pakai (AI, Downloader, Tools, RPG)',
          'Native Flow Button & Hybrid Menu',
          'Downloader 12+ platform (TikTok, IG, YT, Spotify, dll)',
          'AI Chat: Gemini, GPT, Claude, SORA & Image AI',
          'Sistem Premium, Limit, XP & Store',
          'Auto Sholat, Anti Spam, Auto Sticker & lainnya',
          'Bebas deploy di panel / server sendiri',
        ],
        note: '🔖 Termasuk dukungan 1 bulan. Jika bot error atau ada kendala teknis akan dibantu sampai selesai. Tidak termasuk update script.',
      },
      {
        title: 'Script Azbry-MD + Panel 1 Bulan',
        price: 'Rp 35.000',
        period: '',
        popular: false,
        features: [
          'Source script Azbry-MD versi terbaru',
          '400+ plugin siap pakai (AI, Downloader, Tools, RPG)',
          'Native Flow Button & Hybrid Menu',
          'Downloader 12+ platform lengkap',
          'AI Chat: Gemini, GPT, Claude, SORA & Image AI',
          'Sistem Premium, Limit, XP & Store',
          'Gratis panel selama 1 bulan',
          'Tidak perlu setup server sendiri',
          'Bebas pindah ke panel / server sendiri kapan saja',
        ],
        note: '🔖 Termasuk dukungan 1 bulan. Panel gratis hanya bonus 1 bulan sesuai syarat & ketentuan. Tidak termasuk update script.',
      },
    ],
    extra: {
      type: 'terms',
      title: 'Syarat & Ketentuan',
      icon: 'fa-exclamation-triangle',
      items: [
        '➤ Pembeli wajib memiliki panel / server sendiri',
        '➤ Tidak menyediakan panel gratis',
        '➤ Wajib paham risiko penggunaan bot WhatsApp',
        '➤ Risiko banned adalah hal normal',
        '➤ Tidak ada refund dengan alasan apapun',
      ],
    },
  },

  rental: {
    title: 'Sewa Bot',
    subtitle: '1 transaksi untuk 1 grup',
    items: [
      {
        title: '3 Hari',
        price: 'Rp 10.000',
        period: '3 Hari',
        popular: false,
        features: ['Fitur utama lengkap', 'Bot masuk ke grup kamu', 'Nomor kamu aman', 'Support 24/7'],
        note: 'Cocok untuk testing',
      },
      {
        title: '1 Minggu',
        price: 'Rp 15.000',
        period: '7 Hari',
        popular: false,
        features: ['Semua fitur 3 hari', 'Downloader lengkap', 'Priority queue', 'Bonus stiker pack'],
        note: 'Untuk kebutuhan mingguan',
      },
      {
        title: '2 Minggu',
        price: 'Rp 25.000',
        period: '14 Hari',
        popular: true,
        features: ['Semua fitur 1 minggu', 'Double priority', 'Custom command', 'Advanced anti-spam', 'Free extend 1 hari'],
        note: '💎 Hemat 30% dari perminggu!',
      },
      {
        title: '1 Bulan',
        price: 'Rp 45.000',
        period: '30 Hari',
        popular: false,
        features: ['Semua fitur 2 minggu', 'Max priority support', 'Unlimited custom command', 'Full maintenance', 'VIP customer status', 'Free extend 3 hari'],
        note: '🔥 Paling hemat! Hanya 1.5K/hari',
      },
    ],
    extra: {
      type: 'security',
      title: 'Keamanan Nomor Kamu',
      icon: 'fa-shield-alt',
      items: [
        '🛡️ Nomor bot kami yang masuk ke grup',
        '🛡️ Tidak pakai nomor kamu',
        '🛡️ No risiko banned nomor utama',
        '🛡️ Bot kami yang tanggung risiko',
        '🛡️ 100% aman untuk nomor utama',
      ],
    },
  },

  role: {
    title: 'Role Premium',
    subtitle: 'Upgrade status kamu di bot',
    items: [
      {
        title: '1 Minggu',
        price: 'Rp 7.000',
        period: '7 Hari',
        popular: false,
        features: ['Unlimited Limit', 'Akses fitur AI', 'Auto naik role', 'Auto Responder AI', 'Badge premium'],
        note: 'Rekomendasi untuk testing',
      },
      {
        title: '2 Minggu',
        price: 'Rp 14.000',
        period: '14 Hari',
        popular: true,
        features: ['Semua fitur 1 minggu', 'Double priority', 'Early access fitur baru', 'Custom AI personality', 'Exclusive sticker'],
        note: '💎 Hemat 30% dari perminggu!',
      },
      {
        title: '1 Bulan',
        price: 'Rp 25.000',
        period: '30 Hari',
        popular: false,
        features: ['Semua fitur 2 minggu', 'Max priority support', 'Auto naik role Final Boss', 'Unlimited AI requests', 'VIP badge & crown icon', 'Special mention di grup'],
        note: '🔥 Paling hemat!',
      },
    ],
    extra: {
      type: 'benefits',
      title: 'Benefit Premium',
      icon: 'fa-gem',
      items: [
        '✅ Unlimited Limit semua command',
        '✅ Akses fitur AI premium',
        '✅ Auto naik role Final Boss',
        '✅ Auto Responder AI',
        '✅ Priority queue',
        '✅ VIP badge & status',
      ],
    },
  },

  nokos: {
    title: 'Nokos Indo Fresh',
    subtitle: 'Nomor siap pakai untuk bot WhatsApp',
    items: [
      {
        title: 'Nokos Indo Fresh',
        price: 'Rp 6.000',
        period: 'per Nomor',
        popular: true,
        features: [
          'Nomor Indonesia fresh',
          'Siap pakai untuk bot',
          'Garansi nomor kenon (Awal Login)',
          'Garansi kode OTP tidak masuk (Awal Login)',
          'Fast proses',
        ],
        note: '🔥 Stok terbatas! Harga bisa berubah kapanpun.',
      },
    ],
    extra: {
      type: 'info',
      title: 'Kenapa Pakai Nokos?',
      icon: 'fa-info-circle',
      items: [
        '🔐 Jangan pakai nomor utama untuk bot',
        '🔐 Bot bisa kena banned anytime',
        '🔐 Nomor nokos = nomor utama tetap aman',
        '🔐 No ribet, no takut banned',
      ],
    },
  },
};

// ── CATEGORY OPEN/CLOSE ───────────────────
function openCategory(cat, btn) {
  const grid = document.getElementById('catGrid');
  const drawer = document.getElementById('productDrawer');
  const titleEl = document.getElementById('drawerTitle');
  const subEl = document.getElementById('drawerSub');
  const data = products[cat];
  if (!data) return;

  // Update title
  titleEl.textContent = data.title;
  subEl.textContent = data.subtitle || '';

  // Render products
  renderProducts(cat);

  // Hide grid, show drawer
  grid.style.display = 'none';
  drawer.classList.add('open');
  drawer.style.display = 'block';

  // Scroll to products section
  const section = document.getElementById('products');
  if (section) {
    window.scrollTo({ top: section.offsetTop - 56, behavior: 'smooth' });
  }
}

function closeCategory() {
  const grid = document.getElementById('catGrid');
  const drawer = document.getElementById('productDrawer');

  drawer.classList.remove('open');
  drawer.style.display = 'none';
  grid.style.display = 'flex';
}

// ── RENDER PRODUCTS ───────────────────────
function renderProducts(cat) {
  const data = products[cat];
  if (!data) return;

  const area = document.getElementById('productArea');
  if (!area) return;

  let html = `<div class="s-product-grid">`;

  data.items.forEach((item, i) => {
    html += `
      <div class="s-product-card${item.popular ? ' popular' : ''}">
        ${item.popular ? '<div class="s-popular-badge">POPULER</div>' : ''}
        <div class="s-product-header">
          <div class="s-product-title">${item.title}</div>
          <div class="s-product-price">${item.price}</div>
          ${item.period ? `<div class="s-product-period">/ ${item.period}</div>` : ''}
        </div>
        <div class="s-product-features">
          <div class="s-features-label">Fitur yang didapat</div>
          <ul class="s-feature-list">
            ${item.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        ${item.note ? `<div class="s-product-note">${item.note}</div>` : ''}
        ${cat === 'script' ? `
        <button class="s-btn s-btn-docs s-btn-full" onclick="openDocsModal()">
          <i class="fas fa-images"></i> Lihat Dokumentasi Bot
        </button>` : ''}
        <button class="s-btn s-btn-order s-btn-full" onclick="orderProduct('${cat}', ${i})">
          <i class="fab fa-whatsapp"></i> Pesan Sekarang
        </button>
      </div>
    `;
  });

  html += `</div>`;

  if (data.extra) {
    html += `
      <div class="s-extra-section">
        <div class="s-extra-title"><i class="fas ${data.extra.icon}"></i> ${data.extra.title}</div>
        <ul class="s-extra-list">
          ${data.extra.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  area.innerHTML = html;
  area.style.animation = 'none';
  area.offsetHeight;
  area.style.animation = '';
}

// ── DOCS MODAL ────────────────────────────
const BOT_DOCS = {
  groupLink: 'https://chat.whatsapp.com/CYa5CRl8K1lAK4NNCYmHJe',
  screenshots: [
    { src: 'docs/ss1.jpg', caption: 'Menu Utama Bot' },
    { src: 'docs/ss2.jpg', caption: 'Button Menu Utama' },
    { src: 'docs/ss17.jpg', caption: 'Support Status Group' },
    { src: 'docs/ss18.jpg', caption: 'Tanpa Jadi Admin Group' },
    { src: 'docs/ss5.jpg', caption: 'Message Type Carousel' },
    { src: 'docs/ss6.jpg', caption: 'Bisa Open Sewa Bot' },
    { src: 'docs/ss3.jpg', caption: 'Play Music Instant Sent?' },
    { src: 'docs/ss4.jpg', caption: 'Tiktok Downloader' },
    { src: 'docs/ss7.jpg', caption: 'Youtube Downloader' },
    { src: 'docs/ss8.jpg', caption: 'Instagram Downloader' },
    { src: 'docs/ss11.jpg', caption: 'Iphone Quick Chat Maker' },  
    { src: 'docs/ss12.jpg', caption: 'Maker Brat / Brat Video' },
    { src: 'docs/ss13.jpg', caption: 'HD Video' },
    { src: 'docs/ss14.jpg', caption: 'Remove Background Image' },
    { src: 'docs/ss15.jpg', caption: 'HD Image' },
    { src: 'docs/ss16.jpg', caption: 'All Fitur (1000+)' },
  ],
};

let docsActiveIndex = 0;

function openDocsModal() {
  // restore saved ratio pref
  try {
    const saved = localStorage.getItem('docs-ratio');
    if (saved && DOCS_RATIOS.includes(saved)) docsActiveRatio = saved;
  } catch(_) {}

  let modal = document.getElementById('docsModal');
  if (!modal) {
    modal = buildDocsModal();
    document.body.appendChild(modal);
  } else {
    // sync ratio state ke DOM yang sudah ada
    const wrapper = modal.querySelector('#docsHeroRatio');
    if (wrapper) wrapper.setAttribute('data-ratio', docsActiveRatio);
    modal.querySelectorAll('.s-docs-ratio-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === docsActiveRatio);
    });
  }
  docsActiveIndex = 0;
  renderDocsGallery(modal);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDocsModal() {
  const modal = document.getElementById('docsModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

const DOCS_RATIOS = ['16:9', '1:1', '9:16', '3:4'];
let docsActiveRatio = '16:9';

function buildDocsModal() {
  const modal = document.createElement('div');
  modal.id = 'docsModal';
  modal.className = 's-docs-modal';
  modal.innerHTML = `
    <div class="s-docs-backdrop" onclick="closeDocsModal()"></div>
    <div class="s-docs-sheet">
      <div class="s-docs-handle"></div>
      <div class="s-docs-header">
        <div class="s-docs-htitle">
          <i class="fas fa-images"></i>
          <span>Dokumentasi Bot</span>
        </div>
        <button class="s-docs-close" onclick="closeDocsModal()">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="s-docs-ratio-bar" id="docsRatioBar">
        ${DOCS_RATIOS.map(r => `
          <button class="s-docs-ratio-btn${r === docsActiveRatio ? ' active' : ''}"
            onclick="docsSetRatio('${r}')">${r}</button>
        `).join('')}
      </div>

      <div class="s-docs-hero" id="docsHero">
        <div class="s-docs-hero-ratio" id="docsHeroRatio" data-ratio="${docsActiveRatio}">
          <img id="docsHeroImg" src="" alt="" class="s-docs-hero-img">
          <div class="s-docs-hero-caption" id="docsHeroCaption"></div>
          <button class="s-docs-nav s-docs-nav-prev" onclick="docsNav(-1)"><i class="fas fa-chevron-left"></i></button>
          <button class="s-docs-nav s-docs-nav-next" onclick="docsNav(1)"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>

      <div class="s-docs-dots" id="docsDots"></div>

      <div class="s-docs-thumbs" id="docsThumbs"></div>

      <div class="s-docs-footer">
        <div class="s-docs-counter" id="docsCounter"></div>
        <a href="${BOT_DOCS.groupLink}" target="_blank" class="s-btn s-btn-wa s-btn-docs-join">
          <i class="fab fa-whatsapp"></i> Join Grup Preview Bot
        </a>
      </div>
    </div>
  `;

  // Swipe support
  let startX = 0;
  const hero = modal.querySelector('.s-docs-hero');
  hero.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) docsNav(diff > 0 ? 1 : -1);
  }, { passive: true });

  return modal;
}

function docsSetRatio(ratio) {
  docsActiveRatio = ratio;
  const modal = document.getElementById('docsModal');
  if (!modal) return;
  // update ratio wrapper
  const wrapper = modal.querySelector('#docsHeroRatio');
  if (wrapper) wrapper.setAttribute('data-ratio', ratio);
  // update active button
  modal.querySelectorAll('.s-docs-ratio-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === ratio);
  });
  // save pref
  try { localStorage.setItem('docs-ratio', ratio); } catch(_) {}
}

function renderDocsGallery(modal) {
  const imgs = BOT_DOCS.screenshots;
  const heroImg = modal.querySelector('#docsHeroImg');
  const heroCap = modal.querySelector('#docsHeroCaption');
  const dots = modal.querySelector('#docsDots');
  const thumbs = modal.querySelector('#docsThumbs');
  const counter = modal.querySelector('#docsCounter');

  const active = imgs[docsActiveIndex];
  heroImg.src = active.src;
  heroImg.alt = active.caption;
  heroCap.textContent = active.caption;
  counter.textContent = `${docsActiveIndex + 1} / ${imgs.length}`;

  dots.innerHTML = imgs.map((_, i) =>
    `<button class="s-docs-dot${i === docsActiveIndex ? ' active' : ''}" onclick="docsGoTo(${i})"></button>`
  ).join('');

  thumbs.innerHTML = imgs.map((img, i) =>
    `<button class="s-docs-thumb${i === docsActiveIndex ? ' active' : ''}" onclick="docsGoTo(${i})">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.parentElement.classList.add('err')">
    </button>`
  ).join('');
}

function docsNav(dir) {
  const imgs = BOT_DOCS.screenshots;
  docsActiveIndex = (docsActiveIndex + dir + imgs.length) % imgs.length;
  const modal = document.getElementById('docsModal');
  if (modal) renderDocsGallery(modal);
}

function docsGoTo(i) {
  docsActiveIndex = i;
  const modal = document.getElementById('docsModal');
  if (modal) renderDocsGallery(modal);
}

// ── ORDER ─────────────────────────────────
function orderProduct(cat, index) {
  const item = products[cat].items[index];
  let msg = `🛒 *PEMESANAN BARU*\n\n`;
  msg += `📦 *Produk:* ${item.title}\n`;
  msg += `💰 *Harga:* ${item.price}${item.period ? ` / ${item.period}` : ''}\n\n`;
  msg += `✅ *Fitur:*\n`;
  item.features.forEach(f => { msg += `• ${f}\n`; });
  msg += `\nMohon info lebih lanjut & cara pembayaran.\nTerima kasih! 🙏`;

  window.open(`https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  showToast('Membuka WhatsApp...');
}

// ── PROJECTS COLLAPSE ─────────────────────
let projectsOpen = false;

function toggleProjects() {
  projectsOpen = !projectsOpen;
  const toggle = document.getElementById('projectsToggle');
  const wrap = document.getElementById('projectsWrap');

  toggle.classList.toggle('open', projectsOpen);
  wrap.classList.toggle('open', projectsOpen);
}

// ── INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initTheme();
  initClock();
  initHeader();
  initMobileMenu();
  initBackToTop();
  initScrollProgress();
  initNavLinks();
  animateStats();
  logConsole();
});

// ── LOADING ───────────────────────────────
function initLoading() {
  const el = document.getElementById('loading');
  const fill = document.getElementById('loadingFill');
  if (!el) return;

  let w = 0;
  const iv = setInterval(() => {
    w = Math.min(w + Math.random() * 25, 95);
    if (fill) fill.style.width = w + '%';
  }, 200);

  setTimeout(() => {
    clearInterval(iv);
    if (fill) fill.style.width = '100%';
    setTimeout(() => {
      el.classList.add('hide');
      setTimeout(() => { el.style.display = 'none'; }, 400);
    }, 200);
  }, 1200);
}

// ── THEME ─────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('s-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('s-theme', next);
    showToast(next === 'dark' ? 'Mode Gelap' : 'Mode Terang');
  });
}

// ── CLOCK ─────────────────────────────────
function initClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const tick = () => {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  tick();
  setInterval(tick, 10000);
}

// ── HEADER HIDE/SHOW ─────────────────────
function initHeader() {
  const h = document.getElementById('header');
  if (!h) return;
  let last = 0;
  window.addEventListener('scroll', throttle(() => {
    const cur = window.scrollY;
    h.style.transform = (cur > last && cur > 80) ? 'translateY(-100%)' : 'translateY(0)';
    last = cur;
  }, 80));
}

// ── MOBILE MENU ───────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileNav');
  if (!btn || !menu) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = menu.classList.toggle('open');
    btn.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
  });

  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.querySelector('i').className = 'fas fa-bars';
    }
  });

  menu.querySelectorAll('.s-mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelector('i').className = 'fas fa-bars';
    });
  });
}

// ── BACK TO TOP ───────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', throttle(() => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, 100));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── SCROLL PROGRESS ───────────────────────
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', throttle(() => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = ((window.scrollY / total) * 100) + '%';
  }, 50));
}

// ── NAV ACTIVE ────────────────────────────
function initNavLinks() {
  const sections = ['home', 'products', 'projects', 'contact'];
  const links = document.querySelectorAll('.s-nav-link');

  window.addEventListener('scroll', throttle(() => {
    let cur = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 80) cur = id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }, 100));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 56, behavior: 'smooth' });
    });
  });
}

// ── STATS COUNTER ─────────────────────────
function animateStats() {
  document.querySelectorAll('.s-stat-val[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const step = target / 80;
    let cur = 0;
    const iv = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur >= target ? target : Math.floor(cur);
      if (cur >= target) clearInterval(iv);
    }, 16);
  });
}

// ── TOAST ─────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (!t || !m) return;
  m.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── UTILITIES ─────────────────────────────
function throttle(fn, ms) {
  let t;
  return function (...a) {
    if (!t) { fn.apply(this, a); t = setTimeout(() => t = null, ms); }
  };
}

// ── CONSOLE ───────────────────────────────
function logConsole() {
  console.log('%cAzbry Store', 'color:#c4b5fd;font-size:20px;font-weight:bold;');
  console.log('%cGlassmorphism Edition v2 · by FebryWesker', 'color:#93c5fd;font-size:13px;');
  console.log('%cGitHub: github.com/vandebry10-star', 'color:#f9a8d4;font-size:11px;');
  console.log('%c⚠️ Jangan paste kode asing di sini!', 'color:#f87171;font-size:12px;font-weight:bold;');
}
