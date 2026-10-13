# TalkAStranger Stream Overlays

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![OBS Studio](https://img.shields.io/badge/OBS%20Studio-compatible-blue.svg)](https://obsproject.com/)
[![Streamlabs](https://img.shields.io/badge/Streamlabs-compatible-purple.svg)](https://streamlabs.com/)

> Free, open-source overlay widgets for OBS Studio and Streamlabs. Display automated TalkAStranger community alerts on your stream and share your profile with viewers.

---

## What is This?

The TalkAStranger Stream Overlay Hub provides lightweight, responsive browser-source widgets that live streamers can drop directly into **OBS Studio**, **Streamlabs**, or any broadcasting software that supports browser sources.

These overlays display real-time TalkAStranger community alerts — new viewers, gifts, sparks, and match notifications — directly on your stream, while showing a link to your TalkAStranger profile so viewers can support you.

### Why Use TalkAStranger Overlays?

- **Free and open-source** — No cost, no ads in your overlay, no premium tiers. Just clean, professional widgets.
- **Real-time community alerts** — TalkAStranger connects you with viewers across 107+ countries through random video chat, live streams, and community gifting.
- **Grow your audience** — Each overlay includes a link to your TalkAStranger profile, so viewers can find and support you directly.

---

## Quick Start

### 1. Add Browser Source in OBS Studio

1. Open **OBS Studio**
2. Click **+** under **Sources** > **Browser**
3. Set the URL to:
   ```
   https://talkastranger.com/overlay.html?streamerUsername=YOUR_USERNAME
   ```
4. Set width to **600** and height to **200**
5. Click **OK** — the overlay appears on your stream

### 2. Add Browser Source in Streamlabs

1. Open **Streamlabs Desktop**
2. Click **+** under **Sources** > **BrowserSource**
3. Set the URL to:
   ```
   https://talkastranger.com/overlay.html?streamerUsername=YOUR_USERNAME
   ```
4. Set width to **600** and height to **200**
5. Click **Done** — the overlay is live

---

## Files

| File | Description |
|---|---|
| `overlay.html` | Standalone HTML widget — open directly in any browser source |
| `stream-overlay.js` | Core JavaScript widget engine — handles alerts, animations, and profile link display |
| `route-blueprint.md` | Server routing blueprint for `/stream/:username` dynamic profile pages |

---

## Customization

### URL Parameters

| Parameter | Default | Description |
|---|---|---|
| `streamerUsername` | *required* | Your TalkAStranger username |
| `theme` | `dark` | Color theme: `dark`, `light`, `ocean`, `sunset` |
| `showProfileLink` | `true` | Show/hide the TalkAStranger profile link |
| `position` | `bottom` | Alert position: `top`, `bottom`, `center` |

### Example

```
https://talkastranger.com/overlay.html?streamerUsername=john_doe&theme=ocean&position=top
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

TalkAStranger features live streaming across 107+ countries:

- **[Random video chat in United States](https://talkastranger.com/countries/us)**
- **[Talk to strangers in United Kingdom](https://talkastranger.com/countries/gb)**
- **[Live video chat in Pakistan](https://talkastranger.com/countries/pk)**
- **[Free random chat in India](https://talkastranger.com/countries/in)**
- **[Video call strangers in Brazil](https://talkastranger.com/countries/br)**

[View all 107+ countries](https://talkastranger.com/countries)

---

## Related Projects

- **[TalkAStranger Live Linker SDK](https://github.com/umairkhan2582/talkastranger-live-linker-sdk)** — Cross-broadcast TikTok and YouTube streams with direct Stripe monetization
- **[TalkAStranger.com](https://talkastranger.com)** — Main platform
- **[Creator Studio](https://talkastranger.com/creator-studio)** — Manage your streams and earnings

---

## License

MIT — Free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---

Made for streamers worldwide. [Go live on TalkAStranger](https://talkastranger.com).
