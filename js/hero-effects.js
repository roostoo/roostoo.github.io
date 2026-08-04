(function () {
  function initHeroEffects() {
    var canvas = document.querySelector('.canvas-3d');
    if (!canvas) return;

    /* ── Respect prefers-reduced-motion ── */
    var prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
      return; // static hero, no animation
    }

    var layers = Array.prototype.slice.call(document.querySelectorAll('.layer'));
    var rafId = null;
    var introTimeout = null;
    var touchTimeout = null;
    var heroVisible = true; // IntersectionObserver state

    function applyTransform(dx, dy) {
      canvas.style.transform = 'rotateX(' + (55 + dy / 2) + 'deg) rotateZ(' + (-25 + dx / 2) + 'deg)';
      for (var i = 0; i < layers.length; i += 1) {
        var layer = layers[i];
        if (!layer) continue;
        var mult = (i + 1) * 0.2;
        layer.style.transform =
          'translateZ(' + ((i + 1) * 15) + 'px) translate(' + (dx * mult) + 'px, ' + (dy * mult) + 'px)';
      }
    }

    /* ── rAF-throttled mousemove ── */
    var pendingMouse = null;
    function onMouseMove(event) {
      pendingMouse = event;
    }

    function flushMouse() {
      if (pendingMouse) {
        var dx = (window.innerWidth / 2 - pendingMouse.pageX) / 25;
        var dy = (window.innerHeight / 2 - pendingMouse.pageY) / 25;
        applyTransform(dx, dy);
        pendingMouse = null;
      }
      rafId = window.requestAnimationFrame(flushMouse);
    }

    /* ── Intro animation ── */
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    introTimeout = window.setTimeout(function () {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    /* ── Touch tick (defined early so observer can restart it) ── */
    var touchStarted = false;
    function tick() {
      var t = Date.now() / 1000;
      var dx = 8 * Math.sin(0.8 * t) + 4 * Math.sin(1.3 * t);
      var dy = 6 * Math.cos(0.6 * t) + 3 * Math.cos(1.1 * t);
      applyTransform(dx, dy);
      rafId = window.requestAnimationFrame(tick);
    }

    /* ── IntersectionObserver: fully stop/start rAF when off/on screen ── */
    var heroStage = document.querySelector('.hero-stage') || canvas;
    if (typeof IntersectionObserver !== 'undefined') {
      var observer = new IntersectionObserver(
        function (entries) {
          var wasVisible = heroVisible;
          heroVisible = entries[0].isIntersecting;

          if (isTouch && touchStarted) {
            if (!heroVisible && rafId) {
              // fully cancel rAF — free the compositor for scrolling
              window.cancelAnimationFrame(rafId);
              rafId = null;
            } else if (heroVisible && !wasVisible && !rafId) {
              // restart when hero scrolls back into view
              rafId = window.requestAnimationFrame(tick);
            }
          }
        },
        { threshold: 0 }
      );
      observer.observe(heroStage);
    }

    if (isTouch) {
      touchTimeout = window.setTimeout(function () {
        canvas.style.transition = 'none';
        for (var i = 0; i < layers.length; i++) {
          layers[i].style.transition = 'none';
        }

        touchStarted = true;
        if (heroVisible) {
          rafId = window.requestAnimationFrame(tick);
        }
      }, 2800);
    } else {
      /* ── Desktop: clear transitions after intro, start rAF loop ── */
      window.setTimeout(function () {
        canvas.style.transition = 'none';
        for (var i = 0; i < layers.length; i++) {
          layers[i].style.transition = 'none';
        }
      }, 2800); // 300ms delay + 2500ms intro

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      rafId = window.requestAnimationFrame(flushMouse);
    }

    window.addEventListener('pagehide', function cleanup() {
      if (!isTouch) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      if (introTimeout) window.clearTimeout(introTimeout);
      if (touchTimeout) window.clearTimeout(touchTimeout);
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('pagehide', cleanup);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroEffects);
  } else {
    initHeroEffects();
  }
})();
