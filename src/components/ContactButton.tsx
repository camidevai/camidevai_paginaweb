import React, { useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { scrollToContactForm } from '../utils/scrollUtils';

export default function ContactButton() {
  // Añadimos un ID al formulario de contacto para poder desplazarnos a él
  useEffect(() => {
    // Buscamos el formulario de contacto y le añadimos un ID
    const contactForm = document.querySelector('.bg-white.p-8.rounded-xl.shadow-sm form');
    if (contactForm && !contactForm.id) {
      contactForm.id = 'contact-form';
    }
  }, []);

  return (
    <button
      onClick={scrollToContactForm}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(0,197,197,0.6)] hover:scale-110 transition-all duration-300 group"
      aria-label="Escríbeme"
      style={{
        boxShadow: '0 10px 25px -5px rgba(0, 197, 197, 0.3), 0 8px 10px -6px rgba(0, 197, 197, 0.2)'
      }}
    >
      {/* Efecto de pulso */}
      <span className="absolute inset-0 rounded-full bg-[#00c5c5] animate-ping opacity-20"></span>

      {/* Efecto de brillo */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white to-transparent opacity-30 animate-pulse"></span>

      <MessageSquare className="h-6 w-6 md:mr-2" />
      <span className="hidden md:inline text-base font-bold">Escríbeme</span>

      {/* Tooltip en hover */}
      <span className="absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        ¡Contáctame ahora!
      </span>
    </button>
  );
}
