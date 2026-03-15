import { useEffect, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, Cloud, Mail, Server, Workflow, Cpu } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { Language } from '../../i18n/types'
import { stats } from '../../data/portfolio'
import './Hero.css'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
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
      <motion.div className="hero-grid" variants={container} initial="hidden" animate="show">
        <motion.article className="hero-card hero-card-main glass" variants={item}>
          <div className="hero-card-top">
            <div className="hero-status">
              <span className="hero-status-dot"></span>
              <span>{messages.hero.status}</span>
            </div>

            <div className="hero-lang-switcher" aria-label={messages.hero.languageLabel}>
              <span className="hero-lang-label font-mono">{messages.hero.languageLabel}</span>
              <div className="hero-lang-buttons">
                <LanguageButton value="vi" current={language} onChange={setLanguage} />
                <LanguageButton value="en" current={language} onChange={setLanguage} />
              </div>
            </div>
          </div>

          <div className="hero-command font-mono">
            <span className="text-accent">$</span> {messages.hero.command}
          </div>

          <div className="hero-heading">
            <h1 className="hero-name">
              Phùng Quốc <span className="text-accent">Việt</span>
            </h1>
            <AnimatePresence mode="wait">
              <motion.p
                key={messages.hero.titles[index]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="hero-role font-mono"
              >
                {messages.hero.titles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="hero-manifesto">{messages.hero.manifesto}</p>
          <p className="hero-objective">{messages.hero.objective}</p>

          <div className="hero-chip-list">
            {messages.hero.statTags.map((tag) => (
              <span key={tag} className="hero-chip font-mono">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <motion.a href="#contact" className="btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {messages.hero.contactCta}
              <Mail size={18} />
            </motion.a>
            <motion.a href="#projects" className="btn btn-outline" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {messages.hero.projectsCta}
              <ArrowDownRight size={18} />
            </motion.a>
          </div>

          <div className="hero-submetrics">
            <MetricStat label={language === 'vi' ? 'Kinh nghiệm' : 'Experience'} value={stats[0].value} />
            <MetricStat label={language === 'vi' ? 'Dự án' : 'Projects'} value={stats[1].value} />
            <MetricStat label={language === 'vi' ? 'Người dùng' : 'Users'} value={stats[2].value} />
          </div>
        </motion.article>

        <motion.article className="hero-card hero-card-metric glass" variants={item}>
          <span className="hero-card-label font-mono">{messages.hero.panelKicker}</span>
          <div className="hero-big-metric">
            <span className="hero-big-value">{stats[3].value}</span>
            <span className="hero-big-text">{language === 'vi' ? 'TVL Managed' : 'TVL Managed'}</span>
          </div>
          <p className="hero-card-copy">{messages.hero.panelNote}</p>
        </motion.article>

        <motion.article className="hero-card hero-card-stack glass" variants={item}>
          <span className="hero-card-label font-mono">{messages.hero.techStackLabel}</span>
          <div className="stack-grid">
            <StackItem icon={<Server size={18} />} label="NodeJS" detail="NestJS / APIs" />
            <StackItem icon={<Cpu size={18} />} label="Rust*" detail={language === 'vi' ? 'Đang học' : 'Learning' } />
            <StackItem icon={<Cloud size={18} />} label="AWS" detail="EC2 / EKS / S3" />
            <StackItem icon={<Workflow size={18} />} label="K8s" detail="CI/CD / Scaling" />
          </div>
        </motion.article>

        <motion.article className="hero-card hero-card-optimization glass" variants={item}>
          <span className="hero-card-label font-mono">{messages.hero.optimizationLabel}</span>
          <div className="optimization-value">25%</div>
          <p className="optimization-copy">
            {language === 'vi'
              ? 'Tiết kiệm chi phí hạ tầng nhờ rà soát cloud, dọn CI/CD và tối ưu kích thước platform.'
              : 'Infrastructure cost saved through cloud review, CI/CD cleanup, and platform right-sizing.'}
          </p>
        </motion.article>

        <motion.article className="hero-card hero-card-terminal glass" variants={item}>
          <div className="terminal-header">
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
            <span className="terminal-title font-mono">{messages.hero.terminalTitle}</span>
          </div>

          <div className="terminal-body font-mono">
            {messages.hero.terminalLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.article>
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

const MetricStat = ({ label, value }: { label: string; value: string }) => (
  <div className="metric-stat">
    <span className="metric-stat-value">{value}</span>
    <span className="metric-stat-label font-mono">{label}</span>
  </div>
)

const StackItem = ({ icon, label, detail }: { icon: ReactNode; label: string; detail: string }) => (
  <div className="stack-item">
    <span className="stack-item-icon">{icon}</span>
    <div>
      <p className="stack-item-label font-mono">{label}</p>
      <p className="stack-item-detail">{detail}</p>
    </div>
  </div>
)

export default Hero
