
import { createSection, addItem } from './utils.js';

export function initScanner(){

const browser =
createSection("browser","🌐 Browser");

addItem(browser,"User Agent",navigator.userAgent);
addItem(browser,"Platform",navigator.platform);
addItem(browser,"Vendor",navigator.vendor);
addItem(browser,"Language",navigator.language);
addItem(browser,"Languages",navigator.languages.join(", "));
addItem(browser,"Cookies Enabled",navigator.cookieEnabled);
addItem(browser,"Online",navigator.onLine);
addItem(browser,"Java Enabled",navigator.javaEnabled());
addItem(browser,"Do Not Track",navigator.doNotTrack);
addItem(browser,"Webdriver",navigator.webdriver || false);

const screenInfo =
createSection("screen","🖥️ Screen");

addItem(screenInfo,"Resolution",`${screen.width} x ${screen.height}`);
addItem(screenInfo,"Available Area",`${screen.availWidth} x ${screen.availHeight}`);
addItem(screenInfo,"Color Depth",screen.colorDepth);

const performanceInfo =
createSection("performance","⚡ Performance");

addItem(
  performanceInfo,
  "Page Load",
  performance.now().toFixed(2)+" ms"
);

}
