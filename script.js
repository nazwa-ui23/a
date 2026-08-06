const SHIPPING_FEE = 5000;

let userProfile = {
    email: "azariya.azariya@email.com",
    username: "Azariya",
    phone: "+62 812-3456-7890",
    address: "Jl. Cempaka Indah No. 45, Komplek Green Residence, Jakarta Selatan, 12410"
};

const products = [
    { id: 1, name: "Nike Free Flyknit 4.0", price: 2499000, isBestseller: true, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", desc: "Sepatu edisi terbatas dengan warna merah ikonik. Nyaman dipakai harian.", rating: 4.9, sold: 320, colors: ["Merah", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 2, name: "Nike Air Max 1", price: 2899000, isBestseller: true, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80", desc: "Desain hypebeast bernuansa streetwear modern dengan bantalan empuk.", rating: 4.8, sold: 215, colors: ["Putih/Abu", "Hitam"], sizes: ["EU:38.5", "EU:40", "EU:41", "EU:43"] },
    { id: 3, name: "Nike Air Force 1 Shadow", price: 2199000, isBestseller: true, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", desc: "Sepatu warna pastel kasual yang elegan dan modis di segala situasi.", rating: 4.9, sold: 450, colors: ["Pastel", "Putih"], sizes: ["EU:38", "EU:39", "EU:40"] },
    { id: 4, name: "Puma Smash v2", price: 2650000, isBestseller: true, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80", desc: "Silhouette klasik berbalut material premium yang kokoh dan tahan lama.", rating: 4.7, sold: 180, colors: ["Hitam/Putih", "Cokelat"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 9, name: "Vans Old Skool", price: 2250000, isBestseller: true, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80", desc: "Desain kasual trendi dengan bahan kanvas premium dan kenyamanan ekstra.", rating: 4.8, sold: 210, colors: ["Kuning/Putih", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42"] },
    { id: 10, name: "Puma RS-X", price: 1899000, isBestseller: true, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80", desc: "Tampil gaya dan stylish setiap hari dengan kombinasi warna yang atraktif.", rating: 4.7, sold: 195, colors: ["Multicolor", "Hijau"], sizes: ["EU:39", "EU:40", "EU:41"] },
    { id: 11, name: "New Balance 247", price: 2399000, isBestseller: true, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80", desc: "Sepatu harian fleksibel, tahan lama, dan sangat ringan digunakan.", rating: 4.8, sold: 280, colors: ["Cokelat Muda", "Abu-abu"], sizes: ["EU:40", "EU:41", "EU:42"] },
    { id: 12, name: "Nike Free RN Flyknit", price: 2999000, isBestseller: true, image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&q=80", desc: "Material premium berdaya tahan tinggi dengan sentuhan desain minimalis eksklusif.", rating: 4.9, sold: 410, colors: ["Putih", "Hitam Polos"], sizes: ["EU:39", "EU:40", "EU:41", "EU:42", "EU:43"] },
    { id: 5, name: "Nike Flyknit Lunar", price: 1499000, isBestseller: false, image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80", desc: "Sneakers bernuansa biru klasik, cocok dikombinasikan dengan denim.", rating: 4.6, sold: 95, colors: ["Biru", "Hitam"], sizes: ["EU:39", "EU:40", "EU:41"] },
    { id: 6, name: "Nike Air Force 1", price: 1599000, isBestseller: false, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&q=80", desc: "Desain futuristik dengan fleksibilitas tinggi untuk workout santai.", rating: 4.8, sold: 140, colors: ["Putih Polos"], sizes: ["EU:40", "EU:41", "EU:42"] },
    { id: 7, name: "Nike Kyrie 6", price: 1399000, isBestseller: false, image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80", desc: "Sepatu serba hitam yang simpel dan gagah untuk segala suasana.", rating: 4.7, sold: 110, colors: ["Hitam"], sizes: ["EU:40", "EU:41", "EU:42", "EU:43"] },
    { id: 8, name: "Nike Air Max 90", price: 1199000, isBestseller: false, image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80", desc: "Sepatu bergaya retro runner yang ramping dan ringan saat melangkah.", rating: 4.9, sold: 300, colors: ["Merah/Putih"], sizes: ["EU:38", "EU:39", "EU:40"] }
];

let cart = [];
let checkoutItems = [];
let myOrders = [];
let selectedDetailProduct = null;
let selectedColor = "";
let selectedSize = "";
let uploadedImageBase64 = "";

window.onload = function() {
    renderProducts();
    updateProfileUI();
};

function chooseRole(role) {
    document.getElementById('role-selection-screen').classList.remove('active');
    if (role === 'buyer') {
        document.getElementById('buyer-bottom-nav').style.display = 'flex';
        document.getElementById('admin-top-logout').style.display = 'none';
        document.getElementById('auth-step-1').classList.add('active');
    } else if (role === 'admin') {
        document.getElementById('buyer-bottom-nav').style.display = 'none';
        document.getElementById('admin-login-screen').classList.add('active');
    }
}

function backToRoleSelection() {
    document.getElementById('admin-login-screen').classList.remove('active');
    document.getElementById('admin-login-error').style.display = 'none';
    document.getElementById('role-selection-screen').classList.add('active');
}

function handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById('admin-username').value;
    const pass = document.getElementById('admin-password').value;

    if (user === 'azariya' && pass === '54321') {
        document.getElementById('admin-login-screen').classList.remove('active');
        document.getElementById('admin-username').value = '';
        document.getElementById('admin-password').value = '';
        document.getElementById('admin-login-error').style.display = 'none';

        document.getElementById('admin-top-logout').style.display = 'block';
        openAdminMainMenu();
    } else {
        document.getElementById('admin-login-error').style.display = 'block';
    }
}

function adminLogout() {
    document.getElementById('admin-logout-modal').classList.add('active');
}

function closeAdminLogoutModal() {
    document.getElementById('admin-logout-modal').classList.remove('active');
}

function confirmAdminLogout() {
    closeAdminLogoutModal();
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    document.getElementById('admin-top-logout').style.display = 'none';
    document.getElementById('role-selection-screen').classList.add('active');
}

function hideAllPageViews() {
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
}

function openAdminMainMenu() {
    hideAllPageViews();
    document.getElementById('admin-main-menu').classList.add('active');
}

function openAdminDashboard() {
    hideAllPageViews();
    document.getElementById('admin-dashboard-view').classList.add('active');
    switchAdminDashTab('input');
    renderAdminProductTable();
}

function switchAdminDashTab(tab) {
    const inputContainer = document.getElementById('admin-sub-input');
    const viewContainer = document.getElementById('admin-sub-view');
    const btnInput = document.getElementById('btn-tab-input');
    const btnView = document.getElementById('btn-tab-view');

    if (tab === 'input') {
        inputContainer.style.display = 'block';
        viewContainer.style.display = 'none';
        btnInput.style.backgroundColor = 'var(--dark-green)';
        btnView.style.backgroundColor = 'var(--accent-green)';
    } else {
        inputContainer.style.display = 'none';
        viewContainer.style.display = 'block';
        btnInput.style.backgroundColor = 'var(--accent-green)';
        btnView.style.backgroundColor = 'var(--dark-green)';
        renderAdminProductTable();
    }
}

function previewUploadImage(e) {
    const file = e.target.files[0];
    const previewImg = document.getElementById('preview-img');
    const previewText = document.getElementById('preview-text');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            uploadedImageBase64 = evt.target.result;
            previewImg.src = uploadedImageBase64;
            previewImg.style.display = 'block';
            previewText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        uploadedImageBase64 = "";
        previewImg.style.display = 'none';
        previewText.style.display = 'block';
    }
}

function handleAdminAddProduct(e) {
    e.preventDefault();
    const name = document.getElementById('admin-prod-name').value;
    const price = parseInt(document.getElementById('admin-prod-price').value);
    const desc = document.getElementById('admin-prod-desc').value;

    if (!uploadedImageBase64) {
        alert("Silakan pilih foto produk dari galeri terlebih dahulu!");
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        isBestseller: false,
        image: uploadedImageBase64,
        desc: desc,
        rating: 0,
        sold: 0,
        colors: ["Hitam", "Putih"],
        sizes: ["EU:39", "EU:40", "EU:41", "EU:42"]
    };

    products.unshift(newProduct);
    renderProducts();

    document.getElementById('admin-prod-name').value = '';
    document.getElementById('admin-prod-price').value = '';
    document.getElementById('admin-prod-desc').value = '';
    document.getElementById('admin-prod-file').value = '';
    document.getElementById('preview-img').style.display = 'none';
    document.getElementById('preview-text').style.display = 'block';
    uploadedImageBase64 = "";

    alert("Produk berhasil ditambahkan ke toko online!");
    switchAdminDashTab('view');
}

function renderAdminProductTable() {
    const tbody = document.getElementById('admin-product-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><img src="${p.image}" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover;"></td>
                <td><strong>${p.name}</strong></td>
                <td>${formatRupiah(p.price)}</td>
                <td>${p.sold}</td>
                <td>⭐ ${p.rating}</td>
            </tr>
        `;
    });
}

function openAdminReports() {
    hideAllPageViews();
    document.getElementById('admin-reports-view').classList.add('active');
    showReportType('harian');
}

function showReportType(type) {
    const titleEl = document.getElementById('report-title');
    const tbody = document.getElementById('report-table-body');
    if (!tbody) return;

    if (type === 'harian') {
        titleEl.innerText = "Laporan Penjualan Harian";
        tbody.innerHTML = `
            <tr>
                <td>Hari Ini (${new Date().toLocaleDateString('id-ID')})</td>
                <td>${myOrders.length} Transaksi</td>
                <td>${formatRupiah(myOrders.reduce((s, o) => s + o.total, 0))}</td>
            </tr>
            <tr>
                <td>Kemarin</td>
                <td>4 Transaksi</td>
                <td>Rp 8.450.000</td>
            </tr>
        `;
    } else if (type === 'bulanan') {
        titleEl.innerText = "Laporan Penjualan Bulanan";
        tbody.innerHTML = `
            <tr>
                <td>Bulan Ini</td>
                <td>${myOrders.length + 28} Transaksi</td>
                <td>${formatRupiah(myOrders.reduce((s, o) => s + o.total, 0) + 64500000)}</td>
            </tr>
            <tr>
                <td>Bulan Lalu</td>
                <td>42 Transaksi</td>
                <td>Rp 98.200.000</td>
            </tr>
        `;
    } else if (type === 'tahunan') {
        titleEl.innerText = "Laporan Penjualan Tahunan";
        tbody.innerHTML = `
            <tr>
                <td>Tahun Ini</td>
                <td>320 Transaksi</td>
                <td>Rp 785.400.000</td>
            </tr>
            <tr>
                <td>Tahun Lalu</td>
                <td>280 Transaksi</td>
                <td>Rp 640.000.000</td>
            </tr>
        `;
    }
}

function handleAuthStep1(e) {
    e.preventDefault();
    const emailInput = document.getElementById('input-email').value;
    if (emailInput.trim() !== '') {
        userProfile.email = emailInput;
        document.getElementById('auth-step-1').classList.remove('active');
        document.getElementById('auth-step-2').classList.add('active');
    }
}

function handleAuthStep2(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('input-username').value;
    if (usernameInput.trim() !== '') {
        userProfile.username = usernameInput;
        document.getElementById('auth-step-2').classList.remove('active');
        document.getElementById('auth-step-3').classList.add('active');
    }
}

function handleAuthStep3(e) {
    e.preventDefault();
    const phoneInput = document.getElementById('input-phone').value;
    const addressInput = document.getElementById('input-address').value;

    if (phoneInput.trim() !== '' && addressInput.trim() !== '') {
        userProfile.phone = phoneInput;
        userProfile.address = addressInput;
        updateProfileUI();

        document.getElementById('auth-step-3').classList.remove('active');
        const welcomeName = document.getElementById('welcome-user-name');
        if (welcomeName) welcomeName.innerText = `Selamat datang di toko AZARIYA, ${userProfile.username}`;
        document.getElementById('auth-step-welcome').classList.add('active');
    }
}

function startApp() {
    document.getElementById('auth-step-welcome').classList.remove('active');
    switchTab('home');
}

function updateProfileUI() {
    const dispName = document.getElementById('profile-display-name');
    if (dispName) dispName.innerText = userProfile.username;
    const dispEmail = document.getElementById('profile-display-email');
    if (dispEmail) dispEmail.innerText = userProfile.email;
    const dispPhone = document.getElementById('profile-display-phone');
    if (dispPhone) dispPhone.innerText = userProfile.phone;
    const dispAddress = document.getElementById('profile-display-address');
    if (dispAddress) dispAddress.innerText = userProfile.address;

    const chkName = document.getElementById('checkout-display-name');
    if (chkName) chkName.innerText = userProfile.username;
    const chkPhone = document.getElementById('checkout-display-phone');
    if (chkPhone) chkPhone.innerText = userProfile.phone;
    const chkAddress = document.getElementById('checkout-display-address');
    if (chkAddress) chkAddress.innerText = userProfile.address;
}

function showLogoutModal() {
    document.getElementById('logout-modal').classList.add('active');
}

function closeLogoutModal() {
    document.getElementById('logout-modal').classList.remove('active');
}

function confirmLogout() {
    closeLogoutModal();
    document.querySelectorAll('.auth-overlay').forEach(overlay => overlay.classList.remove('active'));
    hideAllPageViews();
    document.getElementById('buyer-bottom-nav').style.display = 'none';
    document.getElementById('role-selection-screen').classList.add('active');
}

function formatRupiah(num) {
    return "Rp " + num.toLocaleString('id-ID');
}

function renderProducts() {
    const bestsellerGrid = document.getElementById('bestseller-grid');
    const regularGrid = document.getElementById('regular-grid');
    if (!bestsellerGrid || !regularGrid) return;

    bestsellerGrid.innerHTML = '';
    regularGrid.innerHTML = '';

    products.forEach(p => {
        const cardHTML = `
            <div class="product-card" onclick="openProductDetail(${p.id})">
                ${p.isBestseller ? '<span class="badge-bestseller">Bestseller</span>' : ''}
                <img src="${p.image}" alt="${p.name}" class="product-image">
                <div class="product-info">
                    <div class="product-title">${p.name}</div>
                    <div class="product-price">${formatRupiah(p.price)}</div>
                    <div class="product-description">${p.desc}</div>
                    <div class="product-meta">⭐ ${p.rating} <span>| terjual ${p.sold}</span></div>
                    <div class="product-actions" onclick="event.stopPropagation();">
                        <button class="btn btn-cart" onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i></button>
                        <button class="btn btn-buy" onclick="directBuy(${p.id})">Beli</button>
                    </div>
                </div>
            </div>
        `;

        if (p.isBestseller) {
            bestsellerGrid.innerHTML += cardHTML;
        } else {
            regularGrid.innerHTML += cardHTML;
        }
    });
}

function openProductDetail(id) {
    const product = products.find(p => p.id === id);
    selectedDetailProduct = product;
    selectedColor = product.colors[0];
    selectedSize = product.sizes[0];

    switchTab('product-detail');

    const detailContainer = document.getElementById('detail-card-content');
    if (!detailContainer) return;
    detailContainer.innerHTML = `
        <div class="detail-img-box">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="detail-price-row">
            <div class="detail-price">${formatRupiah(product.price)}</div>
            <div class="detail-sold">${product.sold} Terjual</div>
        </div>
        <div class="detail-title">${product.name}</div>

        <div class="option-group">
            <span class="option-label">Pilih Warna:</span>
            <div class="option-buttons">
                ${product.colors.map((c, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectColor('${c}', this)">${c}</button>
                `).join('')}
            </div>
        </div>

        <div class="option-group">
            <span class="option-label">Pilih Ukuran (Size):</span>
            <div class="option-buttons">
                ${product.sizes.map((s, idx) => `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize('${s}', this)">${s}</button>
                `).join('')}
            </div>
        </div>

        <div class="detail-info-box">
            <div>🚚 <strong>Estimasi Pengiriman:</strong> Cepat & Aman</div>
            <div style="margin-top: 5px;">💳 <strong>Metode Pembayaran:</strong> Bayar di Tempat (COD)</div>
        </div>

        <div class="detail-info-box">
            <strong>Deskripsi Produk:</strong>
            <p style="margin-top: 4px; color: var(--text-dark);">${product.desc}</p>
        </div>

        <div class="product-actions" style="margin-top: 20px;">
            <button class="btn btn-cart" style="padding: 12px;" onclick="addToCartFromDetail()"><i class="fas fa-cart-plus"></i> + Keranjang</button>
            <button class="btn btn-buy" style="padding: 12px;" onclick="directBuyFromDetail()">Beli Sekarang</button>
        </div>
    `;
}

function selectColor(color, btn) {
    selectedColor = color;
    btn.parentElement.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectSize(size, btn) {
    selectedSize = size;
    btn.parentElement.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addToCartFromDetail() {
    if (!selectedDetailProduct) return;
    cart.push({
        cartId: Date.now() + Math.random(),
        product: selectedDetailProduct,
        color: selectedColor,
        size: selectedSize,
        selected: true
    });
    updateCartBadge();
    alert(`${selectedDetailProduct.name} (${selectedColor}, ${selectedSize}) dimasukkan ke keranjang!`);
}

function directBuyFromDetail() {
    if (!selectedDetailProduct) return;
    checkoutItems = [selectedDetailProduct];
    openCheckout();
}

function switchTab(tabName) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));

    const targetView = document.getElementById(`view-${tabName}`);
    const targetNav = document.getElementById(`nav-${tabName}`);

    if (targetView) targetView.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    if (tabName === 'cart') renderCart();
    if (tabName === 'orders') renderOrders();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push({
        cartId: Date.now() + Math.random(),
        product: product,
        color: product.colors[0],
        size: product.sizes[0],
        selected: true
    });
    updateCartBadge();
    alert(`${product.name} berhasil dimasukkan ke keranjang!`);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    if (cart.length > 0) {
        badge.style.display = 'block';
        badge.innerText = cart.length;
    } else {
        badge.style.display = 'none';
    }
}

function toggleCartItemSelection(index) {
    cart[index].selected = !cart[index].selected;
    calculateCartTotal();
}

function calculateCartTotal() {
    const totalPriceEl = document.getElementById('cart-total-price');
    if (!totalPriceEl) return;
    let itemTotal = 0;
    let hasSelectedItems = false;

    cart.forEach(item => {
        if (item.selected) {
            itemTotal += item.product.price;
            hasSelectedItems = true;
        }
    });

    let finalTotal = hasSelectedItems ? itemTotal + SHIPPING_FEE : 0;
    totalPriceEl.innerText = formatRupiah(finalTotal);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">Keranjangmu masih kosong.</div>`;
        const totalEl = document.getElementById('cart-total-price');
        if (totalEl) totalEl.innerText = "Rp 0";
        return;
    }

    container.innerHTML = '';
    cart.forEach((item, index) => {
        container.innerHTML += `
            <div class="cart-item">
                <input type="checkbox" class="cart-checkbox" ${item.selected ? 'checked' : ''} onchange="toggleCartItemSelection(${index})">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.product.name}</div>
                    <div style="font-size:0.7rem; color:var(--text-muted); margin:2px 0;">Variasi: ${item.color}, ${item.size}</div>
                    <div class="cart-item-price">${formatRupiah(item.product.price)}</div>
                </div>
                <button style="border:none; background:none; color: #e63946; cursor:pointer;" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    calculateCartTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCart();
}

function directBuy(id) {
    const product = products.find(p => p.id === id);
    checkoutItems = [product];
    openCheckout();
}

function goToCheckoutFromCart() {
    const selectedCartItems = cart.filter(item => item.selected);
    if (cart.length === 0) {
        alert("Keranjang kamu kosong!");
        return;
    }
    if (selectedCartItems.length === 0) {
        alert("Pilih minimal satu produk untuk di-checkout!");
        return;
    }
    checkoutItems = selectedCartItems.map(item => item.product);
    openCheckout();
}

function openCheckout() {
    switchTab('checkout');
    const container = document.getElementById('checkout-summary-items');
    const totalEl = document.getElementById('checkout-total-price');
    if (!container || !totalEl) return;

    container.innerHTML = '';
    let itemTotal = 0;

    checkoutItems.forEach(item => {
        itemTotal += item.price;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:5px;">
                <span>${item.name}</span>
                <strong>${formatRupiah(item.price)}</strong>
            </div>
        `;
    });

    let grandTotal = itemTotal + SHIPPING_FEE;
    totalEl.innerText = formatRupiah(grandTotal);
}

function processCheckout() {
    let itemTotal = checkoutItems.reduce((sum, item) => sum + item.price, 0);
    let grandTotal = itemTotal + SHIPPING_FEE;

    myOrders.unshift({
        id: "AZR-" + Math.floor(100000 + Math.random() * 900000),
        items: [...checkoutItems],
        total: grandTotal,
        status: "Dikemas",
        date: new Date().toLocaleDateString('id-ID')
    });

    cart = cart.filter(item => !item.selected);
    updateCartBadge();
    switchTab('thankyou');
}

function renderOrders() {
    const container = document.getElementById('orders-container');
    if (!container) return;

    if (myOrders.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">Belum ada pesanan aktif.</div>`;
        return;
    }

    container.innerHTML = '';
    myOrders.forEach(order => {
        let itemNames = order.items.map(i => i.name).join(', ');
        container.innerHTML += `
            <div class="order-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <strong style="font-size:0.85rem;">#${order.id}</strong>
                    <span class="order-status-badge"><i class="fas fa-box"></i> ${order.status}</span>
                </div>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:6px;">${itemNames} (Inc. Ongkir Rp 5.000)</div>
                <div style="font-size:0.85rem; font-weight:bold; color:var(--dark-green);">${formatRupiah(order.total)} (COD)</div>
            </div>
        `;
    });
}
