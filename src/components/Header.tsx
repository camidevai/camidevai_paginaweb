import React, { useState } from 'react';
import { Brain, Menu, Heart, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Inicio', href: '#inicio', isSection: true },
    { name: 'Mi Historia', href: '#mi-historia', isSection: true },
    { name: 'Mi Camino', href: '#mi-camino', isSection: true },
    { name: 'Aprendizaje', href: '#aprendizaje', isSection: true },
    { name: 'Servicios', href: '#servicios', isSection: true },
    { name: 'Colaboraciones', href: '#colaboraciones', isSection: true },
    { name: 'Contacto', href: '#/contactame', isSection: false }
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.isSection) {
      // Si estamos en la página principal, usar scroll normal
      if (location.pathname === '/') {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Si estamos en otra página, navegar a la página principal y luego hacer scroll
        navigate('/');
        // Usar setTimeout para esperar a que se cargue la página principal
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Para contacto, usar navegación normal
      window.location.href = item.href;
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#00c5c5]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              CamiDevAI
            </span>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-600 hover:text-[#00c5c5] transition-colors text-sm"
              >
                {item.name}
              </button>
            ))}

            {/* Botón de Donación */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=BE44AS4XZZHDW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffcc00] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6b800] transition duration-300"
            >
              <Heart className="w-5 h-5 text-red-600" />
              Donar
            </a>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 sm:px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigation(item);
                  setMobileMenuOpen(false);
                }}
                className="text-gray-600 hover:text-[#00c5c5] transition-colors py-2 text-left"
              >
                {item.name}
              </button>
            ))}

            {/* Botón de Donación Móvil */}
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=BE44AS4XZZHDW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#ffcc00] text-black font-semibold rounded-lg shadow-md hover:bg-[#e6b800] transition duration-300 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="w-5 h-5 text-red-600" />
              Donar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
