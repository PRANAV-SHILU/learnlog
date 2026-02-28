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
        usage: "Local version control — commit, branch, merge, rebase, conflict resolution",
        docsLink: "https://git-scm.com/doc",
        learnLink: { label: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
      },
      {
        name: "GitHub",
        icon: "🐙",
        usage: "Remote repos, pull requests, GitHub Pages, GitHub Actions CI/CD",
        docsLink: "https://docs.github.com",
        learnLink: { label: "GitHub Skills", url: "https://skills.github.com" },
      },
      {
        name: "GitHub Desktop",
        icon: "🖥️",
        usage: "GUI client for Git — visual diffs, easy branching, commit management",
        docsLink: "https://docs.github.com/en/desktop",
        learnLink: { label: "GitHub Desktop Docs", url: "https://docs.github.com/en/desktop" },
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
        usage: "Primary code editor — extensions, IntelliSense, live server, debugging",
        docsLink: "https://code.visualstudio.com/docs",
        learnLink: { label: "VS Code Tips", url: "https://code.visualstudio.com/learn" },
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
        usage: "Inspect elements, debug JS, network tab, performance profiling, responsive testing",
        docsLink: "https://developer.chrome.com/docs/devtools",
        learnLink: { label: "DevTools Overview", url: "https://developer.chrome.com/docs/devtools/overview" },
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
        usage: "UI wireframing, component design, layout planning, prototype flows",
        docsLink: "https://help.figma.com",
        learnLink: { label: "Figma Learn", url: "https://help.figma.com/hc/en-us/categories/360002051613" },
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
        usage: "Word, Excel, PowerPoint — documents, spreadsheets, presentations",
        docsLink: "https://support.microsoft.com/en-us/office",
        learnLink: { label: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/office/" },
      },
      {
        name: "Zoho Suite",
        icon: "🟠",
        usage: "Zoho CRM, Zoho Mail, and collaboration tools used during work at VeyondTech",
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
        name: "Microsoft Copilot",
        icon: "🪟",
        usage: "AI productivity — Word, Excel, PowerPoint, Outlook, Teams assistance and prompt workflows",
        docsLink: "https://learn.microsoft.com/en-us/copilot/",
        learnLink: { label: "Copilot Learning", url: "https://adoption.microsoft.com/en-us/copilot/" },
      },
      {
        name: "ChatGPT",
        icon: "🧠",
        usage: "AI-assisted coding, debugging, prompt engineering, research, and content generation",
        docsLink: "https://platform.openai.com/docs",
        learnLink: { label: "OpenAI Docs", url: "https://platform.openai.com/docs" },
      },
    ],
  },
];
