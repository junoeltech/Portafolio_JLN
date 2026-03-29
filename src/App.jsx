import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { darkMode } = useTheme()

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
