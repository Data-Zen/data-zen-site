(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const header = document.querySelector('[data-header]');
  const year = document.querySelector('[data-year]');
  const contactForm = document.querySelector('[data-contact-form]');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove('open');
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  if ('IntersectionObserver' in window && sections.length && links.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      const activeId = visible.target.getAttribute('id');
      links.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('active', isActive);
      });
    }, {
      rootMargin: '-25% 0px -65% 0px',
      threshold: [0.1, 0.2, 0.4, 0.7]
    });

    sections.forEach((section) => observer.observe(section));
  }

  if (header) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      header.classList.toggle('is-scrolled', currentScrollY > 12);
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();

      const subject = encodeURIComponent('Data-Zen consultation request');
      const body = encodeURIComponent([
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message
      ].join('\n'));

      window.location.href = `mailto:information@data-zen.com?subject=${subject}&body=${body}`;
    });
  }
}());
