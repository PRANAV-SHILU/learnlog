// ── data/courses.js ──
// type: "course" | "certificate"
// Courses and Certificates are rendered in SEPARATE accordion sections.
// Each item can have multiple `sources` — icons shown with links.

export const learningItems = [
  // ── COURSES ──
  {
    type: "course",
    name: "The Complete Web Development Bootcamp",
    description:
      "Full-stack fundamentals — HTML, CSS, JS, Node, databases, and deployment.",
    sources: [
      { type: "udemy", label: "Udemy Course", link: "https://www.udemy.com" },
      {
        type: "youtube",
        label: "Traversy Media",
        link: "https://www.youtube.com/@TraversyMedia",
      },
      {
        type: "web",
        label: "MDN Web Docs",
        link: "https://developer.mozilla.org",
      },
    ],
  },
  {
    type: "course",
    name: "JavaScript Algorithms & Data Structures",
    description:
      "Arrays, linked lists, trees, sorting algorithms, recursion, Big-O notation.",
    sources: [
      {
        type: "web",
        label: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org",
      },
      {
        type: "youtube",
        label: "freeCodeCamp YT",
        link: "https://www.youtube.com/@freecodecamp",
      },
      {
        type: "learnvern",
        label: "LearnVern DSA",
        link: "https://www.learnvern.com",
      },
    ],
  },
  {
    type: "course",
    name: "Python for Beginners",
    description:
      "Core Python — syntax, functions, OOP, file I/O, and small automation scripts.",
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
      {
        type: "web",
        label: "Official Python Docs",
        link: "https://docs.python.org/3/",
      },
    ],
  },
  {
    type: "course",
    name: "Java OOP Fundamentals",
    description:
      "Classes, inheritance, polymorphism, interfaces, collections, and design patterns.",
    sources: [
      {
        type: "learnvern",
        label: "LearnVern Java",
        link: "https://www.learnvern.com",
      },
      {
        type: "youtube",
        label: "Telusko",
        link: "https://www.youtube.com/@Telusko",
      },
      {
        type: "web",
        label: "Oracle Java Docs",
        link: "https://docs.oracle.com/en/java/",
      },
    ],
  },
  {
    type: "course",
    name: "Git & GitHub Complete Guide",
    description:
      "Version control, branching strategies, pull requests, merge conflicts, GitHub Actions basics.",
    sources: [
      {
        type: "linkedin",
        label: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning",
      },
      {
        type: "youtube",
        label: "Kevin Powell",
        link: "https://www.youtube.com/@KevinPowell",
      },
      {
        type: "web",
        label: "Git Official Docs",
        link: "https://git-scm.com/doc",
      },
    ],
  },
  {
    type: "course",
    name: "Database Management & SQL",
    description:
      "Relational databases, normalization, complex joins, stored procedures, intro to NoSQL.",
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
    type: "course",
    name: "API Testing with Postman",
    description:
      "REST APIs, HTTP methods, collections, environment variables, and basic automation.",
    sources: [
      {
        type: "youtube",
        label: "Postman YT Channel",
        link: "https://www.youtube.com/@postman",
      },
      {
        type: "linkedin",
        label: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning",
      },
      {
        type: "web",
        label: "Postman Learning Center",
        link: "https://learning.postman.com",
      },
    ],
  },

  // ── CERTIFICATES ──
  {
    type: "certificate",
    name: "Responsive Web Design Certificate",
    description:
      "Awarded by freeCodeCamp upon completing the Responsive Web Design curriculum.",
    issuer: "freeCodeCamp",
    issuerIcon: "🔥",
    sources: [
      {
        type: "web",
        label: "View on freeCodeCamp",
        link: "https://www.freecodecamp.org",
      },
    ],
  },
  {
    type: "certificate",
    name: "JavaScript Algorithms & DS Certificate",
    description:
      "Covers ES6, regular expressions, debugging, data structures, OOP, and functional programming.",
    issuer: "freeCodeCamp",
    issuerIcon: "🔥",
    sources: [
      {
        type: "web",
        label: "View on freeCodeCamp",
        link: "https://www.freecodecamp.org",
      },
    ],
  },
  {
    type: "certificate",
    name: "Introduction to SQL",
    description:
      "Certificate course covering SQL fundamentals, database design, and query optimization.",
    issuer: "LearnVern",
    issuerIcon: "📚",
    sources: [
      {
        type: "learnvern",
        label: "LearnVern Certificate",
        link: "https://www.learnvern.com",
      },
    ],
  },
  {
    type: "certificate",
    name: "Git Essential Training",
    description:
      "Professional certificate covering version control fundamentals, branching, and collaboration.",
    issuer: "LinkedIn Learning",
    issuerIcon: "💼",
    sources: [
      {
        type: "linkedin",
        label: "LinkedIn Learning",
        link: "https://www.linkedin.com/learning",
      },
    ],
  },
];
