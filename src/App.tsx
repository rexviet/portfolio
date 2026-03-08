import { motion } from 'framer-motion'
import { Terminal, Code2, Server, Cpu } from 'lucide-react'

function App() {
  return (
    <main className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-accent" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'block' }}>
          &gt; hello_world.exe
        </span>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-2px' }}>
          Phùng Quốc Việt
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Backend Leader | DevOps Engineer | System Architect
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <StatIcon icon={<Terminal size={24} />} label="CQRS" />
          <StatIcon icon={<Code2 size={24} />} label="NestJS" />
          <StatIcon icon={<Server size={24} />} label="Microservices" />
          <StatIcon icon={<Cpu size={24} />} label="DevOps" />
        </div>
      </motion.div>
    </main>
  )
}

function StatIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
      <div className="glass" style={{ padding: '1rem', borderRadius: '12px', color: 'var(--accent-primary)' }}>
        {icon}
      </div>
      <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</span>
    </div>
  )
}

export default App
