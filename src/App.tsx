import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import SystemDesign from './components/sections/SystemDesign'
import Contact from './components/sections/Contact'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <SystemDesign />
      <Contact />
    </Layout>
  )
}

export default App
