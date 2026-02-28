// ── js/render.js ──
// All render functions — builds HTML from data and injects into the DOM.

import { about } from "../data/about.js";
import { skillCategories, levelColors } from "../data/skills.js";
import { languages } from "../data/languages.js";
import { learningItems } from "../data/courses.js";
import { toolCategories } from "../data/tools.js";
import { platforms } from "../data/platforms.js";
import { projects } from "../data/projects.js";
import { roadmap } from "../data/roadmap.js";

// ─────────────────────────────────────────────
// SHARED HELPERS
// ─────────────────────────────────────────────

/** Standard accordion wrapper */
function accordion({
  id,
  faIcon,
  title,
  subtitle,
  count,
  content,
  countLabel,
}) {
  const label = countLabel || `${count} item${count !== 1 ? "s" : ""}`;
  return `
  <div class="accordion" id="acc-${id}">
    <div class="accordion-header">
      <div class="accordion-header-left">
        <div class="accordion-icon-wrap">
          <i class="${faIcon}"></i>
        </div>
        <div>
          <div class="accordion-title">${title}</div>
          ${subtitle ? `<div class="accordion-subtitle">${subtitle}</div>` : ""}
        </div>
      </div>
      <div class="accordion-header-right">
        <span class="accordion-count">${label}</span>
        <i class="fas fa-chevron-down accordion-chevron"></i>
      </div>
    </div>
    <div class="accordion-body">
      <div class="accordion-body-inner">
        ${content}
        <div class="no-results"><i class="fas fa-search"></i>No results match your search.</div>
      </div>
    </div>
  </div>`;
}

/** Source type → icon + chip class */
const sourceMap = {
  youtube: { icon: "fab fa-youtube", cls: "youtube" },
  linkedin: { icon: "fab fa-linkedin", cls: "linkedin" },
  learnvern: { icon: "fas fa-graduation-cap", cls: "learnvern" },
  udemy: { icon: "fas fa-play-circle", cls: "udemy" },
  web: { icon: "fas fa-globe", cls: "web" },
  github: { icon: "fab fa-github", cls: "github" },
};

/** Build source chips HTML */
function sourcesHtml(sources) {
  return sources
    .map((src) => {
      const def = sourceMap[src.type] || sourceMap.web;
      return `<a href="${src.link}" target="_blank" rel="noopener" class="source-chip ${def.cls}">
      <i class="${def.icon}"></i> ${src.label}
    </a>`;
    })
    .join("");
}

/** Star rating */
function stars(n) {
  let s = "";
  for (let i = 1; i <= 5; i++)
    s += `<i class="fa${i <= n ? "s" : "r"} fa-star"></i>`;
  return s;
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
export function renderAbout(targetEl) {
  const content = `
    <div class="about-inner" data-search="${about.name} ${about.tagline} ${about.bio}">
      <div class="about-bio-block">
        <div class="about-avatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="about-text">
          <h2 class="about-name">${about.name}</h2>
          <p class="about-tagline-text">${about.tagline}</p>
          <p class="about-bio">${about.bio.replace(/\n/g, "<br>")}</p>
        </div>
      </div>

      <div class="about-social-row">
        ${about.social
          .map(
            (s) => `
          <a href="${s.url}" target="_blank" rel="noopener" class="social-btn" style="--sc:${s.color}">
            <i class="${s.icon}"></i>
            <span>${s.label}</span>
          </a>`,
          )
          .join("")}
      </div>
    </div>`;

  targetEl.innerHTML = accordion({
    id: "about",
    faIcon: "fas fa-user",
    title: "About",
    subtitle: `${about.name} — ${about.tagline}`,
    count: 0,
    countLabel: "intro",
    content,
  });
}

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
export function renderSkills(targetEl) {
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  const catHtml = skillCategories
    .map((cat) => {
      const skillsHtml = cat.skills
        .map((skill) => {
          const lv = levelColors[skill.level] || levelColors.beginner;
          return `
        <div class="skill-item" data-search="${skill.name} ${skill.level} ${cat.category}">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level" style="background:${lv.bg};border-color:${lv.border};color:${lv.text}">
            ${skill.level}
          </span>
        </div>`;
        })
        .join("");

      return `
      <div class="skill-category">
        <div class="skill-cat-label">${cat.icon} ${cat.category}</div>
        <div class="skill-grid">${skillsHtml}</div>
      </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "skills",
    faIcon: "fas fa-star",
    title: "Skills",
    subtitle: "Frameworks, concepts & developer workflow",
    count: totalSkills,
    content: `<div class="skills-wrapper">${catHtml}</div>`,
  });
}

// ─────────────────────────────────────────────
// PROGRAMMING LANGUAGES
// ─────────────────────────────────────────────
export function renderLanguages(targetEl) {
  const items = languages
    .map(
      (lang) => `
    <div class="language-item" data-search="${lang.name} ${lang.description} ${lang.sources.map((s) => s.label).join(" ")}">
      <div class="lang-top">
        <div class="lang-left">
          <div class="lang-checkbox">
            ${lang.learned ? '<i class="fas fa-check"></i>' : ""}
          </div>
          <span class="lang-icon">${lang.icon}</span>
          <div class="lang-info">
            <div class="lang-name">${lang.name}</div>
            <div class="lang-desc">${lang.description}</div>
          </div>
        </div>
        ${!lang.learned ? '<span class="learning-tag"><i class="fas fa-spinner fa-spin"></i> Learning</span>' : ""}
      </div>
      <div class="lang-sources">
        <span class="lang-sources-label"><i class="fas fa-graduation-cap"></i> Learned from:</span>
        <div class="lang-sources-chips">${sourcesHtml(lang.sources)}</div>
      </div>
    </div>`,
    )
    .join("");

  targetEl.innerHTML = accordion({
    id: "languages",
    faIcon: "fas fa-code",
    title: "Programming Languages",
    subtitle: "Languages learned with their learning sources",
    count: languages.length,
    content: `<div class="language-grid">${items}</div>`,
  });
}

// ─────────────────────────────────────────────
// COURSES (type="course" only)
// ─────────────────────────────────────────────
export function renderCourses(targetEl) {
  const courses = learningItems.filter((i) => i.type === "course");

  const items = courses
    .map(
      (course) => `
    <div class="course-card" data-search="${course.name} ${course.description} ${course.sources.map((s) => s.label).join(" ")}">
      <div class="course-name">${course.name}</div>
      <div class="course-description">${course.description}</div>
      <div class="course-sources">${sourcesHtml(course.sources)}</div>
    </div>`,
    )
    .join("");

  targetEl.innerHTML = accordion({
    id: "courses",
    faIcon: "fas fa-book-open",
    title: "Courses",
    subtitle: "All courses I have studied or am studying",
    count: courses.length,
    content: `<div class="course-list">${items}</div>`,
  });
}

// ─────────────────────────────────────────────
// CERTIFICATES (type="certificate" only)
// ─────────────────────────────────────────────
export function renderCertificates(targetEl) {
  const certs = learningItems.filter((i) => i.type === "certificate");

  const items = certs
    .map(
      (cert) => `
    <div class="cert-card" data-search="${cert.name} ${cert.description} ${cert.issuer}">
      <div class="cert-card-left">
        <div class="cert-issuer-badge">${cert.issuerIcon}</div>
      </div>
      <div class="cert-card-body">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer-name"><i class="fas fa-building"></i> ${cert.issuer}</div>
        <div class="cert-description">${cert.description}</div>
        <div class="course-sources">${sourcesHtml(cert.sources)}</div>
      </div>
      <div class="cert-icon-col">
        <i class="fas fa-certificate"></i>
      </div>
    </div>`,
    )
    .join("");

  targetEl.innerHTML = accordion({
    id: "certificates",
    faIcon: "fas fa-certificate",
    title: "Certificates",
    subtitle: "Certificates earned from completed courses",
    count: certs.length,
    content: `<div class="cert-list">${items}</div>`,
  });
}

// ─────────────────────────────────────────────
// TOOLS & TECHNICAL EXPOSURE
// ─────────────────────────────────────────────
export function renderTools(targetEl) {
  const totalTools = toolCategories.reduce(
    (acc, cat) => acc + cat.tools.length,
    0,
  );

  const categoriesHtml = toolCategories
    .map((cat) => {
      const toolsHtml = cat.tools
        .map(
          (tool) => `
      <div class="tool-card" data-search="${tool.name} ${tool.usage} ${cat.category}">
        <div class="tool-card-top">
          <span class="tool-icon">${tool.icon}</span>
          <div>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-usage">${tool.usage}</div>
          </div>
        </div>
        <div class="tool-links">
          <a href="${tool.docsLink}" target="_blank" rel="noopener" class="tool-link">
            <i class="fas fa-book"></i> Official Docs
          </a>
          <a href="${tool.learnLink.url}" target="_blank" rel="noopener" class="tool-link">
            <i class="fas fa-graduation-cap"></i> ${tool.learnLink.label}
          </a>
        </div>
      </div>`,
        )
        .join("");

      return `
      <div>
        <div class="tool-category-label">${cat.icon} ${cat.category}</div>
        <div class="tools-grid">${toolsHtml}</div>
      </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "tools",
    faIcon: "fas fa-wrench",
    title: "Tools & Technical Exposure",
    subtitle: "Dev tools, editors, and utilities — grouped by category",
    count: totalTools,
    content: `<div class="tools-categories">${categoriesHtml}</div>`,
  });
}

// ─────────────────────────────────────────────
// LEARNING PLATFORMS
// ─────────────────────────────────────────────
export function renderPlatforms(targetEl) {
  const typeIconMap = {
    youtube: { icon: "fab fa-youtube", color: "#ff4444" },
    linkedin: { icon: "fab fa-linkedin", color: "#0a66c2" },
    learnvern: { icon: "fas fa-graduation-cap", color: "#a855f7" },
    web: { icon: "fas fa-globe", color: "var(--teal)" },
  };

  const items = platforms
    .map((p) => {
      const def = typeIconMap[p.type] || typeIconMap.web;
      const topicsHtml = p.topics
        .map((t) => `<span class="topic-tag">${t}</span>`)
        .join("");

      return `
    <div class="platform-card" data-search="${p.name} ${p.channel} ${p.topics.join(" ")} ${p.notes}">
      <div class="platform-icon-wrap">
        <i class="${def.icon}" style="color:${def.color}"></i>
      </div>
      <div class="platform-body">
        <div class="platform-name">${p.name}</div>
        <div class="platform-channel">${p.channel}</div>
        <div class="platform-topics">${topicsHtml}</div>
        <div class="platform-notes">"${p.notes}"</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="platform-link-btn">
          <i class="fas fa-external-link-alt"></i> Visit
        </a>
      </div>
      <div class="platform-rating">${stars(p.rating)}</div>
    </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "platforms",
    faIcon: "fas fa-globe",
    title: "Learning Platforms",
    subtitle: "YouTube, LearnVern, LinkedIn Learning & web resources",
    count: platforms.length,
    content: `<div class="platforms-list">${items}</div>`,
  });
}

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
export function renderProjects(targetEl) {
  const items = projects
    .map((proj) => {
      const stackHtml = proj.stack
        .map((t) => `<span class="stack-tag">${t}</span>`)
        .join("");
      const ghBtn = proj.githubLink
        ? `<a href="${proj.githubLink}" target="_blank" rel="noopener" class="project-link-btn github"><i class="fab fa-github"></i> GitHub</a>`
        : "";
      const liveBtn = proj.liveLink
        ? `<a href="${proj.liveLink}" target="_blank" rel="noopener" class="project-link-btn live"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
        : "";

      return `
    <div class="project-card" data-search="${proj.name} ${proj.description} ${proj.stack.join(" ")}">
      <div class="project-name">${proj.name}</div>
      <div class="project-desc">${proj.description}</div>
      <div class="project-stack">${stackHtml}</div>
      <div class="project-links">${ghBtn}${liveBtn}</div>
    </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "projects",
    faIcon: "fas fa-folder-open",
    title: "Projects",
    subtitle: "Things I built while learning",
    count: projects.length,
    content: `<div class="projects-grid">${items}</div>`,
  });
}

// ─────────────────────────────────────────────
// FUTURE ROADMAP
// ─────────────────────────────────────────────
export function renderRoadmap(targetEl) {
  const statuses = ["done", "learning", "planned"];
  const labels = {
    done: "✅ Completed",
    learning: "🔄 In Progress",
    planned: "🗓️ Planned",
  };

  const columnsHtml = statuses
    .map((status) => {
      const items = roadmap
        .filter((r) => r.status === status)
        .sort((a, b) => a.order - b.order);
      const itemsHtml = items
        .map(
          (r) => `
      <div class="roadmap-item" data-search="${r.topic} ${r.description}">
        <div class="roadmap-order">${r.order}</div>
        <div class="roadmap-item-content">
          <div class="roadmap-topic">${r.topic}</div>
          <div class="roadmap-desc">${r.description}</div>
          ${r.targetDate ? `<div class="roadmap-target"><i class="fas fa-calendar-alt"></i> ${r.targetDate}</div>` : ""}
        </div>
      </div>`,
        )
        .join("");

      return `
    <div class="roadmap-col ${status}">
      <div class="roadmap-col-header">
        <span class="col-dot"></span>
        ${labels[status]}
        <span style="margin-left:auto;font-size:0.7rem;opacity:0.6">${items.length}</span>
      </div>
      <div class="roadmap-col-body">
        ${itemsHtml || '<div style="padding:12px;color:var(--text-muted);font-size:0.8rem">Nothing here yet.</div>'}
      </div>
    </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "roadmap",
    faIcon: "fas fa-map",
    title: "Future Roadmap",
    subtitle: "Kanban view of my learning journey — past, present & future",
    count: roadmap.length,
    content: `<div class="roadmap-wrapper"><div class="roadmap-columns">${columnsHtml}</div></div>`,
  });
}

// ─────────────────────────────────────────────
// HERO SOCIAL LINKS
// ─────────────────────────────────────────────
export function renderHeroSocial() {
  const el = document.getElementById("heroSocial");
  if (!el) return;
  el.innerHTML = about.social
    .map(
      (s) => `
    <a href="${s.url}" target="_blank" rel="noopener" class="hero-social-btn" style="--sc:${s.color}">
      <i class="${s.icon}"></i> ${s.label}
    </a>`,
    )
    .join("");
}

// ─────────────────────────────────────────────
// HERO STATS
// ─────────────────────────────────────────────
export function renderStats() {
  const statsEl = document.getElementById("heroStats");
  if (!statsEl) return;

  const learnedLangs = languages.filter((l) => l.learned).length;
  const certs = learningItems.filter((i) => i.type === "certificate").length;
  const coursesCount = learningItems.filter((i) => i.type === "course").length;
  const totalTools = toolCategories.reduce(
    (acc, cat) => acc + cat.tools.length,
    0,
  );
  const doneRoadmap = roadmap.filter((r) => r.status === "done").length;
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );

  const stats = [
    { num: learnedLangs, label: "Languages", icon: "fas fa-code" },
    { num: totalSkills, label: "Skills", icon: "fas fa-star" },
    { num: coursesCount, label: "Courses", icon: "fas fa-book-open" },
    { num: certs, label: "Certificates", icon: "fas fa-certificate" },
    { num: totalTools, label: "Tools", icon: "fas fa-wrench" },
    { num: projects.length, label: "Projects", icon: "fas fa-folder-open" },
    { num: doneRoadmap, label: "Topics Done", icon: "fas fa-check-circle" },
  ];

  statsEl.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-chip">
      <i class="${s.icon}" style="color:var(--accent);font-size:0.85rem"></i>
      <span class="stat-num">${s.num}</span>
      <span>${s.label}</span>
    </div>`,
    )
    .join("");
}
