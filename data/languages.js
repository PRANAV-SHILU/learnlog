// ── data/languages.js ──
// Source types: "youtube" | "learnvern" | "linkedin" | "web" | "udemy" | "github"

export const languages = [
  {
    name: "HTML5",
    icon: "🌐",
    description: "Semantic markup, forms, accessibility, SEO basics — university + OJT training",
    learned: true,
    sources: [
      { type: "web",       label: "MDN Web Docs",          link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { type: "web",       label: "W3Schools",              link: "https://www.w3schools.com/html/" },
      { type: "web",       label: "IBM SkillsBuild",        link: "https://skills.yourlearning.ibm.com" },
    ],
  },
  {
    name: "CSS3",
    icon: "🎨",
    description: "Flexbox, Grid, animations, responsive design, custom properties",
    learned: true,
    sources: [
      { type: "youtube",   label: "Kevin Powell",           link: "https://www.youtube.com/@KevinPowell" },
      { type: "youtube",   label: "Traversy Media",         link: "https://www.youtube.com/@TraversyMedia" },
      { type: "web",       label: "MDN CSS Docs",           link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "ES6+, DOM manipulation, async/await, fetch API, localStorage, event handling",
    learned: true,
    sources: [
      { type: "youtube",   label: "freeCodeCamp YT",        link: "https://www.youtube.com/@freecodecamp" },
      { type: "youtube",   label: "Traversy Media",         link: "https://www.youtube.com/@TraversyMedia" },
      { type: "web",       label: "MDN JS Docs",            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    ],
  },
  {
    name: "C",
    icon: "🔧",
    description: "Pointers, memory management, structs, arrays — 1st Rank in University C Programming Competition",
    learned: true,
    sources: [
      { type: "youtube",   label: "YouTube Course",         link: "https://www.youtube.com" },
      { type: "web",       label: "W3Schools C",            link: "https://www.w3schools.com/c/" },
    ],
  },
  {
    name: "C++",
    icon: "⚙️",
    description: "OOP concepts, STL, classes, inheritance — studied at MKBU university level",
    learned: true,
    sources: [
      { type: "web",       label: "MKBU University",        link: "#" },
      { type: "web",       label: "W3Schools C++",          link: "https://www.w3schools.com/cpp/" },
    ],
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Syntax, functions, basic scripting — covered in Career Essentials by Microsoft & LinkedIn",
    learned: true,
    sources: [
      { type: "linkedin",  label: "Career Essentials (Microsoft & LinkedIn)", link: "https://www.linkedin.com/learning/certificates/2e0e42c553731c2fd136c5106a66f988c4b3fb70aab02c157edd73e428e454fa" },
      { type: "web",       label: "Python Docs",            link: "https://docs.python.org/3/" },
    ],
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "SELECT, JOIN, GROUP BY, subqueries — covered during Junior Software Developer OJT (MySQL + PDO)",
    learned: true,
    sources: [
      { type: "learnvern", label: "LearnVern SQL",          link: "https://www.learnvern.com" },
      { type: "web",       label: "W3Schools SQL",          link: "https://www.w3schools.com/sql/" },
    ],
  },
  {
    name: "React.js",
    icon: "⚛️",
    description: "Components, hooks, React Router v7, REST API, form handling — used in production at VeyondTech",
    learned: true,
    sources: [
      { type: "youtube",   label: "Traversy Media",         link: "https://www.youtube.com/@TraversyMedia" },
      { type: "web",       label: "React Official Docs",    link: "https://react.dev" },
      { type: "web",       label: "React Router Docs",      link: "https://reactrouter.com" },
    ],
  },
];
