// ── data/tools.js ──
// Tools grouped by category.

export const toolCategories = [
  {
    category: "Version Control",
    icon: "🔀",
    tools: [
      {
        name: "Git",
        icon: "🌿",
        usage: "version control — commit, branch, merge, push, pull",
        docsLink: "https://git-scm.com/doc",
        learnLink: {
          label: "Pro Git Book",
          url: "https://git-scm.com/book/en/v2",
        },
      },
      {
        name: "GitHub",
        icon: "🐙",
        usage: "Remote repos, pull requests, GitHub Pages",
        docsLink: "https://docs.github.com",
        learnLink: { label: "GitHub Skills", url: "https://skills.github.com" },
      },
      {
        name: "GitHub Desktop",
        icon: "🖥️",
        usage:
          "GUI client for Git — visual diffs, easy branching, commit management",
        docsLink: "https://docs.github.com/en/desktop",
        learnLink: null,
      },
    ],
  },
  {
    category: "Code Editors & IDEs",
    icon: "✏️",
    tools: [
      {
        name: "VS Code",
        icon: "🆚",
        usage:
          "Primary code editor — extensions, IntelliSense, live server, debugging",
        docsLink: "https://code.visualstudio.com/docs",
        learnLink: null,
      },
      {
        name: "Google Antigravity",
        icon: "🌍",
        usage:
          "An IDE for the web — code, run, and debug in the browser with AI assistance",
        docsLink:
          "https://mrdoob.com/projects/chromeexperiments/google-gravity/",
        learnLink: null,
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
        usage:
          "Inspect elements, debug JS, network tab, performance profiling, responsive testing",
        docsLink: "https://developer.chrome.com/docs/devtools",
        learnLink: {
          label: "DevTools Overview",
          url: "https://developer.chrome.com/docs/devtools/overview",
        },
      },
      {
        name: "React DevTools",
        icon: "⚛️",
        usage:
          "Browser extension for debugging React applications — component tree, props, state inspection",
        docsLink: "https://react.dev/reference/react-dom/components",
        learnLink: {
          label: "React DevTools Docs",
          url: "https://react.dev/docs/react-devtools",
        },
      },
    ],
  },
  {
    category: "Office & Productivity",
    icon: "📊",
    tools: [
      {
        name: "MS Office Suite",
        icon: "🪟",
        usage: "Word, Excel, PowerPoint, Copilot, Teams, Outlook, etc... ",
        docsLink: "https://support.microsoft.com/en-us/office",
        learnLink: {
          label: "Microsoft Learn",
          url: "https://learn.microsoft.com/en-us/office/",
        },
      },
      {
        name: "Zoho Suite",
        icon: "🟠",
        usage: "Zoho Writer, Sheets, Show, Mail, Cliq, Notebook, etc...",
        docsLink: "https://www.zoho.com/docs",
        learnLink: { label: "Zoho Learn", url: "https://learn.zoho.com" },
      },
    ],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    tools: [
      {
        name: "AI Chatbots",
        icon: "🪟",
        usage:
          "AI productivity tools for coding, debugging, research, and content generation",
        docsLink: null,
        learnLink: null,
      },
      {
        name: "Replit AI",
        icon: "🧠",
        usage:
          "AI-assisted coding, debugging, prompt engineering, and learning within the Replit IDE",
        docsLink: "https://docs.replit.com/getting-started/intro-replit",
        learnLink: null,
      },
    ],
  },
  {
    category: "API Testing",
    icon: "🔌",
    tools: [
      {
        name: "Postman",
        icon: "📬",
        usage:
          "API client for building, testing, and documenting APIs — collections, environments, automation",
        docsLink: "https://learning.postman.com/docs",
        learnLink: {
          label: "Postman Academy",
          url: "https://www.postman.com/academy",
        },
      },
      {
        name: "Thunder Client",
        icon: "⛈️",
        usage:
          "Lightweight REST API client for VS Code — visual testing, collections, environment variables",
        docsLink: "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client",
        learnLink: null,
      },
    ],
  },
];
