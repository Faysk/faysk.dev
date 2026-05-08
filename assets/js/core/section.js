
export function createSection(title){
  const app = document.getElementById('app');
  const section = document.createElement('div');
  section.innerHTML = `<h2>${title}</h2>`;
  app.appendChild(section);
  return section;
}
