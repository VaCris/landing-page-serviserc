document.getElementById('menu-button').addEventListener('click', function () {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        menuIcon.classList.add('open');
        closeIcon.classList.add('open');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('open');
        closeIcon.classList.remove('open');
    }
});
