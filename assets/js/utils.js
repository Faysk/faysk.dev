const content =
document.getElementById('content');

export function createSection(title){

  const section =
    document.createElement('div');

  section.className = 'fade-in';

  section.innerHTML = `
    <div style="
      background:#0f0f0f;
      border:1px solid #1d1d1d;
      border-radius:20px;
      overflow:hidden;
    ">

      <div style="
        padding:18px;
        border-bottom:1px solid #1d1d1d;
        background:#111;
        color:#00ffaa;
        font-weight:bold;
      ">
        ${title}
      </div>

      <div class="section-body" style="padding:18px"></div>

    </div>
  `;

  content.appendChild(section);

  return section.querySelector('.section-body');

}

export function addItem(section,label,value){

  const item =
    document.createElement('div');

  item.style.padding = '10px 0';
  item.style.borderBottom = '1px solid rgba(255,255,255,.05)';

  item.innerHTML = `
    <div style="color:#7d7d7d;font-size:.85rem;">
      ${label}
    </div>

    <div style="color:#00ff88;">
      ${value}
    </div>
  `;

  section.appendChild(item);

}
