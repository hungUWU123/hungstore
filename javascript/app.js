// ===== PRODUCT DATA =====
const productImg = 'https://cdn.hstatic.net/products/1000281824/god2_d1541690f3094eb5a9b8c0b80088b72a_compact.png';

const products = {
    ao: [
        { name: 'Áo Tank Top Degrey XÁM Cotton 4 chiều New Logo - TANKNEWLOGOXAM', price: 300000, oldPrice: 380000, badge: 'sale' },
        { name: 'Áo Tank Top Degrey ĐEN Cotton 4 chiều New Logo - TANKNEWLOGODEN', price: 300000, oldPrice: 380000, badge: 'sale' },
        { name: 'Áo Tank Top Degrey Cotton 4 chiều WAX XÁM New Logo - TANKWAXLOGO', price: 320000, oldPrice: 450000, badge: 'sale' },
        { name: 'Áo Tank Top Degrey TRẮNG Cotton 4 chiều New Logo - TANKNEWLOGOTRANG', price: 300000, oldPrice: 380000, badge: 'sale' },
        { name: 'Áo Tank Top Degrey GREEN Cotton 4 chiều New Logo - TANKNEWLOGOGREEN', price: 300000, oldPrice: 380000, badge: 'sale' },
        { name: 'Áo Tank Top Degrey NAVY Cotton 4 chiều New Logo - TANKNEWLOGONAVY', price: 300000, oldPrice: 380000, badge: 'sale' },
        { name: 'Áo Hoodie Zip collab Gods Gear - DEGODHOOD', price: 1500000, oldPrice: 1800000, badge: 'collab' },
        { name: 'Jacket màu ĐEN VÀNG THÊU LOGO ATHLETE - JKLOGOVANG', price: 610000, oldPrice: 780000, badge: 'sale' },
    ],
    quan: [
        { name: 'Quần Dài màu ĐEN VÀNG Long Pants Poly THÊU Logo - PAPOLYVANG', price: 450000, oldPrice: 570000, badge: 'sale' },
        { name: 'Quần Dài màu ĐEN XÁM Long Pants Poly in Logo - PAPOLYXAM', price: 420000, oldPrice: 530000, badge: 'sale' },
        { name: 'Quần Dài màu ĐEN Long Pants Micro Poly - PAMICRO', price: 410000, oldPrice: 520000, badge: 'sale' },
        { name: 'Quần lửng Kaki ĐEN ATHLETE short Kaki pant - SOKAKIATHDEN', price: 350000, oldPrice: 580000, badge: 'sale' },
        { name: 'Quần Korea lửng chân cua màu đen thêu BIG D - SHOPADBIGD', price: 420000, oldPrice: 480000, badge: 'collab' },
        { name: 'Quần màu ĐEN thêu Big Logo thể thao - QTTBIGDEGREY', price: 250000, oldPrice: 350000, badge: 'sale' },
        { name: 'Quần màu ĐEN thêu Big D thể thao - QTTBIGD', price: 250000, oldPrice: 350000, badge: 'sale' },
        { name: 'Quần lửng chân cua WAX XÁM short pant - SHOWAXXAM', price: 450000, oldPrice: 580000, badge: 'sale' },
    ],
    balo: [
        { name: 'Balo Simili Nap Basic Khoá Gài SS2 - SNAPGAI', price: 530000, oldPrice: 770000, badge: 'sale' },
        { name: 'Balo Powerload WHITE Canvas 1680D - POWBPT', price: 970000, oldPrice: 1250000, badge: 'sale' },
        { name: 'Balo Powerload Black Canvas 1680D - POWBP', price: 970000, oldPrice: 1250000, badge: 'sale' },
        { name: 'Leather A DECADE Basic Balo - LBBDECADE', price: 500000, oldPrice: 665000, badge: 'sale' },
        { name: 'Balo Powerload MID SIZE Black Canvas 1680D - POWMID', price: 700000, oldPrice: 880000, badge: 'sale' },
        { name: 'Small Size Simili màu nâu jean Balo - LBBMNAU', price: 390000, oldPrice: 430000, badge: 'new' },
        { name: 'Balo Travel Backpack Canvas màu đen - TRABP', price: 600000, oldPrice: 850000, badge: 'sale' },
        { name: 'Double Leather Basic Balo - LBBD', price: 530000, oldPrice: 770000, badge: 'bestseller' },
    ],
    tui: [
        { name: 'Túi Simili Box Cross Bag - BOXBAG', price: 400000, oldPrice: 500000, badge: 'sale' },
        { name: 'Túi Xách ĐEN XÁM logo D thể thao Gym - TTGDXAM', price: 550000, oldPrice: 650000, badge: 'new' },
        { name: 'Túi Xách TRẮNG DECADE thể thao Gym - TTGDECADE', price: 550000, oldPrice: 650000, badge: 'new' },
        { name: 'Túi Mini Clutch - DMC', price: 190000, oldPrice: 330000, badge: 'sale' },
        { name: 'Túi Powerload Bag Black Canvas 1680D - POWBAG', price: 420000, oldPrice: 550000, badge: 'sale' },
        { name: 'Túi Sling Bag 2in1 Suede Simili - SLING', price: 400000, oldPrice: 500000, badge: 'sale' },
        { name: 'Túi Da Suede simili Big Logo đeo chéo - SUEDE', price: 410000, oldPrice: 450000, badge: 'sale' },
        { name: 'Túi da simili đeo chéo form vuông màu kem - VUONGK', price: 280000, oldPrice: 300000, badge: 'sale' },
    ],
    non: [
        { name: 'Nón lưỡi trai trơn basic thêu logo mocha - CAPBM', price: 200000, oldPrice: 300000, badge: 'sale' },
        { name: 'Mũ trắng phối hồng lưỡi trai cap - CAPTHO', price: 230000, oldPrice: 330000, badge: 'sale' },
        { name: 'Mũ trắng phối xanh lưỡi trai cap - CAPTXA', price: 230000, oldPrice: 330000, badge: 'sale' },
        { name: 'Mũ trắng phối đỏ lưỡi trai cap - CAPTDO', price: 230000, oldPrice: 330000, badge: 'sale' },
        { name: 'Mũ đỏ phối đen lưỡi trai cap - CAPDD', price: 230000, oldPrice: 330000, badge: 'new' },
        { name: 'Nón lưỡi trai form frame cap màu đỏ - FRAMER', price: 200000, oldPrice: 300000, badge: 'sale' },
        { name: 'Nón lưỡi trai basic màu xanh navy - CAPBX', price: 200000, oldPrice: 300000, badge: 'sale' },
        { name: 'Nón lưỡi trai basic màu xanh rêu - CAPBG', price: 200000, oldPrice: 300000, badge: 'sale' },
    ]
};

// ===== HELPERS =====
function formatPrice(p) { return p.toLocaleString('vi-VN') + '₫'; }
const badgeLabels = { sale: 'SALE', new: 'NEW', collab: 'COLLAB', bestseller: 'BEST SELLER' };

// ===== RENDER PRODUCTS (homepage only) =====
function renderProducts(gridId, items, category) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = items.map((item, i) => {
        const safeName = item.name.replace(/'/g, "\\'");
        return `
        <div class="product-card" style="transition-delay: ${i * 60}ms" onclick="window.location='product.html?cat=${category}&id=${i}'">
            <div class="product-img-wrap">
                <img src="${productImg}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="product-badge badge-${item.badge}">${badgeLabels[item.badge]}</span>` : ''}
                <div class="product-actions">
                    <button onclick="event.stopPropagation(); addToCart('${safeName}', ${item.price})">THÊM GIỎ HÀNG</button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${item.name}</h3>
                <div class="product-prices">
                    <span class="product-price">${formatPrice(item.price)}</span>
                    ${item.oldPrice ? `<span class="product-price-old">${formatPrice(item.oldPrice)}</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
}

// Init product grids if on homepage
if (document.getElementById('grid-ao')) {
    renderProducts('grid-ao', products.ao, 'ao');
    renderProducts('grid-quan', products.quan, 'quan');
    renderProducts('grid-balo', products.balo, 'balo');
    renderProducts('grid-tui', products.tui, 'tui');
    renderProducts('grid-non', products.non, 'non');
}

// ===== SLIDER (homepage only) =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
if (slides.length > 0) {
    let currentSlide = 0;
    let autoSlide;
    const SLIDE_DURATION = 5000;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        resetProgressBar();
    }

    function resetProgressBar() {
        const bar = document.querySelector('.slider-progress-bar');
        if (!bar) return;
        bar.style.transition = 'none';
        bar.style.width = '0%';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                bar.style.transition = `width ${SLIDE_DURATION}ms linear`;
                bar.style.width = '100%';
            });
        });
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => goToSlide(currentSlide + 1), SLIDE_DURATION);
        resetProgressBar();
    }
    function resetAutoSlide() { clearInterval(autoSlide); startAutoSlide(); }

    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); resetAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); resetAutoSlide(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goToSlide(i); resetAutoSlide(); }));
    startAutoSlide();

    // Touch swipe
    let touchStartX = 0;
    let touchStartY = 0;
    const slider = document.getElementById('slider');
    if (slider) {
        slider.style.touchAction = 'pan-y'; // allow vertical scroll
        slider.addEventListener('touchstart', e => { 
            touchStartX = e.changedTouches[0].screenX; 
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        slider.addEventListener('touchend', e => {
            const diffX = touchStartX - e.changedTouches[0].screenX;
            const diffY = touchStartY - e.changedTouches[0].screenY;
            // Only trigger if horizontal swipe is larger than 50px AND larger than vertical swipe
            if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) { 
                goToSlide(diffX > 0 ? currentSlide + 1 : currentSlide - 1); 
                resetAutoSlide(); 
            }
        }, { passive: true });
    }
}

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
}

// ===== SEARCH OVERLAY =====
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchClose = document.getElementById('search-close');
if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => { searchOverlay.classList.add('active'); if (searchInput) setTimeout(() => searchInput.focus(), 300); });
}
if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', () => searchOverlay.classList.remove('active'));
}

// ===== MOBILE SIDEBAR =====
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const hamburger = document.getElementById('hamburger');
function openSidebar() { if (sidebar) { sidebar.classList.add('active'); sidebarOverlay.classList.add('active'); hamburger.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeSidebar() { if (sidebar) { sidebar.classList.remove('active'); sidebarOverlay.classList.remove('active'); hamburger.classList.remove('active'); document.body.style.overflow = ''; } }
if (hamburger) hamburger.addEventListener('click', () => sidebar.classList.contains('active') ? closeSidebar() : openSidebar());
if (document.getElementById('sidebar-close')) document.getElementById('sidebar-close').addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Sidebar accordion
document.querySelectorAll('.sidebar-link[data-toggle]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.toggle);
        const isOpen = target.classList.contains('open');
        document.querySelectorAll('.sidebar-sub').forEach(s => s.classList.remove('open'));
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('open'));
        if (!isOpen) { target.classList.add('open'); link.classList.add('open'); }
    });
});

// ===== CART DRAWER =====
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
let cartItems = JSON.parse(localStorage.getItem('hungstore_cart') || '[]');

function updateCartUI() {
    const count = document.querySelector('.cart-count');
    if (count) count.textContent = cartItems.length;
    const body = document.querySelector('.cart-drawer-body');
    if (!body) return;
    if (cartItems.length === 0) {
        body.innerHTML = '<p class="cart-empty">Giỏ hàng của bạn đang trống</p>';
    } else {
        body.innerHTML = cartItems.map((item, i) => `
            <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #eee;">
                <img src="${productImg}" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">
                <div style="flex:1;"><p style="font-size:12px;font-weight:500;margin-bottom:4px;line-height:1.4;">${item.name}</p><p style="font-size:13px;font-weight:700;color:#e74c3c;">${formatPrice(item.price)}</p></div>
                <button onclick="removeFromCart(${i})" style="padding:8px;color:#aaa;font-size:20px;cursor:pointer;border:none;background:none;">&times;</button>
            </div>
        `).join('');
    }
}

function openCart() { if (cartDrawer) { cartDrawer.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; } }
function closeCart() { if (cartDrawer) { cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; } }

if (document.getElementById('cart-btn')) document.getElementById('cart-btn').addEventListener('click', openCart);
if (document.getElementById('cart-drawer-close')) document.getElementById('cart-drawer-close').addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

function addToCart(name, price) {
    cartItems.push({ name, price });
    localStorage.setItem('hungstore_cart', JSON.stringify(cartItems));
    updateCartUI();
    openCart();
    const count = document.querySelector('.cart-count');
    if (count) { count.style.transform = 'scale(1.5)'; setTimeout(() => count.style.transform = 'scale(1)', 300); }
}

function removeFromCart(idx) {
    cartItems.splice(idx, 1);
    localStorage.setItem('hungstore_cart', JSON.stringify(cartItems));
    updateCartUI();
}

updateCartUI();

// ===== SCROLL REVEAL =====
function revealCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) card.classList.add('visible');
    });
}
window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// ===== TOAST =====
function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

// ===== ESCAPE KEY =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if (searchOverlay && searchOverlay.classList.contains('active')) searchOverlay.classList.remove('active');
        closeCart();
        closeSidebar();
    }
});

// ===== PAGE TRANSITION =====
(function() {
    // Create transition overlay
    function createTransition() {
        const div = document.createElement('div');
        div.className = 'page-transition';
        div.innerHTML = '<span class="pt-logo">HÙNG STORE</span><span class="pt-line"></span>';
        document.body.appendChild(div);
        return div;
    }

    // Intro: show logo then fade out on page load
    const intro = createTransition();
    intro.classList.add('exit');
    // Remove after animation
    setTimeout(() => { if (intro.parentNode) intro.remove(); }, 1200);

    // Intercept internal links for exit transition
    document.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (!link) return;
        const href = link.getAttribute('href');
        if (!href) return;
        // Skip anchors, external links, javascript:, #, mailto, tel
        if (href.startsWith('#') || href.startsWith('javascript') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return;
        // Skip if it's a same-page anchor
        if (href.includes('#') && href.split('#')[0] === '') return;

        e.preventDefault();
        const overlay = createTransition();
        // After logo shows, navigate
        setTimeout(() => {
            window.location.href = href;
        }, 800);
    });
})();
