// ── data/languages.js ──
// Each language now has a `sources` array showing WHERE you learned it from.
// Source types: "youtube" | "learnvern" | "linkedin" | "web" | "udemy" | "github"

export const languages = [
  {
    name: "HTML",
    icon: "🌐",
    description: "Semantic markup, forms, accessibility, SEO basics",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Traversy Media",
        link: "https://www.youtube.com/@TraversyMedia",
      },
      {
        type: "web",
        label: "MDN Web Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        type: "web",
        label: "W3Schools",
        link: "https://www.w3schools.com/html/",
      },
    ],
  },
  {
    name: "CSS",
    icon: "🎨",
    description:
      "Flexbox, Grid, animations, responsive design, custom properties",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Kevin Powell",
        link: "https://www.youtube.com/@KevinPowell",
      },
      {
        type: "youtube",
        label: "Traversy Media",
        link: "https://www.youtube.com/@TraversyMedia",
      },
      {
        type: "web",
        label: "MDN CSS Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "ES6+, DOM, async/await, fetch API, modules, closures",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "The Net Ninja",
        link: "https://www.youtube.com/@NetNinja",
      },
      {
        type: "youtube",
        label: "Fireship",
        link: "https://www.youtube.com/@Fireship",
      },
      {
        type: "web",
        label: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      },
      {
        type: "web",
        label: "MDN JS Docs",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    name: "C++",
    icon: "⚙️",
    description: "OOP, STL, memory management — university level",
    learned: true,
    sources: [{ type: "college", label: "MKBU University", link: "#" }],
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Syntax, functions, OOP, file I/O, scripting basics",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Tech With Tim",
        link: "https://www.youtube.com/@TechWithTim",
      },
      {
        type: "learnvern",
        label: "LearnVern Python",
        link: "https://www.learnvern.com",
      },
      { type: "web", label: "Python Docs", link: "https://docs.python.org/3/" },
    ],
  },
  {
    name: "Java",
    icon: "☕",
    description: "OOP, collections, exception handling, basic data structures",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Telusko",
        link: "https://www.youtube.com/@Telusko",
      },
      {
        type: "youtube",
        label: "Bro Code",
        link: "https://www.youtube.com/@BroCodez",
      },
      {
        type: "learnvern",
        label: "LearnVern Java",
        link: "https://www.learnvern.com",
      },
    ],
  },
  {
    name: "C",
    icon: "🔧",
    description: "Pointers, memory management, structs, low-level programming",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Bro Code",
        link: "https://www.youtube.com/@BroCodez",
      },
      {
        type: "web",
        label: "W3Schools C",
        link: "https://www.w3schools.com/c/",
      },
    ],
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "SELECT, JOIN, GROUP BY, subqueries, normalization basics",
    learned: true,
    sources: [
      {
        type: "learnvern",
        label: "LearnVern SQL",
        link: "https://www.learnvern.com",
      },
      {
        type: "youtube",
        label: "Bro Code",
        link: "https://www.youtube.com/@BroCodez",
      },
      {
        type: "web",
        label: "W3Schools SQL",
        link: "https://www.w3schools.com/sql/",
      },
    ],
  },
  {
    name: "TypeScript",
    icon: "🟦",
    description: "Static typing, interfaces, generics — currently learning",
    learned: false,
    sources: [
      {
        type: "youtube",
        label: "The Net Ninja",
        link: "https://www.youtube.com/@NetNinja",
      },
      {
        type: "web",
        label: "TS Official Docs",
        link: "https://www.typescriptlang.org/docs/",
      },
    ],
  },
];
