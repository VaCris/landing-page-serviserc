document.addEventListener('DOMContentLoaded', function () {
    const menubtn = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const wspbtn = document.querySelector('.nav-bottom');

    function toggleMenu() {
        const isOpen = mobileMenu.classList.toggle('hidden');
        console.log(`Menu esta ${mobileMenu.classList.contains('hidden') ? 'Oculto' : 'Visibe'}`);

        menubtn.setAttribute('aria-expanded', !isOpen);
        menuIcon.classList.toggle('hidden', !isOpen);
        closeIcon.classList.toggle('hidden', isOpen);
        console.log(`Menu Icon: ${menuIcon.classList.contains('hidden') ? 'Oculto' : 'Visible'}`);
        console.log(`Close Icon: ${closeIcon.classList.contains('hidden') ? 'Oculto' : 'Visible'}`);
        console.log(`Close Icon estilos: `, window.getComputedStyle(closeIcon));

        if (wspbtn) {
            wspbtn.classList.toggle('hidden', !isOpen);
        }
    }

    if (menubtn) {
        menubtn.addEventListener('click', toggleMenu);
    } else {
        console.error('btn menu no encontrado.');
    }

    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMenu();
                }
            });
        });
    } else {
        console.error('menu movil no encontrado.');
    }
});
