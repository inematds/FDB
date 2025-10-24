function __applyTheme(theme) {
  const root = document.documentElement;
  const body = document.body;
  const t = theme === 'dark' ? 'dark' : 'light';
  root.setAttribute('data-theme', t);
  body && body.setAttribute('data-theme', t);
  try { localStorage.setItem('theme', t); } catch (e) {}
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.setAttribute('aria-pressed', String(t === 'dark'));
    btn.textContent = t === 'dark' ? 'Tema: Escuro' : 'Tema: Claro';
  }
}

window.__toggleTheme = function __toggleTheme(){
  const current = (document.documentElement.getAttribute('data-theme') || 'light');
  __applyTheme(current === 'dark' ? 'light' : 'dark');
}

function __initUI(){
  const saved = (function(){ try { return localStorage.getItem('theme'); } catch(e){ return null; } })();
  const initial = saved === 'dark' || saved === 'light' ? saved : (document.documentElement.getAttribute('data-theme') || 'light');
  __applyTheme(initial);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', window.__toggleTheme);
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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __initUI);
} else {
  __initUI();
}
