import React, { useState } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  skills?: string[];
  certificateLink?: string; // Campo opcional para el enlace de certificación
}

const educationList: EducationItem[] = [
  
  {
    title: "Posgrado en Inteligencia Artificial y Automatizaciones",
    institution: "CenteIA Education",
    period: "dic. 2024 - jun. 2025",
    skills: [
      "Herramientas de IA generativa",
      "Automatización de procesos con Make, Zapier y Python",
      "Desarrollo y gestión de agentes inteligentes",
      "Implementación de modelos de aprendizaje automático y profundo",
      "Integración de APIs de IA en proyectos reales",
      "Despliegue de aplicaciones en la nube",
      "Optimización de flujos de trabajo mediante RPA",
      "Prompt engineering avanzado",
      "Análisis de datos con IA",
      "Creación de chatbots personalizados"
    ]
  },
  {
    title: "Prompt Engineering",
    institution: "Learning Heroes - IA Heroes",
    period: "ago. 2024 - dic. 2025",
    skills: [
      "Prompt Engineering avanzado para IA generativa",
      "Automatización de flujos de trabajo con herramientas de IA",
      "Dominio de herramientas como ChatGPT, MidJourney y DALL·E",
      "Integración de IA en estrategias empresariales",
      "Creación de chatbots personalizados y asistentes virtuales",
      "Optimización de tareas repetitivas mediante RPA",
      "Desarrollo de aplicaciones basadas en Machine Learning",
      "Diseño de sistemas IA para la mejora de procesos",
      "Gestión de comunidades de aprendizaje colaborativo",
      "Análisis y visualización de datos con herramientas de IA"
    ]
  },
  {
    title: "Bootcamp de Desarrollo de Aplicaciones Full Stack JavaScript",
    institution: "Instituto Profesional AIEP - Talento Digital para Chile",
    period: "ene. 2022 - ago. 2022",
    skills: [
      "Spring Boot", 
      "Bases de datos relacionales", 
      "APIs RESTful", 
      "Git y GitHub", 
      "Metodologías ágiles", 
      "Diseño de interfaces funcionales"
    ],
    certificateLink: "https://www.acreditta.com/credential/38dde3ae-e86c-4877-9d25-afccc5b8c58d?utm_source=linkedin_profile&resource_type=badge&resource=38dde3ae-e86c-4877-9d25-afccc5b8c58d" // Enlace añadido
  },
  {
    title: "Bootcamp Desarrollo de Aplicaciones Full Stack Java",
    institution: "Talento Digital para Chile",
    period: "ene. 2022 - dic. 2022",
    skills: [
      "Programación en Java",
      "Lenguaje de consultas a bases de datos (SQL)",
      "Fundamentos del desarrollo web",
      "Desarrollo de aplicaciones web dinámicas con Java",
      "Desarrollo de aplicaciones JEE con Spring Framework",
      "Apresto laboral",
      "Trabajo en equipo y resolución de problemas",
      "Desarrollo de proyectos con metodología ágil"
    ],
    certificateLink: "https://www.credly.com/badges/21259cbb-a1ab-4f71-b55d-34e33ff6f6e1/linked_in_profile" // Enlace añadido
  },
  {
    title: "Ingeniero en Informática mención Ciberseguridad",
    institution: "Instituto Profesional IPP",
    period: "nov. 2017 - jun. 2022",
    skills: [
      "Identificación y mitigación de amenazas",
      "Implementación de medidas de seguridad",
      "Análisis forense digital",
      "Gestión de incidentes de seguridad",
      "Desarrollo de políticas de seguridad"
    ]
  }
];

export default function Education() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleMainAccordion = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setOpenIndices([]); // Cerrar todos los sub-acordeones al cerrar el acordeón principal
    }
  };

  const toggleSubAccordion = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section  id="formación" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado del Acordeón Principal */}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={toggleMainAccordion}
            className="flex items-center justify-center w-full text-left focus:outline-none transition-colors duration-300 hover:bg-gray-100 rounded-lg p-4 cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="education-content"
            role="button"
          >
            <GraduationCap className="h-8 w-8 text-[#00c5c5] mr-3" />
            <h2 className="text-3xl font-bold flex-grow">
              <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
                Formación Académica
              </span>
            </h2>
            <ChevronDown 
              className={`h-6 w-6 text-[#00c5c5] transition-transform duration-300 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* Contenido del Acordeón Principal */}
        {isOpen && (
          <div id="education-content" className="space-y-4">
            {educationList.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSubAccordion(index)}
                  className="w-full flex items-center justify-between focus:outline-none transition-colors duration-300 hover:bg-gray-100 rounded-lg p-3 cursor-pointer"
                  aria-expanded={openIndices.includes(index)}
                  aria-controls={`education-detail-${index}`}
                  role="button"
                >
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">
                      {edu.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Award className="h-4 w-4 mr-2 text-[#00c5c5]" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-[#00c5c5]" />
                      {edu.period}
                    </div>
                  </div>
                  <ChevronRight 
                    className={`h-5 w-5 text-[#00c5c5] transition-transform duration-300 ${
                      openIndices.includes(index) ? 'transform rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Contenido del Sub-Acordeón */}
                {openIndices.includes(index) && (
                  <div id={`education-detail-${index}`} className="mt-3 ml-6">
                    {edu.description && (
                      <p className="text-gray-700 mb-2">{edu.description}</p>
                    )}
                    {edu.curriculum && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-lg text-gray-700">Plan de Estudios:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {edu.curriculum.map((subject, subjIndex) => (
                            <li key={subjIndex}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.admissionRequirements && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-lg text-gray-700">Requisitos de Admisión:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {edu.admissionRequirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.careerOutcomes && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-lg text-gray-700">Salidas Profesionales:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {edu.careerOutcomes.map((career, careerIndex) => (
                            <li key={careerIndex}>{career}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.skills && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-lg text-gray-700">Habilidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-[#00c5c5]/10 text-[#00c5c5] rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Renderizar el enlace de la certificación si existe */}
                    {edu.certificateLink && (
                      <div className="mt-4">
                        <a
                          href={edu.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#00c5c5] text-white rounded-full hover:bg-[#00a5a5] transition-colors duration-300"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Ver Certificación
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
