import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  // Enlace directo a WhatsApp con un mensaje predeterminado
  const whatsappUrl =
    "https://wa.me/522412157898?text=Hola,%20me%20gustaría%20recibir%20asesoría%20para%20transformar%20mi%20negocio.";

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-black border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* TEXTO */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">
            ¿Listo para <br /> transformar tu{" "}
            <span className="text-[#EEB56F]">negocio</span>?
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
            Cuéntanos tu idea o problema y te ayudamos a convertirlo en una
            solución digital. Escríbenos directamente y te atenderemos
            enseguida.
          </p>

          {/* 💰 ELEMENTOS DE CONFIANZA */}
          <ul className="text-sm text-gray-500 mb-10 space-y-2">
            <li>✔ Respuesta en menos de 24 horas</li>
            <li>✔ Asesoría totalmente gratuita</li>
            <li>✔ Sin compromiso</li>
          </ul>

          <div className="space-y-6">
            <ContactInfo Icon={Mail} text="contacto@jlnsoftware.com" />
            <ContactInfo Icon={Phone} text="+52 (241) 215 78 98" />
            <ContactInfo Icon={MapPin} text="Huamantla, Tlaxcala" />
          </div>
        </div>

        {/* TARJETA DE WHATSAPP */}
        <div className="bg-zinc-950 p-10 rounded-3xl border border-zinc-800 flex flex-col items-center justify-center text-center shadow-inner transition-all hover:border-zinc-700">
          <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,211,102,0.15)]">
            <MessageCircle size={40} className="text-[#25D366]" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Hablemos por WhatsApp
          </h3>
          <p className="text-gray-400 mb-8 max-w-sm">
            Inicia una conversación directa con nosotros. Es la forma más rápida
            de recibir tu asesoría gratuita.
          </p>

          {/* 🔥 BOTÓN WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-[1.02] hover:shadow-[0_5px_20px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle
              size={20}
              className="transition-transform group-hover:scale-110"
            />
            Iniciar chat ahora
          </a>

          {/* 💡 MICROCOPY DE CONFIANZA */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Atención rápida y personalizada • Sin bots
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ Icon, text }) => (
  <div className="flex items-center gap-4 text-gray-300 group">
    <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-[#d4af37]/30 transition-colors">
      <Icon className="text-[#d4af37]" size={20} />
    </div>
    <span className="group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default Contact;
