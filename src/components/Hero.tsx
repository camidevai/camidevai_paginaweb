import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Hero() {
  const location = useLocation();
  const navigate  = useNavigate();

  const scrollTo = (sectionId: string) => {
    if (location.pathname === '/') {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00c5c5]/10 to-[#00a5a5]/5" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00c5c5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#00c5c5]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-3xl">

          {/* Greeting pill */}
          <div className="inline-flex items-center px-4 py-2 bg-[#00c5c5]/10 rounded-full text-[#00c5c5] mb-5">
            <Sparkles className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm font-medium">Hola, soy Camila Bañares</span>
          </div>

          {/* Credential badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
              <img
                src="/img/miCamino/logo cchia.png"
                alt="CCHIA"
                className="h-4 w-4 object-contain"
              />
              <span className="text-xs font-semibold text-amber-700">Vicepresidenta · CCHIA</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <img
                src="/img/miCamino/logo informatik-ai.png"
                alt="Informatik-AI"
                className="h-4 w-4 object-contain"
              />
              <span className="text-xs font-semibold text-emerald-700">CMO · Informatik-AI</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transformo empresas con{' '}
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Inteligencia Artificial
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Ingeniera en Informática, experta en IA y automatizaciones.
            Ayudo a empresas y profesionales a trabajar más inteligente,
            no más duro.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              onClick={() => navigate('/contactame')}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#00c5c5]/25"
            >
              Contrátame
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button
              onClick={() => scrollTo('#servicios')}
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-[#00c5c5] text-[#00c5c5] font-semibold rounded-xl hover:bg-[#00c5c5]/5 transition-colors"
            >
              Ver mis servicios
            </button>

            <button
              onClick={() => scrollTo('#mi-historia')}
              className="inline-flex items-center justify-center px-7 py-3.5 text-gray-600 font-medium rounded-xl hover:text-[#00c5c5] transition-colors underline underline-offset-4"
            >
              Conoce mi historia
            </button>
          </div>

          <p className="mt-8 text-gray-400 italic text-sm">
            "Prochechando" — procesando y echándole ganas al mismo tiempo
          </p>
        </div>
      </div>
    </div>
  );
}
