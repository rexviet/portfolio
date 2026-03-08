import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      
      {/* System design anchor for next phase */}
      <section id="system-design" style={{ minHeight: '50vh', padding: '100px 2rem' }} className="container">
      </section>
      
      <section id="contact" style={{ minHeight: '50vh', padding: '100px 2rem' }} className="container">
      </section>
    </Layout>
  )
}

export default App
