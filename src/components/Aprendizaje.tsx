import { ExternalLink, Sparkles, CheckCircle, Download } from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status?: string;
  description: string;
  skills: string[];
  certificateLink?: string;
  certificatePdf?: string;
  logo: string;
  color: string;
  logoBg: string;
}

const educationList: EducationItem[] = [
  {
    title: "Ingeniera en Informática",
    institution: "Instituto Profesional IPP",
    period: "2017 - 2022",
    description: "Estudié mientras trabajaba a tiempo completo y criaba a mis hijos. La ingeniería informática me dio las bases sólidas para todo lo que vendría después.",
    skills: ["Pensamiento lógico", "Resolución de problemas", "Adaptabilidad", "Perseverancia"],
    logo: "/img/miAprendizaje/images.png",
    color: "from-blue-500 to-indigo-600",
    logoBg: "white"
  },
  {
    title: "Full Stack Java Trainee",
    institution: "Talento Digital para Chile",
    period: "2022",
    description: "480 horas intensivas de Java Full Stack: arquitectura web, Spring Framework y desarrollo front/backend. Mi primer gran paso al desarrollo profesional.",
    skills: ["Java", "Spring Framework", "SQL", "Desarrollo Web"],
    certificateLink: "https://talentodigitalparachile.cl/curso/desarrollo-de-aplicaciones-full-stack-java-trainee/",
    logo: "/img/miAprendizaje/talentoDigitalParaChile.png",
    color: "from-red-500 to-rose-600",
    logoBg: "#4f1e5c"
  },
  {
    title: "Full Stack JavaScript Trainee",
    institution: "Talento Digital para Chile",
    period: "2023",
    description: "402 horas con JavaScript y Node.js. Aprendí a crear aplicaciones completas conectando frontend con backend con confianza y creatividad.",
    skills: ["JavaScript", "Node.js", "Express", "Frontend"],
    certificateLink: "https://talentodigitalparachile.cl/curso/desarrollo-de-aplicaciones-full-stack-javascript-trainee/",
    logo: "/img/miAprendizaje/talentoDigitalParaChile.png",
    color: "from-amber-500 to-yellow-600",
    logoBg: "#4f1e5c"
  },
  {
    title: "Especialización en IA y Automatizaciones",
    institution: "Postgrado Centeia",
    period: "2024",
    status: "Finalizado",
    description: "Postgrado en IA: prompt engineering avanzado, agentes GPT, generación de contenido con IA y automatizaciones No-Code con Make, Zapier y N8N.",
    skills: ["Prompt Engineering", "Agentes GPT", "Make / N8N / Zapier", "Transformación Digital"],
    certificatePdf: "/img/miCamino/Certificado de Finalización-11.pdf",
    logo: "/img/miAprendizaje/centeia.png",
    color: "from-purple-500 to-pink-600",
    logoBg: "#131415"
  }
];

export default function Aprendizaje() {
  return (
    <section id="aprendizaje" className="py-14 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00c5c5]/10 mb-4">
            <Sparkles className="h-6 w-6 text-[#00c5c5]" />
          </div>
          <h2 className="text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Aprender, Reinventarme, Prochechar
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Cada línea de código y proceso automatizado es parte de mi viaje.
            La IA transformó mi forma de trabajar y de pensar.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${edu.color} p-4 flex items-center gap-3`}>
                <div
                  className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ backgroundColor: edu.logoBg }}
                >
                  <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white text-sm leading-tight">{edu.title}</h3>
                  <p className="text-white/80 text-xs mt-0.5 truncate">{edu.institution}</p>
                </div>
                {edu.status === "Finalizado" ? (
                  <span className="flex-shrink-0 inline-flex items-center gap-1 bg-white/20 border border-white/40 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    <CheckCircle className="h-3 w-3" />
                    Finalizado
                  </span>
                ) : (
                  <span className="flex-shrink-0 text-white/80 text-xs font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-4 flex flex-col flex-1">
                {edu.status === "Finalizado" && (
                  <p className="text-xs text-gray-400 mb-2">{edu.period}</p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{edu.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {(edu.certificateLink || edu.certificatePdf) && (
                  <div className="mt-auto pt-1 flex flex-wrap gap-2">
                    {edu.certificateLink && (
                      <a
                        href={edu.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white bg-gradient-to-r ${edu.color} hover:opacity-90 transition-opacity`}
                      >
                        <ExternalLink className="h-3 w-3" />
                        Ver certificación
                      </a>
                    )}
                    {edu.certificatePdf && (
                      <a
                        href={edu.certificatePdf}
                        download
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 transition-opacity"
                      >
                        <Download className="h-3 w-3" />
                        Descargar certificado
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Filosofía - compact */}
        <div className="mt-6 bg-white rounded-xl p-5 shadow-md border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="/img/prochechando/prochechando.png"
                alt="Prochechando"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "El aprendizaje no es solo acumular conocimientos, sino adaptarse, equivocarse, reinventarse.
                La IA me enseñó que incluso lo complejo puede volverse simple si sigues{' '}
                <span className="font-bold text-[#00c5c5]">prochechando</span> cada día."
              </p>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full font-medium">
                  <Sparkles className="h-3 w-3" />
                  Aprendiendo y prochechando con IA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
