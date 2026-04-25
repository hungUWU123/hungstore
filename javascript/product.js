// ===== PRODUCT DETAIL PAGE LOGIC =====
(function() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat') || 'ao';
    const index = parseInt(params.get('id')) || 0;
    const categoryLabels = { ao: 'Áo', quan: 'Quần', balo: 'Balo', tui: 'Túi xách', non: 'Nón' };

    const item = products[category] && products[category][index];
    if (!item) { document.getElementById('pd-title').textContent = 'Sản phẩm không tồn tại'; return; }

    // Title & breadcrumb
    document.title = item.name + ' – HÙNG STORE';
    document.getElementById('pd-title').textContent = item.name;
    document.getElementById('pd-bc-name').textContent = item.name.length > 35 ? item.name.substring(0, 35) + '...' : item.name;
    document.getElementById('pd-bc-cat').textContent = categoryLabels[category] || 'Sản phẩm';

    // Prices
    document.getElementById('pd-price-new').textContent = formatPrice(item.price);
    const oldEl = document.getElementById('pd-price-old-detail');
    const discEl = document.getElementById('pd-discount');
    if (item.oldPrice) {
        oldEl.textContent = formatPrice(item.oldPrice);
        const pct = Math.round((1 - item.price / item.oldPrice) * 100);
        discEl.textContent = '-' + pct + '%';
    } else { oldEl.style.display = 'none'; discEl.style.display = 'none'; }

    // SKU
    document.getElementById('pd-sku').textContent = item.name.split(' - ').pop() || 'HS-001';

    // Badge
    const badgeEl = document.getElementById('pd-badge-detail');
    if (item.badge) {
        badgeEl.textContent = badgeLabels[item.badge];
        badgeEl.className = 'pd-badge-detail show badge-' + item.badge;
    }

    // Main image
    document.getElementById('pd-main-img').src = productImg;

    // Thumbnails
    const thumbs = document.getElementById('pd-thumbs');
    for (let t = 0; t < 4; t++) {
        const d = document.createElement('div');
        d.className = 'pd-thumb' + (t === 0 ? ' active' : '');
        d.innerHTML = `<img src="${productImg}" alt="Thumb ${t+1}">`;
        d.addEventListener('click', () => {
            document.querySelectorAll('.pd-thumb').forEach(th => th.classList.remove('active'));
            d.classList.add('active');
        });
        thumbs.appendChild(d);
    }

    // Size selector
    document.querySelectorAll('.pd-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pd-size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('pd-size-name').textContent = btn.dataset.size;
        });
    });

    // Color selector
    document.querySelectorAll('.pd-color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pd-color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('pd-color-name').textContent = btn.dataset.color;
        });
    });

    // Quantity
    document.getElementById('pd-qty-minus').addEventListener('click', () => {
        const inp = document.getElementById('pd-qty-input');
        if (parseInt(inp.value) > 1) inp.value = parseInt(inp.value) - 1;
    });
    document.getElementById('pd-qty-plus').addEventListener('click', () => {
        const inp = document.getElementById('pd-qty-input');
        if (parseInt(inp.value) < 99) inp.value = parseInt(inp.value) + 1;
    });

    // Tabs
    document.querySelectorAll('.pd-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pd-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.pd-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });

    // Add to cart
    document.getElementById('pd-add-cart').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('pd-qty-input').value) || 1;
        const size = document.getElementById('pd-size-name').textContent;
        const color = document.getElementById('pd-color-name').textContent;
        for (let q = 0; q < qty; q++) addToCart(item.name, item.price);
        showToast(`Đã thêm ${qty}x (${size}, ${color}) vào giỏ hàng!`);
    });

    // Buy now
    document.getElementById('pd-buy-now').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('pd-qty-input').value) || 1;
        for (let q = 0; q < qty; q++) addToCart(item.name, item.price);
        openCart();
    });

    // Image zoom
    const zoomOverlay = document.getElementById('zoom-overlay');
    document.getElementById('pd-zoom-btn').addEventListener('click', () => {
        document.getElementById('zoom-img').src = document.getElementById('pd-main-img').src;
        zoomOverlay.classList.add('active');
    });
    document.getElementById('zoom-close').addEventListener('click', () => zoomOverlay.classList.remove('active'));
    zoomOverlay.addEventListener('click', e => { if (e.target === zoomOverlay) zoomOverlay.classList.remove('active'); });

    // Size guide
    const sgM = document.getElementById('sg-modal');
    const sgO = document.getElementById('sg-overlay');
    document.getElementById('pd-size-guide-btn').addEventListener('click', () => { sgM.classList.add('active'); sgO.classList.add('active'); });
    document.getElementById('sg-close').addEventListener('click', () => { sgM.classList.remove('active'); sgO.classList.remove('active'); });
    sgO.addEventListener('click', () => { sgM.classList.remove('active'); sgO.classList.remove('active'); });

    // Related products
    const relGrid = document.getElementById('pd-related-grid');
    const related = products[category].filter((_, i) => i !== index).slice(0, 4);
    relGrid.innerHTML = related.map(r => {
        const ri = products[category].indexOf(r);
        return `<div class="pd-related-card" onclick="window.location='product.html?cat=${category}&id=${ri}'">
            <img src="${productImg}" alt="${r.name}" class="pd-related-img" loading="lazy">
            <div class="pd-related-info">
                <p class="pd-related-name">${r.name}</p>
                <span class="pd-related-price">${formatPrice(r.price)}</span>
                ${r.oldPrice ? `<span class="pd-related-old">${formatPrice(r.oldPrice)}</span>` : ''}
            </div>
        </div>`;
    }).join('');

    // Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            zoomOverlay.classList.remove('active');
            sgM.classList.remove('active'); sgO.classList.remove('active');
        }
    });
})();
