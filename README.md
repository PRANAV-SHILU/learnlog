# LearnLog 📚

> My personal learning dashboard — tracking every resource, tool, and skill.

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

---

## 📁 File Structure

```
learnlog/
├── index.html              ← Main page
├── css/
│   └── style.css           ← All styles (dark theme, amber accent)
├── data/
│   ├── languages.js        ← Programming languages list
│   ├── courses.js          ← Courses & certificates
│   ├── tools.js            ← Dev tools by category
│   ├── platforms.js        ← YouTube, LearnVern, LinkedIn Learning, etc.
│   ├── projects.js         ← Projects built
│   └── roadmap.js          ← Kanban + timeline roadmap
└── js/
    ├── main.js             ← Entry point (imports everything)
    ├── render.js           ← All render functions
    ├── accordion.js        ← Accordion open/close logic
    └── search.js           ← Global search filtering
```

---

## ✏️ How to Update Data

Each data file exports a plain JS array/object. Just edit the values:

- **Add a language** → `data/languages.js`
- **Add a course** → `data/courses.js` (add sources array for multi-platform)
- **Add a tool** → `data/tools.js` (pick or add a category)
- **Add a platform** → `data/platforms.js`
- **Add a project** → `data/projects.js`
- **Update roadmap** → `data/roadmap.js` (change `status` to move between columns)

---

## 🔗 Source Types (for courses)
| Type key | Icon shown |
|---|---|
| `youtube` | YouTube icon (red) |
| `linkedin` | LinkedIn icon (blue) |
| `learnvern` | Graduation cap (purple) |
| `udemy` | Play circle (purple) |
| `web` | Globe (teal) |
| `github` | GitHub icon |

---

*Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.*
