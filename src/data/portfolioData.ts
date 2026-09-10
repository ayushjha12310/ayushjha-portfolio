export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  engineeringHighlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  imagePath?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; iconName?: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    displayName: "Ayush Kumar Jha",
    wordmark: "<ayushjha.dev />",
    role: "Full-Stack Web Developer",
    eyebrow: "FULL-STACK WEB DEVELOPER",
    headline: "I build modern, practical web applications that solve real problems.",
    subheading:
      "Specializing in TypeScript, Next.js, Node.js, and MongoDB. Focused on clean architecture, performance, and user-centric systems.",
    aboutBio:
      "I'm a Full-Stack Web Developer who enjoys turning ideas into real, usable web applications. I work primarily with JavaScript, React, Next.js, Node.js, and MongoDB, working across both frontend user interfaces and the backend systems that power them.",
    mindsetBio:
      "Having built around 8-10 projects and clones—including two live applications, DevGreet and Notiva—I focus on understanding how different software layers connect seamlessly. Technology is constantly evolving, and my principle is simple: keep learning, keep building, and adapt.",
    contacts: {
      email: "ayushjhaai123@gmail.com",
      github: "https://github.com/ayushjha12310",
      linkedin: "https://www.linkedin.com/in/ayush-jha-b16850435",
    },
  },

  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Next.js" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
        { name: "MongoDB" },
      ],
    },
    {
      category: "Tools & Ecosystem",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "VS Code" },
        { name: "Vercel" },
      ],
    },
  ] as SkillCategory[],

  featuredProjects: [
    {
      id: "devgreet",
      title: "DevGreet",
      category: "Full-Stack Web Application",
      tagline: "Secure Developers Community for sharing code snippets and AI prompts.",
      description:
        "DevGreet is a developer-centric application built to streamline developer workflows, content organization, and technical sharing.",
      problem:
        "Developers often keep useful code snippets, AI prompts, and development resources scattered across different tools, making them harder to organize, reuse, and share.",

      solution:
        "Built a developer-focused social workspace where developers can create, organize, save, and publicly share code snippets and prompts through a structured, interactive platform.",

      engineeringHighlights: [
        "Implemented JWT-based authentication with protected API routes and secure cookie handling.",
        "Built MongoDB-backed workflows for snippets, prompts, collections, likes, comments, saves, and version history.",
        "Added API rate limiting and Cloudinary integration for safer and more scalable application workflows."
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://dev-greet.vercel.app/",
      githubUrl: "https://github.com/ayushjha12310/DevGreet",
      featured: true,
      imagePath: "/projects/DevGreet.png",
    },
    {
      id: "notiva",
      title: "Notiva",
      category: "Personal Productivity & LifeOS",
      tagline: "Structured Personal Digital Workspace",
      description:
        "A personal productivity workspace for organizing projects, notes, tasks, and structured information.",

      problem:
        "Personal information often gets scattered across notes, tasks, and separate tools, making it difficult to organize and retrieve.",

      solution:
        "Built a structured LifeOS workspace with hierarchical projects, quick notes, templates, search, archiving, and customizable themes.",

      engineeringHighlights: [
        "Designed nested project and branch structures for organizing complex information.",
        "Built reusable interfaces for notes, tasks, templates, search, and interactive project workflows.",
        "Implemented persistent user preferences, theme switching, archiving, and structured data management."
      ],
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://notiva-silk.vercel.app/",
      githubUrl: "https://github.com/ayushjha12310/Notiva",
      featured: true,
      imagePath: "/projects/notiva.png",
    },
  ] as Project[],

  repositories: [
    {
      id: "repo-1",
      title: "LinkTree Clone",
      description:
        "A modern, responsive Linktree frontend landing page built with Next.js and Tailwind CSS.",
      techStack: ["Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/ayushjha12310/Linktree-Clone",
    },
    {
      id: "repo-2",
      title: "A sleek, responsive Todo app",
      description:
        "A sleek, responsive Todo app built with React, Tailwind CSS, and LocalStorage",
      techStack: ["React", "Node.js", "javascript", "tailwind CSS"],
      githubUrl: "https://github.com/ayushjha12310/to-do-web",
    },
    {
      id: "repo-3",
      title: "URL-Shortner",
      description:
        "A fast URL shortener web app built with Next.js, Tailwind CSS, and MongoDB to generate short links easily.",
      techStack: ["Next.js", "Javascript", "Node.js", "Tailwind CSS", "MongoDB"],
      githubUrl: "https://github.com/ayushjha12310/URL-Shortner ",
    },
    {
      id: "repo-4",
      title: "Password-Manager",
      description:
        "A simple password manager built with React and Vite, using Browser LocalStorage to save credentials locally.",
      techStack: ["Vite", "javascript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/ayushjha12310/Password-Manager",
    },
    {
      id: "repo-5",
      title: "Netflix Clone",
      description:
        "My first Clone code using only HTML and CSS.",
      techStack: ["HTML", "CSS"],
      githubUrl: "https://github.com/ayushjha12310/Netflix-Clone",
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Noida International University",
      period: "2023 - 2026",
      description:
        "Focus on Computer Science fundamentals, Web Technologies, Database Management, and Software Engineering.",
    },
    {
      degree: "Class 12 (Senior Secondary)",
      institution: "M.B.S International School/CBSE",
      period: "2022",
      description:
        "Completed secondary education with core focus on academics.",
    },
    {
      degree: "Class 10 (Secondary School)",
      institution: "Shivraj Sharma Junior High School / CBSE",
      period: "2020",
      description:
        "Completed fundamental school education.",
    },
  ] as Education[],
};