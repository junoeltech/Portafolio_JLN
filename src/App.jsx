import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Agregamos íconos para la nueva sección
import { ShieldCheck, Activity, Smartphone } from "lucide-react";

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* SECCIÓN MEJORADA: POR QUÉ ELEGIRNOS */}
      <section className="py-24 px-6 relative overflow-hidden bg-zinc-950 border-t border-zinc-900">
        {/* Efecto de luz de fondo ajustado para no interferir con el texto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-300px bg-[#EEB56F]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Encabezado de la sección */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              El Valor del <span className="text-[#EEB56F]">Control Total</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nuestra mayor promesa no es solo el código que escribimos, sino la
              tranquilidad que te brindamos. Deja de adivinar el estado de tu
              negocio y empieza a operarlo con precisión.
            </p>
          </div>

          {/* Cuadrícula de beneficios */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-[#EEB56F]/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#EEB56F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity className="text-[#EEB56F]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tiempo Real</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Obtén visibilidad instantánea del progreso de tus trámites,
                inventarios o interacciones con clientes.
              </p>
            </div>

            {/* Tarjeta 2 (Ligeramente elevada para dar un efecto de diseño asimétrico moderno) */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-[#EEB56F]/40 transition-all duration-300 hover:-translate-y-1 transform md:-translate-y-4 group">
              <div className="w-14 h-14 bg-[#EEB56F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="text-[#EEB56F]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Tranquilidad
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Sistemas robustos que te permiten enfocarte en lo importante,
                sabiendo que tu tecnología está bajo control.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-[#EEB56F]/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#EEB56F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-[#EEB56F]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Control Total
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Toda la información vital de tu negocio directamente en la palma
                de tu mano, accesible desde cualquier lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
