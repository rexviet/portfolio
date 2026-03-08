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

  return (
    <section id="skills" className="skills-section container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h2 className="section-title" variants={item}>
          <span className="text-accent font-mono">04.</span> {messages.sections.skills}
        </motion.h2>

        <motion.div className="skills-grid" variants={container}>
          {skillGroups.map((group) => (
            <motion.div key={group.icon} className="skill-category-box glass" variants={item}>
              <h3 className="skill-category-title">
                <span className="text-accent">{getIcon(group.icon)}</span>
                {localize(group.category, language)}
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
