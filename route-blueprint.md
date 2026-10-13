# Stream Route Blueprint — `/stream/:username`

## Purpose

This document describes the server-side routing configuration needed to handle
dynamic `/stream/:username` wildcard URLs on talkastranger.com. When a viewer
clicks a TalkAStranger overlay backlink (e.g., `https://talkastranger.com/john_doe`),
the server should serve a pre-rendered, lightweight HTML profile page that search
engine crawlers can index.

## Routing Configuration (Express.js)

```javascript
// server/routes.ts
app.get("/stream/:username", async (req, res) => {
  const { username } = req.params;
  // Look up creator profile from database
  // Render lightweight SSR HTML with:
  //   - Creator name, avatar, bio
  //   - Live stream embed (if currently live)
  //   - Country Live Lane badge
  //   - SEO meta tags (og:title, og:description, og:image)
  //   - JSON-LD structured data (Person, BroadcastEvent)
  res.setHeader("Content-Type", "text/html");
  res.send(renderStreamProfile(username));
});
```

## SEO Requirements

- **Pre-rendered HTML**: The profile page must be server-side rendered so crawlers
  can index it without executing JavaScript.
- **Structured Data**: Include `Person` and `BroadcastEvent` JSON-LD schema.
- **Meta Tags**: `og:title`, `og:description`, `og:image`, `twitter:card`.
- **Canonical URL**: `https://talkastranger.com/stream/{username}`
- **Sitemap**: Dynamic `/stream/:username` pages should be included in `sitemap.xml`.

## Redirect Behavior

- If username does not exist: redirect to `https://talkastranger.com`
- If creator is not live: show profile page with "Offline" status
- If creator is live: embed live stream player

## Notes

This blueprint is for server-side implementation and is NOT included in the
client-side overlay widget. The overlay widget only generates the backlink URL;
the server handles the actual page rendering.
