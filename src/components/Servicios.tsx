import React from 'react';
import { Bot, Globe, Video, Presentation, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Servicio {
  titulo: string;
  descripcion: string;
  icono: React.ElementType;
  color: string;
  caracteristicas: string[];
}

const servicios: Servicio[] = [
  {
    titulo: "Automatizaciones con IA",
    descripcion: "Optimiza tus procesos y ahorra tiempo con soluciones personalizadas de automatización impulsadas por inteligencia artificial.",
    icono: Bot,
    color: "from-blue-500 to-indigo-600",
    caracteristicas: [
      "Flujos de trabajo automatizados",
      "Integración con tus herramientas actuales",
      "Reducción de tareas repetitivas",
      "Análisis de datos inteligente"
    ]
  },
  {
    titulo: "Creación de Sitios Web",
    descripcion: "Diseño y desarrollo de sitios web modernos, atractivos y funcionales que representan tu esencia y conectan con tu audiencia.",
    icono: Globe,
    color: "from-[#00c5c5] to-[#00a5a5]",
    caracteristicas: [
      "Diseño personalizado y único",
      "Experiencia de usuario intuitiva",
      "Optimización para dispositivos móviles",
      "Integración con redes sociales"
    ]
  },
  {
    titulo: "Creación de Contenido",
    descripcion: "Contenido creativo y estratégico para marcas que quieren destacar en el mundo digital y conectar con su audiencia.",
    icono: Video,
    color: "from-pink-500 to-rose-500",
    caracteristicas: [
      "Contenido educativo sobre tecnología",
      "Narrativas que conectan emocionalmente",
      "Adaptación a diferentes plataformas",
      "Estrategias de engagement"
    ]
  },
  {
    titulo: "Charlas y Cursos",
    descripcion: "Comparto mi conocimiento y experiencia a través de charlas inspiradoras y cursos prácticos sobre IA, avatars, cómics y más.",
    icono: Presentation,
    color: "from-amber-500 to-orange-500",
    caracteristicas: [
      "Workshops interactivos",
      "Cursos adaptados a todos los niveles",
      "Enfoque práctico y aplicable",
      "Comunidad de apoyo continuo"
    ]
  }
];

export default function Servicios() {
  const navigate = useNavigate();
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Mis Servicios
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Soluciones creativas y tecnológicas para impulsar tu presencia digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              {/* Decoración de fondo */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${servicio.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${servicio.color} flex items-center justify-center mb-6`}>
                  <servicio.icono className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-6">{servicio.descripcion}</p>

                <div className="space-y-3 mb-6">
                  {servicio.caracteristicas.map((caracteristica, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${servicio.color} flex-shrink-0 mt-1 mr-3 flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{caracteristica}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contactame')}
                  className={`inline-flex items-center text-white px-6 py-3 rounded-full bg-gradient-to-r ${servicio.color} hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer font-semibold relative overflow-hidden group`}
                  style={{ boxShadow: '0 4px 15px -3px rgba(0,0,0,0.1)' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span>Quiero este servicio</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#00c5c5]/10 to-[#00a5a5]/10 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-gray-600 mb-6">
                Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad. Ya sea que necesites automatizar procesos, crear un sitio web impactante, generar contenido que conecte con tu audiencia o aprender sobre las últimas tecnologías, estoy aquí para acompañarte en el camino.
              </p>
              <button
                onClick={() => navigate('/contactame')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer font-bold relative overflow-hidden group"
                style={{ boxShadow: '0 10px 15px -3px rgba(0, 197, 197, 0.2), 0 4px 6px -4px rgba(0, 197, 197, 0.2)' }}
              >
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>

                <span className="text-lg">Hablemos de tu proyecto</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-[#00c5c5]/20 rounded-full flex items-center justify-center">
                  <Bot className="h-24 w-24 text-[#00c5c5]/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00c5c5]/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
