(function () {
  'use strict';

  // ── Copyright year ────────────────────────────────────────
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Mobile nav ────────────────────────────────────────────
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks  = document.querySelector('[data-nav-links]');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  // ── Header scroll state ───────────────────────────────────
  const header = document.querySelector('[data-header]');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── Active nav link tracking ──────────────────────────────
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const links    = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  if ('IntersectionObserver' in window && sections.length && links.length) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const id = visible.target.id;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }, {
      rootMargin: '-25% 0px -65% 0px',
      threshold: [0.1, 0.3, 0.6]
    });

    sections.forEach(s => navObserver.observe(s));
  }

  // ── Scroll reveal with stagger ────────────────────────────
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        // Stagger items that share the same direct parent
        const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = idx > 0 ? (idx * 70) + 'ms' : '0ms';
        el.classList.add('visible');
        revealObserver.unobserve(el);
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -36px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // ── Contact form → mailto ─────────────────────────────────
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd      = new FormData(form);
      const name    = String(fd.get('name')    || '').trim();
      const email   = String(fd.get('email')   || '').trim();
      const message = String(fd.get('message') || '').trim();
      const subject = encodeURIComponent('Data-Zen consultation request');
      const body    = encodeURIComponent([
        'Name: '    + name,
        'Email: '   + email,
        '',
        'Message:',
        message
      ].join('\n'));
      window.location.href = 'mailto:information@data-zen.com?subject=' + subject + '&body=' + body;
    });
  }
}());
