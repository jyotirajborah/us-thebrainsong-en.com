/* ============================================
   THE BRAIN SONG — MAIN JS
   ============================================ */

// Intersection Observer — fade-in on scroll
(function () {
  const style = document.createElement('style');
  style.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: none;
    }
  `;
  document.head.appendChild(style);

  const targets = [
    '.pain-card',
    '.benefit-card',
    '.step-card',
    '.testimonial-card',
    '.whois-card',
    '.timeline-item',
    '.faq-item',
    '.proscons__col',
    '.bdnf-callout',
    '.pain__insight',
    '.guarantee__card',
    '.comp-table-wrap',
    '.product__layout',
    '.section-heading',
    '.cta-final__inner',
  ];

  document.querySelectorAll(targets.join(',')).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// Smooth CTA pulse on load
(function () {
  const primaryBtns = document.querySelectorAll('.btn--primary');
  primaryBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px) scale(1.02)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
})();

// Topbar hide on scroll down, show on scroll up
(function () {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > lastY && currentY > 80) {
      topbar.style.transform = 'translateY(-100%)';
      topbar.style.transition = 'transform 0.3s ease';
    } else {
      topbar.style.transform = 'translateY(0)';
    }
    lastY = currentY;
  }, { passive: true });
})();
