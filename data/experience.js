// ── data/experience.js ──

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "VeyondTech",
    companyUrl: "https://www.veyondtech.com/",
    startDate: "2026-03-01",
    endDate: "Present",
    duration: (() => {
      const start = new Date("2026-03-01");
      const now = new Date();
      let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1; // inclusive count
      if (now.getDate() < start.getDate()) months -= 1;
      if (months < 0) months = 0;
      return months === 1 ? "1 month" : `${months} months`;
    })(),
    location: "On-site",
    type: "Job",
    description:
      "Gathering professional experience and learning through various projects and Building scalable applications with modern technologies.",
    highlights: [
      "Working on full-stack web applications",
      "Working on websites like Learning Management Systems (LMS) with responsive UI and Backend APIs",
      "Working on online Employment & Recruiter Portal with complex frontend logic",
      "Working on Founders Networking & Collaboration Platform",
      "Implemented RESTful APIs using Express.js and Node.js",
      "Used Redux Toolkit for efficient state management in React applications",
      "Collaborating with the team using GitHub for version control and code collaboration",
    ],
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "React.js", icon: "⚛️" },
      { name: "Redux ToolKit", icon: "🔄" },
      { name: "JavaScript", icon: "⚡" },
      { name: "MERN Stack", icon: "🏗️" },
      { name: "REST APIs", icon: "🔌" },
      { name: "MySQL", icon: "🗄️" },
      { name: "GitHub", icon: "🐙" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "CSS", icon: "🎨" },
      { name: "HTML5", icon: "🌐" },
      { name: "Back-End Web Development", icon: "⚙️" },
      { name: "Responsive Web Design", icon: "📱" },
      { name: "Full-Stack Development", icon: "🔄" },
    ],
    status: "current",
  },
  {
    role: "Full-Stack Intern",
    company: "VeyondTech",
    companyUrl: "https://www.veyondtech.com/",
    startDate: "2025-10-01",
    endDate: "2026-02-28",
    duration: "5 months",
    location: "On-site",
    type: "Internship",
    description:
      "Learnt about full-stack web development, building responsive and modern web applications using Various technologies, framworks and libraries.",
    highlights: [
      "Implemented front-end features with JavaScript (ES6+)",
      "Learnt and applied responsive design principles",
      "Worked with modern CSS frameworks such as Bootstrap and Tailwind CSS",
      "Learnt best code practices for development with teams",
    ],
    skills: [
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Responsive Web Design", icon: "📱" },
      { name: "Front-End Development", icon: "🖥️" },
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Full-Stack Development", icon: "🔄" },
      { name: "CSS", icon: "🎨" },
      { name: "HTML5", icon: "🌐" },
    ],
    status: "completed",
  },
];
