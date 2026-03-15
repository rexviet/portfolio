import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Send } from 'lucide-react'
import { localize, socials } from '../../data/portfolio'
import { useLanguage } from '../../i18n/LanguageContext'
import './Contact.css'

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

const Contact = () => {
  const { language, messages } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `${messages.contact.heading} - ${formData.name}`
    const body = [
      `${messages.contact.fullNameLabel}: ${formData.name}`,
      `${messages.contact.emailLabel}: ${formData.email}`,
      '',
      formData.message
    ].join('\n')

    window.location.href = `mailto:rexviet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormData({ name: '', email: '', message: '' })
  }

  const getSocialIcon = (platform: 'github' | 'email') => {
    switch (platform) {
      case 'github':
        return <Github size={24} />
      case 'email':
        return <Mail size={24} />
      default:
        return <Github size={24} />
    }
  }

  return (
    <section id="contact" className="contact-section section-shell container">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="section-head">
          <motion.div variants={item}>
            <p className="section-kicker">06 / {messages.sections.contact}</p>
            <motion.h2 className="section-title" variants={item}>
              {messages.sections.contact}
            </motion.h2>
          </motion.div>
          <motion.p className="section-copy" variants={item}>
            {messages.contact.intro}
          </motion.p>
        </div>

        <motion.div className="contact-container" variants={container}>
          <motion.div className="contact-info-side glass" variants={item}>
            <span className="eyebrow">{messages.sections.contact}</span>
            <h3>{messages.contact.heading}</h3>
            <p className="info-text">{messages.contact.intro}</p>

            <div className="contact-methods">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="contact-method"
                  aria-label={`${messages.common.visitOn} ${localize(social.label, language)}`}
                >
                  <span className="contact-method-icon">{getSocialIcon(social.platform)}</span>
                  <span className="contact-method-content">
                    <span className="contact-method-label">{localize(social.label, language)}</span>
                    <span className="contact-method-value font-mono">
                      {social.url.startsWith('mailto:') ? social.url.replace('mailto:', '') : social.url.replace('https://', '')}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form className="contact-form glass" onSubmit={handleSubmit} variants={item}>
            <div className="form-group">
              <label htmlFor="name">{messages.contact.fullNameLabel}</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={messages.contact.fullNamePlaceholder}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{messages.contact.emailLabel}</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={messages.contact.emailPlaceholder}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{messages.contact.messageLabel}</label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={messages.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn font-mono" aria-label={messages.contact.submitAria}>
              <Send size={18} />
              {messages.contact.submit}
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
