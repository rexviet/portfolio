import { motion } from 'framer-motion'
import { ArrowUpRight, FolderKanban, Users } from 'lucide-react'
import { localize, Project } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { language, messages } = useLanguage()

  return (
    <motion.div
      className={`project-card glass ${index === 0 ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-top">
        <span className="project-index font-mono">0{index + 1}</span>
        <div className="project-folder">
          <FolderKanban size={24} strokeWidth={1.8} />
        </div>
      </div>

      <div className="project-head">
        <p className="project-company font-mono">{localize(project.company, language)}</p>
        <h3 className="project-title">{localize(project.title, language)}</h3>
        <p className="project-role">{localize(project.role, language)}</p>
      </div>

      <ul className="project-description">
        {project.description.slice(0, index === 0 ? 3 : 2).map((item) => (
          <li key={localize(item, language)}>{localize(item, language)}</li>
        ))}
      </ul>

      <ul className="project-tech-list font-mono">
        {project.techStack.slice(0, index === 0 ? 6 : 4).map((tech, i) => (
          <li key={i} className="project-tech-item">
            {tech}
          </li>
        ))}
        {project.techStack.length > (index === 0 ? 6 : 4) && (
          <li className="project-tech-item">+{project.techStack.length - (index === 0 ? 6 : 4)}</li>
        )}
      </ul>

      <div className="project-meta font-mono">
        <span className="project-period">{project.period}</span>
        <span className="project-team-size">
          <Users size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          {project.teamSize} {messages.common.members}
        </span>
        <span className="project-arrow" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.div>
  )
}

export default ProjectCard
