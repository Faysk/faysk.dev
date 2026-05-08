
import { initUI } from './ui/ui.js';
import { initBrowser } from './modules/browser/browser.js';
import { initScreen } from './modules/system/screen.js';
import { initNetwork } from './modules/network/network.js';
import { initFingerprint } from './modules/fingerprint/fingerprint.js';

window.addEventListener('DOMContentLoaded', () => {
  initUI();
  initBrowser();
  initScreen();
  initNetwork();
  initFingerprint();
});
