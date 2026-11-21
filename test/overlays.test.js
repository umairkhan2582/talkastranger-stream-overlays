const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const stripeConfig = require('../stripe-config');

const PACKAGES_DIR = path.join(__dirname, '../packages');

const EXPECTED_CATEGORIES = [
  'cyberpunk-fps', 'retro-arcade', 'esports-pro', 'minimal-glass',
  'cozy-lofi', 'podcast-talk', 'synthwave-retro', 'crypto-finance',
  'irl-fitness', 'speedrun-quest',
  'dark-fantasy-souls', 'scifi-mecha', 'anime-sakura', 'steampunk-victorian',
  'horror-haunted', 'underwater-abyss', 'comic-superhero', 'neon-racing',
  'medieval-tavern', 'cooking-chef', 'music-dj-studio', 'tactical-military',
  'vaporwave-glitch', 'nature-forest', 'graffiti-urban', 'cosmic-astronomy',
  'art-craft-maker', 'stealth-cyber-ninja', 'arcade-pinball', 'corporate-tech-summit'
];

test('all 30 categories exist with 3 required HTML scenes each', () => {
  for (const cat of EXPECTED_CATEGORIES) {
    const catPath = path.join(PACKAGES_DIR, cat);
    assert.ok(fs.existsSync(catPath), `Category directory ${cat} must exist`);
    assert.ok(fs.existsSync(path.join(catPath, 'ingame-hud.html')), `${cat}/ingame-hud.html missing`);
    assert.ok(fs.existsSync(path.join(catPath, 'starting-soon.html')), `${cat}/starting-soon.html missing`);
    assert.ok(fs.existsSync(path.join(catPath, 'intermission.html')), `${cat}/intermission.html missing`);
  }
});

test('stripe-config contains valid checkout mapping for all 30 categories + bundles', () => {
  assert.equal(Object.keys(stripeConfig.packages).length, 30);
  for (const cat of EXPECTED_CATEGORIES) {
    assert.ok(stripeConfig.packages[cat], `Missing Stripe config for ${cat}`);
    assert.equal(stripeConfig.packages[cat].price, 10);
    assert.ok(stripeConfig.packages[cat].stripe_url.startsWith('https://buy.stripe.com/'));
  }
  assert.equal(stripeConfig.bundle.price, 99);
  assert.equal(stripeConfig.starter_bundle.price, 49);
});

test('personalizer.html is valid and references stripe-config', () => {
  const html = fs.readFileSync(path.join(__dirname, '../personalizer.html'), 'utf8');
  assert.ok(html.includes('stripe-config.js'));
  assert.ok(html.includes('theme-select'));
  for (const cat of EXPECTED_CATEGORIES) {
    assert.ok(html.includes(`value="${cat}"`), `personalizer missing option ${cat}`);
  }
});
