
export function initUI(){

  document.getElementById("timezoneTop").innerText =
  Intl.DateTimeFormat().resolvedOptions().timeZone;

  document.getElementById("languageTop").innerText =
  navigator.language;

  setInterval(()=>{

    const time =
    new Date().toLocaleTimeString();

    document.title =
    `🚀 ${time} • faysk.dev`;

  },1000);

}
