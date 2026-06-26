const API_URL = 'http://localhost:3000';
async function loadRides(){
  const el=document.getElementById('motorista-rides');
  try{ const res=await fetch(`${API_URL}/rides`); const rides=await res.json(); el.innerHTML=rides.length? rides.map(r=>`<p><strong>${r.origin}</strong> → ${r.destination} | R$ ${r.price}</p>`).join(''):'Nenhuma corrida cadastrada.'; }
  catch(e){ el.textContent='Execute o back-end em http://localhost:3000 para carregar as corridas.'; }
}
loadRides();