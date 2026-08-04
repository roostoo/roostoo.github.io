if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Frame-busting: prevent clickjacking via iframes.
// HTTP-header-based protection (X-Frame-Options / frame-ancestors) is not
// available on GitHub Pages, so JS is the best available mitigation.
var isFramed = false;
try {
  isFramed = window.top !== window.self;
} catch (e) {
  isFramed = true;
}

if (isFramed) {
  // Hide immediately so framed content is never interactive while escaping.
  document.documentElement.style.display = 'none';
  try {
    window.top.location.replace(window.self.location.href);
  } catch (e) {
    // Sandboxed or cross-origin frames stay hidden when navigation is blocked.
  }
} else {
  document.documentElement.style.removeProperty('display');
}
