/* Landing splash controller.
   Loaded synchronously in <head> so the show/skip decision happens before first
   paint (no flash). CSP-safe: external same-origin file, no inline handlers. */
(function () {
  var root = document.documentElement;

  // Show the splash at the bare home URL; skip it for in-page deep links
  // (e.g. index.html#now / #journey from the Projects / Education nav) so those
  // land straight on the section. The nav brand points at index.html (no hash),
  // so clicking it always returns here to the minimalist splash.
  var skip = window.location.hash.length > 1;

  // Decide before first paint: hide outright (skip) or lock scroll while it shows.
  root.classList.add(skip ? 'splash-skip' : 'splash-open');

  document.addEventListener('DOMContentLoaded', function () {
    var splash = document.getElementById('splash');
    var enter = document.getElementById('splash-enter');
    if (!splash || !enter) return;

    if (skip) { splash.classList.add('is-dismissed'); return; }

    // Keep the page behind the splash out of the tab order and the a11y tree
    // while the overlay is up (the overlay covers it visually but the DOM stays).
    function background(on) {
      var kids = document.body.children, i, el;
      for (i = 0; i < kids.length; i++) {
        el = kids[i];
        if (el === splash || el.tagName === 'SCRIPT' || el.tagName === 'NOSCRIPT') continue;
        if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
        else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
      }
    }
    background(true);

    function dismiss(viaKeyboard) {
      if (splash.classList.contains('is-dismissed')) return;
      root.classList.remove('splash-open');   // restore scroll first
      background(false);                       // re-enable the page behind
      splash.classList.add('is-dismissed');    // then fade the overlay out
      // Move focus into the page only for keyboard users; on a mouse click,
      // leaving focus alone avoids a stray focus ring on the logo.
      if (viaKeyboard) {
        var brand = document.querySelector('header.nav .brand');
        if (brand && brand.focus) brand.focus({ preventScroll: true });
      }
    }

    // A click from Enter/Space on the button reports detail 0; a real pointer
    // click reports >= 1 — use that to tell keyboard activation from a mouse click.
    enter.addEventListener('click', function (e) { dismiss(e && e.detail === 0); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') dismiss(true);
    });
  });
})();
