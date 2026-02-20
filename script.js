(function () {
  function initNavActive() {
    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav a').forEach((a) => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('is-active');
      }
    });
  }

  function initLoanGate() {
    const openBtns = [
      document.getElementById('openHomeLoanHero'),
      document.getElementById('openHomeLoanCard'),
      document.getElementById('startFromGate')
    ].filter(Boolean);

    if (!openBtns.length) return;
    openBtns.forEach((btn) =>
      btn.addEventListener('click', () => {
        window.location.href = 'pega-workspace.html';
      })
    );
  }

  function initScrollReveal() {
    const targets = document.querySelectorAll('.section-title, .section-sub, .card, .mini-stat, .embed-shell, .gate-message');
    if (!targets.length) return;

    targets.forEach((el) => el.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavActive();
    initLoanGate();
    initScrollReveal();
  });
})();
