if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Frame-busting: prevent clickjacking via iframes.
// HTTP-header-based protection (X-Frame-Options / frame-ancestors) is not
// available on GitHub Pages, so JS is the best available mitigation.
try {
  if (window.top !== window.self) {
    window.top.location.replace(window.self.location.href);
  }
} catch (e) {
  // Sandboxed iframe blocked access to top — hide content as fallback.
  document.documentElement.style.display = 'none';
}
