// ── data/roadmap.js ──
// status: "done" | "learning" | "planned"
// order: global timeline order number (shows on kanban card)
// targetDate: optional string like "Q2 2025" or "March 2025"

export const roadmap = [
  // ── DONE ──
  {
    topic: "HTML & CSS Foundations",
    description: "Semantic HTML, Flexbox, Grid, responsive layouts",
    status: "done",
    order: 1,
    targetDate: null,
  },
  {
    topic: "JavaScript Fundamentals",
    description: "ES6+, DOM manipulation, async/await, fetch API",
    status: "done",
    order: 2,
    targetDate: null,
  },
  {
    topic: "Git & GitHub",
    description: "Version control, branching, pull requests, GitHub Pages",
    status: "done",
    order: 3,
    targetDate: null,
  },
  {
    topic: "Python Basics",
    description: "Syntax, functions, OOP, file handling, scripting",
    status: "done",
    order: 4,
    targetDate: null,
  },
  {
    topic: "SQL Fundamentals",
    description: "SELECT, JOIN, GROUP BY, subqueries, normalization",
    status: "done",
    order: 5,
    targetDate: null,
  },

  // ── IN PROGRESS ──
  {
    topic: "TypeScript",
    description: "Static typing, interfaces, generics, TS with JS projects",
    status: "learning",
    order: 6,
    targetDate: "Q1 2026",
  },
  {
    topic: "React.js",
    description: "Components, hooks, state management, routing",
    status: "learning",
    order: 7,
    targetDate: "Q1–Q2 2026",
  },

  // ── PLANNED ──
  {
    topic: "Node.js & Express",
    description: "Backend APIs, middleware, authentication, REST",
    status: "planned",
    order: 8,
    targetDate: "Q2 2026",
  },
  {
    topic: "MongoDB",
    description: "NoSQL databases, Mongoose ODM, CRUD operations",
    status: "planned",
    order: 9,
    targetDate: "Q2 2026",
  },
  {
    topic: "Data Structures & Algorithms",
    description: "Arrays, trees, graphs, sorting, dynamic programming",
    status: "planned",
    order: 10,
    targetDate: "Q3 2026",
  },
  {
    topic: "Docker & Deployment",
    description: "Containers, images, docker-compose, CI/CD pipelines",
    status: "planned",
    order: 11,
    targetDate: "Q3 2026",
  },
  {
    topic: "System Design Basics",
    description: "Scalability concepts, load balancing, caching, databases",
    status: "planned",
    order: 12,
    targetDate: "Q4 2026",
  },
];
