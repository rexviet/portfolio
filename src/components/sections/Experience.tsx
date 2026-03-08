import { motion } from 'framer-motion'
import { experiences } from '../../data/portfolio'
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
  return (
    <section id="experience" className="experience-section container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="section-title"
          variants={item}
        >
          <span className="text-accent font-mono">02.</span> Where I've Worked
        </motion.h2>

        <motion.div 
          className="timeline"
          variants={container}
        >
          {experiences.map((exp, index) => (
            <motion.div key={`${exp.company}-${index}`} variants={item}>
              <TimelineItem 
                exp={exp} 
                index={index} 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
