const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    closeIcon.classList.toggle('hidden', !isOpen);
    menuIcon.classList.toggle('hidden', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
});
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
  
    menuButton.addEventListener("click", () => {
      const isMenuOpen = mobileMenu.classList.toggle("-translate-y-full");
  
      // Alternar iconos
      menuIcon.classList.toggle("hidden", isMenuOpen);  // Ocultar menú hamburguesa si el menú está abierto
      closeIcon.classList.toggle("hidden", !isMenuOpen);  // Mostrar icono de cerrar si el menú está abierto
    });
  });
  