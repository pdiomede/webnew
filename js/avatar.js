/* Avatar pointer-tilt: the hero profile photo (the whole .avatar badge, white
   ring included) tilts in 3D toward the mouse pointer and shifts a few px
   toward it (a magnetic pull, with a slight scale and a trailing drop shadow
   that lags opposite the pull), as if watching it.
   Shared single-file script loaded at the END OF BODY on all three pages (no
   pre-paint work, unlike theme.js/landing.js, so it must not block first
   paint). CSP-safe: external same-origin file, writes an inline transform on
   .avatar only. Progressive enhancement: no-ops on touch/coarse-pointer
   devices and under prefers-reduced-motion (gated here in JS, not by the CSS
   pause rule). Never touches .avatar-fx (its pointer-events fall-through
   wiring is load-bearing) and never caches the img (the carousel scripts may
   replace it with a 'PD' text node on load failure). */
(function () {
  if (!window.matchMedia) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('DOMContentLoaded', function () {
    var avatar = document.querySelector('.avatar-fx .avatar');
    if (!avatar) return;

    var MAX_TILT = 15;   // deg: clamp so page corners don't over-rotate
    var MAX_SHIFT = 10;  // px: translation toward the pointer at full strength
    var RAMP = 220;      // px: distance at which the effect reaches full strength
    var mx = 0, my = 0, ticking = false;
    var root = document.documentElement;

    function frame() {
      ticking = false;
      if (root.classList.contains('splash-open')) return; // avatar hidden under the splash
      var r = avatar.getBoundingClientRect();
      var dx = mx - (r.left + r.width / 2);
      var dy = my - (r.top + r.height / 2);
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var ease = Math.min(dist / RAMP, 1);
      var ry = (dx / dist) * MAX_TILT * ease;  // pointer right -> turn right
      var rx = (-dy / dist) * MAX_TILT * ease; // pointer down  -> nod down
      var tx = (dx / dist) * MAX_SHIFT * ease; // pull toward the pointer
      var ty = (dy / dist) * MAX_SHIFT * ease;
      avatar.style.transform = 'perspective(300px) translate3d(' + tx.toFixed(2) + 'px,' +
        ty.toFixed(2) + 'px,0) scale(' + (1 + .04 * ease).toFixed(3) + ') rotateX(' + rx.toFixed(2) +
        'deg) rotateY(' + ry.toFixed(2) + 'deg)';
      // Trailing shadow: equals the resting --shadow at ease 0 (no jump), then
      // the soft layer drifts opposite the pull and deepens as the badge lifts.
      // --shadow differs per theme, so anchor to the active theme each frame.
      var dark = root.getAttribute('data-theme') === 'dark';
      avatar.style.boxShadow = (dark ? '0 0 0 1px rgba(255,255,255,.05), ' : '0 0 0 1px rgba(0,0,0,.06), ') +
        (-tx * 1.8).toFixed(2) + 'px ' + (6 - ty * 1.8).toFixed(2) + 'px ' + (18 + 18 * ease).toFixed(2) +
        'px rgba(0,0,0,' + (dark ? (.45 + .3 * ease).toFixed(3) : (.08 + .27 * ease).toFixed(3)) + ')';
    }

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
    });

    // Ease back to neutral when the pointer leaves the page (the .avatar
    // transition in the shared CSS animates the reset).
    root.addEventListener('mouseleave', function () {
      avatar.style.transform = '';
      avatar.style.boxShadow = '';
    });
  });
})();
