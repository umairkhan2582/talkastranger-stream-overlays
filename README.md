# TalkAStranger Stream Overlays Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![OBS Studio](https://img.shields.io/badge/OBS%20Studio-1080p%20Ready-blue.svg)](https://obsproject.com/)
[![Streamlabs](https://img.shields.io/badge/Streamlabs-Compatible-purple.svg)](https://streamlabs.com/)
[![Scenes](https://img.shields.io/badge/Scenes-30%20HTML%20Sources-brightgreen.svg)](#overlay-categories-catalog)
[![Pricing](https://img.shields.io/badge/Packs-%2410%20each-yellow.svg)](#pricing--licensing)

> Professional, high-performance HTML5/CSS3 browser-source stream overlays for OBS Studio, Streamlabs, and Prism. Features 10 distinct categories, 30 animated 1080p/4K scenes, Web Audio synthesized alert chimes, and an offline HTML personalizer.

---

## 🌟 Highlights

- **10 Distinct Categories (30 Complete Scenes):** Covers FPS & Battle Royale, Retro 8-Bit Arcade, Esports Arena, Minimalist Glassmorphism, Cozy Lofi, Dual Host Podcasts, 80s Synthwave, Crypto Trading, IRL Fitness, and RPG Speedrunning.
- **3 Cohesive Scenes Per Pack ($10/pack):** Each category includes:
  1. `ingame-hud.html`: Live broadcast HUD, custom webcam frame, event ticker, and transparent glassmorphism chat.
  2. `starting-soon.html`: Dynamic animated countdown clock, rotating channel status, and ambient audio visualizer.
  3. `intermission.html`: Just chatting / Be Right Back layout with split screen, topic highlights, and community chat.
- **Offline Personalizer (`personalizer.html`):** Zero-coding local dashboard to customize streamer handles, channel branding, game titles, countdown timers, and color accents offline.
- **Zero Lag / GPU Accelerated:** 100% pure vanilla HTML/CSS/JS with zero bulky runtime dependencies. Runs ultra-smoothly inside OBS Browser Sources.
- **Web Audio Alert Chimes:** Built-in synthesizer for follow, sub, and donation chimes with zero copyrighted audio.

---

## 🎨 Overlay Categories Catalog ($10 per 3-Scene Pack)

| Category | Style & Focus | Included 1080p Scenes | Preview |
| :--- | :--- | :--- | :--- |
| **1. Cyberpunk Neon FPS** | Futuristic glow, kill feed, telemetry, tech borders | In-Game HUD, Starting Soon, Intermission | [Thumbnail](assets/thumbnails/cyberpunk-fps.svg) |
| **2. Retro 8-Bit Arcade** | CRT scanlines, 8-bit hearts, coin counters, retro cabinet | Arcade HUD, Insert Coin Start, Game Over BRB | [Thumbnail](assets/thumbnails/retro-arcade.svg) |
| **3. Esports Championship Pro** | Tournament broadcast layout, match score, radar | Match Arena HUD, Roster Countdown, Post-Match | [Thumbnail](assets/thumbnails/esports-pro.svg) |
| **4. Minimalist Frosted Glass** | Clean typography, subtle frosted blurs, camera frame | Clean Cam HUD, Ambient Aura Start, Studio Chat | [Thumbnail](assets/thumbnails/minimal-glass.svg) |
| **5. Cozy Lofi Cafe & Chill** | Warm pastel vibes, animated coffee steam, relaxing vibes | Lofi Camera HUD, Rainy Cafe Start, Lounge BRB | [Thumbnail](assets/thumbnails/cozy-lofi.svg) |
| **6. Dual Host Podcast** | Two-camera studio stage, dynamic active mic indicators | Dual-Cam Stage, Episode Countdown, Q&A Chat | [Thumbnail](assets/thumbnails/podcast-talk.svg) |
| **7. 80s Synthwave Horizon** | 3D wireframe grid, retro chrome, synth sun | Neon Highway HUD, Outrun Grid Start, Cyber BRB | [Thumbnail](assets/thumbnails/synthwave-retro.svg) |
| **8. Live Crypto Trading Desk** | Real-time style multi-ticker, market depth charts | Trading HUD, Market Open Start, Analysis Desk | [Thumbnail](assets/thumbnails/crypto-finance.svg) |
| **9. IRL Vlogging & Fitness** | GPS route lower-third, live heart-rate/calorie display | Mobile HUD, Adventure Start, Rest Split | [Thumbnail](assets/thumbnails/irl-fitness.svg) |
| **10. Speedrun Master RPG** | Gold/green split timers, boss health bars, PB records | Split Timer HUD, Quest Countdown, Run Recap | [Thumbnail](assets/thumbnails/speedrun-quest.svg) |

---

## 🛠️ Quick Start & Setup

### 1. Offline Personalization
1. Open `personalizer.html` directly in any web browser (Chrome, Edge, Firefox, Brave).
2. Select your category theme and scene.
3. Enter your streamer name, channel handle, and game title.
4. Click **Apply & Update Preview** to test the scene live in the 16:9 viewport.
5. Click **Copy OBS URL**.

### 2. Add to OBS Studio
1. In OBS Studio, click **+** under **Sources** > **Browser**.
2. Name the source (e.g., `Cyberpunk HUD` or `Starting Soon`).
3. Check **Local file** and browse to the desired HTML file (e.g., `packages/cyberpunk-fps/ingame-hud.html`), or paste the parameterized local/hosted URL.
4. Set **Width** to `1920` and **Height** to `1080`.
5. Check **Shutdown source when not visible** to save GPU/CPU cycles.
6. Click **OK**.

### 3. Add to Streamlabs Desktop
1. Click **+** in the **Sources** panel.
2. Select **Browser Source** > **Add Source**.
3. Point to the local HTML file or hosted path.
4. Set dimensions to `1920 x 1080`.

---

## 💳 Pricing & Commercial Licensing

- **Free Community Edition:** Single alert widget (`overlay.html` + `stream-overlay.js`) and sample scenes for testing.
- **Individual 3-Scene Pack ($10 one-time):** Full commercial license for any single theme category, including all 3 animated 1080p HTML scenes, editable source code, and offline personalizer presets.
- **All-Access Megabundle ($49 one-time):** All 10 category packages (all 30 scenes) + lifetime theme updates.
- **Payment & Delivery:** Powered by Stripe Checkout with instant automated zip delivery.

---

## 🤝 Contributing

PRs and suggestions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This repository and the base community overlays are licensed under the [MIT License](LICENSE).

## 💳 Stripe Checkout & Store Setup

TalkAStranger Stream Overlays uses zero-backend **Stripe Payment Links** (`buy.stripe.com`) for one-click checkout with credit card, Apple Pay, and Google Pay:

1. **Category Packs:** $10 for 3 animated scenes (In-Game HUD, Starting Soon, Intermission) + audio chimes.
2. **All-Access Bundle:** $49 for all 10 categories (30 scenes total) + commercial license and lifetime updates.

### Setting Up Your Stripe Payment Links
1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/payment-links).
2. Create a product or payment link for each $10 pack (or the $49 bundle).
3. Set the post-purchase redirect to your release download link or private repository release.
4. Update the links in `stripe-config.js`:
```javascript
paymentLinks: {
  'all-access-bundle': 'https://buy.stripe.com/YOUR_BUNDLE_LINK',
  'cyberpunk-fps': 'https://buy.stripe.com/YOUR_CYBERPUNK_LINK',
  ...
}
```
