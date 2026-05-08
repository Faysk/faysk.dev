
import { createSection, addItem } from '../utils.js';

export function initPermissions(){

  const section =
  createSection(
    'permissions',
    '🚀 permissions'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
