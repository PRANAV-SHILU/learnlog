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
    name: "HTML5",
    icon: "🌐",
    description:
      "Semantic markup, forms, accessibility, SEO basics — university + OJT training",
    learned: true,
    sources: [
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/html5-tutorial-in-hindi",
      },

      {
        type: "web",
        label: "W3Schools",
        link: "https://www.w3schools.com/html/",
      },
      { type: "college", label: "SSCCS College", link: "#" },
    ],
  },
  {
    name: "CSS3",
    icon: "🎨",
    description: "Flexbox, Grid, responsive design, custom properties",
    learned: true,
    sources: [
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/css3-tutorial-in-hindi",
      },
      {
        type: "web",
        label: "W3Schools CSS",
        link: "https://www.w3schools.com/css/",
      },
      { type: "college", label: "SSCCS College", link: "#" },
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
    name: "React.js",
    icon: "⚛️",
    description:
      "Components, hooks, React Router v7, REST API, form handling, Redux, etc...",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "code step by step",
        link: "https://www.youtube.com/playlist?list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu",
      },
      {
        type: "learnvern",
        label: "LearnVern",
        link: "https://www.learnvern.com/course/reactjs-tutorial",
      },
      { type: "web", label: "React Official Docs", link: "https://react.dev" },
      {
        type: "web",
        label: "React Router Docs",
        link: "https://reactrouter.com",
      },
      {
        type: "w3schools",
        label: "w3schools React",
        link: "https://www.w3schools.com/react/",
      },
    ],
  },
  {
    name: "Node.js",
    icon: "🟢",
    description:
      "Server-side JavaScript, npm, Express.js integration, REST API development",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Complete Coding by Prashant Sir",
        link: "https://www.youtube.com/playlist?list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3",
      },
      {
        type: "web",
        label: "Node.js Docs",
        link: "https://nodejs.org/docs/latest/",
      },
    ],
  },
  {
    name: "Express.js",
    icon: "🚀",
    description:
      "Web application framework for Node.js, routing, middleware, API creation",
    learned: true,
    sources: [
      {
        type: "youtube",
        label: "Complete Coding by Prashant Sir",
        link: "https://www.youtube.com/playlist?list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3",
      },
      {
        type: "web",
        label: "Express Docs",
        link: "https://expressjs.com/",
      },
    ],
  },
];
