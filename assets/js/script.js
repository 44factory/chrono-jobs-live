document.addEventListener('DOMContentLoaded', () => {
      const body = document.body;
      const menuBtn = document.querySelector('.menu-btn');
      const drawer = document.querySelector('.mobile-drawer');
      const closeBtn = document.querySelector('.close-btn');
      const darkToggle = document.querySelector('.dark-toggle');
      menuBtn.addEventListener('click', () => drawer.classList.add('open'));
      closeBtn.addEventListener('click', () => {
      drawer.classList.add('closing');
      setTimeout(() => {
        drawer.classList.remove('open', 'closing');
      }, 350);
    });
      darkToggle.addEventListener('click', () => body.classList.toggle('dark-mode'));
    });