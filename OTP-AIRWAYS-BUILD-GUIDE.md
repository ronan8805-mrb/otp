# OTP Airways International Terminal
## Complete Build Guide · Brand-Matched to Reference Assets

> **Live prototype:** `C:\Users\aceai\otp-airways\index.html`  
> **Brand assets:** `C:\Users\aceai\otp-airways\assets\` (15 reference images from `Downloads\otp`)

---

## 1. Site Map + Airport-Themed Navigation

```
OTP AIRWAYS INTERNATIONAL TERMINAL
│
├── 🛂 IMMIGRATION (Age Gate)          → Passport scan + boarding pass generator
├── 🛫 DEPARTURES (Hero)               → #hero — Parallax takeoff window
├── ✈️  FLIGHT PATH (Journey)          → #journey — Board → Cruise → Land scroll
├── 🌍 ROUTE MAP (Globe)               → #routes — 3D globe + stamp hotspots
├── 🔧 HANGAR (Configurator)           → #configurator — Twist v6 live builder
├── 🧳 BAGGAGE CLAIM (Packaging)       → #packaging — Carousel explorer
├── 🎫 FREQUENT FLYER CLUB             → #ffc — Miles tiers + personality quiz
├── 🛍️  DUTY FREE (Shop)               → #shop — Seat-map product selector
├── 📟 FLIGHT STATUS (Tracker)         → #tracker — Live departure board
└── 📋 SAFETY BRIEF (Compliance)       → #safety — Government warnings disguised as briefing
```

### Terminal Nav Labels (Fixed Header)

| Nav Item       | Section ID      | Airport Metaphor              |
|----------------|-----------------|-------------------------------|
| Departures     | `#hero`         | Main terminal window / gate   |
| Route Map      | `#routes`       | International connections     |
| Hangar         | `#configurator` | Aircraft customization bay    |
| Baggage Claim  | `#packaging`    | Luggage carousel              |
| Frequent Flyer | `#ffc`          | Loyalty lounge                |
| Duty Free      | `#shop`         | In-flight shopping            |
| Flight Status  | `#tracker`      | Arrivals/departures board     |
| Safety Brief   | `#safety`       | Pre-flight safety video       |

**Gate indicator (nav right):** `Gate A1 · OTP International`

---

## 2. Page-by-Page Breakdown

### 🛂 IMMIGRATION — Age Gate

**Layout:** Full-screen dark radial gradient. Centered passport card (navy + gold border) with animated teal scan line.

**Copy:**
- Title: `OTP AIRWAYS`
- Sub: `International Terminal · Gate Verification Required`
- CTA: `Scan Passport & Verify Age`
- Legal: `By entering, you confirm you are 21+ and agree to OTP's Safety Brief.`

**Interactivity:**
1. User enters name + DOB
2. Scan line animates (CSS `@keyframes scan`)
3. On 21+ verify → passport hides → **boarding pass** generates with random flight/gate/seat
4. `Enter International Terminal →` dismisses gate (stored in `sessionStorage`)

**Boarding pass fields:** PASSENGER, FLIGHT (OTP###), GATE, SEAT, DATE, CLASS: FIRST CLASS

---

### 🛫 DEPARTURES — Hero

**Layout:** Full-viewport airplane window frame (dark bezel). Sky gradient + parallax clouds. Floating Twist v6 device. Ticker bar at bottom.

**Copy:**
- Script: `Prepare for Takeoff`
- Headline: `LIFE'S A TRIP`
- Sub: `Dual-Chamber Twist v6 · Live Resin Vape`
- CTAs: `Configure Your Flight` | `Reserve a Seat` | `Explore Routes`

**Ticker:** `✈ Fasten Your Seatbelts · OTP Airways International · Live Resin · Premium Cannabis · CDG → LHR → DUB → MAD → FRA → BRU → ROM · 21+ Only`

**Interactivity:**
- GSAP staggered reveal on entry
- Scroll parallax: sky moves 0.4x, device floats inverse 0.15x
- Device CSS float animation

**Asset:** `device-red-twist.jpg`

---

### ✈️ FLIGHT PATH — Journey Scroll

**Layout:** 3-column card grid on navy gradient. Progress bar fills on scroll.

**Phases:**
| Phase    | Icon | Copy |
|----------|------|------|
| BOARDING | 🛫   | Unbox route, peel stamps, twist to departure flavor |
| CRUISING | ✈️   | Mid-flight twist, TRIPS counter climbs |
| LANDING  | 🛬   | Premium live resin finish, collect OTP Miles |

**Interactivity:** GSAP ScrollTrigger activates cards + progress bar by scroll position.

---

### 🌍 ROUTE MAP — 3D Globe

**Layout:** Centered 500px globe canvas. Stamp hotspots overlaid. Route panel below.

**Stamps → Flavors:**
| Code | City | Flavor |
|------|------|--------|
| CDG  | Paris Charles de Gaulle | Orange Slush |
| LHR  | London Heathrow | Cherry Lime |
| DUB  | Dublin | Guava Ice |
| MAD  | Madrid | Mango Tango |
| FRA  | Frankfurt | Blue Razz |
| BRU  | Brussels | Grape Ape |
| ROM  | Rome | Peach Bellini |

**Interactivity:** Drag to spin globe (Three.js). Click stamp → flavor panel unlocks → CTA to configurator.

---

### 🔧 HANGAR — Twist v6 Configurator

**Layout:** 2-column — device left (drag rotate), controls right.

**Controls:**
- Colorway swatches: Crimson Route (red) / Atlantic Route (teal)
- Chamber A & B flavor selectors
- Twist slider (0–100) — rotates yellow chamber window overlay
- TRIPS counter (0000–9999) + Simulate Puff button
- `Add to Manifest — $45`

**Assets:** `device-red-twist.jpg`, `device-teal-twist.jpg`

---

### 🧳 BAGGAGE CLAIM — Packaging Explorer

**Layout:** Horizontal scroll-snap carousel, 6 cards.

| Card | Asset | Title |
|------|-------|-------|
| 1 | `packaging-lifes-a-trip.jpg` | OUTER EXPEDITION BOX |
| 2 | `packaging-white-box.jpg` | OVER THE POND EDITION |
| 3 | `packaging-red-inner.jpg` | CRIMSON INNER CABIN |
| 4 | `packaging-teal-box.jpg` | ATLANTIC TEAL EDITION |
| 5 | `promo-red.jpg` | FIRST CLASS RED |
| 6 | `promo-teal.jpg` | BUSINESS CLASS TEAL |

---

### 🎫 FREQUENT FLYER CLUB

**Tiers:** Silver (0–24) · Gold (25–44) · Platinum (45+)

**Quiz (3 questions):** In-flight entertainment, lounge vibe, twist style → assigns tier + OTP Miles.

**Result tiers:** Silver Flyer, Gold Navigator, Adventure Class, Platinum Captain

---

### 🛍️ DUTY FREE — Seat Map Shop

**Layout:** 5×6 seat grid. Product cards below.

**Products:**
- Twist v6 Crimson Route — $45 — Seat 1A
- Twist v6 Atlantic Route — $45 — Seat 2A
- Collector Outer Box — $12 — Seat 3B
- Teal Limited Edition — $48 — Seat 4C

**Interactivity:** Click seat → highlights product. Reserve Seat → cart alert (Shopify hook).

---

### 📟 FLIGHT STATUS — Order Tracker

**Layout:** Retro monospace departure board (green/amber status text).

**Statuses:** CHECKED IN → SECURITY → BOARDING → CRUISING → LANDING → ARRIVED

**Input:** Order confirmation `#` (e.g. `OTP-VD6-2401`)

---

### 📋 SAFETY BRIEF — Compliance

**Layout:** 4-card grid on navy→red gradient.

**Cards:** Age 21+, Government Warning (verbatim from `packaging-red-inner.jpg`), Product Specs, Responsible Flight Protocol

**Asset:** `warning-ca.jpg` on age card

---

## 3. Visual Style Bible

### Color Palette (Extracted from Reference Images)

| Token | Hex | Source |
|-------|-----|--------|
| OTP Navy | `#00205B` | Logo wings, stripes, LIFE'S A TRIP text |
| OTP Navy Deep | `#0A2540` | Dark backgrounds, globe |
| OTP Red | `#C8102E` | Stripes, inner box, crimson device |
| OTP Red Deep | `#8B1538` | Gradients, skull variant |
| OTP Teal | `#40B5B5` | Teal box, teal device, promo |
| OTP Teal Deep | `#008B8B` | Teal shadows |
| OTP Gold | `#C9A227` | Winged globe, FASTEN YOUR SEATBELTS |
| OTP Gold Light | `#D4AF37` | Metallic highlights |
| OTP White | `#FFFFFF` | Packaging, headlines |
| OTP Cream | `#F8F6F1` | Boarding pass paper |
| OTP Black | `#0B0B0F` | Device photography BG |
| OTP Silver | `#C0C5CE` | UI chrome, body text |
| Chamber Yellow | `#FFDC00` | Dual-chamber window |

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | Bebas Neue | 400 | LIFE'S A TRIP, section titles, TRIPS counter |
| Headlines | Montserrat | 600–800 | CTAs, nav, quiz |
| Script | Great Vibes | 400 | Prepare for Takeoff, Life's a Trip. Fly higher. |
| Body | DM Sans | 400–700 | Paragraphs, forms, legal |

### Logo Variants (from assets)

1. **Navy wings + OTP globe + OVER THE POND** — `logo-over-the-pond.jpg` — light BG header
2. **Gold wings on red** — `logo-otp-gold-red.jpg` — age gate, inner box
3. **Gold skull + OTP** — `tagline-skull.jpg` — secondary mark, footer accent

### Device Anatomy (must match exactly)

- Transparent red OR teal body
- Silver metallic band with yellow dual-chamber oval window
- Black face panel: TWIST, flavor labels, battery + globe icons, 0000 TRIPS display
- Teal/red pill TWIST button at base
- Flavors: Orange Slush / Cherry Lime

### Packaging Anatomy

- **Outer white box:** Travel stamps (CDG, UK, DUB, MAD, FRA, BRU, Rome), airplanes, dotted paths, red+navy stripes, LIFE'S A TRIP, LIVE RESIN VAPE
- **Red inner:** Gold logo, FASTEN YOUR SEATBELTS, PREPARE FOR TAKEOFF, DUAL-CHAMBER TWIST v6
- **Teal variant:** Gold foil on matte teal, vertical OVER THE POND spine

### Tone of Voice

Retro-futuristic luxury airline meets playful cannabis adventure. Always aviation metaphors. Compliance = "safety brief." Products = "routes" and "seats."

---

## 4. Grok Imagine Prompts (10 Ready-to-Generate)

> Use `image_edit` with reference assets from `assets/` for brand consistency. Use `image_gen` for new scenes. Aspect ratios noted.

### PROMPT 01 — Homepage Hero (16:9)
```
Cinematic first-class airplane window view at golden hour, fluffy clouds below, runway lights visible in the distance. Floating in the foreground: a premium transparent red cannabis vape device with silver band and yellow dual-chamber window, exactly matching the OTP Twist v6 product shape. Retro-futuristic luxury airline aesthetic, Pan Am meets STARLUX. Deep navy window frame, subtle gold lens flare. No readable text on device screen. Photorealistic, expensive, immersive hero banner.
```
**Aspect:** `16:9` · **Reference:** `device-red-twist.jpg`

### PROMPT 02 — Route Map / Globe (1:1)
```
Stylized 3D navy blue globe with thin gold wireframe latitude lines, surrounded by vintage passport stamps floating in orbit: CDG, LHR, DUB, MAD, FRA, BRU, ROM. Red and gold dotted flight paths connecting the stamps. Dark space background with subtle stars. Premium aviation cartography style, OTP Airways branding mood. Clean, illustrative, not photorealistic.
```
**Aspect:** `1:1`

### PROMPT 03 — Twist Configurator Scene (16:9)
```
Luxury aircraft hangar interior with polished concrete floor, dramatic spotlights, teal and crimson ambient lighting. Center stage: two OTP Twist v6 vape devices side by side, one transparent red and one transparent teal, both with silver bands and yellow dual-chamber windows. Holographic UI elements floating around them showing flavor names. High-end product configurator environment, cinematic depth of field.
```
**Aspect:** `16:9` · **Reference:** `device-red-twist.jpg`, `device-teal-twist.jpg`

### PROMPT 04 — Packaging Explorer (4:3)
```
Flat lay of OTP premium cannabis packaging collection on white marble surface: the white outer box with navy LIFE'S A TRIP text and colorful travel stamps, a deep red inner box with gold winged globe logo, and a matte teal limited edition box with gold foil lettering. Small airplane models and passport props scattered artfully. Studio lighting, luxury unboxing editorial photography.
```
**Aspect:** `4:3` · **Reference:** `packaging-lifes-a-trip.jpg`, `packaging-teal-box.jpg`

### PROMPT 05 — Age Gate / Passport Scan (9:16)
```
Close-up of hands holding an open navy blue biometric passport with gold embossed OTP winged globe emblem on the cover. A bright teal scanning laser line sweeps across the photo page. Dark airport immigration booth background with soft bokeh terminal lights. Cinematic, moody, premium security aesthetic. Mobile-first vertical composition.
```
**Aspect:** `9:16` · **Reference:** `logo-otp-gold-red.jpg`

### PROMPT 06 — Frequent Flyer Lounge (16:9)
```
Opulent airport first-class lounge with mid-century modern furniture, navy and gold color scheme, floor-to-ceiling windows overlooking a runway at dusk. VIP boarding pass and gold OTP winged globe membership card on a walnut side table. Champagne flute, leather seats, subtle cannabis-free luxury travel atmosphere. Warm ambient lighting, STARLUX airline aesthetic.
```
**Aspect:** `16:9`

### PROMPT 07 — Mobile Terminal View (9:16)
```
Mobile phone mockup showing OTP Airways website: airplane window hero with LIFE'S A TRIP headline, red Twist device floating, gold and teal CTA buttons, departure board ticker at bottom. Clean dark navy UI chrome. Premium cannabis brand mobile experience, portrait orientation, device frame optional.
```
**Aspect:** `9:16` · **Reference:** `promo-teal.jpg`

### PROMPT 08 — Flight Status Departure Board (16:9)
```
Retro airport split-flap departure board (Solari board) with amber and green text glowing in a dark terminal. Rows showing OTP flight numbers, gates, and statuses: BOARDING, CRUISING, ARRIVED. Navy and gold terminal architecture. Nostalgic aviation typography, cinematic wide shot, slight atmospheric haze.
```
**Aspect:** `16:9`

### PROMPT 09 — Safety Brief / Cabin Interior (16:9)
```
Airplane cabin interior during safety briefing video playback on seatback screens. OTP branded safety card visible with government warning text styling in white on deep red. Flight attendants in navy uniforms with gold wing pins. Serious but stylish compliance aesthetic disguised as airline safety demonstration. Soft cabin lighting, premium economy rows.
```
**Aspect:** `16:9` · **Reference:** `packaging-red-inner.jpg`

### PROMPT 10 — Social / Viral OOH Billboard (1:1)
```
Giant airport advertising lightbox in a modern international terminal. The ad shows OTP packaging with LIFE'S A TRIP in massive navy letters, red and blue stripes, gold winged globe, and a transparent red Twist device. Travelers with luggage walking past, motion blur. High-impact OOH campaign mockup, viral-worthy, bold colors matching OTP brand exactly.
```
**Aspect:** `1:1` · **Reference:** `packaging-lifes-a-trip.jpg`, `device-red-twist.jpg`

---

## 5. Technical Build Plan

### Stack Recommendation

| Layer | Tool | Purpose |
|-------|------|---------|
| Prototype (DONE) | HTML + CSS + Vanilla JS | `otp-airways/` — all interactions working |
| Production CMS | Webflow or Framer | Visual polish, CMS for routes/flavors |
| Commerce | Shopify + Buy Button | Seat-map → cart → checkout |
| 3D Globe | Three.js (r128) | Upgrade with earth texture + pin markers |
| Animation | GSAP 3 + ScrollTrigger | Journey scroll, hero reveals |
| Configurator | Spline or Three.js GLB | True 3D device with twist rig |
| Analytics | GA4 + Hotjar | Funnel: gate → configurator → shop |

### Shopify Integration Snippet

```html
<!-- Add to #shop section after seat selection -->
<div id="shopify-button-container"></div>
<script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"></script>
<script>
  ShopifyBuyInit();
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'otp-airways.myshopify.com',
      storefrontAccessToken: 'YOUR_STOREFRONT_TOKEN'
    });
    client.product.fetch('PRODUCT_ID').then(product => {
      /* Render BuyButton with selected seat variant */
    });
  }
</script>
```

### GSAP Journey Animation Pattern

```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: '.journey',
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1
  }
})
.to('.journey-card[data-phase="0"]', { scale: 1.05 })
.to('.journey-card[data-phase="1"]', { scale: 1.05 }, '+=0.33')
.to('.journey-card[data-phase="2"]', { scale: 1.05 }, '+=0.33');
```

### Webflow Migration Checklist

1. Import fonts (Bebas Neue, Montserrat, Great Vibes, DM Sans)
2. Set CSS variables from style bible
3. Rebuild nav as Webflow Navbar component
4. Hero: Webflow interactions for parallax (mouse + scroll)
5. Embed Three.js globe via custom code embed
6. Configurator: Lottie or Spline embed
7. CMS Collections: `Routes`, `Flavors`, `Products`
8. Shopify Buy Button embed in Duty Free section

---

## 6. Step-by-Step Build Instructions (Grok Build Beta)

### Phase 1 — Foundation ✅ COMPLETE
1. Open `C:\Users\aceai\otp-airways\`
2. Run local server: `npx serve .` or open `index.html` in browser
3. Verify age gate → boarding pass → terminal entry flow
4. Confirm all 15 brand assets load from `assets/`

### Phase 2 — Visual Polish
1. Generate hero background with **PROMPT 01** (Imagine)
2. Replace `.hero-window` gradient with generated image
3. Add earth texture to Three.js globe (`https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg`)
4. Generate lounge + hangar backgrounds for section dividers

### Phase 3 — Commerce
1. Create Shopify store with 4 products matching seat map
2. Add variant selectors (Red/Teal, flavor pairs)
3. Wire `addToCart()` in `main.js` to Shopify Cart API
4. Connect flight tracker to Shopify order status API

### Phase 4 — Gamification+
1. Persist OTP Miles in `localStorage` (+1 per puff simulation)
2. Add tier badge to boarding pass based on miles
3. Email capture in Frequent Flyer quiz → Klaviyo segment
4. Referral codes as "companion tickets"

### Phase 5 — Compliance Hardening
1. Geo-gate by state (redirect non-legal states)
2. Add cookie consent banner styled as "Customs Declaration"
3. Link Privacy/Terms in footer
4. Ensure all warning text matches `packaging-red-inner.jpg` verbatim

### Phase 6 — Launch
1. Lighthouse audit (target 90+ performance)
2. Test mobile seat map + configurator touch
3. Deploy to Vercel/Netlify or publish Webflow
4. Connect domain: `flyotp.com` or `otp-airways.com`

---

## 7. Bonus: 3 Variant Ideas

### Variant A — "Red Eye" Dark Mode
- Default dark `#0B0B0F` background throughout
- Gold neon accents, red ticker text
- Glowing globe with constellation flight paths
- Boarding pass holographic foil effect (CSS `conic-gradient`)
- Best for: late-night scroll sessions, premium feel

### Variant B — "Mobile-First Layover"
- Single-column, bottom nav bar (airport app style)
- Swipeable journey cards instead of scroll grid
- Configurator as full-screen modal
- Sticky "Reserve Seat" FAB with plane icon
- PWA install prompt: "Add OTP Terminal to Home Screen"
- Best for: Instagram traffic, 70%+ mobile users

### Variant C — "Max Gamification"
- Daily login = "check-in" bonus miles
- Spin-the-globe roulette for discount codes
- AR passport stamp collection (WebXR)
- Leaderboard: top flyers by TRIPS count
- NFT boarding passes for limited drops (optional)
- Twitch-style live "flight chat" during product drops
- Best for: viral campaigns, Gen Z audience

---

## File Structure

```
otp-airways/
├── index.html              # Full single-page terminal
├── css/main.css            # Style bible implementation
├── js/main.js              # All interactive engines
├── assets/                 # 15 brand images + clean aliases
│   ├── device-red-twist.jpg
│   ├── device-teal-twist.jpg
│   ├── packaging-lifes-a-trip.jpg
│   ├── logo-over-the-pond.jpg
│   └── ...
└── OTP-AIRWAYS-BUILD-GUIDE.md  # This document
```

---

*Built for OTP (Over The Pond) · Life's a Trip. Fly higher. · © 2026*