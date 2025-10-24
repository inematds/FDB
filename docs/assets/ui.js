document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  } else if (!root.hasAttribute('data-theme')) {
    root.setAttribute('data-theme', 'light');
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      toggle.setAttribute('aria-pressed', current === 'dark');
    });
  }

  const menuBtn = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
      menu.classList.toggle('open');
    });
  }
});

