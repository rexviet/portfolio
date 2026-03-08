import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Mail } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'System Design', href: '#system-design' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar glass">
      <div className="navbar-container">
        <motion.a 
          href="#home" 
          className="navbar-logo font-mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Terminal size={20} className="text-accent" />
          <span>viet.phung<span className="text-accent">()</span></span>
        </motion.a>

        <ul className="navbar-links">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={link.href} className="nav-link font-mono">
                <span className="text-accent">0{index + 1}.</span> {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="navbar-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          <a href="mailto:rexviet@gmail.com"><Mail size={18} /></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
