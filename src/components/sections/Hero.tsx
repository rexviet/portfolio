import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code2, Server, Cpu, ChevronRight } from 'lucide-react'
import './Hero.css'

const titles = [
  'Backend Leader',
  'DevOps Engineer',
  'System Architect',
  'Microservices Expert'
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-terminal-pre font-mono text-accent">
            <span className="cursor">&gt;</span> hello_world.exe
          </div>
          
          <h1 className="hero-name">
            Phùng Quốc <span className="text-accent">Việt</span>
          </h1>

          <div className="hero-title-container">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="hero-title font-mono"
              >
                {titles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="hero-objective">
            To contribute my Back-end, system, and DevOps skills and experience in a solid company, 
            and become a good Solution Architect in future.
          </p>

          <div className="hero-stats">
            <StatItem icon={<Terminal size={20} />} label="CQRS" />
            <StatItem icon={<Code2 size={20} />} label="NestJS" />
            <StatItem icon={<Server size={20} />} label="Microservices" />
            <StatItem icon={<Cpu size={20} />} label="DevOps / AWS" />
          </div>

          <div className="hero-cta">
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <Mail size={18} style={{ marginLeft: '8px' }} />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects <ChevronRight size={18} style={{ marginLeft: '4px' }} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="visual-blob"></div>
        <div className="visual-grid"></div>
      </motion.div>
    </section>
  )
}

const StatItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="hero-stat-item glass">
    <div className="stat-icon">{icon}</div>
    <span className="font-mono stat-label">{label}</span>
  </div>
)

const Mail = ({ size, style }: { size: number, style?: React.CSSProperties }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={style}
  >
    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
  </svg>
)

export default Hero
