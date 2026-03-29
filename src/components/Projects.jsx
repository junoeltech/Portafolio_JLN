import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    { title: "Chatbot SAT", description: "Flujos diferenciados para persona física/moral con integración a backend." },
    { title: "UI Telmex", description: "Widget corporativo con estilo premium y notificaciones estilizadas." }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
