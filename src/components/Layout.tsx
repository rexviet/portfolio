import React from 'react'
import Navbar from './common/Navbar'
import { useLanguage } from '../i18n/LanguageContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { messages } = useLanguage()

  return (
    <div className="layout-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="content-area" style={{ flex: 1, paddingTop: '100px', display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
      <footer className="footer glass" style={{ borderTop: '1px solid var(--glass-border)', padding: '2rem 1rem', textAlign: 'center', marginTop: '4rem' }}>
        <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Phùng Quốc Việt. {messages.common.builtWith}{' '}
          <span className="text-accent">React + Vite + Love</span>.
        </p>
      </footer>
    </div>
  )
}

export default Layout
