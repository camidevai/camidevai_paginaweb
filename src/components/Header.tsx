import React, { useState } from 'react';
import { Brain, Menu, X, CalendarDays, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { name: 'Inicio',      href: '#inicio',       isSection: true  },
  { name: 'Mi Historia', href: '#mi-historia',  isSection: true  },
  { name: 'Mi Camino',   href: '#mi-camino',    isSection: true  },
  { name: 'Aprendizaje', href: '#aprendizaje',  isSection: true  },
  { name: 'Servicios',   href: '#servicios',    isSection: true  },
];

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate  = useNavigate();

  const scrollTo = (href: string) => {
    if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Brain className="h-8 w-8 text-[#00c5c5]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              CamiDevAI
            </span>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="text-gray-600 hover:text-[#00c5c5] transition-colors text-sm"
              >
                {item.name}
              </button>
            ))}

            {/* Agendar cita */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#00c5c5] text-[#00c5c5] text-sm font-semibold rounded-lg hover:bg-[#00c5c5]/5 transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar cita
            </a>

            {/* Contáctame — destacado con pulso */}
            <div className="relative">
              <span className="absolute inset-0 rounded-lg bg-[#00c5c5]/25 animate-ping" />
              <button
                onClick={() => navigate('/contactame')}
                className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white text-sm font-bold rounded-lg shadow-md hover:opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contáctame
              </button>
            </div>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <X className="h-6 w-6 text-gray-600" />
              : <Menu className="h-6 w-6 text-gray-600" />
            }
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 sm:px-6 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => { scrollTo(item.href); setMobileMenuOpen(false); }}
                className="text-gray-600 hover:text-[#00c5c5] transition-colors py-2 text-left text-sm"
              >
                {item.name}
              </button>
            ))}

            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#00c5c5] text-[#00c5c5] font-semibold rounded-lg text-sm"
            >
              <CalendarDays className="w-4 h-4" />
              Agendar cita
            </a>

            <button
              onClick={() => { navigate('/contactame'); setMobileMenuOpen(false); }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white font-bold rounded-lg shadow-md text-sm"
            >
              <Mail className="w-4 h-4" />
              Contáctame
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
