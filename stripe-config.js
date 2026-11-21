/**
 * TalkAStranger Stream Overlays - Stripe Checkout Configuration
 * 
 * Replace placeholder payment links with your live Stripe Payment Links created in:
 * https://dashboard.stripe.com/payment-links
 */
const STRIPE_CHECKOUT_CONFIG = {
  // Store currency and pricing model
  currency: 'USD',
  singlePackPrice: 10,
  bundlePrice: 49,
  
  // Direct Stripe Payment Links (buy.stripe.com)
  paymentLinks: {
    'all-access-bundle': 'https://buy.stripe.com/test_bundle_all_access_49',
    'cyberpunk-fps': 'https://buy.stripe.com/test_cyberpunk_fps_10',
    'retro-arcade': 'https://buy.stripe.com/test_retro_arcade_10',
    'esports-pro': 'https://buy.stripe.com/test_esports_pro_10',
    'minimal-glass': 'https://buy.stripe.com/test_minimal_glass_10',
    'cozy-lofi': 'https://buy.stripe.com/test_cozy_lofi_10',
    'podcast-talk': 'https://buy.stripe.com/test_podcast_talk_10',
    'synthwave-retro': 'https://buy.stripe.com/test_synthwave_retro_10',
    'crypto-finance': 'https://buy.stripe.com/test_crypto_finance_10',
    'irl-fitness': 'https://buy.stripe.com/test_irl_fitness_10',
    'speedrun-quest': 'https://buy.stripe.com/test_speedrun_quest_10'
  },

  /**
   * Helper to launch Stripe checkout for a given theme
   * @param {string} themeKey 
   */
  openCheckout: function(themeKey) {
    const link = this.paymentLinks[themeKey] || this.paymentLinks['all-access-bundle'];
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = STRIPE_CHECKOUT_CONFIG;
}
