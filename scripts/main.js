(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;
  const close = () => { button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('is-open'); };
  button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('is-open', open); });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); button.focus(); } });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) close(); });
  document.addEventListener('click', (e) => { if (!button.contains(e.target) && !nav.contains(e.target)) close(); });
})();
