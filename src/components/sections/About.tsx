import { motion } from 'framer-motion'
import { Calendar, Briefcase, Users, TrendingUp } from 'lucide-react'
import { bio, stats } from '../../data/portfolio'
import './About.css'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calendar': return <Calendar size={32} />
    case 'Briefcase': return <Briefcase size={32} />
    case 'Users': return <Users size={32} />
    case 'TrendingUp': return <TrendingUp size={32} />
    default: return <Briefcase size={32} />
  }
}

const About = () => {
  return (
    <section id="about" className="about-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">01.</span> About Me
        </h2>

        <div className="about-content">
          <div className="about-bio">
            <h3 className="font-mono">{bio.title}</h3>
            <p>{bio.description}</p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">
                  {getIcon(stat.icon)}
                </div>
                <span className="stat-value font-mono text-accent">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
