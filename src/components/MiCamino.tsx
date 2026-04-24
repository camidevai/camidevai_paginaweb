import React from 'react';
import { Milestone, Route, Timer, Sparkles, Heart } from 'lucide-react';

export default function MiCamino() {
  const etapas = [
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
      periodo: "2022 - Actual",
      titulo: "Crecimiento",
      subtitulo: "TUXPAN",
      descripcion: "Como ingeniera de proyectos descubrí la IA y cómo transformaba mi trabajo. Fue como encontrar una superpotencia que estaba esperando ser activada.",
      icono: Milestone,
      color: "from-emerald-500 to-teal-400",
    },
    {
      periodo: "2024 - Actual",
      titulo: "Compartiendo el viaje",
      subtitulo: "CamiDevAI",
      descripcion: "Con más de 246K seguidores comparto mi historia e inspiro a quienes, como yo, vienen de otros mundos y quieren adentrarse en tecnología.",
      icono: Sparkles,
      color: "from-[#00c5c5] to-[#00a5a5]",
    }
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
                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200">
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

        {/* Final quote - compact */}
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
