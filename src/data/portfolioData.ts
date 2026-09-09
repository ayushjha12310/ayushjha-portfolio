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
    displayName: "Your Name",
    wordmark: "<yourusername.dev />",
    role: "Full-Stack Web Developer",
    eyebrow: "// FULL-STACK WEB DEVELOPER",
    headline: "I build modern, practical web applications that solve real problems.",
    subheading:
      "Specializing in TypeScript, Next.js, Node.js, and MongoDB. Focused on clean architecture, performance, and user-centric systems.",
    aboutBio:
      "I'm a Full-Stack Web Developer who enjoys turning ideas into real, usable web applications. I work primarily with JavaScript, React, Next.js, Node.js, and MongoDB, working across both frontend user interfaces and the backend systems that power them.",
    mindsetBio:
      "Having built around 8-10 projects and clones—including two live applications, DevGreet and Notiva—I focus on understanding how different software layers connect seamlessly. Technology is constantly evolving, and my principle is simple: keep learning, keep building, and adapt.",
    contacts: {
      email: "your.email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
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
      tagline: "Developer Content & Experience Sharing Platform",
      description:
        "DevGreet is a developer-centric application built to streamline developer workflows, content organization, and technical sharing.",
      problem:
        "Developers often struggle with scattered content and clunky interfaces when organizing development resources and code sharing.",
      solution:
        "Engineered a streamlined, fast web platform with structured content flows, clean interactive UI, and high-performance routing.",
      engineeringHighlights: [
        "Implemented secure state handling & API route architectures.",
        "Integrated responsive modern interfaces with optimized client rendering.",
        "Designed persistent data workflows using MongoDB.",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://your-live-project-url.com",
      githubUrl: "https://github.com/yourusername/devgreet",
      featured: true,
      imagePath: "/projects/devgreet.png",
    },
    {
      id: "notiva",
      title: "Notiva",
      category: "Personal Productivity & LifeOS",
      tagline: "Structured Personal Digital Workspace",
      description:
        "Notiva is a personal information management application designed to organize ideas, notes, and task hierarchies inside a clean space.",
      problem:
        "Unstructured note-taking tools lead to fragmented thoughts and poor retrieval speeds.",
      solution:
        "Developed a structured project-based workspace that prioritizes user focus, quick navigation, and responsive data synchronization.",
      engineeringHighlights: [
        "Structured nested data schemas for optimized document querying.",
        "Built modular UI components for swift editing and interactive states.",
        "Engineered fast client-side searching and category filtering.",
      ],
      techStack: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://your-live-project-url.com",
      githubUrl: "https://github.com/yourusername/notiva",
      featured: true,
      imagePath: "/projects/notiva.png",
    },
  ] as Project[],

  repositories: [
    {
      id: "repo-1",
      title: "E-Commerce REST API",
      description:
        "Backend architecture with JWT auth, payment route mocks, and MongoDB pipelines.",
      techStack: ["Node.js", "Express", "MongoDB", "Postman"],
      githubUrl: "https://github.com/yourusername",
    },
    {
      id: "repo-2",
      title: "Real-time Chat App Clone",
      description:
        "WebSocket implementation for instant message transport and user status updates.",
      techStack: ["React", "Node.js", "Socket.io"],
      githubUrl: "https://github.com/yourusername",
    },
    {
      id: "repo-3",
      title: "Dev Portfolio V1",
      description:
        "Clean responsive developer portfolio built with Next.js App Router.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername",
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Your University",
      period: "2023 - 2026",
      description:
        "Focus on Computer Science fundamentals, Web Technologies, Database Management, and Software Engineering.",
    },
    {
      degree: "Class 12 (Senior Secondary)",
      institution: "Your School / Board",
      period: "2022",
      description:
        "Completed secondary education with core focus on academics.",
    },
    {
      degree: "Class 10 (Secondary School)",
      institution: "Your School / Board",
      period: "2020",
      description:
        "Completed fundamental school education.",
    },
  ] as Education[],
};