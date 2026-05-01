/* ============================================================
   Reel Lumen Films — Static site interactions
============================================================ */

// Sticky header shadow on scroll
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Mobile menu toggle
(function () {
  const btn = document.querySelector('.menu-btn');
  const panel = document.querySelector('.mobile-nav');
  const iconOpen = document.querySelector('.menu-btn .icon-open');
  const iconClose = document.querySelector('.menu-btn .icon-close');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    if (iconOpen && iconClose) {
      iconOpen.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  });
  panel.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      if (iconOpen && iconClose) {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    })
  );
})();

// Contact form (demo - replace with real handler)
(function () {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Message sent — thank you!';
      btn.disabled = true;
      btn.style.opacity = '0.6';
    }
  });
})();

// Active nav link based on current page
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.getAttribute('data-nav') === path) a.classList.add('active');
  });
})();
