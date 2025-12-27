import React from 'react'
import { DEFAULT_LOCALE, LANGUAGES, isLocale } from './constants'
import {
  translate,
  type InterpolationValues,
  type TranslationKey
} from './translations'
import type { Locale } from './constants'
import { I18nContext, type I18nContextValue } from './context'

const STORAGE_KEY = 'resume.locale'

// 获取用户浏览器语言偏好
function resolveLocaleFromBrowserLanguage(
  languageTag: string | null | undefined
): Locale | null {
  const normalized = languageTag?.trim().replace(/_/g, '-')
  if (!normalized) return null

  const normalizedLower = normalized.toLowerCase()

  const exact = LANGUAGES.find(
    language => language.value.toLowerCase() === normalizedLower
  )
  if (exact) return exact.value

  const prefix = LANGUAGES.find(language =>
    normalizedLower.startsWith(`${language.value.toLowerCase()}-`)
  )
  if (prefix) return prefix.value

  const base = normalizedLower.split('-')[0]
  const baseExact = LANGUAGES.find(language => language.value.toLowerCase() === base)
  if (baseExact) return baseExact.value

  const baseMatch = LANGUAGES.find(
    language => language.value.toLowerCase().split('-')[0] === base
  )
  return baseMatch?.value ?? null
}

// 初始化语言环境
function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (isLocale(saved)) return saved

  const candidates = [
    ...(window.navigator.languages ?? []),
    window.navigator.language
  ].filter(Boolean)

  for (const candidate of candidates) {
    const resolved = resolveLocaleFromBrowserLanguage(candidate)
    if (resolved) return resolved
  }

  return DEFAULT_LOCALE
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>(() => getInitialLocale())

  React.useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const t = React.useCallback(
    (key: TranslationKey, values?: InterpolationValues) =>
      translate(locale, key, values),
    [locale]
  )

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, t]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
