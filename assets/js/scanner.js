import { createSection, addItem } from './utils.js';

export function initScanner(){

  const browser =
    createSection('🌐 Browser Information');

  addItem(browser,'User Agent',navigator.userAgent);

  addItem(browser,'Platform',navigator.platform);

  addItem(browser,'Language',navigator.language);

}
