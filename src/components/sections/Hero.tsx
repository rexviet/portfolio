import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Language } from '../../i18n/types'
import { bio, localize, stats } from '../../data/portfolio'
import './Hero.css'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Hero = () => {
  const { language, setLanguage, messages } = useLanguage()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [language])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.hero.titles.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [messages.hero.titles])

  return (
    <section id="home" className="hero-section section-shell container">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orbit hero-orbit-large"></div>
        <div className="hero-orbit hero-orbit-small"></div>
        <div className="hero-gridlines"></div>
      </div>

      <div className="hero-content">
        <motion.div variants={container} initial="hidden" animate="show" className="hero-copy">
          <motion.div variants={item} className="hero-topline">
            <div className="hero-status">
              <Sparkles size={16} />
              <span>{messages.hero.status}</span>
            </div>

            <div className="hero-lang-switcher" aria-label={messages.hero.languageLabel}>
              <span className="hero-lang-label font-mono">{messages.hero.languageLabel}</span>
              <div className="hero-lang-buttons">
                <LanguageButton value="vi" current={language} onChange={setLanguage} />
                <LanguageButton value="en" current={language} onChange={setLanguage} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="hero-terminal-pre font-mono text-accent">
            <span className="cursor">&gt;</span> {messages.hero.command}
          </motion.div>

          <motion.div variants={item} className="hero-heading">
            <span className="hero-serial font-mono">Portfolio / 2026</span>
            <h1 className="hero-name">
              Phùng Quốc <span className="text-accent">Việt</span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="hero-title-container">
            <AnimatePresence mode="wait">
              <motion.h2
                key={messages.hero.titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="hero-title font-mono"
              >
                {messages.hero.titles[index]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={item} className="hero-objective">
            {messages.hero.objective}
          </motion.p>

          <motion.div variants={item} className="hero-stats">
            {messages.hero.statTags.map((tag) => (
              <span key={tag} className="hero-stat-item font-mono">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="hero-cta">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={messages.hero.contactCta}
            >
              {messages.hero.contactCta} <Mail size={18} />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={messages.hero.projectsCta}
            >
              {messages.hero.projectsCta} <ArrowDownRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.aside
        className="hero-panel glass"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-panel-head">
          <div>
            <span className="eyebrow">{messages.hero.panelKicker}</span>
            <h3>{localize(bio.title, language)}</h3>
          </div>
        </div>

        <div className="hero-metric-grid">
          {stats.map((stat) => (
            <div key={stat.icon} className="hero-metric">
              <span className="hero-metric-value">{stat.value}</span>
              <span className="hero-metric-label">{localize(stat.label, language)}</span>
            </div>
          ))}
        </div>

        <p className="hero-panel-note">{messages.hero.panelNote}</p>
      </motion.aside>
    </section>
  )
}

const LanguageButton = ({
  value,
  current,
  onChange
}: {
  value: Language
  current: Language
  onChange: (language: Language) => void
}) => (
  <button
    type="button"
    className={`language-button font-mono ${current === value ? 'active' : ''}`}
    onClick={() => onChange(value)}
    aria-pressed={current === value}
  >
    {value.toUpperCase()}
  </button>
)

export default Hero
