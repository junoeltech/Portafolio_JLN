import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-[#d4af37]/10 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Animación de entrada en el Logo */}
        <div className="text-2xl font-bold text-white tracking-tighter animate-fade-in-up">
          JLN <span className="text-[#EEB56F]">Software</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium animate-fade-in-up animation-delay-200">
          {["Nosotros", "Servicios", "Portafolio", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#EEB56F] transition-colors relative group"
            >
              {item}
              {/* Animación de subrayado en hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
