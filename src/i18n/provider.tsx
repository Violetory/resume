import React from 'react'
import { DEFAULT_LOCALE, isLocale } from './constants'
import {
  translate,
  type InterpolationValues,
  type TranslationKey
} from './translations'
import type { Locale } from './constants'
import { I18nContext, type I18nContextValue } from './context'

const STORAGE_KEY = 'resume.locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (isLocale(saved)) return saved

  const browserLocale = window.navigator.language
  if (browserLocale.toLowerCase().startsWith('zh')) return 'zh-CN'

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
