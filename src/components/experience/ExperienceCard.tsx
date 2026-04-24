import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import { WorkExperience } from './types';

interface ExperienceCardProps {
  experience: WorkExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="font-semibold text-xl text-gray-800 mb-2">
          {experience.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Building2 className="h-4 w-4 mr-2 text-[#00c5c5]" />
          {experience.company}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-2 text-[#00c5c5]" />
          {experience.location} | {experience.period}
        </div>
      </div>
      
      <ul className="space-y-2 text-gray-600">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#00c5c5] mr-2">•</span>
            {responsibility}
          </li>
        ))}
      </ul>
      
      {experience.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#00c5c5]/10 text-[#00c5c5] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}