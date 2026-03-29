import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <Projects />
      
      {/* SECCIÓN ADICIONAL: POR QUÉ ELEGIRNOS (solicitada originalmente) */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#b8860b]/10 blur-[100px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">El Valor del <span className="text-[#ffd700]">Control Total</span></h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Nuestra mayor promesa no es solo el código que escribimos, sino la tranquilidad que te brindamos. 
            Con las herramientas de JLN Software Solutions, obtienes visibilidad <strong>en tiempo real</strong> del progreso de tus trámites, inventarios o interacciones.
            Deja de adivinar en qué estado se encuentra tu negocio y empieza a tener el control en la palma de tu mano.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;