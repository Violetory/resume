import React from 'react'
import type { Locale } from './constants'
import type { InterpolationValues, TranslationKey } from './translations'

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, values?: InterpolationValues) => string
}

export const I18nContext = React.createContext<I18nContextValue | null>(null)

