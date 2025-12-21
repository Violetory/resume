import { useState } from 'react'
import { Button } from './components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Badge } from './components/ui/badge'
import BlurFade from './components/magicui/blur-fade'
import { ProjectCard } from './components/project-card'
import { ResumeCard } from './components/resume-card'
import { RESUME_DATA } from './data/resume'
import { DotPattern } from './components/magicui/dot-pattern'
import { ChevronDown, Globe, Mail, Phone } from 'lucide-react'
import { cn } from './lib/utils'

const BLUR_FADE_DELAY = 0.04
const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh-CN' },
  { label: '繁体中文', value: 'zh-TW' },
  { label: '日本語', value: 'ja' },
  { label: '한국어', value: 'ko' }
] as const

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<
    (typeof LANGUAGES)[number]
  >(LANGUAGES[0])

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-5xl mx-auto pb-12 px-6 font-sans">
      {/* 这是那个点点点的背景哦 */}
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
        )}
      />

      {/* 国际化 */}
      <section id="i18n">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="group gap-2 rounded-full text-sm"
              >
                <Globe className="size-4 shrink-0" />
                <span>{selectedLanguage.label}</span>
                <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                {LANGUAGES.map(language => (
                  <DropdownMenuItem
                    key={language.value}
                    onSelect={() => setSelectedLanguage(language)}
                    className={cn(
                      selectedLanguage.value === language.value &&
                        'bg-accent text-accent-foreground'
                    )}
                  >
                    {language.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </BlurFade>
      </section>

      {/* 打招呼 */}
      <section id="hero">
        {/* 打招呼的最外层容器 */}
        <div className="w-full space-y-8">
          <div className="gap-2 flex justify-between">
            {/* 简单的自我介绍区域 */}
            <div className="flex-col flex flex-1 space-y-2">
              {/* 标题-渐入效果版 */}
              <BlurFade delay={BLUR_FADE_DELAY} inView>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm {RESUME_DATA.name} 👋
                </h1>
              </BlurFade>

              {/* 关于我-渐入效果版 */}
              <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                <p className="md:text-xl">{RESUME_DATA.about}</p>
              </BlurFade>
            </div>

            {/* 头像区域-渐入效果版 */}
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={RESUME_DATA.name}
                  src={RESUME_DATA.avatarUrl}
                />
                <AvatarFallback className="text-4xl">
                  {RESUME_DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about">
        {/* 关于我区域的标题-渐入效果版 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <h2 className="text-xl font-bold mb-2">About</h2>
        </BlurFade>

        {/* 关于我区域的内容-渐入效果版 */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {RESUME_DATA.summary}
          </p>
        </BlurFade>
      </section>

      {/* 工作经历 */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3 md:gap-y-4">
          {/* 工作经历标题 */}
          <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>

          {/* 工作经历内容 */}
          {RESUME_DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              inView
            >
              {/* 工作经历卡片 */}
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* 教育背景 */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {RESUME_DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              inView
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                inView
              >
                <Badge key={skill} className="rounded-md">
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 项目经历 */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2 mx-auto">
            {RESUME_DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                inView
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13} inView>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just click on the platform below to view my
                information and contact me on the corresponding platform.
              </p>

              <div className="flex items-center justify-center gap-10 w-full pt-6">
                {/* 邮箱 */}
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="underline"
                  >
                    {RESUME_DATA.contact.email}
                  </a>
                </div>

                {/* 电话 */}
                <div className="flex items-center gap-2">
                  <Phone className="size-4" />
                  <a
                    href={`tel:${RESUME_DATA.contact.tel.replace(/[^\d+]/g, '')}`}
                    className="underline"
                  >
                    {RESUME_DATA.contact.tel}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 w-full">
                {Object.values(RESUME_DATA.contact.social).map(social => (
                  <Button
                    key={social.name}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}

export default App
