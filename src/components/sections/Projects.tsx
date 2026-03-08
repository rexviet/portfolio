import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">03.</span> Some Things I've Built
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`${project.title}-${index}`} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
