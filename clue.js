const input = document.getElementById('guess');
const status = document.getElementById('status');
document.getElementById('go').addEventListener('click', () => {
  const value = input.value.trim().toLowerCase();

  if (value === 'archive' || value === 'archive.html') {
    window.location.href = 'archive.html';
  } else {
    status.textContent = 'no route found.';
  }
});