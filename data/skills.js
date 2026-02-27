// ── data/skills.js ──
// Skills are grouped by category.
// level: "beginner" | "intermediate" | "advanced"
// Each skill can optionally have a link to a resource or docs.

export const skillCategories = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "Responsive Web Design", level: "intermediate", icon: "📱" },
      { name: "CSS Flexbox & Grid", level: "intermediate", icon: "🔲" },
      { name: "CSS Animations", level: "beginner", icon: "✨" },
      { name: "DOM Manipulation", level: "intermediate", icon: "🌐" },
      { name: "Fetch API / AJAX", level: "beginner", icon: "🔄" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    skills: [
      {
        name: "Object-Oriented Programming",
        level: "intermediate",
        icon: "🧩",
      },
      { name: "Data Structures", level: "beginner", icon: "📦" },
      { name: "Algorithms & Problem Solving", level: "beginner", icon: "🔍" },
      { name: "REST APIs", level: "beginner", icon: "🔌" },
      { name: "Database Design (SQL)", level: "beginner", icon: "🗄️" },
    ],
  },
  {
    category: "Developer Workflow",
    icon: "⚙️",
    skills: [
      { name: "Git Version Control", level: "intermediate", icon: "🌿" },
      { name: "Command Line / Terminal", level: "beginner", icon: "💻" },
      { name: "Debugging & DevTools", level: "intermediate", icon: "🔧" },
      { name: "API Testing (Postman)", level: "beginner", icon: "📮" },
    ],
  },
  {
    category: "Currently Learning",
    icon: "📚",
    skills: [
      { name: "TypeScript", level: "beginner", icon: "🟦" },
      { name: "React.js", level: "beginner", icon: "⚛️" },
      { name: "ES Modules", level: "intermediate", icon: "📦" },
    ],
  },
];

// Level badge colors — used in render.js
export const levelColors = {
  beginner: {
    bg: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.4)",
    text: "#3b82f6",
  },
  intermediate: {
    bg: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.4)",
    text: "#f59e0b",
  },
  advanced: {
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.4)",
    text: "#22c55e",
  },
};
