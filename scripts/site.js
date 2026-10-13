// Shared page chrome: color theme and the personal-projects dropdown.
// Loaded in <head> so the saved theme applies before first paint.
(function () {
  const THEME_KEY = 'aboutme-theme';
  const root = document.documentElement;

  function readTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (err) {
      return null;
    }
  }

  function currentTheme() {
    const saved = root.getAttribute('data-theme');
    if (saved) {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const saved = readTheme();
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (err) {
          // Storage unavailable: the choice lasts for this page view only.
        }
      });
    }

    // Hover opens the dropdown on desktop; tapping toggles it on touch screens.
    const menu = document.querySelector('.has-submenu');
    const trigger = document.getElementById('nav-personal-projects');
    if (menu && trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        const open = menu.classList.toggle('open');
        trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (event) {
        if (!menu.contains(event.target)) {
          menu.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
})();
