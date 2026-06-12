/* Theme toggle (light / dark).
   Loaded synchronously in <head> so the theme is applied before first paint
   (no flash). CSP-safe: external same-origin file, no inline handlers. */
(function () {
  var root = document.documentElement;

  function preferred() {
    try {
      var saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0F1419' : '#0A66C2');
  }

  // Apply immediately, before the body renders.
  apply(preferred());

  // Wire the toggle button once the DOM is parsed (this runs before <body> exists).
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    function syncBtn() {
      btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    }
    syncBtn();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncBtn();
    });
  });
})();
