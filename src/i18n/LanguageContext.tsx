import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { applyRuntimeMetadata } from '../utils/metadata'
import { messagesByLanguage } from './translations'
import { DEFAULT_LANGUAGE, isLanguage, LANGUAGE_STORAGE_KEY, Language } from './types'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  messages: (typeof messagesByLanguage)[Language]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const getInitialLanguage = (): Language => {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return isLanguage(stored) ? stored : DEFAULT_LANGUAGE
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    applyRuntimeMetadata(language)
  }, [language])

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      messages: messagesByLanguage[language]
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
