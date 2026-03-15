import { motion } from 'framer-motion'
import { CheckCircle2, Workflow, ShieldCheck, Layers } from 'lucide-react'
import { localize, systemDesigns } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
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

const designIcons = [Workflow, Layers, ShieldCheck]

const SystemDesign = () => {
  const { language, messages } = useLanguage()
  const sectionCopy =
    language === 'vi'
      ? 'Các pattern tôi ưu tiên không phải vì “ngầu”, mà vì chúng giảm rủi ro vận hành, giữ dữ liệu nhất quán và cho phép scale có kiểm soát.'
      : 'The patterns I lean on are not about sounding clever. They are about lowering operational risk, preserving consistency, and scaling with control.'

  return (
    <section id="system-design" className="system-design-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">05 / {messages.sections.systemDesign}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.systemDesign}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {sectionCopy}
          </motion.p>
        </div>

        <motion.div className="design-cards-container" variants={container}>
          {systemDesigns.map((design, index) => {
            const Icon = designIcons[index] ?? Workflow

            return (
              <motion.article key={localize(design.title, language)} className="design-card glass" variants={item}>
                <div className="design-card-top">
                  <span className="design-index font-mono">0{index + 1}</span>
                  <span className="design-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                </div>

                <h3>{localize(design.title, language)}</h3>
                <p className="design-desc">{localize(design.description, language)}</p>

                <div className="design-problem">
                  <strong>{messages.systemDesign.problemLabel}</strong>
                  <p>{localize(design.problem, language)}</p>
                </div>

                <div className="design-benefits">
                  <h4>{messages.systemDesign.benefitsLabel}</h4>
                  <ul className="benefits-list">
                    {design.benefits.map((benefit, i) => (
                      <li key={i} className="benefit-item">
                        <CheckCircle2 size={14} />
                        <span>{localize(benefit, language)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SystemDesign
