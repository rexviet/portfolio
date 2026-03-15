import { motion } from 'framer-motion'
import { Experience, localize } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'

interface TimelineItemProps {
  exp: Experience
  index: number
}

const TimelineItem: React.FC<TimelineItemProps> = ({ exp, index }) => {
  const { language } = useLanguage()

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="timeline-side">
        <span className="timeline-index font-mono">0{index + 1}</span>
        <div className="timeline-dot"></div>
        <span className="timeline-period font-mono">{exp.period}</span>
      </div>

      <div className="timeline-content glass">
        <div className="experience-header">
          <div>
            <div className="exp-company font-mono">{localize(exp.company, language)}</div>
            <h3 className="exp-role">{localize(exp.role, language)}</h3>
          </div>
          <div className="exp-period-chip font-mono">{exp.period}</div>
        </div>
        <ul className="exp-list">
          {exp.description.map((item, i) => (
            <li key={i} className="exp-item">
              {localize(item, language)}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default TimelineItem
