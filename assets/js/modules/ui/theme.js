
import { createSection, addItem } from '../utils.js';

export function initTheme(){

  const section =
  createSection(
    'theme',
    '🚀 theme'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
