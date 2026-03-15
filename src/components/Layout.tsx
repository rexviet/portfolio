import React from 'react'
import Navbar from './common/Navbar'
import { useLanguage } from '../i18n/LanguageContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { messages } = useLanguage()

  return (
    <div className="layout-shell">
      <Navbar />
      <main className="content-area">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand font-mono">Phung Quoc Viet / Portfolio</p>
            <p className="footer-copy">{messages.hero.objective}</p>
          </div>
          <p className="footer-note font-mono">
            &copy; {new Date().getFullYear()} Phùng Quốc Việt. {messages.common.builtWith}{' '}
            <span className="text-accent">React + Vite + Framer Motion</span>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
