import { motion } from 'framer-motion'
import { experiences } from '../../data/portfolio'
import TimelineItem from './TimelineItem'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">02.</span> Where I've Worked
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={`${exp.company}-${index}`} 
              exp={exp} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
