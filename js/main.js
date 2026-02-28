// ── js/main.js ──
// Entry point — imports all modules and initialises the app.

import {
  renderAbout,
  renderSkills,
  renderLanguages,
  renderProjects,
  renderPlatforms,
  renderCourses,
  renderCertificates,
  renderTools,
  renderRoadmap,
  renderHeroSocial,
  renderStats,
} from './render.js';

import { initAccordions } from './accordion.js';
import { initSearch }     from './search.js';

document.addEventListener('DOMContentLoaded', () => {

  // 1. Render all sections in order
  renderAbout(document.getElementById('section-about'));
  renderSkills(document.getElementById('section-skills'));
  renderLanguages(document.getElementById('section-languages'));
  renderProjects(document.getElementById('section-projects'));
  renderPlatforms(document.getElementById('section-platforms'));
  renderCourses(document.getElementById('section-courses'));
  renderCertificates(document.getElementById('section-certificates'));
  renderTools(document.getElementById('section-tools'));
  renderRoadmap(document.getElementById('section-roadmap'));

  // 2. Hero
  renderHeroSocial();
  renderStats();

  // 3. Accordions & search
  initAccordions();
  initSearch();

  // 4. Footer date
  const lastUpdated = document.getElementById('lastUpdated');
  if (lastUpdated) {
    lastUpdated.textContent = new Date().toLocaleDateString('en-IN', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  }

  // 5. Hamburger
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // 6. Active nav link on scroll
  const sections  = document.querySelectorAll('.section-anchor');
  const navAnchs  = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));

  console.log('%c LearnLog loaded ✓ ', 'background:#f59e0b;color:#000;font-weight:bold;border-radius:4px;padding:4px 8px;');
});
