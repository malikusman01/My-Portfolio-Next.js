export interface StackItem {
  name: string;
}

export interface StackCategory {
  category: string;
  description: string;
  items: StackItem[];
}

export const stack: StackCategory[] = [
  {
    category: "Frontend",
    description: "Building component-driven interfaces and full-stack web applications.",
    items: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend",
    description: "Server-side logic, scripting, and API delivery.",
    items: [
      { name: "Python" },
      { name: "REST API development" },
      { name: "FastAPI (learning)" },
      { name: "Django (fundamentals)" },
    ],
  },
  {
    category: "Data",
    description: "Where application state actually lives.",
    items: [
      { name: "MongoDB" },
      { name: "PostgreSQL (basic)" },
      { name: "Redis (basic)" },
      { name: "Firebase" },
    ],
  },
  {
    category: "APIs & Auth",
    description: "How systems talk to each other, and how access is controlled.",
    items: [
      { name: "RESTful API design" },
      { name: "JWT" },
      { name: "OAuth2" },
      { name: "Third-party API integration" },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Shipping software and keeping it running.",
    items: [
      { name: "AWS (S3, EC2, Lambda)" },
      { name: "Docker (basic)" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Vercel" },
    ],
  },
];