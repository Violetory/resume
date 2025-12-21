import { Github, Linkedin, Twitter, Globe, Smartphone } from 'lucide-react'
import Avatar from '../assets/img/avatar.jpg'
import TsinghuaLogo from '../assets/img/tsinghua.png'
import CredatLogo from '../assets/img/credat.png'
import TUTELogo from '../assets/img/TUTE.png'
import OLP from '@/assets/cover/olp_scene.mp4'

export const RESUME_DATA = {
  name: 'Violet',
  initials: 'VC',
  location: 'Hangzhou, China',
  locationLink: 'https://www.google.com/maps/place/San+Francisco',
  about:
    'Product manager, full-stack developer, focused on creating products that pay attention to detail.',
  summary:
    'I specialize in designing and building high-quality web applications, with a particular focus on user experience and user interfaces. I have extensive experience with front-end technologies such as React, TypeScript, and Tailwind CSS, as well as back-end development experience with Node.js and Java. 2 years of development experience have enabled me to approach product development with a strong architectural mindset.',
  avatarUrl: Avatar,
  personalWebsiteUrl: 'https://violetcho.tech',
  education: [
    {
      logoUrl: TUTELogo,
      school: 'Tianjin University of Technology and Education',
      degree: "Bachelor's Degree in Software Engineering",
      description:'',
      start: '2022',
      end: '2024'
    }
  ],
  work: [
    // 最近一份工作
    {
      company: 'CRE DATA',
      badges: [],
      location: 'Remote',
      title: 'Front-end Engineer & UX Designer',
      logoUrl: CredatLogo,
      start: '09-2024',
      end: 'Present',
      description:
        'Responsible for UI/UX design and front-end development for the Majnoon oil field project in Iraq. Resolved user pain points such as poor UI design aesthetics and insufficient interactive effects that lacked user engagement. Proposed using Shadcn UI to refactor the user interface, enhancing its international style and improving user satisfaction. Optimized interactive effects and resolved resource loading issues using skeleton screens and lazy loading. Added data tracking points to capture user data through event triggers, improving user experience.'
    },

    // 上一份工作
    {
      company: 'Tsinghua University',
      href: 'https://example.com',
      badges: ['Intern'],
      location: 'San Francisco, CA',
      title: 'Front-end Engineer',
      logoUrl: TsinghuaLogo,
      start: '05-2024',
      end: '08-2025',
      description:
        'During my internship at the Tsinghua-Carbon project team, I utilized the Vue-i18n library to implement multilingual (Chinese and English) support for the front-end interface of the Tsinghua-Carbon carbon emission accounting system, enhancing the application\'s international acceptance and user experience. I provided technical stack suggestions for new features, including front-end frameworks, to optimize system performance and scalability. I used Photoshop to fine-tune and optimize web page visual materials, including image color balance, cropping, and layer effects, improving page aesthetics and user interaction. I was responsible for writing the functional documentation for the "Huyanglin Carbon Emission Management System," detailing the system operation process, user interface guidelines, and technical specifications to ensure users and developers could accurately understand and use the system, as well as fixing page bugs.'
    }
  ],
  skills: [
    'React',
    'Next.js',
    'Vue3',
    'Nuxt.js',
    'Uni-App',
    'Tailwind CSS',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Node.js',
    'Express',
    'MySQL',
    'Docker',
    'Nginx'
  ],
  projects: [
    // 在线学习平台
    {
      title: 'Online Learning Platform',
      href: '',
      dates: 'Sep 2024 - May 2025',
      active: true,
      description:
        'Two-phase internal training system for Iraq’s Majnoon oil field: Phase 1 delivers online learning, records, courses, exams, mandatory tasks, and training. Phase 2 adds online classroom and full training management end-to-end.',
      technologies: [
        'Vue3',
        'Typescript',
        'Tailwind CSS',
        'Spring Cloud',
        'MySQL'
      ],
      links: [
        {
          type: 'Website',
          icon: <Globe className="size-3" />
        },
      ],
      image: '',
      video: OLP
    },

    // 档案管理系统 PDA端
    {
      title: 'General Record Management for PDA',
      href: '',
      dates: 'Oct 2025 - Nov 2025',
      active: true,
      description:
        'Integrated Android UHF RFID for real-time EPC reading and hardware-key control. Delivered inventory counting, scan-to-search, inbound/outbound, binding, and compliance checks across archiving, retrieval, and destruction.',
      technologies: ['React', 'Redux', 'Stripe', 'TailwindCSS'],
      links: [
        {
          type: 'Mobile',
          icon: <Smartphone className="size-3" />
        },
      ],
      image: 'https://placehold.co/600x400?text=Project+Beta',
      video: ''
    },

    // 个人博客
    // {
    //   title: 'General Record Management for PDA',
    //   href: '',
    //   dates: 'June 2023 - July 2023',
    //   active: true,
    //   description:
    //     'An e-commerce platform built with modern technologies, featuring a seamless checkout experience.',
    //   technologies: ['React', 'Redux', 'Stripe', 'TailwindCSS'],
    //   links: [
    //     {
    //       type: 'Website',
    //       icon: <Globe className="size-3" />
    //     },
    //     {
    //       type: 'Source',
    //       href: 'https://github.com/example/project-alpha',
    //       icon: <Github className="size-3" />
    //     }
    //   ],
    //   image: 'https://placehold.co/600x400?text=Project+Beta',
    //   video: ''
    // }
  ],
  contact: {
    email: 'violetcho@126.com',
    tel: '+86 17695526347',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Violetory',
        icon: Github
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: Linkedin
      },
      X: {
        name: 'X',
        url: 'https://x.com',
        icon: Twitter
      }
    }
  }
} as const
