import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Hero() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c5c5]/10 to-[#00a5a5]/5" />

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00c5c5]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#00c5c5]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-[#00c5c5]/10 rounded-full text-[#00c5c5] mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Hola, soy Camila Bañares</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transformando mi historia con{' '}
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              tecnología y propósito
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Mi historia es sobre transformación, perseverancia y el poder de la tecnología para cambiar vidas. Si yo pude hacerlo, tú también puedes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleNavigation('#mi-historia')}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#00c5c5] text-white rounded-lg hover:bg-[#00a5a5] transition-colors"
            >
              Conoce mi historia
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={() => handleNavigation('#servicios')}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00c5c5] text-[#00c5c5] rounded-lg hover:bg-[#00c5c5]/5 transition-colors"
            >
              Mis servicios
            </button>
          </div>

          <p className="mt-8 text-gray-500 italic">
            "Prochechando" — procesando y echándole ganas al mismo tiempo
          </p>
        </div>
      </div>
    </div>
  );
}