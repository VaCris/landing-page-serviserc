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
