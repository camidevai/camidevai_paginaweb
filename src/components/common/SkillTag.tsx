import React from 'react';

interface SkillTagProps {
  text: string;
  className?: string;
}

/**
 * Componente reutilizable para mostrar etiquetas de habilidades
 * @param {string} text - El texto a mostrar en la etiqueta
 * @param {string} className - Clases CSS adicionales (opcional)
 */
const SkillTag: React.FC<SkillTagProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`px-3 py-1 bg-[#00c5c5]/10 text-[#00c5c5] rounded-full text-sm ${className}`}
    >
      {text}
    </span>
  );
};

export default SkillTag;
