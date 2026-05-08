
import { createSection, addItem } from '../utils.js';

export function initScreen(){

  const section =
  createSection(
    'screen',
    '🚀 screen'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
