import { motion } from 'framer-motion'
import { Code2, Database, Layers, Cloud, Settings } from 'lucide-react'
import { bio, localize, skillGroups } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import './About.css'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'code':
      return <Code2 size={20} />
    case 'database':
      return <Database size={20} />
    case 'architecture':
      return <Layers size={20} />
    case 'cloud':
      return <Cloud size={20} />
    case 'patterns':
      return <Settings size={20} />
    default:
      return <Code2 size={20} />
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
    <section id="about" className="about-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">01 / {messages.sections.about}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.about}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {messages.hero.objective}
          </motion.p>
        </div>

        <div className="about-content">
          <motion.article className="about-bio glass" variants={item}>
            <span className="eyebrow">{localize(bio.title, language)}</span>
            <p>{localize(bio.description, language)}</p>
          </motion.article>

          <motion.div className="about-highlights" variants={container}>
            {skillGroups.slice(0, 3).map((group) => (
              <motion.div key={group.icon} className="about-highlight glass" variants={item}>
                <div className="about-highlight-head">
                  <span className="about-highlight-icon">{getIcon(group.icon)}</span>
                  <h3>{localize(group.category, language)}</h3>
                </div>

                <ul className="about-highlight-list">
                  {group.skills.slice(0, 3).map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
