export interface ExperienceEntry {
  role: string;
  org: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Assistant Manager — Information Technology",
    org: "RMRSCO Pvt Ltd",
    location: "Islamabad, Pakistan",
    period: "May 2022 — Present",
    highlights: [
      "Oversee IT infrastructure, network systems, and business applications ensuring continuous operational uptime",
      "Lead cross-functional troubleshooting and vendor management",
      "Mentor junior staff on technical processes; lead IT project planning, implementation, and stakeholder coordination end-to-end",
    ],
  },
  {
    role: "Chief Lead Officer",
    org: "National Youth Leadership Program",
    location: "Remote",
    period: "Aug 2025 — Feb 2026",
    highlights: [
      "Mentored and led a distributed remote team across planning, performance reporting, and stakeholder communication in an Agile-style environment",
    ],
  },
  {
    role: "E-commerce Developer (Shopify)",
    org: "Self-Employed",
    location: "Remote, Part-time",
    period: "Feb 2023 — Feb 2024",
    highlights: [
      "Built Shopify storefronts with custom backend logic, API integrations, SEO, and analytics for conversion optimisation",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Self-Employed (Freelance)",
    location: "Remote",
    period: "Feb 2023 — Sep 2023",
    highlights: [
      "Designed and built scalable web applications independently — owned architecture, RESTful API development, JWT authentication, MongoDB schema design, and production deployment",
      "Developed reusable React.js front-end components; integrated third-party APIs",
      "Managed full project lifecycle from requirement gathering through client delivery",
    ],
  },
  {
    role: "Web Developer — Intern",
    org: "Codematics Inc.",
    location: "Abbottabad, Pakistan",
    period: "Jan 2022 — Mar 2022",
    highlights: [
      "Contributed to React.js and Vue.js frontend development",
      "Participated in code reviews, improved UI consistency and component accessibility",
    ],
  },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  institution: "COMSATS University Islamabad, Abbottabad Campus",
  period: "2021 — 2025",
};
