
import { createSection, addItem } from '../utils.js';

export function initGeolocation(){

  const section =
  createSection(
    'geolocation',
    '🚀 geolocation'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
