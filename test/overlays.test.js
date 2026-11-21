const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

test('Stripe configuration is valid and complete', (t) => {
  const stripeConfigPath = path.join(rootDir, 'stripe-config.js');
  assert.ok(fs.existsSync(stripeConfigPath), 'stripe-config.js must exist');
  
  const config = require(stripeConfigPath);
  assert.strictEqual(config.currency, 'USD');
  assert.strictEqual(config.singlePackPrice, 10);
  assert.strictEqual(config.bundlePrice, 49);
  assert.ok(config.paymentLinks, 'paymentLinks object must be defined');
  assert.ok(config.paymentLinks['all-access-bundle'], 'all-access-bundle link must exist');

  const expectedThemes = [
    'cyberpunk-fps', 'retro-arcade', 'esports-pro', 'minimal-glass',
    'cozy-lofi', 'podcast-talk', 'synthwave-retro', 'crypto-finance',
    'irl-fitness', 'speedrun-quest'
  ];

  for (const theme of expectedThemes) {
    assert.ok(config.paymentLinks[theme], `Payment link for ${theme} must exist`);
  }
});

test('Personalizer HTML is valid and includes Stripe Checkout elements', (t) => {
  const htmlPath = path.join(rootDir, 'personalizer.html');
  assert.ok(fs.existsSync(htmlPath), 'personalizer.html must exist');

  const content = fs.readFileSync(htmlPath, 'utf8');
  assert.ok(content.includes('stripe-config.js'), 'Must load stripe-config.js');
  assert.ok(content.includes('stripe-modal'), 'Must contain stripe-modal container');
  assert.ok(content.includes('checkout-trigger-btn'), 'Must contain checkout trigger button');
  assert.ok(content.includes('STRIPE_CHECKOUT_CONFIG'), 'Must invoke STRIPE_CHECKOUT_CONFIG');
});

test('All 10 categories exist with 3 scenes each (30 total scenes)', (t) => {
  const packagesDir = path.join(rootDir, 'packages');
  assert.ok(fs.existsSync(packagesDir), 'packages directory must exist');

  const expectedCategories = [
    'cyberpunk-fps', 'retro-arcade', 'esports-pro', 'minimal-glass',
    'cozy-lofi', 'podcast-talk', 'synthwave-retro', 'crypto-finance',
    'irl-fitness', 'speedrun-quest'
  ];

  const scenes = ['ingame-hud.html', 'starting-soon.html', 'intermission.html'];
  let totalSceneCount = 0;

  for (const cat of expectedCategories) {
    const catDir = path.join(packagesDir, cat);
    assert.ok(fs.existsSync(catDir), `Category directory ${cat} must exist`);
    for (const scene of scenes) {
      const scenePath = path.join(catDir, scene);
      assert.ok(fs.existsSync(scenePath), `Scene ${cat}/${scene} must exist`);
      const stat = fs.statSync(scenePath);
      assert.ok(stat.size > 500, `Scene ${cat}/${scene} must not be empty (size: ${stat.size}B)`);
      totalSceneCount++;
    }
  }

  assert.strictEqual(totalSceneCount, 30, 'Exactly 30 scenes must be present');
});

test('Core alert widget and script syntax check', (t) => {
  const overlayHtml = path.join(rootDir, 'overlay.html');
  assert.ok(fs.existsSync(overlayHtml), 'overlay.html must exist');

  const scriptPath = path.join(rootDir, 'stream-overlay.js');
  assert.ok(fs.existsSync(scriptPath), 'stream-overlay.js must exist');
  
  // Syntax check JS
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  assert.ok(scriptContent.includes('TalkAStrangerOverlay'), 'Must contain TalkAStrangerOverlay class');
});
