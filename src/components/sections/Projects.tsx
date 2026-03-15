import { motion } from 'framer-motion'
import { projects, localize } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import ProjectCard from './ProjectCard'
import './Projects.css'

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Projects = () => {
  const { language, messages } = useLanguage()
  const sectionCopy =
    language === 'vi'
      ? 'Những dự án dưới đây phản ánh điểm mạnh về system design, delivery ownership và khả năng vận hành sản phẩm dưới tải thực tế.'
      : 'These projects reflect a consistent strength in system design, delivery ownership, and operating products under real production pressure.'

  return (
    <section id="projects" className="projects-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">03 / {messages.sections.projects}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.projects}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {sectionCopy}
          </motion.p>
        </div>

        <motion.div className="projects-grid" variants={container}>
          {projects.map((project, index) => (
            <motion.div key={`${localize(project.title, language)}-${index}`} variants={item}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
