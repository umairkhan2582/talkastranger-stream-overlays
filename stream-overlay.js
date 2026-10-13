/**
 * TalkAStranger Stream Overlay Widget Engine
 * @version 1.1.0
 * @license MIT
 * 
 * Lightweight, responsive stream alert widget for OBS Studio / Streamlabs.
 * Takes a URL parameter (streamerUsername) and dynamically generates
 * on-screen community alert widgets with a profile link for viewers.
 * 
 * GitHub: https://github.com/umairkhan2582/talkastranger-stream-overlays
 * Creator Studio: https://talkastranger.com/creator-studio
 * Homepage: https://talkastranger.com
 */

(function () {
  "use strict";

  const ENDPOINT = "https://talkastranger.com";

  const params = new URLSearchParams(window.location.search);
  const streamerUsername = params.get("streamerUsername") || "creator";
  const theme = params.get("theme") || "dark";
  const showProfileLink = params.get("showProfileLink") !== "false";
  const position = params.get("position") || "bottom";

  const themes = {
    dark: { bg: "linear-gradient(135deg, #09090b 0%, #18181b 100%)", border: "#a855f7", accent: "#a855f7" },
    light: { bg: "linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)", border: "#8b5cf6", accent: "#7c3aed" },
    ocean: { bg: "linear-gradient(135deg, #0c1929 0%, #0e2954 100%)", border: "#06b6d4", accent: "#06b6d4" },
    sunset: { bg: "linear-gradient(135deg, #1a0f1e 0%, #2d1b2e 100%)", border: "#f59e0b", accent: "#f59e0b" },
  };
  const palette = themes[theme] || themes.dark;

  const container = document.getElementById("overlay-container");
  if (container) {
    if (position === "top") {
      container.style.top = "0";
      container.style.bottom = "auto";
    } else if (position === "center") {
      container.style.top = "50%";
      container.style.bottom = "auto";
      container.style.transform = "translate(-50%, -50%)";
    }
  }

  // Render profile link
  if (showProfileLink) {
    const linkEl = document.getElementById("profile-link");
    if (linkEl) {
      const link = document.createElement("a");
      link.href = `${ENDPOINT}/${streamerUsername}`;
      link.textContent = `talkastranger.com/${streamerUsername}`;
      link.target = "_blank";
      linkEl.appendChild(document.createTextNode("Support this stream: "));
      linkEl.appendChild(link);
    }
  }

  const ALERT_TYPES = [
    { icon: "\uD83D\uDC4B", title: "New Viewer", message: "{user} just joined your stream!" },
    { icon: "\u2728", title: "New Spark", message: "{user} sent you {amount} Sparks!" },
    { icon: "\uD83C\uDF81", title: "Gift Received", message: "{user} sent you a {gift}!" },
    { icon: "\uD83C\uDF89", title: "New Match", message: "You matched with {user} from {country}!" },
    { icon: "\uD83D\uDC4D", title: "New Follower", message: "{user} is now following you!" },
  ];

  const SAMPLE_NAMES = ["Quiet.Muse", "TravelerJake", "NightOwl99", "SunnyDays", "MoonWalker", "ZenMaster", "StarGazer", "PixelPunk"];
  const SAMPLE_COUNTRIES = ["United States", "United Kingdom", "Pakistan", "India", "Brazil", "Canada", "Australia", "Germany"];
  const SAMPLE_GIFTS = ["Rose \uD83C\uDF39", "Crown \uD83D\uDC51", "Rocket \uD83D\uDE80", "Ice Cream \uD83C\uDF66"];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function formatMessage(template) {
    return template
      .replace("{user}", randomItem(SAMPLE_NAMES))
      .replace("{country}", randomItem(SAMPLE_COUNTRIES))
      .replace("{gift}", randomItem(SAMPLE_GIFTS))
      .replace("{amount}", Math.floor(Math.random() * 50) + 5);
  }

  function showAlert() {
    const alertsContainer = document.getElementById("alerts");
    if (!alertsContainer) return;

    const alertType = randomItem(ALERT_TYPES);
    const alertEl = document.createElement("div");
    alertEl.className = "ts-alert";
    alertEl.style.background = palette.bg;
    alertEl.style.borderColor = palette.border;

    alertEl.innerHTML = `
      <div class="icon" style="background: ${palette.accent}">${alertType.icon}</div>
      <div class="content">
        <div class="title">${alertType.title}</div>
        <div class="message">${formatMessage(alertType.message)}</div>
      </div>
    `;

    alertsContainer.appendChild(alertEl);

    setTimeout(() => {
      if (alertEl.parentNode) alertEl.parentNode.removeChild(alertEl);
    }, 5500);
  }

  function startDemo() {
    showAlert();
    setInterval(() => {
      if (document.hidden) return;
      showAlert();
    }, 4000 + Math.random() * 4000);
  }

  setTimeout(startDemo, 1500);

  window.TalkAStrangerOverlay = {
    showAlert: showAlert,
    username: streamerUsername,
    profileUrl: `${ENDPOINT}/${streamerUsername}`,
    creatorStudio: `${ENDPOINT}/creator-studio`,
  };
})();
