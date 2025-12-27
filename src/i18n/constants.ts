export const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh-CN' },
  // { label: '繁体中文', value: 'zh-TW' },
  // { label: '日本語', value: 'ja' },
  // { label: '한국어', value: 'ko' }
] as const

export type LanguageOption = (typeof LANGUAGES)[number]
export type Locale = LanguageOption['value']

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string | null | undefined): value is Locale {
  return LANGUAGES.some(language => language.value === value)
}
