export function initParticles() {
  const layer = document.querySelector("#particles-layer");
  if (!layer) return;
  layer.setAttribute("aria-hidden", "true");
}
