import React, { useState } from 'react';
import { Brain, Menu, X, CalendarDays } from 'lucide-react';
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

            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md hover:opacity-90 transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar cita
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

            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white font-semibold rounded-lg shadow-sm mt-2"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
