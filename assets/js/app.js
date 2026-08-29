/* ============================================
   App — Nav, scroll animations, rendering
   ============================================ */

import { PROFILE, HACKATHONS, PROJECTS, EDUCATION } from './data.js';

// ——— Icons (inline SVG) ———
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
};

// ——— Render helpers ———
function renderTags(tags) {
  return tags.map(t => `<span class="tag">${t}</span>`).join('');
}

// ——— Section renderers ———
function renderHero() {
  return `
  <section class="hero" id="hero">
    <div class="hero__content">
      <div class="hero__status badge fade-in">
        <span class="badge__dot"></span>
        <span>${PROFILE.status}</span>
      </div>
      <h1 class="hero__title fade-in">
        Hi, I'm <span class="gradient-text">${PROFILE.name}</span>
      </h1>
      <p class="hero__subtitle fade-in">${PROFILE.tagline}</p>
      <div class="hero__stack fade-in">
        ${renderTags(PROFILE.stack)}
      </div>
      <div class="hero__actions fade-in">
        <a href="#projects" class="btn btn--primary">View Projects ${ICONS.external}</a>
        <a href="${PROFILE.github}" class="btn btn--outline" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
      </div>
    </div>
  </section>`;
}

function renderHackathons() {
  const cards = HACKATHONS.map(h => `
    <article class="card hackathon-card fade-in">
      <div class="hackathon-card__icon">${h.icon}</div>
      <div>
        <h3 class="hackathon-card__title">${h.title}</h3>
        <p class="hackathon-card__org">${h.org}</p>
        <p class="hackathon-card__desc">${h.description}</p>
        ${h.certificate ? `<a href="${h.certificate}" target="_blank" class="tag" style="display:inline-block; margin-bottom: 0.5rem; text-decoration: none; color: var(--accent-blue);">📄 View Certificate</a>` : ''}
        <div class="hackathon-card__meta">
          <span class="tag">${h.type}</span>
          <span>${h.year}</span>
        </div>
      </div>
    </article>`).join('');

  return `
  <section class="section" id="hackathons">
    <div class="container">
      <header class="section__header">
        <span class="section__label">Hackathons & Events</span>
        <h2 class="section__title">Building Under <span class="gradient-text">Pressure</span></h2>
        <p class="section__subtitle">Active participation in national and global developer challenges.</p>
      </header>
      <div class="grid-2">${cards}</div>
    </div>
  </section>`;
}

function renderProjects() {
  const cards = PROJECTS.map((p, index) => `
    <article class="card project-card fade-in">
      <div class="project-card__header">
        <h3 class="project-card__title">${p.title}</h3>
        <div class="project-card__links">
          <a href="${p.github}" target="_blank" rel="noopener" aria-label="GitHub repo">${ICONS.github}</a>
          <a href="${p.live}" target="_blank" rel="noopener" aria-label="Live demo">${ICONS.external}</a>
        </div>
      </div>
      <p class="project-card__desc">${p.description}</p>
      ${p.readme ? `<button class="btn btn--outline btn--sm read-more-btn" data-index="${index}" style="margin-bottom: 1rem;">Read More</button>` : ''}
      <div class="project-card__tags">${renderTags(p.tags)}</div>
      <div class="project-card__infra">${ICONS.cloud} ${p.infra}</div>
    </article>`).join('');

  return `
  <section class="section" id="projects">
    <div class="container">
      <header class="section__header">
        <span class="section__label">Projects</span>
        <h2 class="section__title">Shipped to <span class="gradient-text">Production</span></h2>
        <p class="section__subtitle">Full-stack applications with database integration and cloud deployment.</p>
      </header>
      <div class="grid-3">${cards}</div>
    </div>
  </section>`;
}

function renderEducation() {
  const cards = EDUCATION.map(e => `
    <article class="card edu-card fade-in">
      <h3 class="edu-card__degree">${e.degree}</h3>
      <p class="edu-card__school">${e.school}</p>
      <p class="edu-card__period">${e.period}</p>
      <p class="edu-card__details">${e.details}</p>
      ${e.certifications && e.certifications.length > 0 ? `
      <div class="edu-card__certs">
        <p class="edu-card__certs-title">Certifications</p>
        <div class="edu-card__certs-list">${renderTags(e.certifications)}</div>
      </div>` : ''}
    </article>`).join('');

  return `
  <section class="section" id="education">
    <div class="container">
      <header class="section__header">
        <span class="section__label">Education</span>
        <h2 class="section__title">Academic <span class="gradient-text">Foundation</span></h2>
      </header>
      <div class="grid-3">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__links">
        <a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
        <a href="${PROFILE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
        <a href="mailto:${PROFILE.email}" aria-label="Email">${ICONS.mail}</a>
      </div>
      <p>&copy; ${new Date().getFullYear()} ${PROFILE.name}. Built with purpose.</p>
    </div>
  </footer>`;
}

// ——— Init ———
function init() {
  const app = document.getElementById('app');
  app.innerHTML =
    renderHero() +
    renderHackathons() +
    renderProjects() +
    renderEducation() +
    renderFooter();

  // Add Modal container
  const modalHTML = `
    <div id="project-modal" class="modal">
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">&times;</button>
        <div id="modal-body"></div>
      </div>
    </div>
  `;
  app.innerHTML += modalHTML;

  initNav();
  initScrollAnimations();
  initModals();
}

// ——— Navigation ———
function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__link');

  // Scroll border
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('.section, .hero');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
      }
    });
  }, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });

  sections.forEach(s => observer.observe(s));
}

// ——— Scroll fade-in ———
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ——— Modals ———
function initModals() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  const viewCertBtns = document.querySelectorAll('.view-cert-btn');

  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      const project = PROJECTS[index];
      if (project && project.readme) {
        modalBody.innerHTML = project.readme;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  viewCertBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const certUrl = e.target.getAttribute('data-cert');
      if (certUrl) {
        modalBody.innerHTML = `<iframe src="${certUrl}" width="100%" height="75vh" style="border:none; border-radius: 8px;"></iframe>`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', init);
