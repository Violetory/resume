import { Github, Linkedin, Twitter, Globe, Smartphone } from 'lucide-react'
import Avatar from '../assets/img/avatar.jpg'
import TsinghuaLogo from '../assets/img/tsinghua.png'
import CredatLogo from '../assets/img/credat.png'
import TUTELogo from '../assets/img/TUTE.png'
import OLP from '@/assets/cover/olp_scene.mp4'
import type { Locale } from '@/i18n'

type ResumeEducation = {
  logoUrl: string
  school: string
  degree: string
  description: string
  start: string
  end: string
}

type ResumeWork = {
  company: string
  href?: string
  badges: readonly string[]
  location: string
  title: string
  logoUrl: string
  start: string
  end: string
  description: string
}

type ResumeProjectLink = {
  type: string
  icon: React.ReactNode
  href?: string
}

type ResumeProject = {
  title: string
  href: string
  dates: string
  active: boolean
  description: string
  technologies: readonly string[]
  links: readonly ResumeProjectLink[]
  image: string
  video: string
}

type ResumeSocial = {
  name: string
  url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export type ResumeData = {
  name: string
  initials: string
  location: string
  locationLink: string
  about: string
  summary: string
  avatarUrl: string
  personalWebsiteUrl: string
  education: readonly ResumeEducation[]
  work: readonly ResumeWork[]
  skills: readonly string[]
  projects: readonly ResumeProject[]
  contact: {
    email: string
    tel: string
    social: Record<string, ResumeSocial>
  }
}

const RESUME_DATA_EN = {
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
      description: '',
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
    tel: '17695526347',
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
} satisfies ResumeData

const RESUME_DATA_ZH_CN = {
  name: '孙明超',
  initials: 'VC',
  location: '中国·杭州',
  locationLink: 'https://www.google.com/maps/place/San+Francisco',
  about: '产品经理，UX设计师，全栈开发者，专注于打造注重细节的产品。',
  summary:
    '我擅长设计和开发高质量的 Web 应用，尤其注重用户体验与界面细节。我拥有 React、TypeScript、Tailwind CSS 等前端技术的丰富经验，同时也具备 Node.js等后端开发经验。两年的开发经历让我在产品设计中更具架构思维。',
  avatarUrl: Avatar,
  personalWebsiteUrl: 'https://violetcho.tech',
  education: [
    {
      logoUrl: TUTELogo,
      school: '天津职业技术师范大学',
      degree: '软件工程 本科',
      description: '',
      start: '2022',
      end: '2024'
    }
  ],
  work: [
    {
      company: '北京科睿金信技术有限公司',
      badges: [],
      location: '远程',
      title: '前端工程师 & UX 设计师',
      logoUrl: CredatLogo,
      start: '09-2024',
      end: '至今',
      description:
        '负责伊拉克 Majnoon 油田项目的 UI/UX 设计与前端开发。解决界面审美不足、交互效果薄弱等用户痛点，提升用户参与度。提出并推动使用 Shadcn UI 重构界面风格，使其更国际化并提升用户满意度。通过骨架屏与懒加载优化资源加载体验，增强交互细节。补充数据埋点，通过事件触发采集用户行为数据，持续优化体验。'
    },
    {
      company: '清华大学',
      href: 'https://example.com',
      badges: ['实习'],
      location: '美国加州·旧金山',
      title: '前端工程师',
      logoUrl: TsinghuaLogo,
      start: '05-2024',
      end: '08-2025',
      description:
        '在清碳睿控项目组实习期间，我使用 Vue-i18n 为清碳睿控碳排放核算系统前端实现中英文双语支持，提升产品的国际化适配与用户体验。针对新功能提出技术栈与前端框架建议，优化系统性能与可扩展性。使用 Photoshop 对网页视觉素材进行调色、裁剪与图层效果优化，提升页面美感与交互体验。负责撰写《胡杨林碳排放管理系统》功能文档，整理系统操作流程、界面规范与技术说明，保障用户与开发者的准确理解与使用，并修复页面缺陷。'
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
    {
      title: '在线学习平台',
      href: '',
      dates: '2024.09 - 2025.05',
      active: true,
      description:
        '面向伊拉克 Majnoon 油田的两阶段内部培训系统：第一阶段提供在线学习、学习记录、课程、考试、必修任务与培训管理；第二阶段新增在线课堂，实现培训全流程管理。',
      technologies: [
        'Vue3',
        'Typescript',
        'Tailwind CSS',
        'Spring Cloud',
        'MySQL'
      ],
      links: [
        {
          type: 'Web端',
          icon: <Globe className="size-3" />
        }
      ],
      image: '',
      video: OLP
    },
    {
      title: '档案管理系统 PDA端',
      href: '',
      dates: '2025.10 - 2025.11',
      active: true,
      description:
        '集成 Android UHF RFID，实现 EPC 实时读取与硬件按键控制。交付盘点、扫码查询、入库/出库、绑定以及归档/借阅/销毁等流程的合规校验。',
      technologies: ['React', 'Redux', 'Stripe', 'TailwindCSS'],
      links: [
        {
          type: '移动端',
          icon: <Smartphone className="size-3" />
        }
      ],
      image: 'https://placehold.co/600x400?text=Project+Beta',
      video: ''
    }
  ],
  contact: {
    email: 'violetcho@126.com',
    tel: '17695526347',
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
} satisfies ResumeData

export const RESUME_DATA = {
  en: RESUME_DATA_EN,
  'zh-CN': RESUME_DATA_ZH_CN
} satisfies Record<Locale, ResumeData>
