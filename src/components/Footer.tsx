import React from 'react';
import { Mail, MapPin, Brain, ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (sectionId: string) => {
    // Si estamos en la página principal, usar scroll normal
    if (location.pathname === '/') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en otra página, navegar a la página principal y luego hacer scroll
      navigate('/');
      // Usar setTimeout para esperar a que se cargue la página principal
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna 1: Información y Misión */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-[#00c5c5]" />
              <h3 className="text-xl font-bold text-white">CamiDevAI</h3>
            </div>
            <p className="mb-4">
              Transformando el mundo de la tecnología a través de la educación
              y la inspiración. Haciendo la tecnología accesible para todos.
            </p>
            <p className="text-sm text-gray-400 italic">
              "Prochechando" — procesando y echándole ganas al mismo tiempo.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explora</h4>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => handleNavigation('#mi-historia')} className="hover:text-[#00c5c5] transition-colors text-left">Mi Historia</button>
              <button onClick={() => handleNavigation('#mi-camino')} className="hover:text-[#00c5c5] transition-colors text-left">Mi Camino</button>
              <button onClick={() => handleNavigation('#aprendizaje')} className="hover:text-[#00c5c5] transition-colors text-left">Aprendizaje</button>
              <button onClick={() => handleNavigation('#servicios')} className="hover:text-[#00c5c5] transition-colors text-left">Servicios</button>
              <button onClick={() => handleNavigation('#contacto')} className="hover:text-[#00c5c5] transition-colors text-left">Contacto</button>
              <a href="#/contactame" className="hover:text-[#00c5c5] transition-colors font-medium text-left">Contáctame</a>
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              {/* Enlace de Email */}
              <a
                href="mailto:camidevai@gmail.com"
                className="flex items-center hover:text-[#00c5c5] transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>camidevai@gmail.com</span>
              </a>
              {/* Ubicación */}
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#00c5c5]" />
                <span>Chile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6 text-sm">
            <a href="#/aviso-legal" className="text-gray-400 hover:text-[#00c5c5] transition-colors">
              Aviso Legal
            </a>
            <span className="text-gray-600">|</span>
            <a href="#/politica-privacidad" className="text-gray-400 hover:text-[#00c5c5] transition-colors">
              Política de Privacidad
            </a>
            <span className="text-gray-600">|</span>
            <a href="#/politica-cookies" className="text-gray-400 hover:text-[#00c5c5] transition-colors">
              Política de Cookies
            </a>
          </div>

          {/* Copyright y Botón */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Camila Bañares (CamiDevAI). Todos los derechos reservados. Chile.</p>

            {/* Botón para volver arriba */}
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-[#00c5c5] transition-colors"
            >
              <span className="mr-2">Volver arriba</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
