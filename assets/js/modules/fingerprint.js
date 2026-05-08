
import { createSection, addItem } from './utils.js';

export function initFingerprint(){

const fingerprint =
createSection("fingerprint","🧠 Fingerprinting");

const rawFingerprint = `
${navigator.userAgent}
${screen.width}
${screen.height}
${navigator.language}
${navigator.hardwareConcurrency}
${navigator.deviceMemory}
`;

const hash =
btoa(rawFingerprint).substring(0,60);

addItem(fingerprint,"Basic Fingerprint",hash);

try{

  const canvas =
    document.createElement("canvas");

  const ctx =
    canvas.getContext("2d");

  ctx.font = "16px Arial";
  ctx.fillStyle = "#00ff88";
  ctx.fillText("faysk.dev",10,20);

  const data =
    canvas.toDataURL();

  const canvasHash =
    btoa(data).substring(0,60);

  addItem(
    fingerprint,
    "Canvas Hash",
    canvasHash
  );

}catch(e){

  addItem(fingerprint,"Canvas Error",e.message);

}

}
