import { Language } from '../i18n/types'
import { messagesByLanguage } from '../i18n/translations'

const setMeta = (selector: string, value: string) => {
  const meta = document.querySelector<HTMLMetaElement>(selector)
  if (meta) {
    meta.setAttribute('content', value)
  }
}

export const applyRuntimeMetadata = (language: Language) => {
  const metadata = messagesByLanguage[language].metadata

  document.documentElement.lang = language
  document.title = metadata.title

  setMeta('meta[name="description"]', metadata.description)
  setMeta('meta[property="og:title"]', metadata.ogTitle)
  setMeta('meta[property="og:description"]', metadata.ogDescription)
  setMeta('meta[property="twitter:title"]', metadata.twitterTitle)
  setMeta('meta[property="twitter:description"]', metadata.twitterDescription)
}
