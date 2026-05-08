/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 faysk.dev
Core Application Bootstrap
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

console.clear();

console.log(`
🚀 faysk.dev initialized
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cyberpunk Browser Intelligence Interface
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 UI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initUI } from './modules/ui/ui.js';
import { initSidebar } from './modules/ui/sidebar.js';
import { initTerminal } from './modules/ui/terminal.js';
import { initCharts } from './modules/ui/charts.js';
import { initTheme } from './modules/ui/theme.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Browser
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initBrowser } from './modules/browser/browser.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initScreen } from './modules/system/screen.js';
import { initHardware } from './modules/system/hardware.js';
import { initMemory } from './modules/system/memory.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Network
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initNetwork } from './modules/network/network.js';
import { initIp } from './modules/network/ip.js';
import { initWebrtc } from './modules/network/webrtc.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 GPU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initGpu } from './modules/gpu/gpu.js';
import { initWebgl } from './modules/gpu/webgl.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 Fingerprinting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initFingerprint } from './modules/fingerprint/fingerprint.js';
import { initCanvas } from './modules/fingerprint/canvas.js';
import { initAudio } from './modules/fingerprint/audio.js';
import { initFonts } from './modules/fingerprint/fonts.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 Sensors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initBattery } from './modules/sensors/battery.js';
import { initMotion } from './modules/sensors/motion.js';
import { initOrientation } from './modules/sensors/orientation.js';
import { initTouch } from './modules/sensors/touch.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎤 Media
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initMediaDevices } from './modules/media/mediaDevices.js';
import { initAudioDevices } from './modules/media/audioDevices.js';
import { initVideoDevices } from './modules/media/videoDevices.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔐 Security
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initPermissions } from './modules/security/permissions.js';
import { initCookies } from './modules/security/cookies.js';
import { initStorage } from './modules/security/storage.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ Telemetry
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initPerformance } from './modules/telemetry/performance.js';
import { initTiming } from './modules/telemetry/timing.js';
import { initBenchmark } from './modules/telemetry/benchmark.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Geolocation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

import { initGeolocation } from './modules/geolocation/geolocation.js';

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 START APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

async function bootstrap(){

  console.log('⚡ Boot sequence initialized...');

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎨 UI Layer
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initUI();
  initSidebar();
  initTerminal();
  initCharts();
  initTheme();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🌐 Browser & System
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initBrowser();

  initScreen();
  initHardware();
  initMemory();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📡 Network
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initNetwork();
  initIp();
  initWebrtc();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎮 GPU
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initGpu();
  initWebgl();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🧠 Fingerprinting
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initFingerprint();
  initCanvas();
  initAudio();
  initFonts();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📱 Sensors
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initBattery();
  initMotion();
  initOrientation();
  initTouch();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎤 Media
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initMediaDevices();
  initAudioDevices();
  initVideoDevices();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🔐 Security
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initPermissions();
  initCookies();
  initStorage();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚡ Telemetry
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initPerformance();
  initTiming();
  initBenchmark();

  /*
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📍 Geolocation
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  */

  initGeolocation();

  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ All modules initialized successfully
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

}

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 DOM READY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

window.addEventListener('DOMContentLoaded', bootstrap);

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔥 GLOBAL DEBUG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

window.faysk = {
  version: '0.1-alpha',
  initialized: true,
  build: 'cyberpunk-dev'
};