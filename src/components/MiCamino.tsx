import React from 'react';
import { Milestone, Route, Timer, Sparkles, Lightbulb, Heart, MessageCircle } from 'lucide-react';

export default function MiCamino() {
  const etapas = [
    {
      periodo: "2013 - 2022",
      titulo: "El comienzo",
      subtitulo: "Clínica Dental Pacífico",
      descripcion: "Trabajé como promotora, secretaria y eventualmente jefa de sucursal en una clínica dental. Aunque estaba lejos de la tecnología, aquí aprendí sobre servicio al cliente, gestión y la importancia de la empatía. Mientras tanto, soñaba con un futuro diferente para mí y mis hijos.",
      icono: Heart,
      color: "from-pink-500 to-red-400",
      imagen: "/img/miCamino/El comienzo.png",
      pensamiento: "Sabía que había algo más para mí, un camino diferente que me permitiría crecer y estar más presente para mis hijos."
    },
    {
      periodo: "2019 - 2022",
      titulo: "El salto de fe",
      subtitulo: "Estudiante nocturna",
      descripcion: "Decidí estudiar ingeniería en informática en horario nocturno mientras seguía trabajando. Fue un periodo de sacrificio extremo: trabajar de día, estudiar de noche, y ser mamá en cada momento libre. Muchas veces quise rendirme, pero la visión de un futuro mejor me mantuvo firme.",
      icono: Timer,
      color: "from-purple-500 to-indigo-500",
      imagen: "/img/miCamino/El salto de fe.png",
      pensamiento: "Cada noche, mientras mis hijos dormían, me sumergía en un mundo de códigos y algoritmos que al principio parecían imposibles de entender."
    },
    {
      periodo: "2022",
      titulo: "Primeros pasos",
      subtitulo: "NTT Data Chile",
      descripcion: "Conseguí mi primer trabajo en tecnología como desarrolladora junior. Fue aterrador y emocionante a la vez. Cada día era un desafío, pero también una confirmación de que había tomado la decisión correcta. Aquí descubrí que podía aprender rápido y adaptarme a nuevos entornos.",
      icono: Route,
      color: "from-blue-500 to-cyan-400",
      imagen: "/img/miCamino/Primeros pasos.png",
      pensamiento: "El primer día en mi nuevo trabajo tecnológico sentí miedo y emoción a partes iguales. ¿Podría realmente hacer esto? La respuesta fue: ¡Sí, puedo!"
    },
    {
      periodo: "2022 - Actual",
      titulo: "Crecimiento",
      subtitulo: "TUXPAN",
      descripcion: "Como ingeniera de proyectos, encontré mi ritmo. Comencé a explorar la inteligencia artificial y descubrí cómo podía transformar mi trabajo. La IA no solo aceleró mis procesos, sino que abrió un mundo de posibilidades que nunca imaginé. Fue como encontrar una superpotencia que estaba esperando ser descubierta.",
      icono: Milestone,
      color: "from-emerald-500 to-teal-400",
      imagen: "/img/miCamino/Crecimiento.png",
      pensamiento: "Descubrir la IA fue como encontrar una llave maestra. De repente, todas esas tareas que me tomaban horas podían automatizarse. ¡Era magia!"
    },
    {
      periodo: "2024 - Actual",
      titulo: "Compartiendo el viaje",
      subtitulo: "CamiDevAI",
      descripcion: "Decidí compartir mi historia y conocimientos en redes sociales. Para mi sorpresa, resonó con miles de personas. Hoy, con una comunidad de más de 246,000 seguidores, me dedico a inspirar y enseñar, especialmente a mujeres y personas que, como yo, vienen de otros mundos y quieren adentrarse en la tecnología.",
      icono: Sparkles,
      color: "from-[#00c5c5] to-[#00a5a5]",
      imagen: "/img/miCamino/Compartiendo el viaje.png",
      pensamiento: "Nunca imaginé que mi historia podría inspirar a tantas personas. Cada mensaje que recibo me confirma que estoy en el camino correcto."
    }
  ];

  return (
    <section id="mi-camino" className="py-20 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Mi Camino
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Un viaje de transformación personal y profesional
          </p>
        </div>

        {/* Comic Strip Style Timeline */}
        <div className="space-y-20 md:space-y-32">
          {etapas.map((etapa, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? '' : 'md:translate-x-12'}`}>
              {/* Comic Panel */}
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-4 border-gray-800 transform hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Image Side */}
                  <div className="w-full md:w-3/5 relative mb-8 md:mb-0">
                    <div className="bg-gray-100 p-2 rounded-lg border-2 border-gray-800">
                      <div className="relative" style={{ height: '320px', maxHeight: '60vh', width: '100%' }}>
                        <img
                          src={etapa.imagen}
                          alt={etapa.titulo}
                          className="absolute inset-0 w-full h-full object-contain rounded-md"
                        />
                      </div>
                    </div>

                    {/* Comic Style Period Badge */}
                    <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-gradient-to-r from-yellow-400 to-yellow-500 py-1 px-3 md:py-2 md:px-4 rounded-lg transform rotate-[-4deg] shadow-md border-2 border-gray-800">
                      <span className="font-bold text-gray-900 text-xs md:text-sm">{etapa.periodo}</span>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-2/5">
                    {/* Title with comic style */}
                    <div className={`bg-gradient-to-r ${etapa.color} py-3 px-4 rounded-lg mb-4 shadow-md border-2 border-gray-800`}>
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded-full mr-3 border border-gray-800 flex-shrink-0">
                          <etapa.icono className="h-5 w-5 text-gray-800" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl md:text-2xl font-bold text-white truncate">{etapa.titulo}</h3>
                          <h4 className="text-xs md:text-sm text-white/90 truncate">{etapa.subtitulo}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 text-gray-700 leading-relaxed text-sm md:text-base">
                      {etapa.descripcion}
                    </div>

                    {/* Thought Bubble */}
                    <div className="relative mt-6 bg-gray-100 p-4 rounded-lg border-2 border-gray-800">
                      {/* Bubble Tail */}
                      <div className="absolute -top-6 left-6 w-6 h-6 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-gray-100 border-l-2 border-t-2 border-gray-800 w-6 h-6 -bottom-3 left-0"></div>
                      </div>

                      <div className="flex items-start">
                        <MessageCircle className="h-5 w-5 text-[#00c5c5] mr-2 flex-shrink-0 mt-1" />
                        <p className="italic text-gray-700 text-sm md:text-base">{etapa.pensamiento}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < etapas.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 h-24 w-1 bg-gradient-to-b from-[#00c5c5] to-[#00a5a5] top-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Final Quote */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-4 border-gray-800 max-w-3xl mx-auto transform hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300">
            <blockquote className="text-lg md:text-2xl italic text-gray-700">
              "Mi camino no ha sido lineal ni perfecto, pero cada paso, cada desafío, me ha traído hasta aquí. Y esto es solo el comienzo."
            </blockquote>
            <div className="mt-4 flex justify-center">
              <div className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md border-2 border-gray-800">
                <p className="font-semibold text-white text-sm md:text-base">— Camila Bañares (CamiDevAI)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
