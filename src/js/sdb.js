document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');

    if (!menuToggle || !sidebar || !menuIcon) {
        console.error("Uno o más elementos no se encontraron.");
        return;
    }

    let isOpen = false;

    const menuAnimation = lottie.loadAnimation({
        container: menuIcon,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/public/img/Menu V4/menuV4.json'
    });

    menuToggle.addEventListener('click', () => {
        if (isOpen) {
            menuAnimation.setDirection(-1); 
            menuAnimation.play();
            sidebar.classList.remove('translate-y-0');
            sidebar.classList.add('-translate-y-full');
            menuToggle.classList.remove('hidden');
        } else {
            sidebar.classList.remove('-translate-y-full');
            sidebar.classList.add('translate-y-0');
            menuAnimation.setDirection(1);
            menuAnimation.play();
            menuToggle.classList.add('hidden');
        }
        isOpen = !isOpen;
    });

    const closeSidebarMenu = () => {
        if (isOpen) {
            menuAnimation.setDirection(-1);
            menuAnimation.play();
            sidebar.classList.remove('translate-y-0');
            sidebar.classList.add('-translate-y-full');
            menuToggle.classList.add('hidden');
            isOpen = false;
        }
    };

    const menuLinks = document.querySelectorAll('#sidebar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeSidebarMenu);
    });
    
    document.addEventListener('click', event => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && isOpen) {
            closeSidebarMenu();
        }
    });
});
