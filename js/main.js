/* ============================================================
   BRITTANY | HERBALIST — main.js
   ============================================================ */

// ── Footer copyright year ───────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// ── Mobile nav toggle ───────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link is clicked
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}


// ── Active nav link on scroll ───────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.site-nav a[href^="#"]');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();


// ── Sticky header shadow on scroll ─────────────────────────
const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });
}


// ── Contact form: simple client-side feedback ───────────────
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', async e => {
    const action = form.getAttribute('action');

    // If the Formspree endpoint hasn't been configured, show a friendly message
    if (!action || action.includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Form endpoint not yet configured. Replace YOUR_FORM_ID in index.html with your Formspree form ID.');
      return;
    }

    // For real Formspree submissions: show a thank-you message on success
    e.preventDefault();
    const data = new FormData(form);

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = `
          <div class="form-success" role="alert">
            <p><strong>Thank you!</strong> Your message has been sent. I'll be in touch soon.</p>
          </div>`;
      } else {
        alert('Something went wrong. Please try again or send an email directly.');
      }
    } catch {
      alert('Could not send message. Please check your connection and try again.');
    }
  });
}
