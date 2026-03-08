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

const Skills = () => {
  return (
    <section id="skills" className="skills-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">04.</span> Technical Skills
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={group.category}
              className="skill-category-box glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
