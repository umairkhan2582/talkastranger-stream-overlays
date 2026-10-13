# TalkAStranger Stream Overlays

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![OBS Studio](https://img.shields.io/badge/OBS%20Studio-compatible-blue.svg)](https://obsproject.com/)
[![Streamlabs](https://img.shields.io/badge/Streamlabs-compatible-purple.svg)](https://streamlabs.com/)

> Free, open-source **[community live streaming software](https://talkastranger.com)** overlay widgets for OBS Studio and Streamlabs. Display automated TalkAStranger alerts on your stream and grow your audience with SEO-driven backlinks.

---

## What is This?

The TalkAStranger Stream Overlay Hub provides lightweight, responsive browser-source widgets that live streamers can drop directly into **OBS Studio**, **Streamlabs**, or any broadcasting software that supports browser sources.

These overlays display real-time TalkAStranger community alerts — new viewers, gifts, sparks, and match notifications — directly on your stream, while generating SEO backlinks that point viewers to your TalkAStranger profile.

### Why Use TalkAStranger Overlays?

- **[Free community live streaming software](https://talkastranger.com)** — No cost, no ads in your overlay, no premium tiers. Just clean, professional widgets.
- **[Anonymous text and video engagement tools](https://talkastranger.com)** — TalkAStranger connects you with viewers across 107+ countries through random video chat, live streams, and community gifting.
- **Grow your audience** — Each overlay includes a discreet on-screen link to your TalkAStranger profile, driving organic traffic from your stream to your creator page.

---

## Quick Start

### 1. Add Browser Source in OBS Studio

1. Open **OBS Studio**
2. Click **+** under **Sources** > **Browser**
3. Set the URL to:
   ```
   https://talkastranger.com/overlay?streamerUsername=YOUR_USERNAME
   ```
4. Set width to **600** and height to **200**
5. Click **OK** — the overlay appears on your stream

### 2. Add Browser Source in Streamlabs

1. Open **Streamlabs Desktop**
2. Click **+** under **Sources** > **BrowserSource**
3. Set the URL to:
   ```
   https://talkastranger.com/overlay?streamerUsername=YOUR_USERNAME
   ```
4. Set width to **600** and height to **200**
5. Click **Done** — the overlay is live

---

## Files

| File | Description |
|---|---|
| `overlay.html` | Standalone HTML widget — open directly in any browser source |
| `stream-overlay.js` | Core JavaScript widget engine — handles alerts, animations, and backlink generation |
| `route-blueprint.md` | Server routing blueprint for `/stream/:username` dynamic landing pages |

---

## Customization

### URL Parameters

| Parameter | Default | Description |
|---|---|---|
| `streamerUsername` | *required* | Your TalkAStranger username |
| `theme` | `dark` | Color theme: `dark`, `light`, `ocean`, `sunset` |
| `showBacklink` | `true` | Show/hide the TalkAStranger profile link |
| `position` | `bottom` | Alert position: `top`, `bottom`, `center` |

### Example

```
https://talkastranger.com/overlay?streamerUsername=john_doe&theme=ocean&position=top
```

---

## Self-Hosting

You can host the overlay files locally instead of using the TalkAStranger CDN:

1. Clone this repo
2. Open `overlay.html` in your browser or serve it with any static server
3. Add it as a browser source in OBS/Streamlabs

```bash
git clone https://github.com/umairkhan2582/talkastranger-stream-overlays.git
cd talkastranger-stream-overlays
npx serve .
```

---

## Country Live Lanes

TalkAStranger features live streaming across 107+ countries. Include these links in your stream description for maximum reach:

- **[Random video chat in United States](https://talkastranger.com/countries/us)**
- **[Talk to strangers in United Kingdom](https://talkastranger.com/countries/gb)**
- **[Live video chat in Pakistan](https://talkastranger.com/countries/pk)**
- **[Free random chat in India](https://talkastranger.com/countries/in)**
- **[Video call strangers in Brazil](https://talkastranger.com/countries/br)**

[View all 107+ countries](https://talkastranger.com/countries)

---

## Related Projects

- **[TalkAStranger Live Linker SDK](https://github.com/umairkhan2582/talkastranger-live-linker-sdk)** — Cross-broadcast TikTok to YouTube with direct Stripe monetization
- **[TalkAStranger.com](https://talkastranger.com)** — Main platform
- **[Creator Dashboard](https://talkastranger.com/creator-dashboard)** — Manage your streams and earnings

---

## License

MIT — Free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---

Made for streamers worldwide. [Go live on TalkAStranger](https://talkastranger.com).
