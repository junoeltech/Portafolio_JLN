import React from "react";
import { ArrowRight, Code2 } from "lucide-react";
// Asumo que sigues importando tu imagen desde assets
import heroImage from "../assets/hero.png";

const Hero = () => {
  const whatsappUrl =
    "https://wa.me/522412157898?text=Hola,%20me%20gustaría%20recibir%20asesoría%20para%20transformar%20mi%20negocio.";

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-black relative overflow-hidden">
      {/* Fondos Decorativos (Luces sutiles) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-500px h-500px bg-[#EEB56F]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-400px h-400px bg-[#EEB56F]/5 rounded-full blur-[100px] mix-blend-screen"></div>

        {/* Patrón de cuadrícula muy sutil de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* TEXTO (Ocupa 7 columnas en pantallas grandes) */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge pequeño arriba del título */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#EEB56F] text-xs font-semibold tracking-wide mb-8 animate-fade-in-up">
            <Code2 size={14} />
            <span>Desarrollo de Software Premium</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up">
            Software a medida para <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#EEB56F] to-[#f4d09a]">
              automatizar y escalar
            </span>{" "}
            tu negocio
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            Creamos sistemas inteligentes que reducen errores, ahorran tiempo y
            te dan control total de tu operación en tiempo real.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up animation-delay-400">
            {/* Botón Principal (WhatsApp) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#EEB56F] hover:bg-[#dca35a] text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(238,181,111,0.25)] group w-full sm:w-auto"
            >
              Recibir asesoría gratis
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* Botón Secundario (Proyectos) */}
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 w-full sm:w-auto"
            >
              Ver proyectos
            </a>
          </div>

          {/* MINI PRUEBA SOCIAL */}
          <div className="mt-12 flex items-center gap-4 text-sm text-zinc-500 font-medium animate-fade-in-up animation-delay-600">
            <div className="flex -space-x-2">
              {/* Círculos simulando avatares o puntos de diseño */}
              <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black"></div>
              <div className="w-8 h-8 rounded-full bg-[#EEB56F] border-2 border-black flex items-center justify-center text-black text-[10px] font-bold">
                +10
              </div>
            </div>
            <p>Proyectos desarrollados • Soluciones reales</p>
          </div>
        </div>

        {/* IMAGEN DEL LOGO (Ocupa 5 columnas en pantallas grandes) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 lg:ml-auto w-full max-w-md animate-fade-in-up animation-delay-400">
          {/* Resplandor de fondo para la imagen */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#EEB56F]/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>

          {/* Contenedor de la imagen */}
          <div className="relative rounded-2rem bg-zinc-950 border border-zinc-800/80 p-6 md:p-10 shadow-2xl backdrop-blur-sm group hover:border-[#EEB56F]/50 transition-colors duration-500">
            <img
              src={heroImage}
              alt="JLN Software Solutions"
              className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(238,181,111,0.15)] animate-float"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />

            {/* Elemento decorativo flotante estilo "cristal" */}
            <div
              className="absolute -bottom-6 -right-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-4 rounded-2xl shadow-xl hidden md:block animate-float"
              style={{ animation: "float 8s ease-in-out infinite reverse" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-wider">
                  SISTEMAS ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
