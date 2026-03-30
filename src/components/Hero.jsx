import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/Hero.jpg'; 

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-gradient-to-b from-[#a67c00]/10 to-black overflow-hidden relative">
      
      {/* Fondo decorativo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[128px] animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* TEXTO */}
        <div className="animate-fade-in-up">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Software a medida para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f1e0ac] to-[#d4af37]">
              automatizar y escalar
            </span> tu negocio
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-lg animation-delay-200 opacity-0 animate-fade-in-up">
            Creamos sistemas inteligentes que reducen errores, ahorran tiempo y te dan 
            control total de tu operación en tiempo real.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 animation-delay-400 opacity-0 animate-fade-in-up">
            
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center gap-2.5 bg-[#d4af37] hover:bg-[#a67c00] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] group"
            >
              Recibir asesoría gratis
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="#proyectos" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-700 text-gray-300 hover:bg-zinc-800 transition"
            >
              Ver proyectos
            </a>

          </div>

          {/* MINI PRUEBA SOCIAL */}
          <p className="text-sm text-gray-500 mt-6">
            +10 proyectos desarrollados • Clientes satisfechos • Soluciones reales
          </p>

        </div>
        
        {/* IMAGEN */}
        <div className="relative animate-fade-in-up animation-delay-200">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/20 to-[#a67c00]/20 blur-lg opacity-50"></div>
          
          <img 
            src={heroImage} 
            alt="Dashboard de eficiencia" 
            className="rounded-2xl shadow-2xl border border-zinc-800 relative z-10 animate-float" 
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;