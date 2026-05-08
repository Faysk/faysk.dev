
import { createSection, addItem } from '../utils.js';

export function initSidebar(){

  const section =
  createSection(
    'sidebar',
    '🚀 sidebar'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
