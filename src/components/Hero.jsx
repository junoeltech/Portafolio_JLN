import React from 'react';
import { ArrowRight } from 'lucide-react';
// Asumiendo que hero.png está en src/assets
import heroImage from '../assets/Hero.jpg'; 

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-gradient-to-b from-[#a67c00]/10 to-black overflow-hidden relative">
      {/* Elemento decorativo animado de fondo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[128px] animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            JLN Software Solutions: <br />
            {/* Resaltado con dorado premium */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f1e0ac] to-[#d4af37]">
              Elevando la Eficiencia
            </span> de tu Negocio
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg animation-delay-200 opacity-0 animate-fade-in-up">
            Ecosistemas digitales personalizados que transforman procesos manuales en flujos de trabajo inteligentes.
          </p>
          {/* Botón con hover animado y color corregido */}
          <div className="animation-delay-400 opacity-0 animate-fade-in-up">
            <a href="#contacto" className="inline-flex items-center gap-2.5 bg-[#d4af37] hover:bg-[#a67c00] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] group">
              Cotiza tu Proyecto 
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        
        {/* Imagen con animación de subida y ligero float */}
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