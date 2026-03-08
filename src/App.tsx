import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import SystemDesign from './components/sections/SystemDesign'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <SystemDesign />
      
      <section id="contact" style={{ minHeight: '50vh', padding: '100px 2rem' }} className="container">
      </section>
    </Layout>
  )
}

export default App
