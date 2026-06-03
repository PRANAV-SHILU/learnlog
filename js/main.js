// ── js/main.js ──
// Entry point — imports all modules and initialises the app.

import {
  renderAbout,
  renderExperience,
  renderEducation,
  renderSkills,
  renderProjects,
  renderPlatforms,
  renderCourses,
  renderWebinars,
  renderCertificates,
  renderRoadmap,
  renderHeroSocial,
  renderStats,
} from "./render.js";

import { initAccordions, openAll, closeAll } from "./accordion.js";
import { initSearch } from "./search.js";

// open all / close all accordians
document.getElementById("openAllBtn")?.addEventListener("click", openAll);
document.getElementById("closeAllBtn")?.addEventListener("click", closeAll);

document.addEventListener("DOMContentLoaded", () => {
  // 1. Render all sections in order
  renderAbout(document.getElementById("section-about"));
  renderExperience(document.getElementById("section-experience"));
  renderSkills(document.getElementById("section-skills"));
  renderCourses(document.getElementById("section-courses"));
  renderCertificates(document.getElementById("section-certificates"));
  renderWebinars(document.getElementById("section-webinars"));
  renderEducation(document.getElementById("section-education"));
  renderProjects(document.getElementById("section-projects"));
  renderRoadmap(document.getElementById("section-roadmap"));
  renderPlatforms(document.getElementById("section-platforms"));

  // 2. Hero
  renderHeroSocial();
  renderStats();

  // 3. Accordions & search
  initAccordions();
  initSearch();

  // 4. Footer date
  const lastUpdated = document.getElementById("lastUpdated");
  if (lastUpdated) {
    lastUpdated.textContent = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // 5. Hamburger
  const hamburger = document.getElementById("navHamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger?.addEventListener("click", () =>
    navLinks?.classList.toggle("open"),
  );
  navLinks?.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // 6. Active nav link on scroll
  const sections = document.querySelectorAll(".section-anchor");
  const navAnchs = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navAnchs.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`),
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => observer.observe(s));

  console.log(
    "%c LearnLog loaded ✓ ",
    "background:#f59e0b;color:#000;font-weight:bold;border-radius:4px;padding:4px 8px;",
  );
});
