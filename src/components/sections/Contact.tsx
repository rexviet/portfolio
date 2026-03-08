import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { socials } from '../../data/portfolio'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Simple handler just to show interaction
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! (Demo mode)')
    setFormData({ name: '', email: '', message: '' })
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github size={24} />
      case 'LinkedIn': return <Linkedin size={24} />
      case 'Email': return <Mail size={24} />
      default: return <Github size={24} />
    }
  }

  return (
    <section id="contact" className="contact-section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <span className="text-accent font-mono">06.</span> Get In Touch
        </h2>

        <div className="contact-container">
          <div className="contact-info-side">
            <h3 className="font-mono">Say Hello!</h3>
            <p className="info-text">
              Bạn có một dự án thú vị cần ý tưởng Backend đột phá, hay chỉ đơn giản là muốn thảo luận về System Design? Tôi luôn sẵn sàng lắng nghe và kết nối.
            </p>
            
            <div className="social-links">
              {socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Phùng Quốc Việt"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                required 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Let's build something awesome!"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn font-mono">
              <Send size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
