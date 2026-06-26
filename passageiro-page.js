document.getElementById('save-passenger')?.addEventListener('click', (event)=>{
  event.preventDefault();
  const passenger={nome:document.getElementById('passenger-name').value, telefone:document.getElementById('passenger-phone').value, observacoes:document.getElementById('passenger-notes').value};
  localStorage.setItem('passenger', JSON.stringify(passenger));
  document.getElementById('passenger-saved').textContent='Perfil salvo localmente.';
});