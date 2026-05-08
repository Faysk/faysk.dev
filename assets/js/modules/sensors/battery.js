
import { createSection, addItem } from '../utils.js';

export function initBattery(){

  const section =
  createSection(
    'battery',
    '🚀 battery'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
