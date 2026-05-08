
import { createSection, addItem } from './utils.js';

export function initNetwork(){

const network =
createSection("network","📡 Network");

if(navigator.connection){

  addItem(network,"Connection Type",navigator.connection.effectiveType);
  addItem(network,"Downlink",navigator.connection.downlink+" Mbps");
  addItem(network,"RTT",navigator.connection.rtt+" ms");

}

const ip =
createSection("ip","🌍 Public IP");

fetch("https://api.ipify.org?format=json")
.then(res=>res.json())
.then(data=>{

  addItem(ip,"IP Address",data.ip);

})
.catch(()=>{

  addItem(ip,"IP Error","Could not fetch IP");

});

}
