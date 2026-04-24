import {
  Star,
  Award,
  ExternalLink,
  Sparkles,
  Lightbulb
} from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  certificateLink?: string;
  logo?: string;
  color?: string;
}

const educationList: EducationItem[] = [
  {
    title: "Ingeniera en Informática",
    institution: "Instituto Profesional IPP",
    period: "2017 - 2022",
    description: "Este fue mi gran salto al mundo tecnológico. Estudiar mientras trabajaba a tiempo completo y criaba a mis hijos fue un desafío enorme, pero cada noche de estudio, cada fin de semana sacrificado, valió completamente la pena. Durante estos años descubrí mi verdadera pasión: crear soluciones digitales que resuelvan problemas reales. La ingeniería informática me dio las bases sólidas que necesitaba para todo lo que vendría después en mi carrera.",
    skills: [
      "Resolución de problemas",
      "Pensamiento lógico",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Perseverancia"
    ],
    logo: "/img/miAprendizaje/images.png",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Bootcamp Desarrollo de Aplicaciones Full Stack Java Trainee",
    institution: "Talento Digital para Chile",
    period: "2022",
    description: "¡Mi primer bootcamp intensivo! Durante 480 horas me sumergí en el mundo de Java y aprendí a desarrollar aplicaciones tanto en Front como en Back end. Fue un desafío enorme pero increíblemente gratificante. Dominé toda la cadena de desarrollo de software, desde la arquitectura web hasta la implementación con Spring Framework. Este bootcamp me abrió las puertas a un mundo de posibilidades en organizaciones nacionales e internacionales.",
    skills: [
      "PROGRAMACIÓN BÁSICA EN JAVA - 144 Horas",
      "LENGUAJE DE CONSULTAS A UNA BASE DE DATOS - 56 Horas",
      "FUNDAMENTOS DEL DESARROLLO WEB - 72 Horas",
      "DESARROLLO DE APLICACIONES WEB DINÁMICAS CON JAVA - 64 Horas",
      "DESARROLLO DE APLICACIONES JEE CON SPRING FRAMEWORK - 108 Horas",
      "APRESTO LABORAL - 36 Horas"
    ],
    certificateLink: "https://talentodigitalparachile.cl/curso/desarrollo-de-aplicaciones-full-stack-java-trainee/",
    logo: "/img/miAprendizaje/talentoDigitalParaChile.png",
    color: "from-red-500 to-rose-600"
  },
  {
    title: "Bootcamp Desarrollo de Aplicaciones Full Stack JavaScript Trainee",
    institution: "Talento Digital para Chile",
    period: "2023",
    description: "Después de mi experiencia con Java, quise ampliar mis horizontes y sumergirme en el ecosistema de JavaScript. Este bootcamp de 402 horas fue una aventura fascinante donde aprendí a crear aplicaciones web completas utilizando Node.js. Lo que más disfruté fue descubrir cómo conectar el frontend con el backend y crear experiencias interactivas para los usuarios. Ahora puedo desarrollar proyectos completos desde cero y colaborar en equipos de desarrollo con confianza y creatividad.",
    skills: [
      "Lenguaje de Consultas a Una Base de Datos - 56 Horas",
      "Fundamentos del Desarrollo Web - 48 Horas",
      "Progamación Básica en JAVASCRIPT - 56 Horas",
      "Progamación Avanzada en JAVASCRIPT - 64 Horas",
      "El Framework Express - 56 Horas",
      "Desarrollo de Backend en NODE - 64 Horas",
      "Desarrollo de Aplicaciones WEB FRONTED - 48 Horas",
      "Acceso a Base de Datos con NODE - 44 Horas",
      "Apresto Laboral - 56 Horas"
    ],
    certificateLink: "https://talentodigitalparachile.cl/curso/desarrollo-de-aplicaciones-full-stack-javascript-trainee/",
    logo: "/img/miAprendizaje/talentoDigitalParaChile.png",
    color: "from-amber-500 to-yellow-600"
  },
  {
    title: "Especialización en IA y Automatizaciones",
    institution: "Postgrado Centeia",
    period: "2024 - Presente",
    description: "¡Este postgrado ha sido revelador! Cuando descubrí la IA, fue como encontrar una llave maestra para mi carrera. Estoy a punto de completar un programa intensivo donde he aprendido desde los fundamentos de la IA hasta técnicas avanzadas de prompt engineering, creación de agentes GPT, generación de imágenes, video y audio con IA. Lo más valioso ha sido dominar las automatizaciones con herramientas No-Code como Make, Zapier y N8N, que me permiten crear soluciones empresariales sin necesidad de programar. Me siento emocionada porque ahora puedo ofrecer servicios de consultoría en IA y liderar proyectos de transformación digital. La IA no solo ha transformado mi trabajo, sino mi forma de pensar sobre lo que es posible crear.",
    skills: [
      "Prompt Engineering Avanzado",
      "Creación de Agentes GPT",
      "Generación de Imágenes y Video con IA",
      "Automatizaciones con Make, Zapier y N8N",
      "Desarrollo No-Code de Chatbots",
      "Consultoría en IA y Automatizaciones",
      "Liderazgo en Transformación Digital"
    ],
    logo: "/img/miAprendizaje/centeia.png",
    color: "from-purple-500 to-pink-600"
  }
];

export default function Aprendizaje() {
  return (
    <section id="aprendizaje" className="py-20 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00c5c5]/10 mb-6">
            <Sparkles className="h-8 w-8 text-[#00c5c5]" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Aprender, Reinventarme, Prochechar
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cada línea de código que escribo y cada proceso que automatizo es parte de mi viaje.
            La inteligencia artificial no solo ha transformado mi forma de trabajar,
            también me ha enseñado a transformar mi mentalidad.
          </p>
        </div>

        {/* Medallas de Aprendizaje */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="border-b-2 border-[#00c5c5] pb-2">Mi Camino de Aprendizaje</span>
          </h3>

          <div className="flex flex-col items-center space-y-16">
            {/* Medallas en formato vertical (diseño original) */}
            {educationList.map((education, index) => (
              <div key={index} className="w-full max-w-4xl" id={`education-${index}`}>
                <div className="flex flex-col md:flex-row items-center">
                  {/* Medalla con aspecto de oro */}
                  <div className={`mb-8 md:mb-0 md:mr-8 relative ${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                    <div className="w-64 h-64 rounded-full p-1 shadow-xl transform hover:rotate-3 transition-transform duration-300"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, #ffd700, #f5bc00 40%, #e6a800 60%, #d4a000 80%)`,
                        boxShadow: `0 0 25px rgba(255, 215, 0, 0.5), inset 0 0 8px rgba(255, 215, 0, 0.6)`
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-white p-3 flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, #fff8e1, #ffe082)`
                        }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden border-4 flex items-center justify-center"
                          style={{
                            borderColor: '#ffd700',
                            backgroundColor: education.institution === "Instituto Profesional IPP" ? "white" :
                                          education.institution === "Talento Digital para Chile" ? "#4f1e5c" :
                                          education.institution === "Postgrado Centeia" ? "#131415" : "white",
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                          }}
                        >
                          <img
                            src={education.logo}
                            alt={education.institution}
                            className="w-4/5 h-4/5 object-contain"
                          />
                        </div>
                      </div>

                      {/* Cinta de la medalla */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-800 rounded-t-lg"></div>
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-t-lg"
                        style={{
                          boxShadow: '0 -2px 10px rgba(0,0,0,0.2)'
                        }}
                      ></div>

                      {/* Periodo */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {education.period}
                      </div>

                      {/* Detalles de la medalla - efecto de brillo */}
                      <div className="absolute top-0 left-0 w-full h-full rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={`bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 flex-1 relative overflow-hidden ${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                    {/* Decoración de fondo */}
                    <div className={`absolute ${index % 2 === 1 ? '-left-12' : '-right-12'} -top-12 w-40 h-40 opacity-5 rounded-full`}
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${education.color ? education.color.split(' ')[0].replace('from-', '') : 'blue'}, ${education.color ? education.color.split(' ')[1].replace('to-', '') : 'indigo'})`
                      }}
                    ></div>

                    <div className="relative z-10">
                      <h3 className="font-bold text-2xl text-gray-800 mb-2">{education.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Award className="h-5 w-5 mr-2 text-[#00c5c5]" />
                        <span className="font-semibold">{education.institution}</span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {education.description}
                      </p>

                      {/* Habilidades */}
                      {education.skills && (
                        <div className="mt-4 flex flex-wrap gap-2 mb-6">
                          {education.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-block text-xs px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: education.color ? education.color.split(' ')[0].replace('from-', '') + '20' : 'blue20',
                                color: education.color ? education.color.split(' ')[1].replace('to-', '') : 'indigo'
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Enlace a certificación si existe */}
                      {education.certificateLink && (
                        <div className="mt-4">
                          <a
                            href={education.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg text-white hover:shadow-md transition-shadow"
                            style={{ backgroundImage: `linear-gradient(to right, ${education.color ? education.color.split(' ')[0].replace('from-', '') : 'blue'}, ${education.color ? education.color.split(' ')[1].replace('to-', '') : 'indigo'})` }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver certificación
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

        {/* Filosofía de Aprendizaje */}
        <div className="mt-20 relative">
          {/* Medalla grande de filosofía */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#00c5c5] to-[#00a5a5] p-1 shadow-xl z-10">
            <div className="w-full h-full rounded-full bg-white p-2 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#00c5c5]/10 flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-[#00c5c5]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 pt-20 shadow-lg border-2 border-gray-200 relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-gradient-to-br from-[#00c5c5] to-[#00a5a5] opacity-5 rounded-full"></div>

            <blockquote className="text-xl italic text-gray-700 relative z-10 mb-8 text-center">
              "El aprendizaje no es solo acumular conocimientos, sino adaptarse, equivocarse, reinventarse.
              La IA me mostró que incluso los procesos más complejos pueden volverse simples si sabes cómo abordarlos...
              y sobre todo, si sigues <span className='font-bold text-[#00c5c5]'>prochechando</span> cada día."
            </blockquote>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Mi filosofía de aprendizaje</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Creo profundamente en el poder del <span className="font-semibold text-[#00c5c5]">"prochechando"</span> —
                  esa zona donde estás procesando nuevas ideas, equivocándote, mejorando, y echándole todas las ganas
                  aunque no tengas todo claro aún.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Gracias a la inteligencia artificial descubrí que no tengo que hacerlo todo sola ni de la forma más difícil.
                  La IA me ayudó a liberar tiempo, automatizar procesos y sobre todo, acompañar a otros en su camino de aprendizaje.
                  No se trata de saberlo todo, sino de tener el valor de comenzar.
                </p>

                <div className="mt-6 hidden md:block">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full font-medium">
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span>Aprendiendo y prochechando con IA</span>
                  </div>
                </div>
              </div>

              {/* Espacio para imagen de concepto "Procechando" */}
              <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/img/prochechando/prochechando.png"
                      alt="Concepto Procechando"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Medallas pequeñas decorativas */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Star className="h-8 w-8 text-yellow-500" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Award className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:hidden flex justify-center w-full">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full font-medium">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Aprendiendo y prochechando con IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
