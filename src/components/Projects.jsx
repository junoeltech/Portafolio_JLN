import React, { useState } from 'react';
import { ExternalLink, X, CheckCircle2, Play, Target, Briefcase } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    // ... datos de proyectos (igual que antes) ...
    {
      id: 1,
      title: "ERP de Gestión Logística",
      category: "Software a Medida",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "/videos/erp-demo.mp4",
      problem: "Procesos manuales lentos y pérdida de trazabilidad.",
      solution: "Dashboard administrativo sincronizado en tiempo real.",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      title: "SmartBot Inmobiliario",
      category: "Asistente Virtual",
      thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1000",
      videoUrl: "/videos/bot-demo.mp4",
      problem: "Saturación del equipo con leads no calificados.",
      solution: "Chatbot IA para calificación automática 24/7.",
      tags: ["OpenAI", "Python", "WhatsApp API"]
    }
  ];

  return (
    <section id="portafolio" className="py-28 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Casos de <span className="text-[#d4af37]">Éxito</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No solo entregamos código; entregamos resultados medibles. Explora cómo hemos transformado la operativa de nuestros socios tecnológicos.
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.15)]"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                {/* Info Overlay */}
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="text-[#f1e0ac] text-xs font-bold uppercase tracking-widest bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/20">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-[#f1e0ac] transition-colors">{project.title}</h3>
                </div>
                
                {/* Play Button Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <div className="bg-[#d4af37] p-5 rounded-full text-black shadow-2xl shadow-[#d4af37]/30">
                    <Play size={28} fill="currentColor" className="relative left-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL DETALLADO CON ANIMACIONES MEJORADAS */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-opacity duration-300">
          {/* Backdrop con blur animado */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProject(null)}></div>
          
          {/* Modal Content con animación de escala/subida */}
          <div className="relative bg-zinc-950 border border-zinc-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row animate-scale-in">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 text-gray-500 hover:text-white bg-black/50 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Lado Izquierdo: Video */}
            <div className="md:w-3/5 bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 relative">
               <video 
                 src={selectedProject.videoUrl} 
                 className="w-full h-full object-contain"
                 autoPlay loop muted playsInline
                 poster={selectedProject.thumbnail}
               >
               </video>
               <div className="absolute bottom-4 left-4 bg-[#d4af37]/10 text-[#f1e0ac] text-xs px-2 py-0.5 rounded border border-[#d4af37]/20">DEMO</div>
            </div>

            {/* Lado Derecho: Info con Dorado Premium */}
            <div className="md:w-2/5 p-8 md:p-10 flex flex-col bg-zinc-950">
              <span className="text-[#d4af37] text-sm font-bold tracking-widest mb-2 uppercase border-b-2 border-[#d4af37] inline-block w-fit pb-1">{selectedProject.category}</span>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">{selectedProject.title}</h3>
              
              <div className="space-y-7 flex-grow">
                <InfoBlock Icon={Target} title="EL PROBLEMA" text={selectedProject.problem} color="text-red-400" />
                <InfoBlock Icon={CheckCircle2} title="LA SOLUCIÓN JLN" text={selectedProject.solution} color="text-green-400" />

                <div className="pt-5 border-t border-zinc-800">
                  <h4 className="text-gray-500 text-xs font-bold mb-3 tracking-widest uppercase">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black border border-zinc-800 text-xs text-gray-300 rounded-full transition-colors hover:border-[#d4af37]/30 hover:text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full bg-[#d4af37] hover:bg-[#a67c00] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(212,175,55,0.2)] group">
                ¿Buscas algo similar? <ExternalLink size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-componente helper para bloques de info en el modal
const InfoBlock = ({ Icon, title, text, color }) => (
  <div className="flex gap-4 items-start">
    <div className={`mt-1 p-1.5 rounded-md bg-zinc-900 border border-zinc-800 ${color}`}>
      <Icon size={18} />
    </div>
    <div>
      <h4 className="text-[#f1e0ac] text-sm font-bold mb-1.5 tracking-wide">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export default Projects;