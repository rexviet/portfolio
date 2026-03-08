import Hero from './components/sections/Hero'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Hero />
      {/* Empty sections for navigation anchors */}
      <section id="experience" style={{ minHeight: '100vh', padding: '100px 2rem' }} className="container">
        <h2 className="font-mono text-accent">Experience Section Under Construction...</h2>
      </section>
      <section id="projects" style={{ minHeight: '100vh', padding: '100px 2rem' }} className="container">
        <h2 className="font-mono text-accent">Projects Section Under Construction...</h2>
      </section>
    </Layout>
  )
}

export default App
