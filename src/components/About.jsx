import React from "react";
import { Code, Users, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 px-6 bg-black relative overflow-hidden border-t border-zinc-900"
    >
      {/* Luz de fondo decorativa */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-lg h-400px bg-[#EEB56F]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* COLUMNA IZQUIERDA: Texto y Estadísticas */}
        <div className="relative z-10">
          <span className="text-[#EEB56F] text-sm font-bold tracking-widest mb-4 uppercase flex items-center gap-2">
            <span className="w-8 h-1px bg-[#EEB56F]"></span>
            Sobre JLN Software
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Transformamos tu visión en <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EEB56F] to-[#f4d09a]">
              realidad digital
            </span>
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed mb-10">
            No somos solo una agencia de desarrollo; somos tus socios
            tecnológicos. En JLN Software Solutions, nos apasiona entender las
            entrañas de tu negocio para construir herramientas a medida que
            eliminen cuellos de botella, automaticen lo tedioso y te permitan
            escalar sin límites.
          </p>

          {/* Grid de Estadísticas / Valores */}
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="border-l-2 border-[#EEB56F]/50 pl-5 hover:border-[#EEB56F] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Code className="text-[#EEB56F]" size={20} />
                <h4 className="text-white font-bold text-xl">Código Limpio</h4>
              </div>
              <p className="text-sm text-zinc-500">
                Arquitectura escalable y fácil de mantener.
              </p>
            </div>

            <div className="border-l-2 border-[#EEB56F]/50 pl-5 hover:border-[#EEB56F] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-[#EEB56F]" size={20} />
                <h4 className="text-white font-bold text-xl">Agilidad</h4>
              </div>
              <p className="text-sm text-zinc-500">
                Entregas rápidas y enfocadas en el valor real.
              </p>
            </div>

            <div className="border-l-2 border-[#EEB56F]/50 pl-5 hover:border-[#EEB56F] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-[#EEB56F]" size={20} />
                <h4 className="text-white font-bold text-xl">+10 Clientes</h4>
              </div>
              <p className="text-sm text-zinc-500">
                Empresas que ya han transformado su operativa.
              </p>
            </div>

            <div className="border-l-2 border-[#EEB56F]/50 pl-5 hover:border-[#EEB56F] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-[#EEB56F]" size={20} />
                <h4 className="text-white font-bold text-xl">Garantía</h4>
              </div>
              <p className="text-sm text-zinc-500">
                Soporte continuo y compromiso con la calidad.
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Composición de Imágenes */}
        <div className="relative mt-10 lg:mt-0">
          {/* Imagen Principal */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl group">
            <img
              // Usa una imagen de Unsplash de un equipo o un entorno de código elegante
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Equipo de JLN Software"
              className="w-full h-auto aspect-4/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            {/* Overlay oscuro para no desentonar con la página */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply"></div>
          </div>

          {/* Tarjeta Flotante (Experiencia / Compromiso) */}
          <div
            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-zinc-950/90 backdrop-blur-md border border-zinc-700/50 p-6 md:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-w-280px animate-float"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            <div className="w-12 h-12 bg-[#EEB56F]/10 rounded-full flex items-center justify-center mb-4 border border-[#EEB56F]/20">
              <Award className="text-[#EEB56F]" size={24} />
            </div>
            <p className="text-white font-bold text-lg mb-1">
              Compromiso Total
            </p>
            <p className="text-sm text-zinc-400">
              Tu éxito es nuestro éxito. Nos involucramos al 100% en cada
              proyecto.
            </p>
          </div>

          {/* Marco decorativo dorado detrás de la imagen */}
          <div className="absolute -top-4 -right-4 w-2/3 h-2/3 border-t-2 border-r-2 border-[#EEB56F]/30 rounded-tr-3xl -z-10 transition-all duration-500 group-hover:border-[#EEB56F]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
