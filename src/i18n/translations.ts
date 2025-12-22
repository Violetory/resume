import type { Locale } from './constants'

export type InterpolationValues = Record<string, string | number>

const EN_TRANSLATIONS = {
  'hero.greeting': "Hi, I'm {{name}} 👋",
  'section.about': 'About',
  'section.work': 'Work Experience',
  'section.education': 'Education',
  'section.skills': 'Skills',
  'projects.badge': 'My Projects',
  'projects.title': 'Check out my latest work',
  'projects.description':
    "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
  'contact.badge': 'Contact',
  'contact.title': 'Get in Touch',
  'contact.description':
    'Want to chat? Just click on the platform below to view my information and contact me on the corresponding platform.'
}

export type TranslationKey = keyof typeof EN_TRANSLATIONS

const ZH_CN_TRANSLATIONS: Record<TranslationKey, string> = {
  'hero.greeting': '你好，我是 {{name}} 👋',
  'section.about': '关于我',
  'section.work': '工作经历',
  'section.education': '教育背景',
  'section.skills': '技能',
  'projects.badge': '项目经历',
  'projects.title': '看看我最近的作品',
  'projects.description':
    '我做过从简单网站到复杂 Web 应用的各类项目，这里挑选了一些我最喜欢的。',
  'contact.badge': '联系',
  'contact.title': '联系我',
  'contact.description': '想聊聊吗？点击下方平台即可查看我的信息，并通过对应渠道联系我。'
}

export const TRANSLATIONS = {
  en: EN_TRANSLATIONS,
  'zh-CN': ZH_CN_TRANSLATIONS
} as const satisfies Record<Locale, Record<TranslationKey, string>>

export function translate(
  locale: Locale,
  key: TranslationKey,
  values?: InterpolationValues
): string {
  const template = TRANSLATIONS[locale]?.[key] ?? TRANSLATIONS.en[key] ?? key
  return template.replace(/{{\s*([a-zA-Z0-9_]+)\s*}}/g, (_, token) => {
    const value = values?.[token]
    return value === undefined ? '' : String(value)
  })
}
