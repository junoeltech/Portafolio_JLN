import React from "react";
import { MonitorSmartphone, Bot, Database, ArrowRight } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Software a Medida",
      description:
        "Desarrollamos sistemas web y plataformas robustas adaptadas 100% a las reglas y necesidades específicas de tu negocio.",
      icon: MonitorSmartphone,
      features: [
        "Sistemas Web a medida",
        "Portales de clientes",
        "Arquitectura escalable",
      ],
    },
    {
      id: 2,
      title: "Automatización con IA",
      description:
        "Elimina tareas manuales y repetitivas. Implementamos bots y scripts inteligentes que trabajan por ti las 24 horas del día.",
      icon: Bot,
      features: [
        "Chatbots de atención",
        "Automatización de WhatsApp",
        "Procesamiento de datos",
      ],
    },
    {
      id: 3,
      title: "Sistemas Administrativos",
      description:
        "Centraliza tu información con Dashboards y ERPs personalizados para que tomes decisiones basadas en datos reales.",
      icon: Database,
      features: [
        "Control de inventario",
        "Gestión de ventas (CRM)",
        "Reportes en tiempo real",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 md:py-32 px-6 bg-black border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Resplandor de fondo sutil */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-400px bg-[#EEB56F]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-[#EEB56F] text-sm font-bold tracking-widest mb-3 uppercase flex items-center gap-2">
              <span className="w-8 h-1px bg-[#EEB56F]"></span>
              Nuestras Soluciones
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Tecnología que impulsa <br className="hidden md:block" />
              el <span className="text-[#EEB56F]">crecimiento</span> de tu
              empresa
            </h2>
          </div>
          <p className="text-zinc-400 text-lg md:max-w-md leading-relaxed">
            Acompañamos a nuestros clientes en su transformación digital con
            herramientas que resuelven problemas reales.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-950/80 border border-zinc-800/80 p-8 rounded-3xl hover:border-[#EEB56F]/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Efecto de luz interno en la tarjeta al hacer hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#EEB56F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Ícono */}
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EEB56F]/10 group-hover:border-[#EEB56F]/30 transition-colors duration-500">
                <service.icon
                  size={32}
                  className="text-zinc-400 group-hover:text-[#EEB56F] transition-colors duration-500"
                />
              </div>

              {/* Contenido principal */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#EEB56F] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 grow">
                {service.description}
              </p>

              {/* Lista de características */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEB56F]/80"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botón de enlace hacia contacto */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-[#EEB56F] transition-colors mt-auto w-fit"
              >
                Cotizar servicio
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
