import { motion } from 'framer-motion'
import { Calendar, Briefcase, Users, TrendingUp } from 'lucide-react'
import { bio, localize, stats } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import './About.css'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calendar':
      return <Calendar size={32} />
    case 'Briefcase':
      return <Briefcase size={32} />
    case 'Users':
      return <Users size={32} />
    case 'TrendingUp':
      return <TrendingUp size={32} />
    default:
      return <Briefcase size={32} />
  }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const About = () => {
  const { language, messages } = useLanguage()

  return (
    <section id="about" className="about-section container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h2 className="section-title" variants={item}>
          <span className="text-accent font-mono">01.</span> {messages.sections.about}
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-bio" variants={item}>
            <h3 className="font-mono">{localize(bio.title, language)}</h3>
            <p>{localize(bio.description, language)}</p>
          </motion.div>

          <motion.div className="about-stats" variants={container}>
            {stats.map((stat) => (
              <motion.div
                key={stat.icon}
                className="stat-card glass"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent-primary)',
                  boxShadow: '0 0 20px var(--accent-primary-hover)'
                }}
              >
                <div className="stat-icon">{getIcon(stat.icon)}</div>
                <span className="stat-value font-mono text-accent">{stat.value}</span>
                <span className="stat-label">{localize(stat.label, language)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
