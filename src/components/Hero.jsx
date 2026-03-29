import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hola, soy Leonel 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Desarrollador web especializado en UI/UX premium
      </motion.p>

      <motion.a
        href="#projects"
        className="btn"
        whileHover={{ scale: 1.1 }}
      >
        Ver proyectos
      </motion.a>
    </section>
  )
}
