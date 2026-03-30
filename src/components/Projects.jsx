import React, { useState } from "react";
import {
  ExternalLink,
  X,
  CheckCircle2,
  Play,
  Target,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Portal de Servicios Fiscales",
      category: "Plataforma Web",
      // Imagen relacionada a contabilidad/finanzas
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "/videos/contigo-fiscal.mp4",
      problem:
        "Captación desorganizada de clientes para trámites del SAT y asesorías contables.",
      solution:
        "Portal web optimizado para solicitar servicios fiscales de forma ágil, segura y profesional.",
      tags: ["React", "UI/UX", "Web Development"],
    },
    {
      id: 2,
      title: "Sistema de Reservas",
      category: "Web App",
      // Imagen relacionada a una cafetería moderna / reservas
      thumbnail:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "/videos/cafe-place.mp4",
      problem:
        "Gestión manual de reservas por teléfono y pérdida de clientes en horas pico.",
      solution:
        "Plataforma web intuitiva donde los clientes pueden agendar su mesa y horario en segundos.",
      tags: ["React", "Node.js", "Base de Datos"],
    },
  ];

  return (
    <section id="portafolio" className="py-28 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Casos de <span className="text-[#EEB56F]">Éxito</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No solo entregamos código; entregamos resultados medibles. Explora
            cómo hemos transformado la operativa de nuestros socios
            tecnológicos.
          </p>
        </div>

        {/* GRID DE PROYECTOS MEJORADO */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-zinc-950/50 border border-zinc-800/80 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#EEB56F]/50 hover:shadow-[0_20px_40px_-15px_rgba(238,181,111,0.15)] flex flex-col h-full"
            >
              {/* CONTENEDOR DE LA IMAGEN (Parte superior) */}
              <div className="aspect-video relative overflow-hidden bg-zinc-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Overlay oscuro suave sobre la imagen */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Badge de Categoría Flotante */}
                <div className="absolute top-5 left-5">
                  <span className="bg-black/70 backdrop-blur-md text-[#EEB56F] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-700/50 shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Botón de Play Animado */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <div className="bg-[#EEB56F]/90 backdrop-blur-sm p-4 rounded-full text-black shadow-[0_0_30px_rgba(238,181,111,0.4)]">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                </div>
              </div>

              {/* CONTENEDOR DE TEXTO (Parte inferior) */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#EEB56F] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.problem} {project.solution}
                </p>

                {/* Tags y Botón Ver Caso abajo */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-800/50">
                  <div className="flex gap-2 overflow-hidden">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded-md">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-[#EEB56F] text-sm font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Ver Caso <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETALLADO */}
      {selectedProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative z-10 bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-scale-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 text-gray-400 hover:text-white bg-zinc-900/80 backdrop-blur hover:bg-zinc-800 p-2.5 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            {/* Lado Izquierdo: Video */}
            <div className="md:w-[55%] bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 relative">
              <video
                src={selectedProject.videoUrl}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-none"
                autoPlay
                loop
                muted
                playsInline
                poster={selectedProject.thumbnail}
              ></video>
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-[#EEB56F] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-zinc-700/50">
                Vista Previa
              </div>
            </div>

            {/* Lado Derecho: Info */}
            <div className="md:w-[45%] p-8 md:p-10 flex flex-col bg-zinc-950/90">
              <span className="text-[#EEB56F] text-xs font-bold tracking-widest mb-3 uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight leading-tight">
                {selectedProject.title}
              </h3>

              <div className="space-y-8 grow">
                <InfoBlock
                  Icon={Target}
                  title="EL DESAFÍO"
                  text={selectedProject.problem}
                  color="text-zinc-400"
                  iconColor="text-red-400"
                />
                <InfoBlock
                  Icon={CheckCircle2}
                  title="LA SOLUCIÓN"
                  text={selectedProject.solution}
                  color="text-zinc-300"
                  iconColor="text-[#EEB56F]"
                />

                <div className="pt-8 border-t border-zinc-800/80">
                  <h4 className="text-zinc-500 text-[11px] font-bold mb-4 tracking-widest uppercase">
                    Stack Tecnológico Usado
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/522412157898?text=Hola,%20me%20interesó%20el%20proyecto%20de%20tu%20portafolio%20y%20busco%20algo%20similar."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 w-full bg-white hover:bg-gray-100 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group"
              >
                ¿Buscas algo similar?
                <ExternalLink
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-componente helper actualizado
const InfoBlock = ({ Icon, title, text, color, iconColor }) => (
  <div className="flex gap-5 items-start">
    <div
      className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800/80 ${iconColor}`}
    >
      <Icon size={20} />
    </div>
    <div className="pt-1">
      <h4 className="text-white text-sm font-bold mb-2 tracking-wide">
        {title}
      </h4>
      <p className={`${color} text-sm leading-relaxed`}>{text}</p>
    </div>
  </div>
);

export default Projects;
