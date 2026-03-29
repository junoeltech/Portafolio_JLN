import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <h2 className="logo">Leonel Dev</h2>
      <ul>
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
