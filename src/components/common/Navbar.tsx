import { motion } from 'framer-motion'
import { Braces, Github, Mail, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import './Navbar.css'

const Navbar = () => {
  const { messages } = useLanguage()

  const navLinks = [
    { name: messages.nav.home, href: '#home' },
    { name: messages.nav.about, href: '#about' },
    { name: messages.nav.experience, href: '#experience' },
    { name: messages.nav.projects, href: '#projects' },
    { name: messages.nav.skills, href: '#skills' },
    { name: messages.nav.systemDesign, href: '#system-design' },
    { name: messages.nav.contact, href: '#contact', isPrimary: true }
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
          <Braces size={20} className="text-accent" />
          <span>viet.phung<span className="text-accent">()</span></span>
        </motion.a>

        <ul className="navbar-links">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={link.href} className={`nav-link font-mono ${link.isPrimary ? 'nav-link-primary' : ''}`}>
                {!link.isPrimary && <span className="nav-link-index text-accent">0{index + 1}.</span>}
                <span>{link.name}</span>
                {link.isPrimary && <ArrowUpRight size={16} />}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="navbar-socials">
          <a
            href="https://github.com/rexviet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${messages.common.visitOn} GitHub`}
            className="navbar-social-link"
          >
            <Github size={18} />
          </a>
          <a href="mailto:rexviet@gmail.com" aria-label={`${messages.common.visitOn} Email`} className="navbar-social-link">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
