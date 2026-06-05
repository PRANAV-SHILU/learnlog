# LearnLog 📚

> My personal learning dashboard — tracking every resource, tool, and skill.

---

## 📁 File Structure

```
learnlog/
├── index.html              ← Main page
├── css/
│   └── style.css           ← All styles (dark theme, amber accent)
├── data/
│   ├── about.js            ← Personal bio, socials, and contact links
│   ├── courses.js          ← Courses and certificates
│   ├── education.js        ← Education/academic record details
│   ├── experience.js       ← Professional experience and internships
│   ├── languages.js        ← Programming languages list (for reference)
│   ├── platforms.js        ← Learning platforms (YouTube, LearnVern, etc.)
│   ├── projects.js         ← Projects built
│   ├── roadmap.js          ← Kanban learning roadmap
│   ├── skills.js           ← Technical skills and categories
│   ├── tools.js            ← Developer tools list (for reference)
│   └── webinars.js         ← Webinars, seminars, and events
└── js/
    ├── main.js             ← Entry point (imports everything)
    ├── render.js           ← All render functions
    ├── accordion.js        ← Accordion open/close logic
    └── search.js           ← Global search filtering
```

---

## 🤔 What is LearnLog?

**LearnLog** is a responsive, and dynamic personal learning dashboard. It acts as a live, searchable ledger of my growth as a developer.
- **Core Info & Socials**: Direct links to professional networks.
- **Hands-on Experience**: Work and internship history with dynamic skill tags.
- **Technical Skills**: Categorized languages, frontend tools, backend frameworks, databases, libraries, and core concepts.
- **Courses & Certificates**: Unified list of learning tracks and earned credentials with quick verification links.
- **Events & Seminars**: Online webinars and in-person professional development workshops.
- **Project Catalog**: Real-world applications built during training, complete with source code and live demo links.
- **Active Roadmap**: A Kanban board showing what is completed, in progress, and planned for the future.

## 🎯 Why was it developed?

1. **Proof of Learning (Records Don't Lie)**: To keep a centralized repository of all certificates, webinars, and topics covered, making it easy to showcase structured learning outcomes and credentials to recruiters and collaborators.
2. **Vanilla Web Tech Mastery**: Built using clean, semantic HTML5, CSS3, and ES6 JavaScript (relying on native ES modules like `import`/`export`) without heavy frameworks or build steps, demonstrating deep fundamentals in DOM manipulation, responsive layout designs, performance, and CSS variable configurations.
3. **Global Search & Filter**: Features a global real-time search interface that dynamically filters items inside interactive accordions instantly as you type.
4. **Clean & Modern Styling**: Features a sleek dark theme with vibrant amber accents, custom gradients, CSS variables, flex/grid layouts, and micro-interactive accordion elements.

---

## ⚠️ Important: Run with a Local Server

LearnLog uses **ES Modules** (`import`/`export`) which **cannot run via `file://`** directly in the browser. You need a local server.

### Quick Start Options

**Option 1 — VS Code Live Server (easiest):**

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Right-click `index.html` → **Open with Live Server**

**Option 2 — Node.js serve:**

```bash
npx serve .
```

Then open `http://localhost:3000`

**Option 3 — Python:**

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`


_Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step._
