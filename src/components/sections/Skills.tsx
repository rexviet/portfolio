import { motion } from 'framer-motion'
import { Code2, Database, Layers, Cloud, Settings } from 'lucide-react'
import { skillGroups } from '../../data/portfolio'
import './Skills.css'

const getIcon = (category: string) => {
  switch (category) {
    case 'Languages & Frameworks': return <Code2 size={24} />
    case 'Databases': return <Database size={24} />
    case 'Architecture & Microservices': return <Layers size={24} />
    case 'DevOps & Cloud': return <Cloud size={24} />
    case 'System Design Patterns': return <Settings size={24} />
    default: return <Code2 size={24} />
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
  return (
    <section id="skills" className="skills-section container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="section-title"
          variants={item}
        >
          <span className="text-accent font-mono">04.</span> Technical Skills
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={container}
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.category}
              className="skill-category-box glass"
              variants={item}
            >
              <h3 className="skill-category-title">
                <span className="text-accent">{getIcon(group.category)}</span>
                {group.category}
              </h3>
              <ul className="skills-list">
                {group.skills.map(skill => (
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
