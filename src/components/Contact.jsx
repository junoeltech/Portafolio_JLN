import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

        {/* TEXTO */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
            ¿Listo para <br /> transformar tu <span className="text-[#d4af37]">negocio</span>?
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
            Cuéntanos tu idea o problema y te ayudamos a convertirlo en una solución digital.
          </p>

          {/* 💰 ELEMENTOS DE CONFIANZA */}
          <ul className="text-sm text-gray-500 mb-10 space-y-2">
            <li>✔ Respuesta en menos de 24 horas</li>
            <li>✔ Asesoría totalmente gratuita</li>
            <li>✔ Sin compromiso</li>
          </ul>
          
          <div className="space-y-6">
            <ContactInfo Icon={Mail} text="contacto@jlnsoftware.com" />
            <ContactInfo Icon={Phone} text="+52 (123) 456-7890" />
            <ContactInfo Icon={MapPin} text="Ciudad de México, México" />
          </div>
        </div>

        {/* FORMULARIO */}
        <form className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 space-y-5 shadow-inner transition-all hover:border-zinc-700">

          <InputField label="Nombre Completo" type="text" placeholder="Ej. Juan Pérez" />
          <InputField label="Correo Electrónico" type="email" placeholder="tucorreo@empresa.com" />

          <div>
            <label className="block text-sm text-gray-500 mb-2.5 font-medium">
              ¿Qué necesitas automatizar?
            </label>
            <textarea
              rows="4"
              className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder:text-zinc-600"
              placeholder="Ej: Control de inventario, ventas, clientes, procesos manuales..."
            />
          </div>

          {/* 🔥 BOTÓN MEJORADO */}
          <button
            type="button"
            className="w-full bg-[#d4af37] hover:bg-[#a67c00] text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-[1.02] hover:shadow-[0_5px_20px_rgba(212,175,55,0.3)]"
          >
            Recibir asesoría gratis
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* 💡 MICROCOPY DE CONFIANZA */}
          <p className="text-xs text-gray-500 text-center mt-2">
            No compartimos tu información • Respuesta rápida garantizada
          </p>
        </form>
      </div>
    </section>
  );
};

// FIX: antes siempre usabas Mail, ahora sí usa el icono correcto
const ContactInfo = ({ Icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300 group">
    <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-[#d4af37]/30 transition-colors">
      <Icon className="text-[#d4af37]" size={20} />
    </div>
    <span className="group-hover:text-white transition-colors">{text}</span>
  </div>
);

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-2.5 font-medium">{label}</label>
    <input
      {...props}
      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder:text-zinc-600"
    />
  </div>
);

export default Contact;