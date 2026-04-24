import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  bgColor?: string;
  children: ReactNode;
}

/**
 * Componente contenedor para secciones con título, subtítulo e icono
 * @param {string} id - ID para navegación
 * @param {string} title - Título de la sección
 * @param {string} subtitle - Subtítulo opcional
 * @param {LucideIcon} icon - Icono opcional
 * @param {string} bgColor - Color de fondo (clase CSS)
 * @param {ReactNode} children - Contenido de la sección
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  icon: Icon,
  bgColor = 'bg-white',
  children
}) => {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00c5c5]/10 mb-6">
              <Icon className="h-8 w-8 text-[#00c5c5]" />
            </div>
          )}
          
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              {title}
            </span>
          </h2>
          
          {subtitle && (
            <p className="text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
