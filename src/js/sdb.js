document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const menuLinks = document.querySelectorAll('#sidebar a');

    const toggleSidebar = () => {
        const isOpen = sidebar.classList.toggle('open');
        document.body.classList.toggle('menu-open', isOpen);
        menuToggle.classList.toggle('hidden', isOpen);
    };
    const closeSidebarMenu = () => {
        sidebar.classList.remove('open');
        document.body.classList.remove('menu-open');
        menuToggle.classList.remove('hidden');
    };
    menuToggle.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', closeSidebarMenu);
    menuLinks.forEach(link => {
        link.addEventListener('click', closeSidebarMenu);
    });
    document.addEventListener('click', event => {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            closeSidebarMenu();
        }
    });
});
