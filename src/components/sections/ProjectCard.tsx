import React from 'react'
import { motion } from 'framer-motion'
import { Folder, Github, ExternalLink, Users } from 'lucide-react'
import { Project } from '../../data/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-top">
        <div className="project-folder">
          <Folder size={40} strokeWidth={1} />
        </div>
        <div className="project-links">
          <Github size={20} />
          <ExternalLink size={20} />
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">
        {project.description[0]}
      </p>

      <ul className="project-tech-list font-mono">
        {project.techStack.slice(0, 5).map((tech, i) => (
          <li key={i} className="project-tech-item">{tech}</li>
        ))}
        {project.techStack.length > 5 && (
          <li className="project-tech-item">+{project.techStack.length - 5}</li>
        )}
      </ul>

      <div className="project-meta font-mono">
        <span className="project-company">{project.company}</span>
        <span className="project-team-size">
          <Users size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          {project.teamSize} members
        </span>
      </div>
    </motion.div>
  )
}

export default ProjectCard
