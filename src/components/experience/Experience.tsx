import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronRight, Building2, Calendar } from 'lucide-react';
import { workExperiences } from './experienceData';

export default function Experience() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleMainAccordion = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      setOpenIndices([]);
    }
  };

  const toggleSubAccordion = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="formación" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado del Acordeón Principal */}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={toggleMainAccordion}
            className="flex items-center justify-center w-full text-left focus:outline-none transition-colors duration-300 hover:bg-gray-100 rounded-lg p-4 cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="experience-content"
            role="button"
          >
            <Briefcase className="h-8 w-8 text-[#00c5c5] mr-3" />
            <h2 className="text-3xl font-bold flex-grow">
              <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
                Experiencia Laboral
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
          <div id="experience-content" className="space-y-4">
            {workExperiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSubAccordion(index)}
                  className="w-full flex items-center justify-between focus:outline-none transition-colors duration-300 hover:bg-gray-100 rounded-lg p-3 cursor-pointer"
                  aria-expanded={openIndices.includes(index)}
                  aria-controls={`experience-detail-${index}`}
                  role="button"
                >
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Building2 className="h-4 w-4 mr-2 text-[#00c5c5]" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-[#00c5c5]" />
                      {exp.location} | {exp.period}
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
                  <div id={`experience-detail-${index}`} className="mt-3 ml-6">
                    <h4 className="font-semibold text-lg text-gray-700 mb-2">Responsabilidades:</h4>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-[#00c5c5] mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    
                    {exp.technologies && (
                      <>
                        <h4 className="font-semibold text-lg text-gray-700 mb-2">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#00c5c5]/10 text-[#00c5c5] rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
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