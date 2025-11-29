import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import Avatar from "../assets/img/avatar.jpg";

export const RESUME_DATA = {
  name: "Violet",
  initials: "VC",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I specialize in building high-quality web applications with a focus on user experience and performance. I have experience with modern frontend technologies like React, TypeScript, and Tailwind CSS, as well as backend development with Node.js and Python.",
  avatarUrl: Avatar,
  personalWebsiteUrl: "https://example.com",
  contact: {
    email: "violetcho@126.com",
    tel: "+86 17695526347",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Twitter,
      },
    },
  },
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Tech Corp",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Senior Frontend Engineer",
      logoUrl: "/logos/techcorp.png",
      start: "2023",
      end: "Present",
      description:
        "Leading the frontend team in building a new SaaS platform. Implemented a modern design system and improved application performance by 40%.",
    },
    {
      company: "Startup Inc",
      href: "https://example.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Full Stack Engineer",
      logoUrl: "/logos/startup.png",
      start: "2022",
      end: "2023",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with designers to implement pixel-perfect UIs.",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  projects: [
    {
      title: "Project Alpha",
      href: "https://example.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A revolutionary AI-powered task manager that helps you stay organized and productive.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/example/project-alpha",
          icon: <Github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Project+Alpha",
      video: "",
    },
    {
      title: "Project Beta",
      href: "https://example.com",
      dates: "June 2023 - July 2023",
      active: true,
      description:
        "An e-commerce platform built with modern technologies, featuring a seamless checkout experience.",
      technologies: [
        "React",
        "Redux",
        "Stripe",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Project+Beta",
      video: "",
    },
  ],
} as const;