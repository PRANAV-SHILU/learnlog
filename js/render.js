// ── js/render.js ──
// All render functions — builds HTML from data and injects into the DOM.

import { about } from "../data/about.js";
import { experiences } from "../data/experience.js";
import { educationEntries } from "../data/education.js";
import { skillCategories } from "../data/skills.js";
import { learningItems } from "../data/courses.js";
import { platforms } from "../data/platforms.js";
import { projects } from "../data/projects.js";
import { roadmap } from "../data/roadmap.js";
import { webinars } from "../data/webinars.js";

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
  web: { icon: "fas fa-globe", cls: "web" },
  github: { icon: "fab fa-github", cls: "github" },
  college: { icon: "fas fa-university", cls: "college" },
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
// EXPERIENCE
// ─────────────────────────────────────────────
export function renderExperience(targetEl) {
  const expItems = experiences
    .map((exp) => {
      const skillsHtml = exp.skills
        .map((skill) => `<span class="exp-skill-tag">${skill.icon} ${skill.name}</span>`)
        .join("");
      const highlightsHtml = exp.highlights
        .map((h) => `<li class="exp-highlight">${h}</li>`)
        .join("");
      
      return `
    <div class="experience-card" data-search="${exp.role} ${exp.company} ${exp.description} ${exp.skills.map(s => s.name).join(" ")}">
      <div class="exp-header">
        <div class="exp-info">
          <h3 class="exp-role">${exp.role}</h3>
          <div class="exp-company-row">
            <a href="${exp.companyUrl}" target="_blank" rel="noopener" class="exp-company">${exp.company}</a>
            <span class="exp-type">${exp.type}</span>
          </div>
        </div>
        <div class="exp-dates">
          <div class="exp-date"><i class="fas fa-calendar-alt"></i> ${new Date(exp.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} — ${new Date(exp.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</div>
          <div class="exp-duration"><i class="fas fa-hourglass-end"></i> ${exp.duration}</div>
        </div>
      </div>
      
      <p class="exp-description">${exp.description}</p>
      
      <div class="exp-highlights">
        <div class="exp-highlights-label">Key Highlights:</div>
        <ul>${highlightsHtml}</ul>
      </div>
      
      <div class="exp-skills">
        <div class="exp-skills-label">Skills Used:</div>
        <div class="exp-skills-list">${skillsHtml}</div>
      </div>
    </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "experience",
    faIcon: "fas fa-briefcase",
    title: "Experience",
    subtitle: "Professional experience and internships",
    count: experiences.length,
    content: `<div class="experience-list">${expItems}</div>`,
  });
}

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
export function renderEducation(targetEl) {
  const items = educationEntries
    .map((edu) => {
      const skillsHtml = edu.skills.length
        ? `<div class="edu-skills">
            <div class="edu-skills-label">Skills &amp; Topics:</div>
            <div class="edu-skills-list">${edu.skills
              .map((s) => `<span class="edu-skill-tag">${s}</span>`)
              .join("")}</div>
          </div>`
        : "";

      const statusBadge =
        edu.status === "current"
          ? `<span class="edu-status-badge current"><i class="fas fa-circle"></i> Pursuing</span>`
          : `<span class="edu-status-badge completed"><i class="fas fa-check-circle"></i> Completed</span>`;

      return `
    <div class="edu-card" data-search="${edu.institution} ${edu.degree} ${edu.field} ${edu.skills.join(" ")}">
      <div class="edu-card-left">
        <div class="edu-logo-wrap" style="--edu-color:${edu.logoColor}">
          <i class="${edu.logoIcon}"></i>
        </div>
        <div class="edu-timeline-line"></div>
      </div>
      <div class="edu-card-body">
        <div class="edu-header">
          <div class="edu-header-top">
            <div>
              <div class="edu-institution">${edu.institution}</div>
              <div class="edu-degree">${edu.degree}</div>
              <div class="edu-field">${edu.field}</div>
            </div>
            ${statusBadge}
          </div>
          <div class="edu-meta">
            <span class="edu-date"><i class="fas fa-calendar-alt"></i> ${edu.startDate} &ndash; ${edu.endDate}</span>
            <span class="edu-grade"><i class="fas fa-award"></i> ${edu.gradeLabel}: <strong>${edu.grade}</strong></span>
          </div>
        </div>
        <p class="edu-description">${edu.description}</p>
        ${skillsHtml}
      </div>
    </div>`;
    })
    .join("");

  targetEl.innerHTML = accordion({
    id: "education",
    faIcon: "fas fa-graduation-cap",
    title: "Education",
    subtitle: "Academic background and qualifications",
    count: educationEntries.length,
    content: `<div class="edu-list">${items}</div>`,
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
          const learningBadge = skill.learning
            ? `<span class="skill-learning-badge"><i class="fas fa-spinner fa-spin"></i> Learning</span>`
            : "";
          return `
        <div class="skill-item" data-search="${skill.name} ${cat.category}">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-name">${skill.name}</span>
          ${learningBadge}
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
    subtitle: "Languages, frameworks, concepts & developer workflow",
    count: totalSkills,
    content: `<div class="skills-wrapper">${catHtml}</div>`,
  });
}

// (Programming Languages section removed — languages & frameworks are now listed under Skills)

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
// WEBINARS & SEMINARS
// ─────────────────────────────────────────────
export function renderWebinars(targetEl) {
  const typeConfig = {
    webinar: { label: "Webinar", icon: "fas fa-video", cls: "badge-webinar" },
    seminar: { label: "Seminar", icon: "fas fa-chalkboard-teacher", cls: "badge-seminar" },
  };

  const items = webinars
    .map((ev) => {
      const cfg = typeConfig[ev.type] || typeConfig.webinar;
      const linkBtn = ev.link
        ? `<a href="${ev.link}" target="_blank" rel="noopener" class="platform-link-btn">
            <i class="fas fa-external-link-alt"></i> ${ev.linkLabel || "View"}
          </a>`
        : "";
      return `
    <div class="webinar-card" data-search="${ev.name} ${ev.organizer} ${ev.description} ${ev.type}">
      <div class="webinar-card-top">
        <div class="webinar-meta">
          <span class="event-badge ${cfg.cls}"><i class="${cfg.icon}"></i> ${cfg.label}</span>
          ${ev.date ? `<span class="webinar-date"><i class="fas fa-calendar-alt"></i> ${ev.date}</span>` : ""}
        </div>
        ${linkBtn}
      </div>
      <div class="webinar-name">${ev.name}</div>
      <div class="webinar-organizer"><i class="fas fa-building"></i> ${ev.organizer}</div>
      ${ev.description ? `<div class="webinar-desc">${ev.description}</div>` : ""}
    </div>`;
    })
    .join("");

  const emptyMsg = webinars.length === 0
    ? `<div class="webinar-empty"><i class="fas fa-calendar-plus"></i><p>No events logged yet — add your first webinar or seminar!</p></div>`
    : "";

  targetEl.innerHTML = accordion({
    id: "webinars",
    faIcon: "fas fa-chalkboard-teacher",
    title: "Webinars & Seminars",
    subtitle: "Events, workshops, and online sessions attended",
    count: webinars.length,
    content: `<div class="webinars-grid">${items}${emptyMsg}</div>`,
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
    title: "Roadmap",
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

  const certs = learningItems.filter((i) => i.type === "certificate").length;
  const coursesCount = learningItems.filter((i) => i.type === "course").length;
  const doneRoadmap = roadmap.filter((r) => r.status === "done").length;
  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0,
  );
  const langCat = skillCategories.find((c) => c.category === "Languages");
  const langCount = langCat ? langCat.skills.filter((s) => !s.learning).length : 0;

  const stats = [
    { num: langCount, label: "Languages", icon: "fas fa-code" },
    { num: totalSkills, label: "Skills", icon: "fas fa-star" },
    { num: coursesCount, label: "Courses", icon: "fas fa-book-open" },
    { num: certs, label: "Certificates", icon: "fas fa-certificate" },
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
