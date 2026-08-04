/* Site-wide sticky header: scroll state + mobile menu. CSP script-src 'self'. */
(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var menuBtn = header && header.querySelector('.site-header-menu-btn');
  var mobileNav = document.getElementById('site-mobile-nav');

  /* Scroll: toggle .scrolled class for shadow/bg change */
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* apply immediately on load */
  }

  /* Mobile menu open/close */
  function openMenu() {
    mobileNav.removeAttribute('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close navigation');
  }

  function closeMenu() {
    mobileNav.setAttribute('hidden', '');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open navigation');
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      if (mobileNav.hasAttribute('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileNav.hasAttribute('hidden')) {
        closeMenu();
        menuBtn.focus();
      }
    });

    /* Close when a mobile link is tapped (in-page anchors) */
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        closeMenu();
      }
    });

    /* Reset the mobile drawer when switching to the desktop breakpoint. */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    }, { passive: true });
  }
})();
