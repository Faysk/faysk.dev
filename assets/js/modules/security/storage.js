
import { createSection, addItem } from '../utils.js';

export function initStorage(){

  const section =
  createSection(
    'storage',
    '🚀 storage'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
