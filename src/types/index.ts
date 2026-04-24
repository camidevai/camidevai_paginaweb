/**
 * Tipos compartidos para toda la aplicación
 */

// Tipo para elementos de educación
export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  certificateLink?: string;
}

// Tipo para experiencia laboral
export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

// Tipo para servicios
export interface Service {
  titulo: string;
  descripcion: string;
  icono: React.ElementType;
  color: string;
  caracteristicas: string[];
}

// Tipo para redes sociales
export interface SocialLink {
  name: string;
  icon: React.ElementType;
  followers: string;
  url: string;
  color: string;
}

// Tipo para colaboraciones con marcas
export interface Brand {
  nombre: string;
  logo: string;
  descripcion: string;
  enlace: string;
}
