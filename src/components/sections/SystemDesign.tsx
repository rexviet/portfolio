import { motion } from 'framer-motion'
import { CheckCircle2, Workflow, ShieldCheck, Layers } from 'lucide-react'
import { systemDesigns } from '../../data/portfolio'
import './SystemDesign.css'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 }
}

const SystemDesign = () => {
  return (
    <section id="system-design" className="system-design-section container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="section-title"
          variants={item}
        >
          <span className="text-accent font-mono">05.</span> System Design Philosophy
        </motion.h2>

        <motion.div 
          className="design-cards-container"
          variants={container}
        >
          {systemDesigns.map((design, index) => (
            <motion.div 
              key={design.title}
              className="design-card glass"
              variants={item}
            >
              <div className="design-info">
                <h3 className="font-mono">{design.title}</h3>
                <p className="design-desc">{design.description}</p>
                
                <div className="design-problem">
                  <strong>Problem it solves</strong>
                  <p>{design.problem}</p>
                </div>

                <div className="design-benefits">
                  <h4>Key Benefits</h4>
                  <ul className="benefits-list font-mono">
                    {design.benefits.map((benefit, i) => (
                      <li key={i} className="benefit-item">
                        <CheckCircle2 size={14} style={{ marginRight: '8px', verticalAlign: 'middle', color: 'var(--accent-primary)' }} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="design-visual" aria-hidden="true">
                <div className="diagram-placeholder">
                  {index === 0 && <Workflow size={120} strokeWidth={1} />}
                  {index === 1 && <Layers size={120} strokeWidth={1} />}
                  {index === 2 && <ShieldCheck size={120} strokeWidth={1} />}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SystemDesign
