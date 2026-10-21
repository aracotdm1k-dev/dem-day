const listings = [
  { id: 'd101', product: 'Pomidor', variety: 'Volgograd', amount: 18, price: 6200, region: 'Toshkent', district: 'Quyichirchiq', harvest: '2026-10-28', farmer: 'Olimjon Dehqonov', farm: 'Baraka agro', lat: 40.63, lng: 68.96, image: 'photo-1546094096-0df4bcaaa337', tag: 'Yangi hosil' },
  { id: 'd102', product: 'Piyoz', variety: 'Qizil piyoz', amount: 32, price: 4100, region: 'Samarqand', district: 'Payariq', harvest: '2026-10-30', farmer: 'Dilshod Karimov', farm: 'Samarqand hosili', lat: 39.95, lng: 67.12, image: 'photo-1508747703725-719777637510', tag: 'Ommabop' },
  { id: 'd103', product: 'Kartoshka', variety: 'Sante', amount: 45, price: 5300, region: 'Fargʻona', district: 'Oltiariq', harvest: '2026-11-02', farmer: 'Shahnoza Ismoilova', farm: 'Vodiy agro', lat: 40.39, lng: 71.47, image: 'photo-1518977676601-b53f82aba655', tag: 'Yangi hosil' },
  { id: 'd104', product: 'Olma', variety: 'Golden', amount: 12, price: 9800, region: 'Andijon', district: 'Xoʻjaobod', harvest: '2026-10-25', farmer: 'Rustam Aliyev', farm: 'Bogʻiston', lat: 40.67, lng: 72.56, image: 'photo-1560806887-1e4cd0b6cbd6', tag: 'Saralangan' },
  { id: 'd105', product: 'Sabzi', variety: 'Nant', amount: 26, price: 3600, region: 'Toshkent', district: 'Oʻrtachirchiq', harvest: '2026-11-05', farmer: 'Olimjon Dehqonov', farm: 'Baraka agro', lat: 40.65, lng: 69.16, image: 'photo-1445282768818-728615cc910a', tag: 'Yangi hosil' },
  { id: 'd106', product: 'Uzum', variety: 'Husayni', amount: 9, price: 12500, region: 'Samarqand', district: 'Urgut', harvest: '2026-10-26', farmer: 'Dilshod Karimov', farm: 'Samarqand hosili', lat: 39.38, lng: 67.24, image: 'photo-1537640538966-79f369143f8f', tag: 'Premium' },
  { id: 'd107', product: 'Bodring', variety: 'Parij korniшon', amount: 7, price: 7400, region: 'Fargʻona', district: 'Quva', harvest: '2026-10-24', farmer: 'Shahnoza Ismoilova', farm: 'Vodiy agro', lat: 40.52, lng: 72.06, image: 'photo-1604977042946-1eecc30f269e', tag: 'Yangi hosil' },
  { id: 'd108', product: 'Qalampir', variety: 'Bulgar', amount: 6, price: 8900, region: 'Andijon', district: 'Asaka', harvest: '2026-10-29', farmer: 'Rustam Aliyev', farm: 'Bogʻiston', lat: 40.65, lng: 72.24, image: 'photo-1563565375-f3fdfdbefa83', tag: 'Saralangan' },
  { id: 'd109', product: 'Qovun', variety: 'Gulobi', amount: 15, price: 6800, region: 'Qashqadaryo', district: 'Kasbi', harvest: '2026-11-07', farmer: 'Murod Toʻrayev', farm: 'Sahovat dalasi', lat: 38.92, lng: 65.36, image: 'photo-1571575173700-afb9492e6a50', tag: 'Yangi hosil' },
  { id: 'd110', product: 'Karam', variety: 'Oq karam', amount: 21, price: 3200, region: 'Qashqadaryo', district: 'Yakkabogʻ', harvest: '2026-11-10', farmer: 'Murod Toʻrayev', farm: 'Sahovat dalasi', lat: 38.98, lng: 66.48, image: 'photo-1594282486552-05b4d80fbb9f', tag: 'Ommabop' }
];

const buyers = ['Zilola Market', 'Fresh Line', 'Baraka Savdo'];
const steps = ['Qabul qilindi', 'Hosil yigʻilmoqda', 'Sifat tekshiruvi', 'Sovutgichli mashinada yoʻlda', 'Yetkazildi'];
const pickupPoints = [
  { name: 'Toshkent yigʻish punkti', lat: 41.31, lng: 69.28 },
  { name: 'Samarqand yigʻish punkti', lat: 39.65, lng: 66.96 },
  { name: 'Fargʻona yigʻish punkti', lat: 40.39, lng: 71.78 }
];
const freightLoads = [
  { id: 'yuk-501', from: 'Toshkent', to: 'Samarqand', origin: 'Toshkent', distance: 305, weight: 8, cargo: 'Pomidor', refrigerated: true, pay: 2450000, date: '2026-10-23', company: 'Baraka logistika' },
  { id: 'yuk-502', from: 'Fargʻona', to: 'Toshkent', origin: 'Fargʻona', distance: 325, weight: 12, cargo: 'Olma', refrigerated: true, pay: 3150000, date: '2026-10-24', company: 'Vodiy Cargo' },
  { id: 'yuk-503', from: 'Samarqand', to: 'Buxoro', origin: 'Samarqand', distance: 275, weight: 10, cargo: 'Piyoz', refrigerated: false, pay: 1950000, date: '2026-10-25', company: 'Zarafshon Trans' },
  { id: 'yuk-504', from: 'Andijon', to: 'Toshkent', origin: 'Andijon', distance: 360, weight: 6, cargo: 'Uzum', refrigerated: true, pay: 2880000, date: '2026-10-26', company: 'Fresh Line' }
];
const driverJobs = [
  { id: 'ish-301', title: 'Sovutgichli fura haydovchisi', company: 'Baraka logistika', region: 'Toshkent', salary: '8–12 mln', schedule: 'Toʻliq stavka', requirements: 'CE toifa, 3 yillik tajriba, sovutgichli transport tajribasi.' },
  { id: 'ish-302', title: 'Hududlararo yuk mashinasi haydovchisi', company: 'Zarafshon Trans', region: 'Samarqand', salary: '7–10 mln', schedule: '6/1 ish tartibi', requirements: 'C toifa, masʼuliyatlilik va shaharlararo qatnov tajribasi.' },
  { id: 'ish-303', title: 'Yetkazib berish haydovchisi', company: 'Fresh Line', region: 'Fargʻona', salary: '6–8 mln', schedule: 'Moslashuvchan grafik', requirements: 'B va C toifa, mijozlar bilan xushmuomala muloqot.' }
];
const $ = (selector) => document.querySelector(selector);
const money = (amount) => `${new Intl.NumberFormat('uz-UZ').format(Math.round(amount))} soʻm`;
const harvestText = (date) => new Intl.DateTimeFormat('uz-UZ', { day: 'numeric', month: 'short' }).format(new Date(`${date}T12:00:00`));
const safeLoadOrders = () => {
  try { return JSON.parse(localStorage.getItem('agrolink-orders') || '[]'); }
  catch { return []; }
};
let orders = safeLoadOrders();
let activeListing = null;
let activeDriverTab = 'loads';
let claimedLoads = safeLoadList('agrolink-driver-loads');
let appliedJobs = safeLoadList('agrolink-driver-jobs');
let mapInstance = null;
let markersLayer = null;
let toastTimeout;
let activePromotion = safeLoadValue('agrolink-active-promotion');
let plusPlanUntil = Number(localStorage.getItem('agrolink-plus-until')) || 0;
let freeBoostsRemaining = Number(localStorage.getItem('agrolink-plus-boosts')) || 0;
let servicePayments = safeLoadList('agrolink-service-payments');

function saveOrders() {
  localStorage.setItem('agrolink-orders', JSON.stringify(orders));
}

function safeLoadList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function safeLoadValue(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); }
  catch { return null; }
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

function populateFilters() {
  const products = [...new Set(listings.map((item) => item.product))].sort((a, b) => a.localeCompare(b, 'uz'));
  const regions = [...new Set(listings.map((item) => item.region))].sort((a, b) => a.localeCompare(b, 'uz'));
  products.forEach((value) => $('#product-filter').insertAdjacentHTML('beforeend', `<option value="${value}">${value}</option>`));
  regions.forEach((value) => $('#region-filter').insertAdjacentHTML('beforeend', `<option value="${value}">${value}</option>`));
}

function visibleListings() {
  const query = $('#search-input').value.trim().toLocaleLowerCase('uz');
  const product = $('#product-filter').value;
  const region = $('#region-filter').value;
  const min = Number($('#price-min').value) || 0;
  const max = Number($('#price-max').value) || Infinity;
  const withinDays = Number($('#harvest-filter').value) || Infinity;
  const today = new Date('2026-10-21T00:00:00');
  return listings.filter((item) => {
    const matchesText = !query || `${item.product} ${item.variety} ${item.farmer} ${item.farm} ${item.region}`.toLocaleLowerCase('uz').includes(query);
    const days = (new Date(`${item.harvest}T00:00:00`) - today) / 86400000;
    return matchesText && (!product || item.product === product) && (!region || item.region === region) && item.price >= min && item.price <= max && days <= withinDays;
  }).sort((a, b) => {
    const featuredId = activePromotion?.expiresAt > Date.now() ? activePromotion.listingId : null;
    if (featuredId && a.id === featuredId && b.id !== featuredId) return -1;
    if (featuredId && b.id === featuredId && a.id !== featuredId) return 1;
    if ($('#sort-select').value === 'price-low') return a.price - b.price;
    if ($('#sort-select').value === 'price-high') return b.price - a.price;
    return a.id.localeCompare(b.id);
  });
}

function renderListings() {
  const visible = visibleListings();
  $('#result-count').textContent = visible.length;
  $('#listing-total').textContent = listings.length;
  $('#map-farm-count').textContent = visible.length;
  $('#listing-grid').innerHTML = visible.map((item) => `
    <article class="listing-card ${activePromotion?.listingId === item.id && activePromotion.expiresAt > Date.now() ? 'promoted-listing' : ''}">
      <div class="product-photo" style="background-image:linear-gradient(180deg,transparent 62%,#12291b3b),url('https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=680&q=78')">
        <span class="photo-tag">${activePromotion?.listingId === item.id && activePromotion.expiresAt > Date.now() ? 'TOP · ' : ''}${item.tag}</span><span class="photo-origin">${item.district}</span>
      </div>
      <div class="listing-body">
        <div class="product-title-row"><h3>${item.product}</h3><span class="verified-badge"><span>✓</span> Tekshirilgan</span></div>
        <div class="product-price">${new Intl.NumberFormat('uz-UZ').format(item.price)} <small>soʻm / kg</small></div>
        <div class="card-details"><span>Hajmi<strong>${item.amount} tonna</strong></span><span>Hosil muddati<strong>${harvestText(item.harvest)}</strong></span></div>
        <div class="farmer-row"><span class="farmer-avatar">${item.farmer.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span class="farmer-info">${item.farmer}<small>${item.farm} · ${item.region}</small></span></div>
        <button class="order-button" data-order-id="${item.id}" type="button">Oldindan buyurtma <span>→</span></button>
      </div>
    </article>`).join('');
  $('#empty-state').hidden = visible.length > 0;
  $('#listing-grid').hidden = visible.length === 0;
  $('#filter-count').textContent = [$('#product-filter').value, $('#region-filter').value, $('#price-min').value, $('#price-max').value, $('#harvest-filter').value].filter(Boolean).length;
  $('#listing-grid').querySelectorAll('[data-order-id]').forEach((button) => button.addEventListener('click', () => openOrderDialog(button.dataset.orderId)));
  if (mapInstance) renderMapMarkers(visible);
}

function openOrderDialog(listingId) {
  activeListing = listings.find((item) => item.id === listingId);
  if (!activeListing) return;
  $('#order-listing-id').value = activeListing.id;
  $('#dialog-product').innerHTML = `<strong>${activeListing.product} · ${activeListing.variety}</strong><span>${money(activeListing.price)} / kg</span><br>${activeListing.farmer} · ${activeListing.amount} tonna mavjud`;
  $('#order-volume').max = activeListing.amount;
  $('#order-volume').value = Math.min(1, activeListing.amount);
  const dateInput = $('#delivery-date');
  dateInput.min = new Date().toISOString().slice(0, 10);
  dateInput.value = activeListing.harvest;
  $('#delivery-address').value = '';
  updateOrderTotal();
  $('#order-dialog').showModal();
}

function updateOrderTotal() {
  if (!activeListing) return;
  $('#order-total').textContent = money(Number($('#order-volume').value || 0) * 1000 * activeListing.price);
}

function handleOrderSubmit(event) {
  event.preventDefault();
  if (!activeListing || !$('#order-form').reportValidity()) return;
  const volume = Number($('#order-volume').value);
  if (volume > activeListing.amount) {
    showToast(`Mavjud hosil: ${activeListing.amount} tonna.`);
    return;
  }
  orders.unshift({
    id: `DL-${Date.now().toString().slice(-6)}`,
    listingId: activeListing.id,
    product: activeListing.product,
    farmer: activeListing.farmer,
    farm: activeListing.farm,
    region: activeListing.region,
    amount: volume,
    price: activeListing.price,
    deliveryDate: $('#delivery-date').value,
    address: $('#delivery-address').value.trim(),
    buyer: buyers[orders.length % buyers.length],
    status: 0,
    createdAt: new Date().toISOString()
  });
  saveOrders();
  $('#order-dialog').close();
  renderOrders();
  showToast('Buyurtma fermerga yuborildi. Tez orada bogʻlanishadi.');
  setView('orders');
}

function renderOrders() {
  const count = orders.length;
  $('#order-count').textContent = count;
  $('#orders-section-count').textContent = count;
  $('#orders-empty').hidden = count > 0;
  $('#orders-list').innerHTML = orders.map((order) => `
    <article class="order-card">
      <div class="order-card-head"><div><div class="order-product">${order.product} · ${order.amount} tonna</div><div class="order-meta">${order.farm} · ${order.region} · ${order.id}</div></div><span class="status-chip">${steps[order.status]}</span></div>
      <div class="order-card-foot"><span>Yetkazish: <strong>${harvestText(order.deliveryDate)}</strong></span><button class="order-open" data-track-id="${order.id}" type="button">Kuzatish →</button></div>
    </article>`).join('');
  $('#orders-list').querySelectorAll('[data-track-id]').forEach((button) => button.addEventListener('click', () => renderTracking(button.dataset.trackId)));
  if (count) renderTracking(orders[0].id);
  else $('#tracking-section').hidden = true;
}

function renderTracking(orderId) {
  const order = orders.find((item) => item.id === orderId);
  if (!order) return;
  const section = $('#tracking-section');
  section.hidden = false;
  section.dataset.orderId = order.id;
  const delivery = new Date(`${order.deliveryDate}T12:00:00`);
  const dateText = new Intl.DateTimeFormat('uz-UZ', { weekday: 'long', day: 'numeric', month: 'long' }).format(delivery);
  section.innerHTML = `
    <div class="tracking-top"><div><p class="eyebrow">YETKAZISH KUZATUVI · ${order.id}</p><h2>${order.product} — ${order.amount} tonna</h2><p>${order.address}</p></div><span class="status-chip">${steps[order.status]}</span></div>
    <div class="tracking-progress">${steps.map((step, index) => `<div class="tracking-step ${index < order.status ? 'done' : ''} ${index === order.status ? 'current' : ''}">${step}</div>`).join('')}</div>
    <div class="tracking-info"><div class="driver-info"><span class="farmer-avatar">${order.status >= 3 ? 'JM' : 'OD'}</span><span><strong>${order.status >= 3 ? 'Jasur Mamatov' : order.farmer}</strong><small>${order.status >= 3 ? '+998 90 123 45 67 · Haydovchi' : 'Fermer bilan kelishuv'}</small></span></div><div class="tracking-time"><strong>${order.status === 4 ? 'Yetkazildi' : dateText}</strong>${order.status >= 3 && order.status < 4 ? 'Taxminiy yetib borish vaqti' : 'Taxminiy yetkazish sanasi'}</div></div>
    ${order.status < 4 ? `<button class="advance-status" data-advance-id="${order.id}" type="button">Demo: keyingi holatni ko'rsatish →</button>` : ''}`;
  section.querySelector('[data-advance-id]')?.addEventListener('click', () => advanceOrder(order.id));
  if (mapInstance) drawRoute(order);
}

function advanceOrder(orderId) {
  const order = orders.find((item) => item.id === orderId);
  if (!order || order.status >= steps.length - 1) return;
  order.status += 1;
  saveOrders();
  renderOrders();
  showToast(`Buyurtma holati: ${steps[order.status]}`);
}

function renderFreightCard(load) {
  const claimed = claimedLoads.includes(load.id);
  return `<article class="freight-card"><div class="freight-head"><div><p class="route-label">YUK REYSI</p><h2 class="route-title">${load.from}<span>→</span>${load.to}</h2></div><span class="load-tag ${load.refrigerated ? 'cold' : ''}">${load.refrigerated ? 'Sovutgichli' : 'Oddiy yuk'}</span></div><div class="route-line"><i class="route-dot"></i><span>Yuk olish · ${load.from}</span><i class="route-dash"></i><i class="route-dot route-end"></i><span>Yetkazish · ${load.to}</span></div><div class="freight-details"><span>Mahsulot<strong>${load.cargo}</strong></span><span>Ogʻirligi<strong>${load.weight} tonna</strong></span><span>Masofa<strong>${load.distance} km</strong></span></div><div class="freight-foot"><span class="freight-company">${load.company}<small>${harvestText(load.date)} · Toʻlov: ${money(load.pay)}</small></span><button class="claim-button ${claimed ? 'claimed' : ''}" data-claim-load="${load.id}" type="button" ${claimed ? 'disabled' : ''}>${claimed ? 'Reys sizniki' : 'Yukni olish →'}</button></div></article>`;
}

function renderJobCard(job) {
  const applied = appliedJobs.includes(job.id);
  return `<article class="job-card"><div class="job-head"><div><h2 class="job-title">${job.title}</h2><p class="job-company">${job.company}</p></div><span class="job-tag">${job.schedule}</span></div><p class="job-salary">${job.salary} <small>soʻm / oy</small></p><p class="job-requirements">${job.requirements}</p><div class="job-foot"><span class="job-region">${job.region}</span><button class="apply-button ${applied ? 'applied' : ''}" data-apply-job="${job.id}" type="button" ${applied ? 'disabled' : ''}>${applied ? 'Ariza yuborildi' : 'Ariza berish →'}</button></div></article>`;
}

function renderDrivers() {
  const query = $('#driver-search-input').value.trim().toLocaleLowerCase('uz');
  const region = $('#driver-region-filter').value;
  const items = activeDriverTab === 'loads' ? freightLoads : driverJobs;
  const visible = items.filter((item) => {
    const haystack = activeDriverTab === 'loads'
      ? `${item.from} ${item.to} ${item.cargo} ${item.company}`
      : `${item.title} ${item.company} ${item.region} ${item.requirements}`;
    return (!query || haystack.toLocaleLowerCase('uz').includes(query)) && (!region || item.origin === region || item.region === region);
  });
  $('#available-load-count').textContent = freightLoads.length - claimedLoads.length;
  $('#available-job-count').textContent = driverJobs.length;
  $('#claimed-load-count').textContent = claimedLoads.length;
  $('#driver-load-tab-count').textContent = freightLoads.length;
  $('#driver-job-tab-count').textContent = driverJobs.length;
  $('#driver-list').innerHTML = visible.map((item) => activeDriverTab === 'loads' ? renderFreightCard(item) : renderJobCard(item)).join('');
  $('#driver-empty').hidden = visible.length > 0;
  $('#driver-list').hidden = visible.length === 0;
  $('#driver-list').querySelectorAll('[data-claim-load]').forEach((button) => button.addEventListener('click', () => claimFreightLoad(button.dataset.claimLoad)));
  $('#driver-list').querySelectorAll('[data-apply-job]').forEach((button) => button.addEventListener('click', () => applyForJob(button.dataset.applyJob)));
}

function claimFreightLoad(loadId) {
  if (claimedLoads.includes(loadId)) return;
  claimedLoads.push(loadId);
  localStorage.setItem('agrolink-driver-loads', JSON.stringify(claimedLoads));
  renderDrivers();
  showToast('Reys band qilindi. Logistika hamkori siz bilan bogʻlanadi.');
}

function applyForJob(jobId) {
  if (appliedJobs.includes(jobId)) return;
  appliedJobs.push(jobId);
  localStorage.setItem('agrolink-driver-jobs', JSON.stringify(appliedJobs));
  renderDrivers();
  showToast('Arizangiz ish beruvchiga yuborildi.');
}

function populateDriverRegions() {
  const regions = [...new Set([...freightLoads.map((item) => item.origin), ...driverJobs.map((item) => item.region)])].sort((a, b) => a.localeCompare(b, 'uz'));
  regions.forEach((region) => $('#driver-region-filter').insertAdjacentHTML('beforeend', `<option value="${region}">${region}</option>`));
}

function renderServices() {
  const listingSelect = $('#promotion-listing');
  const selectedListing = listingSelect.value;
  listingSelect.innerHTML = listings.map((item) => `<option value="${item.id}">${item.product} · ${item.farmer}</option>`).join('');
  if (listings.some((item) => item.id === selectedListing)) listingSelect.value = selectedListing;

  const planActive = plusPlanUntil > Date.now();
  const promotionActive = activePromotion?.expiresAt > Date.now();
  const boostButton = $('[data-service-purchase="boost"]');
  boostButton.innerHTML = planActive && freeBoostsRemaining > 0
    ? 'Plus bilan bepul ko\'tarish <span>→</span>'
    : 'Payme test to\'lovi <span>→</span>';
  const planName = planActive ? 'AgroLink Plus faol' : 'AgroLink Plus faol emas';
  const planDetails = planActive
    ? `${harvestText(new Date(plusPlanUntil).toISOString().slice(0, 10))} gacha · ${freeBoostsRemaining} ta bepul ko'tarish qoldi`
    : 'Plus obunasi 30 kun amal qiladi';
  const promotionName = promotionActive ? "Ko'tarilgan e'lon" : "Faol ko'tarilgan e'lon yo'q";
  const promotedListing = listings.find((item) => item.id === activePromotion?.listingId);
  const promotionDetails = promotionActive
    ? `${promotedListing?.product || "E'lon"} · ${harvestText(new Date(activePromotion.expiresAt).toISOString().slice(0, 10))} gacha`
    : "E'loningizni 7 kunga yuqoriga ko'taring";
  $('#service-state').innerHTML = `<div class="service-state-item"><span class="state-dot ${planActive ? 'state-on' : ''}"></span><span><strong>${planName}</strong><small>${planDetails}</small></span></div><div class="service-state-item"><span class="state-dot ${promotionActive ? 'state-on' : ''}"></span><span><strong>${promotionName}</strong><small>${promotionDetails}</small></span></div>`;
  $('#payment-count').textContent = servicePayments.length;
  $('#payment-empty').hidden = servicePayments.length > 0;
  $('#payment-list').innerHTML = servicePayments.map((payment) => `<article class="payment-row"><span><strong>${payment.service}</strong><small>${payment.product} · ${new Intl.DateTimeFormat('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(payment.createdAt))}</small></span><span class="payment-amount">${payment.amount ? money(payment.amount) : 'Plus kvotasi'}</span><span class="payment-status">Test tasdiqlandi</span></article>`).join('');
}

function handleServicePurchase(service) {
  const now = Date.now();
  const planActive = plusPlanUntil > now;
  if (service === 'boost') {
    const listing = listings.find((item) => item.id === $('#promotion-listing').value);
    if (!listing) return;
    const usePlanBoost = planActive && freeBoostsRemaining > 0;
    const amount = usePlanBoost ? 0 : 15000;
    if (usePlanBoost) {
      freeBoostsRemaining -= 1;
      localStorage.setItem('agrolink-plus-boosts', String(freeBoostsRemaining));
    }
    activePromotion = { listingId: listing.id, expiresAt: now + 7 * 24 * 60 * 60 * 1000 };
    localStorage.setItem('agrolink-active-promotion', JSON.stringify(activePromotion));
    servicePayments.unshift({ id: `PM-${now}`, service: 'E\'lonni 7 kunga ko\'tarish', product: listing.product, amount, provider: 'Payme TEST', createdAt: new Date(now).toISOString() });
  } else if (service === 'plus') {
    plusPlanUntil = Math.max(now, plusPlanUntil) + 30 * 24 * 60 * 60 * 1000;
    freeBoostsRemaining += 3;
    localStorage.setItem('agrolink-plus-until', String(plusPlanUntil));
    localStorage.setItem('agrolink-plus-boosts', String(freeBoostsRemaining));
    servicePayments.unshift({ id: `PM-${now}`, service: 'AgroLink Plus · 30 kun', product: '3 ta bepul e\'lon ko\'tarish', amount: 49000, provider: 'Payme TEST', createdAt: new Date(now).toISOString() });
  } else {
    return;
  }
  localStorage.setItem('agrolink-service-payments', JSON.stringify(servicePayments));
  renderServices();
  renderListings();
  showToast('Payme TEST: to\'lov simulyatsiyasi tasdiqlandi. Haqiqiy pul olinmadi.');
}

function setView(view) {
  document.querySelectorAll('.view').forEach((panel) => panel.classList.toggle('active', panel.id === `${view}-view`));
  document.querySelectorAll('.nav-link').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  if (view === 'map') {
    initMap();
    requestAnimationFrame(() => mapInstance?.invalidateSize());
  }
  if (view === 'orders') renderOrders();
  if (view === 'drivers') renderDrivers();
  if (view === 'services') renderServices();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initMap() {
  if (!window.L || mapInstance) return;
  mapInstance = L.map('farm-map', { scrollWheelZoom: false }).setView([40.6, 67.2], 6);
  L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapInstance);
  markersLayer = L.layerGroup().addTo(mapInstance);
  pickupPoints.forEach((point) => {
    const icon = L.divIcon({ className: 'custom-map-marker pickup-marker', html: '<span>+</span>', iconSize: [30, 30], iconAnchor: [15, 28] });
    L.marker([point.lat, point.lng], { icon }).bindPopup(`<div class="map-popup"><h3>${point.name}</h3><p>Hosilni qabul qilish va saralash punkti</p></div>`).addTo(mapInstance);
  });
  renderMapMarkers(visibleListings());
}

function renderMapMarkers(items) {
  if (!markersLayer || !window.L) return;
  markersLayer.clearLayers();
  items.forEach((item) => {
    const icon = L.divIcon({ className: 'custom-map-marker', html: `<span>${item.product.slice(0, 1)}</span>`, iconSize: [30, 30], iconAnchor: [15, 28] });
    const popup = `<div class="map-popup"><h3>${item.farm}</h3><p>${item.product} · ${item.amount} tonna</p><p><strong>${new Intl.NumberFormat('uz-UZ').format(item.price)} soʻm/kg</strong></p><p>${item.region}, ${item.district}</p><button data-map-order="${item.id}">Buyurtma berish →</button></div>`;
    L.marker([item.lat, item.lng], { icon }).bindPopup(popup).addTo(markersLayer).on('popupopen', (event) => {
      event.popup.getElement().querySelector('[data-map-order]')?.addEventListener('click', () => openOrderDialog(item.id));
    });
  });
  const currentOrder = orders[0];
  if (currentOrder) drawRoute(currentOrder);
}

function drawRoute(order) {
  if (!mapInstance || !order) return;
  if (mapInstance.routeLayer) mapInstance.removeLayer(mapInstance.routeLayer);
  const source = listings.find((item) => item.id === order.listingId);
  if (!source) return;
  const destination = order.region.includes('Toshkent') ? [41.31, 69.28] : order.region.includes('Samarqand') ? [39.65, 66.96] : [41.31, 69.28];
  mapInstance.routeLayer = L.polyline([[source.lat, source.lng], destination], { color: '#e68a55', weight: 4, opacity: .85, dashArray: '8 7' }).addTo(mapInstance);
}

function calculateDelivery() {
  const distance = Math.max(0, Number($('#distance-input').value) || 0);
  const weight = Math.max(0, Number($('#weight-input').value) || 0);
  const cold = $('#refrigerated-input').checked;
  const estimate = 150000 + distance * 2300 + weight * 25 + (cold ? distance * 500 : 0);
  $('#delivery-estimate').textContent = money(estimate);
}

function resetFilters() {
  $('#search-input').value = '';
  $('#product-filter').value = '';
  $('#region-filter').value = '';
  $('#price-min').value = '';
  $('#price-max').value = '';
  $('#harvest-filter').value = '';
  renderListings();
}

populateFilters();
populateDriverRegions();
renderListings();
renderOrders();
renderDrivers();
renderServices();
calculateDelivery();

document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => {
  if ($('#profile-dialog').open) $('#profile-dialog').close();
  setView(button.dataset.view);
}));
['search-input', 'product-filter', 'region-filter', 'price-min', 'price-max', 'harvest-filter', 'sort-select'].forEach((id) => $(`#${id}`).addEventListener('input', renderListings));
$('#reset-filters').addEventListener('click', resetFilters);
$('#empty-reset').addEventListener('click', resetFilters);
$('#mobile-filter-toggle').addEventListener('click', () => $('#filters-panel').classList.toggle('open'));
$('#order-volume').addEventListener('input', updateOrderTotal);
$('#order-form').addEventListener('submit', handleOrderSubmit);
$('.close-dialog').addEventListener('click', () => $('#order-dialog').close());
$('#profile-button').addEventListener('click', () => $('#profile-dialog').showModal());
$('#close-profile').addEventListener('click', () => $('#profile-dialog').close());
document.querySelectorAll('[data-service-purchase]').forEach((button) => button.addEventListener('click', () => handleServicePurchase(button.dataset.servicePurchase)));
$('#order-dialog').addEventListener('click', (event) => { if (event.target === $('#order-dialog')) $('#order-dialog').close(); });
$('#profile-dialog').addEventListener('click', (event) => { if (event.target === $('#profile-dialog')) $('#profile-dialog').close(); });
$('.brand').addEventListener('click', (event) => {
  event.preventDefault();
  setView('market');
});
['distance-input', 'weight-input', 'refrigerated-input'].forEach((id) => $(`#${id}`).addEventListener('input', calculateDelivery));
$('#refrigerated-input').addEventListener('change', calculateDelivery);
$('#driver-search-input').addEventListener('input', renderDrivers);
$('#driver-region-filter').addEventListener('change', renderDrivers);
document.querySelectorAll('[data-driver-tab]').forEach((button) => button.addEventListener('click', () => {
  activeDriverTab = button.dataset.driverTab;
  document.querySelectorAll('[data-driver-tab]').forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  renderDrivers();
}));
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    $('#search-input').focus();
  }
});