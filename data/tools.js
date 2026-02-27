// ── data/tools.js ──
// Tools grouped by category. Each tool has icon (emoji), docsLink, and a learning resource link.

export const toolCategories = [
  {
    category: "Version Control",
    icon: "🔀",
    tools: [
      {
        name: "Git",
        icon: "🌿",
        usage: "Local version control — commit, branch, merge, rebase",
        docsLink: "https://git-scm.com/doc",
        learnLink: {
          label: "Pro Git Book",
          url: "https://git-scm.com/book/en/v2",
        },
      },
      {
        name: "GitHub",
        icon: "🐙",
        usage: "Remote repos, pull requests, issues, GitHub Pages",
        docsLink: "https://docs.github.com",
        learnLink: { label: "GitHub Skills", url: "https://skills.github.com" },
      },
      {
        name: "GitHub Desktop",
        icon: "🖥️",
        usage: "GUI client for Git — visual diffs, easy branching",
        docsLink: "https://docs.github.com/en/desktop",
        learnLink: {
          label: "GitHub Desktop Docs",
          url: "https://docs.github.com/en/desktop",
        },
      },
    ],
  },
  {
    category: "Code Editors & IDEs",
    icon: "✏️",
    tools: [
      {
        name: "VS Code",
        icon: "💙",
        usage: "Primary code editor — extensions, IntelliSense, debugging",
        docsLink: "https://code.visualstudio.com/docs",
        learnLink: {
          label: "VS Code Tips",
          url: "https://code.visualstudio.com/learn",
        },
      },
    ],
  },
  {
    category: "API Testing",
    icon: "📡",
    tools: [
      {
        name: "Postman",
        icon: "📮",
        usage: "Testing REST APIs, creating collections, environment variables",
        docsLink: "https://learning.postman.com/docs",
        learnLink: {
          label: "Postman Learning Center",
          url: "https://learning.postman.com",
        },
      },
    ],
  },
  {
    category: "Browser & DevTools",
    icon: "🌐",
    tools: [
      {
        name: "Chrome DevTools",
        icon: "🔍",
        usage: "Inspect elements, debug JS, network tab, performance profiling",
        docsLink: "https://developer.chrome.com/docs/devtools",
        learnLink: {
          label: "DevTools Overview",
          url: "https://developer.chrome.com/docs/devtools/overview",
        },
      },
    ],
  },
  {
    category: "Design & Mockups",
    icon: "🎨",
    tools: [
      {
        name: "Figma",
        icon: "✏️",
        usage: "UI wireframing, component design, prototype flows",
        docsLink: "https://help.figma.com",
        learnLink: {
          label: "Figma Learn",
          url: "https://help.figma.com/hc/en-us/categories/360002051613",
        },
      },
    ],
  },
];
