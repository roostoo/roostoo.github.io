(function () {
  function initHeroEffects() {
    var canvas = document.querySelector('.canvas-3d');
    if (!canvas) return;

    var layers = Array.prototype.slice.call(document.querySelectorAll('.layer'));
    var rafId = null;
    var introTimeout = null;
    var touchTimeout = null;

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

    function onMouseMove(event) {
      var dx = (window.innerWidth / 2 - event.pageX) / 25;
      var dy = (window.innerHeight / 2 - event.pageY) / 25;
      applyTransform(dx, dy);
    }

    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    introTimeout = window.setTimeout(function () {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) {
      touchTimeout = window.setTimeout(function () {
        canvas.style.transition = 'none';

        function tick() {
          var t = Date.now() / 1000;
          var dx = 8 * Math.sin(0.8 * t) + 4 * Math.sin(1.3 * t);
          var dy = 6 * Math.cos(0.6 * t) + 3 * Math.cos(1.1 * t);
          applyTransform(dx, dy);
          rafId = window.requestAnimationFrame(tick);
        }

        tick();
      }, 2800);
    } else {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
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
