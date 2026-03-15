import { motion } from 'framer-motion'
import { experiences, localize } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import TimelineItem from './TimelineItem'
import './Experience.css'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

const Experience = () => {
  const { language, messages } = useLanguage()
  const sectionCopy =
    language === 'vi'
      ? 'Từ social app, health-tech đến blockchain, trọng tâm xuyên suốt là delivery ổn định, khả năng mở rộng và tiêu chuẩn vận hành rõ ràng.'
      : 'From social products and health-tech to blockchain platforms, the throughline has been dependable delivery, scale readiness, and disciplined operations.'

  return (
    <section id="experience" className="experience-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">02 / {messages.sections.experience}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.experience}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {sectionCopy}
          </motion.p>
        </div>

        <motion.div className="timeline" variants={container}>
          {experiences.map((exp, index) => (
            <motion.div key={`${localize(exp.company, language)}-${index}`} variants={item}>
              <TimelineItem exp={exp} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
