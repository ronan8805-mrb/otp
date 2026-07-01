/* OTP Airways International Terminal — Interactive Engine */

const ROUTES = {
  CDG: { city: 'Paris Charles de Gaulle', flavor: 'Orange Slush', color: '#FF8C42', desc: 'Tropical citrus runway — bright, bold, first-class lift-off.' },
  LHR: { city: 'London Heathrow', flavor: 'Cherry Lime', color: '#E63946', desc: 'Tart cherry meets zesty lime. The transatlantic classic.' },
  DUB: { city: 'Dublin', flavor: 'Guava Ice', color: '#FF6B9D', desc: 'Cool island vibes with a frosty guava finish.' },
  MAD: { city: 'Madrid', flavor: 'Mango Tango', color: '#FFB347', desc: 'Sun-soaked Spanish sweetness in every pull.' },
  FRA: { city: 'Frankfurt', flavor: 'Blue Razz', color: '#4A90D9', desc: 'Precision-engineered berry blast. German efficiency.' },
  BRU: { city: 'Brussels', flavor: 'Grape Ape', color: '#7B4BCE', desc: 'Rich purple grape — the EU layover favorite.' },
  ROM: { city: 'Rome', flavor: 'Peach Bellini', color: '#FFAB91', desc: 'Italian elegance. Sparkling peach perfection.' }
};

const QUIZ = [
  {
    q: 'Your ideal in-flight entertainment?',
    options: [
      { text: 'Classic films & champagne', tier: 'platinum', pts: 30 },
      { text: 'Playlist curation & window gazing', tier: 'gold', pts: 20 },
      { text: 'Snack cart & nap', tier: 'silver', pts: 10 },
      { text: 'Full turbulence mode', tier: 'adventurer', pts: 25 }
    ]
  },
  {
    q: 'Pick your departure lounge vibe:',
    options: [
      { text: 'Velvet ropes & private suites', tier: 'platinum', pts: 30 },
      { text: 'Retro terminal with live jazz', tier: 'gold', pts: 20 },
      { text: 'Grab-and-go gate hustle', tier: 'silver', pts: 10 },
      { text: 'Rooftop tarmac party', tier: 'adventurer', pts: 25 }
    ]
  },
  {
    q: 'How do you twist?',
    options: [
      { text: 'Slow, deliberate first-class rotation', tier: 'platinum', pts: 30 },
      { text: 'Smooth mid-flight switch', tier: 'gold', pts: 20 },
      { text: 'Quick gate-change twist', tier: 'silver', pts: 10 },
      { text: 'Barrel roll between flavors', tier: 'adventurer', pts: 25 }
    ]
  }
];

const PRODUCTS = [
  { id: 'twist-red', name: 'Twist v6 — Crimson Route', price: 45, img: 'assets/device-red-twist.jpg', seat: '1A' },
  { id: 'twist-teal', name: 'Twist v6 — Atlantic Route', price: 45, img: 'assets/device-teal-twist.jpg', seat: '2A' },
  { id: 'pack-white', name: 'Collector Outer Box', price: 12, img: 'assets/packaging-white-box.jpg', seat: '3B' },
  { id: 'pack-teal', name: 'Teal Limited Edition', price: 48, img: 'assets/packaging-teal-box.jpg', seat: '4C' }
];

let state = {
  ageVerified: false,
  rotation: 0,
  twistAngle: 0,
  puffCount: 0,
  deviceColor: 'red',
  flavorL: 'Orange Slush',
  flavorR: 'Cherry Lime',
  quizStep: 0,
  quizScore: 0,
  selectedSeat: null,
  journeyPhase: 0
};

// ── Age Gate ──
function initAgeGate() {
  const gate = document.getElementById('age-gate');
  const form = document.getElementById('age-form');
  const passport = document.getElementById('passport-card');
  const passEl = document.getElementById('boarding-pass');

  if (sessionStorage.getItem('otp-verified') === 'true') {
    gate.classList.add('hidden');
    state.ageVerified = true;
    return;
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const dob = document.getElementById('dob-input').value;
    if (!dob) return;
    const age = calcAge(dob);
    if (age < 21) {
      alert('OTP Airways is a 21+ destination. Please return when you\'re cleared for takeoff.');
      return;
    }
    passport.style.display = 'none';
    passEl.classList.add('visible');
    const name = document.getElementById('passenger-name').value || 'GUEST FLYER';
    document.getElementById('pass-name').textContent = name.toUpperCase();
    document.getElementById('pass-flight').textContent = 'OTP' + Math.floor(Math.random() * 900 + 100);
    document.getElementById('pass-gate').textContent = 'A' + Math.floor(Math.random() * 20 + 1);
    document.getElementById('pass-seat').textContent = String.fromCharCode(65 + Math.floor(Math.random() * 6)) + (Math.floor(Math.random() * 30) + 1);
    document.getElementById('pass-date').textContent = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
  });

  document.getElementById('enter-terminal')?.addEventListener('click', () => {
    sessionStorage.setItem('otp-verified', 'true');
    state.ageVerified = true;
    gate.classList.add('hidden');
    initHeroAnimations();
  });
}

function calcAge(dob) {
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

// ── Hero GSAP ──
function initHeroAnimations() {
  if (typeof gsap === 'undefined') return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.hero-tagline', { opacity: 0, y: 20, duration: 0.8 })
    .from('.hero-headline', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.4')
    .from('.hero-sub', { opacity: 0, duration: 0.6 }, '-=0.5')
    .from('.hero-ctas .btn', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5 }, '-=0.3');

  gsap.to('.hero-tagline', { opacity: 1, duration: 0.01 });

  gsap.to('.hero-cloud-1', { x: 100, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero-cloud-2', { x: -80, duration: 25, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.hero-cloud-3', { x: 60, duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-window');
    if (hero) hero.style.transform = `translateY(${scrolled * 0.4}px)`;
  });
}

// ── Globe (Three.js) ──
function initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    initGlobeFallback();
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.z = 2.8;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const size = canvas.parentElement.clientWidth;
  renderer.setSize(size, size);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const loader = new THREE.TextureLoader();
  const material = new THREE.MeshPhongMaterial({
    color: 0x00205B,
    emissive: 0x0a2540,
    shininess: 30,
    transparent: true,
    opacity: 0.95
  });

  const wireGeo = new THREE.WireframeGeometry(geometry);
  const wireMat = new THREE.LineBasicMaterial({ color: 0xC9A227, transparent: true, opacity: 0.15 });
  const wireframe = new THREE.LineSegments(wireGeo, wireMat);

  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);
  scene.add(wireframe);

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  const dir = new THREE.DirectionalLight(0xC9A227, 0.8);
  dir.position.set(5, 3, 5);
  scene.add(ambient, dir);

  let isDragging = false;
  let prevX = 0;
  let rotY = 0;
  let rotX = 0;

  canvas.addEventListener('mousedown', (e) => { isDragging = true; prevX = e.clientX; });
  canvas.addEventListener('mouseup', () => { isDragging = false; });
  canvas.addEventListener('mouseleave', () => { isDragging = false; });
  canvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevX;
    rotY += dx * 0.01;
    prevX = e.clientX;
  });

  canvas.addEventListener('touchstart', (e) => { isDragging = true; prevX = e.touches[0].clientX; });
  canvas.addEventListener('touchend', () => { isDragging = false; });
  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    rotY += (e.touches[0].clientX - prevX) * 0.01;
    prevX = e.touches[0].clientX;
  });

  function animate() {
    requestAnimationFrame(animate);
    if (!isDragging) rotY += 0.002;
    globe.rotation.y = rotY;
    globe.rotation.x = rotX;
    wireframe.rotation.y = rotY;
    wireframe.rotation.x = rotX;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const s = canvas.parentElement.clientWidth;
    renderer.setSize(s, s);
  });

  addStampOverlays(canvas.parentElement);
}

function addStampOverlays(container) {
  const stamps = Object.keys(ROUTES);
  const positions = [
    { top: '12%', left: '18%' }, { top: '22%', left: '58%' }, { top: '38%', left: '8%' },
    { top: '32%', left: '72%' }, { top: '52%', left: '28%' }, { top: '48%', left: '78%' }, { top: '68%', left: '48%' }
  ];
  stamps.forEach((code, i) => {
    const el = document.createElement('button');
    el.className = 'stamp-hotspot';
    el.textContent = code;
    el.style.top = positions[i]?.top || '50%';
    el.style.left = positions[i]?.left || '50%';
    el.setAttribute('aria-label', `Route ${code}`);
    el.addEventListener('click', () => showRoute(code));
    container.appendChild(el);
  });
}

function initGlobeFallback() {
  const container = document.querySelector('.globe-container');
  if (!container) return;
  const fallback = document.createElement('div');
  fallback.style.cssText = 'width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 35% 35%,var(--otp-teal),var(--otp-navy));border:3px solid var(--otp-gold);position:relative';
  container.insertBefore(fallback, container.firstChild);
  addStampOverlays(container);
}

function showRoute(code) {
  const route = ROUTES[code];
  if (!route) return;
  const panel = document.getElementById('route-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="section-label">Route Unlocked — ${code}</div>
    <div class="route-flavor" style="color:${route.color}">${route.flavor}</div>
    <p style="color:var(--otp-silver);margin:1rem 0">${route.city}</p>
    <p style="font-size:0.9rem;line-height:1.6">${route.desc}</p>
    <button class="btn btn-teal" style="margin-top:1.5rem" onclick="document.getElementById('configurator').scrollIntoView({behavior:'smooth'})">Configure This Route</button>
  `;
  if (typeof gsap !== 'undefined') {
    gsap.from(panel, { opacity: 0, y: 20, duration: 0.5 });
  }
}

// ── Configurator ──
function initConfigurator() {
  const device = document.getElementById('config-device');
  const twistSlider = document.getElementById('twist-slider');
  const chamber = document.getElementById('chamber-window');
  const counter = document.getElementById('trip-counter');
  const puffBtn = document.getElementById('puff-btn');

  if (!device) return;

  let dragging = false;
  let startX = 0;
  let startRot = 0;

  device.addEventListener('mousedown', (e) => { dragging = true; startX = e.clientX; startRot = state.rotation; });
  document.addEventListener('mouseup', () => { dragging = false; });
  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    state.rotation = startRot + (e.clientX - startX) * 0.5;
    device.style.transform = `rotateY(${state.rotation}deg)`;
  });

  device.addEventListener('touchstart', (e) => {
    dragging = true;
    startX = e.touches[0].clientX;
    startRot = state.rotation;
  }, { passive: true });
  document.addEventListener('touchend', () => { dragging = false; });
  document.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    e.preventDefault();
    state.rotation = startRot + (e.touches[0].clientX - startX) * 0.5;
    device.style.transform = `rotateY(${state.rotation}deg)`;
  }, { passive: false });

  twistSlider?.addEventListener('input', (e) => {
    state.twistAngle = parseInt(e.target.value);
    if (chamber) chamber.classList.toggle('twisted', state.twistAngle > 50);
    const flavors = document.querySelectorAll('.flavor-label');
    if (state.twistAngle > 50) {
      flavors[0]?.classList.add('active');
      flavors[1]?.classList.remove('active');
    } else {
      flavors[1]?.classList.add('active');
      flavors[0]?.classList.remove('active');
    }
  });

  document.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active');
      state.deviceColor = s.dataset.color;
      device.src = s.dataset.color === 'teal' ? 'assets/device-teal-twist.jpg' : 'assets/device-red-twist.jpg';
    });
  });

  document.querySelectorAll('.flavor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const side = btn.dataset.side;
      document.querySelectorAll(`.flavor-btn[data-side="${side}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (side === 'left') state.flavorL = btn.dataset.flavor;
      else state.flavorR = btn.dataset.flavor;
      updateFlavorLabels();
    });
  });

  puffBtn?.addEventListener('click', () => {
    state.puffCount = Math.min(9999, state.puffCount + 1);
    if (counter) counter.textContent = String(state.puffCount).padStart(4, '0');
    device.style.transform = `rotateY(${state.rotation}deg) scale(1.05)`;
    setTimeout(() => { device.style.transform = `rotateY(${state.rotation}deg) scale(1)`; }, 150);
    if (typeof gsap !== 'undefined') {
      gsap.from(counter, { scale: 1.2, duration: 0.2 });
    }
  });
}

function updateFlavorLabels() {
  const labels = document.querySelectorAll('.flavor-label');
  if (labels[0]) labels[0].textContent = state.flavorL;
  if (labels[1]) labels[1].textContent = state.flavorR;
}

// ── Journey Scroll ──
function initJourney() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const cards = document.querySelectorAll('.journey-card');
  const bar = document.querySelector('.journey-progress-bar');

  ScrollTrigger.create({
    trigger: '.journey',
    start: 'top center',
    end: 'bottom center',
    onUpdate: (self) => {
      const progress = self.progress;
      if (bar) bar.style.width = `${progress * 100}%`;
      const phase = Math.min(2, Math.floor(progress * 3));
      cards.forEach((c, i) => c.classList.toggle('active', i === phase));
    }
  });

  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0, y: 40, duration: 0.6, delay: i * 0.15
    });
  });
}

// ── Quiz ──
function initQuiz() {
  const box = document.getElementById('quiz-box');
  if (!box) return;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const box = document.getElementById('quiz-box');
  if (state.quizStep >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[state.quizStep];
  box.innerHTML = `
    <div class="section-label">Question ${state.quizStep + 1} of ${QUIZ.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((o, i) => `<button class="quiz-option" data-idx="${i}">${o.text}</button>`).join('')}
    </div>
  `;
  box.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const opt = q.options[parseInt(btn.dataset.idx)];
      state.quizScore += opt.pts;
      state.quizStep++;
      renderQuizQuestion();
    });
  });
}

function showQuizResult() {
  const box = document.getElementById('quiz-box');
  let tier = 'Silver Flyer';
  let desc = 'Economy class vibes — reliable, ready for adventure.';
  if (state.quizScore >= 70) { tier = 'Platinum Captain'; desc = 'You belong in the cockpit. Unlimited lounge access unlocked.'; }
  else if (state.quizScore >= 45) { tier = 'Gold Navigator'; desc = 'First-class instincts. Priority boarding on every route.'; }
  else if (state.quizScore >= 25) { tier = 'Adventure Class'; desc = 'Turbulence is your love language. Wild routes await.'; }

  box.innerHTML = `
    <div class="quiz-result visible">
      <div class="section-label">Frequent Flyer Status Assigned</div>
      <div class="section-title" style="font-size:2.5rem;color:var(--otp-gold)">${tier}</div>
      <p style="color:var(--otp-silver);margin:1rem 0 2rem">${desc}</p>
      <p style="font-size:0.85rem;color:var(--otp-teal)">+${state.quizScore} OTP Miles earned</p>
      <button class="btn btn-gold" style="margin-top:1.5rem" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'})">Claim Your Seat</button>
    </div>
  `;
}

// ── Seat Map Shop ──
function initShop() {
  const seatMap = document.getElementById('seat-map');
  const productGrid = document.getElementById('shop-products');
  if (!seatMap || !productGrid) return;

  const occupied = ['1C', '2B', '3A', '5D'];
  const rows = ['1', '2', '3', '4', '5'];
  const cols = ['A', 'B', 'C', 'D', 'E', 'F'];

  rows.forEach(row => {
    cols.forEach(col => {
      const id = row + col;
      const seat = document.createElement('button');
      seat.className = 'seat' + (occupied.includes(id) ? ' occupied' : '');
      seat.textContent = id;
      seat.dataset.seat = id;
      if (!occupied.includes(id)) {
        seat.addEventListener('click', () => selectSeat(id, seat));
      }
      seatMap.appendChild(seat);
    });
  });

  productGrid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-seat="${p.seat}">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <h3 style="font-family:var(--font-display);letter-spacing:0.08em;margin:0 0 0.5rem">${p.name}</h3>
        <div class="product-price">$${p.price}</div>
        <p style="font-size:0.75rem;color:var(--otp-silver);margin:0.5rem 0">Seat ${p.seat} · Live Resin</p>
        <button class="btn btn-red" style="width:100%;margin-top:1rem;padding:0.7rem" onclick="addToCart('${p.id}')">Reserve Seat</button>
      </div>
    </div>
  `).join('');
}

function selectSeat(id, el) {
  document.querySelectorAll('.seat.selected').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedSeat = id;
  const product = PRODUCTS.find(p => p.seat === id);
  if (product) {
    document.querySelector(`[data-seat="${product.seat}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  alert(`✈️ ${product.name} reserved${state.selectedSeat ? ` in Seat ${state.selectedSeat}` : ''}!\n\nProceed to checkout via Shopify integration.`);
}

// ── Flight Tracker ──
function initTracker() {
  const form = document.getElementById('tracker-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderId = document.getElementById('order-id').value.trim();
    if (!orderId) return;
    simulateTracking(orderId);
  });
}

function simulateTracking(orderId) {
  const board = document.getElementById('flight-board-body');
  const statuses = ['CHECKED IN', 'SECURITY', 'BOARDING', 'CRUISING', 'LANDING', 'ARRIVED'];
  const steps = ['Gate A12', 'TSA Clear', 'Now Boarding', 'En Route', 'Descending', 'Delivered'];
  let step = 0;

  board.innerHTML = `
    <div class="flight-row">
      <span>OTP</span>
      <span>Order #${orderId.toUpperCase()}</span>
      <span class="status-boarding">${statuses[0]}</span>
      <span>${steps[0]}</span>
    </div>
  `;

  const interval = setInterval(() => {
    step++;
    if (step >= statuses.length) { clearInterval(interval); return; }
    const row = board.querySelector('.flight-row');
    const statusEl = row.querySelector('span:nth-child(3)');
    const stepEl = row.querySelector('span:nth-child(4)');
    statusEl.textContent = statuses[step];
    stepEl.textContent = steps[step];
    statusEl.className = step < 4 ? 'status-boarding' : step < 5 ? 'status-on-time' : 'status-on-time';
  }, 1500);
}

// ── Nav ──
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');
  const allNavLinks = document.querySelectorAll('.nav-links a, .mob-nav-item');
  const sections = document.querySelectorAll('section[id]');

  function setNavOpen(open) {
    links?.classList.toggle('open', open);
    overlay?.classList.toggle('visible', open);
    document.body.classList.toggle('nav-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.textContent = open ? '✕' : '☰';
    }
  }

  toggle?.addEventListener('click', () => setNavOpen(!links?.classList.contains('open')));
  overlay?.addEventListener('click', () => setNavOpen(false));

  allNavLinks.forEach(a => {
    a.addEventListener('click', () => {
      setNavOpen(false);
    });
  });

  function updateActiveNav() {
    const offset = window.innerWidth <= 900 ? 120 : 200;
    let current = 'hero';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - offset) current = s.id;
    });
    allNavLinks.forEach(a => {
      const href = a.getAttribute('href')?.replace('#', '');
      a.classList.toggle('active', href === current);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

// ── Section reveals ──
function initScrollReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.utils.toArray('section .section-title, section .section-desc, .pack-card, .tier-card, .safety-card').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0, y: 30, duration: 0.7
    });
  });
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initGlobe();
  initConfigurator();
  initJourney();
  initQuiz();
  initShop();
  initTracker();
  initNav();
  initScrollReveals();
  if (sessionStorage.getItem('otp-verified') === 'true') initHeroAnimations();
});