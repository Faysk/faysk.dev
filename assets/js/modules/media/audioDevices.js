
import { createSection, addItem } from '../utils.js';

export function initAudioDevices(){

  const section =
  createSection(
    'audiodevices',
    '🚀 audioDevices'
  );

  addItem(
    section,
    'Status',
    'Module initialized'
  );

}
