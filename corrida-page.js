const API_URL = 'http://localhost:3000';
const originInput = document.getElementById('origin');
const destInput = document.getElementById('dest');
const priceSpan = document.getElementById('price');
let clicks = 0;
let origin = null;
let dest = null;
const map = L.map('map').setView([-29.9547, -51.6253], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'OpenStreetMap' }).addTo(map);
function distanceKm(a,b){ const R=6371; const dLat=(b.lat-a.lat)*Math.PI/180; const dLng=(b.lng-a.lng)*Math.PI/180; const lat1=a.lat*Math.PI/180; const lat2=b.lat*Math.PI/180; const x=Math.sin(dLat/2)**2+Math.sin(dLng/2)**2*Math.cos(lat1)*Math.cos(lat2); return 2*R*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)); }
function calcPrice(){ if(!origin||!dest) return 0; let price=8+distanceKm(origin,dest)*2.5; if(document.getElementById('need_wheelchair').checked) price+=8; if(document.getElementById('need_step').checked) price+=5; return Number(price.toFixed(2)); }
map.on('click', e => { clicks++; const point={lat:e.latlng.lat,lng:e.latlng.lng}; L.marker(point).addTo(map); if(clicks%2===1){ origin=point; originInput.value=`${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`; } else { dest=point; destInput.value=`${point.lat.toFixed(5)}, ${point.lng.toFixed(5)}`; L.polyline([origin,dest]).addTo(map); }});
document.getElementById('calcPrice').addEventListener('click',()=>{ priceSpan.textContent=calcPrice() || '-'; });
document.getElementById('saveLocal').addEventListener('click',()=>{ const ride={origin:originInput.value,destination:destInput.value,needs:getNeeds(),price:calcPrice()}; const rides=JSON.parse(localStorage.getItem('rides')||'[]'); rides.push(ride); localStorage.setItem('rides',JSON.stringify(rides)); alert('Corrida salva localmente.'); });
document.getElementById('requestRide').addEventListener('click',async()=>{ const body={origin:originInput.value,destination:destInput.value,needs:getNeeds(),price:calcPrice(),passengerName:'Passageiro'}; const res=await fetch(`${API_URL}/rides`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}); alert(res.ok?'Corrida enviada para API.':'Não foi possível enviar.'); });
function getNeeds(){ const arr=[]; if(document.getElementById('need_wheelchair').checked) arr.push('cadeira de rodas'); if(document.getElementById('need_step').checked) arr.push('auxílio ao subir'); const other=document.getElementById('need_other').value; if(other) arr.push(other); return arr.join(', '); }