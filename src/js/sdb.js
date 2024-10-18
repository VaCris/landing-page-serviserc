document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const contentDiv = document.querySelector('.mt-12');
  const pagination = document.querySelector('.pagination');
  const whatsappButton = document.querySelector('.nav-bottom');

  menuButton.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.contains('open');

    if (!isOpen) {
      mobileMenu.classList.add('open');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      contentDiv.classList.add('hidden-content');
      pagination.classList.add('hidden-content');
      whatsappButton.classList.add('hidden-content');
    } else {
      mobileMenu.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      contentDiv.classList.remove('hidden-content');
      pagination.classList.remove('hidden-content');
      whatsappButton.classList.remove('hidden-content');
    }
  });

  document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      contentDiv.classList.remove('hidden-content');
      pagination.classList.remove('hidden-content');
      whatsappButton.classList.remove('hidden-content');
    });
  });
});
