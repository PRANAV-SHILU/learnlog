// ── data/skills.js ──
// level: "beginner" | "intermediate" | "advanced"

export const skillCategories = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "HTML5",                       level: "intermediate", icon: "🌐" },
      { name: "CSS3",                        level: "intermediate", icon: "🎨" },
      { name: "JavaScript (ES6+)",           level: "intermediate", icon: "⚡" },
      { name: "React.js",                    level: "intermediate", icon: "⚛️" },
      { name: "Bootstrap",                   level: "intermediate", icon: "🅱️" },
      { name: "Tailwind CSS",                level: "intermediate", icon: "🌊" },
      { name: "Responsive Web Design",       level: "intermediate", icon: "📱" },
      { name: "CSS Flexbox & Grid",          level: "intermediate", icon: "🔲" },
      { name: "DOM Manipulation",            level: "intermediate", icon: "🌳" },
      { name: "REST API Integration",        level: "intermediate", icon: "🔌" },
      { name: "CRUD Operations",             level: "intermediate", icon: "🗂️" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    skills: [
      { name: "Object-Oriented Programming", level: "intermediate", icon: "🧩" },
      { name: "Data Structures & Algorithms",level: "intermediate", icon: "📦" },
      { name: "Problem Solving",             level: "intermediate", icon: "🔍" },
      { name: "Software Development",        level: "beginner",     icon: "💡" },
    ],
  },
  {
    category: "Developer Workflow",
    icon: "⚙️",
    skills: [
      { name: "Git",                         level: "intermediate", icon: "🌿" },
      { name: "GitHub",                      level: "intermediate", icon: "🐙" },
      { name: "GitHub Actions",              level: "beginner",     icon: "🤖" },
      { name: "VS Code",                     level: "intermediate", icon: "💙" },
      { name: "Chrome DevTools",             level: "intermediate", icon: "🔧" },
      { name: "Figma",                       level: "beginner",     icon: "✏️" },
    ],
  },
  {
    category: "AI & Productivity",
    icon: "🤖",
    skills: [
      { name: "Prompt Engineering",          level: "intermediate", icon: "✍️" },
      { name: "AI Prompting",                level: "intermediate", icon: "💬" },
      { name: "Microsoft Copilot",           level: "intermediate", icon: "🪟" },
      { name: "ChatGPT for Dev",             level: "intermediate", icon: "🧠" },
      { name: "AI Productivity",             level: "intermediate", icon: "🚀" },
    ],
  },
  {
    category: "Currently Learning",
    icon: "📚",
    skills: [
      { name: "Redux.js",                    level: "beginner",     icon: "🔄" },
      { name: "React Router v7",             level: "beginner",     icon: "🗺️" },
      { name: "React Hook Form + Yup",       level: "beginner",     icon: "📋" },
    ],
  },
];

// Level badge colors — used in render.js
export const levelColors = {
  beginner:     { bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.4)",  text: "#3b82f6" },
  intermediate: { bg: "rgba(245,158,11,0.15)",  border: "rgba(245,158,11,0.4)",  text: "#f59e0b" },
  advanced:     { bg: "rgba(34,197,94,0.15)",   border: "rgba(34,197,94,0.4)",   text: "#22c55e" },
};
