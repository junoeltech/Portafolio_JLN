import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">¿Listo para transformar <br />tu <span className="text-[#d4af37]">negocio</span>?</h2>
          <p className="text-gray-400 mb-10 leading-relaxed max-w-md">Déjanos tus datos y un especialista en digitalización de JLN se pondrá en contacto contigo para evaluar tu caso sin compromiso.</p>
          
          <div className="space-y-6">
            <ContactInfo Icon={Mail} text="contacto@jlnsoftware.com" />
            <ContactInfo Icon={Phone} text="+52 (123) 456-7890" />
            <ContactInfo Icon={MapPin} text="Ciudad de México, México" />
          </div>
        </div>

        {/* Formulario con bordes sutiles dorados en focus */}
        <form className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 space-y-5 shadow-inner transition-all hover:border-zinc-700">
          <InputField label="Nombre Completo" type="text" placeholder="Ej. Juan Pérez" />
          <InputField label="Correo Electrónico" type="email" placeholder="tucorreo@empresa.com" />
          <div>
            <label className="block text-sm text-gray-500 mb-2.5 font-medium">¿Cómo podemos ayudarte?</label>
            <textarea rows="4" className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder:text-zinc-600" placeholder="Cuéntanos brevemente sobre tu proceso a mejorar..."></textarea>
          </div>
          <button type="button" className="w-full bg-[#d4af37] hover:bg-[#a67c00] text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-[1.01]">
            Enviar Mensaje <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

// Helper Components para limpieza
const ContactInfo = ({ Icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300 group">
    <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-[#d4af37]/30 transition-colors">
      <Mail className="text-[#d4af37]" size={20} />
    </div>
    <span className="group-hover:text-white transition-colors">{text}</span>
  </div>
);

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-2.5 font-medium">{label}</label>
    <input {...props} className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30 transition-all placeholder:text-zinc-600" />
  </div>
);

export default Contact;