import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code2, Server, Cpu, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Language } from '../../i18n/types'
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
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="hero-lang-switcher" aria-label={messages.hero.languageLabel}>
            <LanguageButton value="vi" current={language} onChange={setLanguage} />
            <LanguageButton value="en" current={language} onChange={setLanguage} />
          </motion.div>

          <motion.div variants={item} className="hero-terminal-pre font-mono text-accent">
            <span className="cursor">&gt;</span> {messages.hero.command}
          </motion.div>

          <motion.h1 variants={item} className="hero-name">
            Phùng Quốc <span className="text-accent">Việt</span>
          </motion.h1>

          <motion.div variants={item} className="hero-title-container">
            <AnimatePresence mode="wait">
              <motion.h2
                key={messages.hero.titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
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
            <StatItem icon={<Terminal size={20} />} label={messages.hero.statTags[0]} />
            <StatItem icon={<Code2 size={20} />} label={messages.hero.statTags[1]} />
            <StatItem icon={<Server size={20} />} label={messages.hero.statTags[2]} />
            <StatItem icon={<Cpu size={20} />} label={messages.hero.statTags[3]} />
          </motion.div>

          <motion.div variants={item} className="hero-cta">
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={messages.hero.contactCta}
            >
              {messages.hero.contactCta} <Mail size={18} style={{ marginLeft: '8px' }} />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={messages.hero.projectsCta}
            >
              {messages.hero.projectsCta} <ChevronRight size={18} style={{ marginLeft: '4px' }} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="visual-blob"></div>
        <div className="visual-grid"></div>
      </motion.div>
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

const StatItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="hero-stat-item glass">
    <div className="stat-icon">{icon}</div>
    <span className="font-mono stat-label">{label}</span>
  </div>
)

const Mail = ({ size, style }: { size: number; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
)

export default Hero
