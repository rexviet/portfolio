import { motion } from 'framer-motion'
import { Code2, Database, Layers, Cloud, Settings } from 'lucide-react'
import { localize, skillGroups, SkillGroup } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import './Skills.css'

const getIcon = (icon: SkillGroup['icon']) => {
  switch (icon) {
    case 'code':
      return <Code2 size={24} />
    case 'database':
      return <Database size={24} />
    case 'architecture':
      return <Layers size={24} />
    case 'cloud':
      return <Cloud size={24} />
    case 'patterns':
      return <Settings size={24} />
    default:
      return <Code2 size={24} />
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
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0 }
}

const Skills = () => {
  const { language, messages } = useLanguage()
  const sectionCopy =
    language === 'vi'
      ? 'Tập trung vào backend platform, data consistency, cloud delivery và các pattern giúp hệ thống vận hành bình tĩnh khi tăng trưởng.'
      : 'Centered on backend platforms, data consistency, cloud delivery, and the patterns that keep systems calm while they scale.'

  return (
    <section id="skills" className="skills-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">04 / {messages.sections.skills}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.skills}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {sectionCopy}
          </motion.p>
        </div>

        <motion.div className="skills-grid" variants={container}>
          {skillGroups.map((group) => (
            <motion.div key={group.icon} className="skill-category-box glass" variants={item}>
              <h3 className="skill-category-title">
                <span className="skill-category-icon text-accent">{getIcon(group.icon)}</span>
                <span>{localize(group.category, language)}</span>
                <span className="skill-count font-mono">{group.skills.length}</span>
              </h3>
              <ul className="skills-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
