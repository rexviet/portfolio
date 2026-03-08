export type Language = 'vi' | 'en'

export interface LocalizedText {
  vi: string
  en: string
}

export const DEFAULT_LANGUAGE: Language = 'vi'
export const LANGUAGE_STORAGE_KEY = 'portfolio.lang'

export const isLanguage = (value: string | null): value is Language => {
  return value === 'vi' || value === 'en'
}

export const getLocalizedText = (text: LocalizedText, language: Language): string => {
  return text[language]
}
