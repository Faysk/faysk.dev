
export const content =
document.getElementById('content');

export function createSection(id,title){

  const section =
  document.createElement('div');

  section.className = 'section';

  section.innerHTML = `
    <div class="section-header">
      <h2>${title}</h2>
    </div>

    <div class="section-body"></div>
  `;

  content.appendChild(section);

  return section.querySelector('.section-body');

}

export function addItem(section,label,value){

  const item =
  document.createElement('div');

  item.className = 'item';

  item.innerHTML = `
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  `;

  section.appendChild(item);

}
