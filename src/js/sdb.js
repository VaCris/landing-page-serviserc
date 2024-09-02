document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  const menuLinks = document.querySelectorAll('#sidebar a');
  
  function openSidebar() {
      sidebar.classList.add('open');
      document.body.classList.add('menu-open');
  }

  function closeSidebarMenu() {
      sidebar.classList.remove('open');
      document.body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', openSidebar);
  closeSidebar.addEventListener('click', closeSidebarMenu);

  menuLinks.forEach(link => {
      link.addEventListener('click', closeSidebarMenu);
  });

  document.addEventListener('click', function (event) {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          closeSidebarMenu();
      }
  });
});
