// ── data/languages.js ──
// Source types: "youtube" | "learnvern" | "linkedin" | "web" | "github"

export const languages = [
  {
    name: "C",
    icon: "🔧",
    description:
      "Pointers, DSA, structures, arrays — 1st Rank in University C Programming Competition",
    learned: true,
    sources: [
      { type: "college", label: "SSCCS College", link: "#" },
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/c-programming-tutorial-in-hindi",
      },
      {
        type: "web",
        label: "W3Schools C",
        link: "https://www.w3schools.com/c/",
      },
    ],
  },
  {
    name: "C++",
    icon: "⚙️",
    description:
      "OOP concepts, classes, inheritance, Polymorphism — studied at MKBU university level",
    learned: true,
    sources: [
      { type: "college", label: "SSCCS College", link: "#" },
      {
        type: "web",
        label: "W3Schools C++",
        link: "https://www.w3schools.com/cpp/",
      },
    ],
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description:
      "ES6+, DOM manipulation, async/await, fetch API, localStorage, event handling",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Code with Harry",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
      },
      {
        type: "web",
        label: "w3schools JS",
        link: "https://www.w3schools.com/js/",
      },
      { type: "college", label: "SSCCS College", link: "#" },
    ],
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Basic syntax, data structures and OOP",
    learned: false,
    sources: [],
  },
];

export const frameworks = [
  {
    name: "HTML5",
    icon: "🌐",
    description: "Semantic markup, structure and accessibility (HTML5)",
    learned: true,
    sources: [
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/html5-tutorial-in-hindi",
      },
      { type: "web", label: "W3Schools", link: "https://www.w3schools.com/html/" },
      { type: "college", label: "SSCCS College", link: "#" },
    ],
  },
  {
    name: "CSS3",
    icon: "🎨",
    description: "Styling, layouts, Flexbox, Grid, responsive design",
    learned: true,
    sources: [
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/css3-tutorial-in-hindi",
      },
      { type: "web", label: "W3Schools CSS", link: "https://www.w3schools.com/css/" },
      { type: "college", label: "SSCCS College", link: "#" },
    ],
  },
  {
    name: "React.js",
    icon: "⚛️",
    description: "UI library for building component-based interfaces",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "code step by step",
        link: "https://www.youtube.com/playlist?list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu",
      },
      { type: "learnvern", label: "LearnVern", link: "https://www.learnvern.com/course/reactjs-tutorial" },
      { type: "web", label: "React Official Docs", link: "https://react.dev" },
      { type: "web", label: "w3schools React", link: "https://www.w3schools.com/react/" },
    ],
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "JavaScript runtime for server-side applications",
    learned: true,
    sources: [
      { type: "web", label: "KnowledgeGate", link: "https://www.knowledgegate.ai/courses/COMPLETE-NODEJS-EXPRESSJS-MONGODB" },
      { type: "web", label: "Node.js Docs", link: "https://nodejs.org/docs/latest/" },
    ],
  },
  {
    name: "Express.js",
    icon: "🚀",
    description: "Minimal web framework for Node.js",
    learned: true,
    sources: [
      { type: "web", label: "KnowledgeGate", link: "https://www.knowledgegate.ai/courses/COMPLETE-NODEJS-EXPRESSJS-MONGODB" },
      { type: "web", label: "Express Docs", link: "https://expressjs.com/" },
    ],
  },
];

// `libraries` moved/removed — keep frameworks inside languages module only
