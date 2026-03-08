import { motion } from 'framer-motion'
import { CheckCircle2, Workflow, ShieldCheck } from 'lucide-react'
import { systemDesigns } from '../../data/portfolio'
import './SystemDesign.css'

const SystemDesign = () => {
  return (
    <section id="system-design" className="system-design-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">05.</span> System Design Philosophy
        </h2>

        <div className="design-cards-container">
          {systemDesigns.map((design, index) => (
            <motion.div 
              key={design.title}
              className="design-card glass"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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

              <div className="design-visual">
                <div className="diagram-placeholder">
                  {index === 0 && <Workflow size={120} strokeWidth={1} />}
                  {index === 1 && <Layers size={120} strokeWidth={1} />}
                  {index === 2 && <ShieldCheck size={120} strokeWidth={1} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// Helper to avoid name collision with Layers in Lucide
import { Layers } from 'lucide-react'

export default SystemDesign
