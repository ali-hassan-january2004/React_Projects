import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
