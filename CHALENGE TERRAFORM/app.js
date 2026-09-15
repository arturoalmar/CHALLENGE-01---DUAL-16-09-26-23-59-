const syncButton = document.querySelector('#sync-button');
const statusMessage = document.querySelector('#status-message');

syncButton.addEventListener('click', () => {
  syncButton.disabled = true;
  syncButton.innerHTML = '<span>✓</span> Sincronizando...';
  statusMessage.textContent = 'Subiendo archivos al bucket S3';

  window.setTimeout(() => {
    statusMessage.textContent = 'Sincronización simulada correctamente';
    syncButton.innerHTML = '<span>✓</span> Sync completado';
    syncButton.disabled = false;
  }, 900);
});