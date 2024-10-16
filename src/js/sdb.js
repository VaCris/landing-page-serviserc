document.getElementById('menu-button').addEventListener('click', function () {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenu.classList.contains('open')) {
    mobileMenu.classList.add('open'); // Muestra el menú
    menuIcon.classList.add('hidden');  // Oculta el ícono de menú
    closeIcon.classList.remove('hidden'); // Muestra el ícono de cerrar
  } else {
    mobileMenu.classList.remove('open'); // Oculta el menú
    menuIcon.classList.remove('hidden');  // Muestra el ícono de menú
    closeIcon.classList.add('hidden');     // Oculta el ícono de cerrar
  }
});

document.querySelectorAll('#mobile-menu a').forEach(item => {
  item.addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenu.classList.remove('open'); // Oculta el menú
    menuIcon.classList.remove('hidden');  // Muestra el ícono de menú
    closeIcon.classList.add('hidden');     // Oculta el ícono de cerrar
  });
});
