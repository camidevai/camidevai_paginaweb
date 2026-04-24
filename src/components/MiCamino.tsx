import React from 'react';
import { Route, Timer, Sparkles, Heart, Briefcase, Crown } from 'lucide-react';

interface Etapa {
  periodo: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  icono: React.ElementType;
  color: string;
  logo?: string;
  logoBg?: string;
  destacado?: boolean;
}

export default function MiCamino() {
  const etapas: Etapa[] = [
    {
      periodo: "2013 - 2022",
      titulo: "El comienzo",
      subtitulo: "Clínica Dental Pacífico",
      descripcion: "Promotora, secretaria y jefa de sucursal en una clínica dental. Aprendí gestión y empatía mientras soñaba con un futuro diferente para mí y mis hijos.",
      icono: Heart,
      color: "from-pink-500 to-red-400",
    },
    {
      periodo: "2019 - 2022",
      titulo: "El salto de fe",
      subtitulo: "Estudiante nocturna",
      descripcion: "Estudié ingeniería en informática en horario nocturno mientras trabajaba y criaba a mis hijos. Sacrificio enorme, pero la visión del futuro me mantuvo firme.",
      icono: Timer,
      color: "from-purple-500 to-indigo-500",
    },
    {
      periodo: "2022",
      titulo: "Primeros pasos",
      subtitulo: "NTT Data Chile",
      descripcion: "Mi primer trabajo en tecnología como desarrolladora junior. Aterrador y emocionante, cada día confirmaba que había tomado la decisión correcta.",
      icono: Route,
      color: "from-blue-500 to-cyan-400",
    },
    {
      periodo: "2024 - Actual",
      titulo: "CMO · Informatik-AI",
      subtitulo: "Chief Marketing Officer",
      descripcion: "Lidero la estrategia de comunicación y posicionamiento de Informatik-AI, empresa especializada en soluciones de inteligencia artificial. Combino experiencia tecnológica y presencia digital para construir puentes entre la IA y las personas.",
      icono: Briefcase,
      color: "from-emerald-500 to-teal-400",
      logo: "/img/miCamino/logo informatik-ai.png",
      logoBg: "white",
    },
    {
      periodo: "2024 - Actual",
      titulo: "Vicepresidenta · CCHIA",
      subtitulo: "Cámara Chilena de Inteligencia Artificial",
      descripcion: "Elegida Vicepresidenta de la Cámara Chilena de Inteligencia Artificial, el organismo que reúne a las empresas y profesionales que lideran la adopción responsable de la IA en Chile. Un honor que refleja el camino recorrido y el compromiso con el futuro de la tecnología en nuestro país.",
      icono: Crown,
      color: "from-amber-500 to-orange-500",
      logo: "/img/miCamino/logo cchia.png",
      logoBg: "white",
      destacado: true,
    },
    {
      periodo: "2024 - Actual",
      titulo: "Compartiendo el viaje",
      subtitulo: "CamiDevAI",
      descripcion: "Con una comunidad de más de 507.000 seguidores comparto mi historia e inspiro a quienes, como yo, vienen de otros mundos y quieren adentrarse en tecnología.",
      icono: Sparkles,
      color: "from-[#00c5c5] to-[#00a5a5]",
    },
  ];

  return (
    <section id="mi-camino" className="py-14 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Mi Camino
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Un viaje de transformación personal y profesional
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#00c5c5] to-[#00a5a5] md:-translate-x-1/2" />

          <div className="space-y-5">
            {etapas.map((etapa, index) => {
              const Icon = etapa.icono;
              const isRight = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 mt-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${etapa.color} flex items-center justify-center shadow-md border-2 border-white`}>
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[46%] ${isRight ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                    <div className={`bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition-shadow duration-200 ${etapa.destacado ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-100'}`}>

                      {/* Logo si existe */}
                      {etapa.logo && (
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: etapa.logoBg ?? 'white' }}
                          >
                            <img src={etapa.logo} alt={etapa.subtitulo} className="w-8 h-8 object-contain" />
                          </div>
                          {etapa.destacado && (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                              <Crown className="h-3 w-3" /> Liderazgo nacional
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-gray-800 text-sm">{etapa.titulo}</h3>
                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium border border-yellow-200">
                          {etapa.periodo}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#00c5c5] mb-2">{etapa.subtitulo}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{etapa.descripcion}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final quote */}
        <div className="mt-10 text-center">
          <p className="text-sm italic text-gray-500 max-w-xl mx-auto">
            "Mi camino no ha sido lineal ni perfecto, pero cada paso me ha traído hasta aquí. Y esto es solo el comienzo."
            {' '}— <span className="font-semibold text-[#00c5c5]">Camila Bañares</span>
          </p>
        </div>
      </div>
    </section>
  );
}
