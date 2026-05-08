
export const content =
document.getElementById("content");

export const sidebarNav =
document.getElementById("sidebarNav");

export function createSection(id,title){

  const section =
  document.createElement("div");

  section.className = "section fade-in";
  section.id = id;

  section.innerHTML = `
    <div class="section-header">
      <h2>${title}</h2>

      <div class="badge">
        <div class="dot"></div>
        ACTIVE
      </div>
    </div>

    <div class="section-body"></div>
  `;

  content.appendChild(section);

  const link =
  document.createElement("a");

  link.href = `#${id}`;
  link.innerText = title;

  sidebarNav.appendChild(link);

  return section.querySelector(".section-body");
}

export function addItem(section,label,value){

  const item =
  document.createElement("div");

  item.className = "item";

  item.innerHTML = `
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  `;

  section.appendChild(item);
}
