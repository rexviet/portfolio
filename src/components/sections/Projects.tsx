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

  return (
    <section id="projects" className="projects-section container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h2 className="section-title" variants={item}>
          <span className="text-accent font-mono">03.</span> {messages.sections.projects}
        </motion.h2>

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
