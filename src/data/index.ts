import { EducationItem, WorkExperience, Service, SocialLink, Brand } from '../types';
import { 
  Bot, 
  Globe, 
  Video, 
  Presentation, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageSquare,
  Heart,
  Star,
  Rocket
} from 'lucide-react';

/**
 * Datos de educación
 */
export const educationList: EducationItem[] = [
  {
    title: "Ingeniera en Informática",
    institution: "Instituto Profesional IPP",
    period: "2017 - 2022",
    description: "Este fue mi salto al mundo tecnológico. Estudiar mientras trabajaba y criaba a mis hijos fue un desafío enorme, pero cada noche de estudio valió la pena. Aquí descubrí mi pasión por crear soluciones digitales.",
    skills: [
      "Resolución de problemas",
      "Pensamiento lógico",
      "Trabajo en equipo",
      "Adaptabilidad",
      "Perseverancia"
    ]
  },
  {
    title: "Bootcamp de Desarrollo Full Stack",
    institution: "Talento Digital para Chile",
    period: "2022",
    description: "Una inmersión intensiva que me permitió consolidar conocimientos prácticos. Aquí aprendí que la tecnología es, ante todo, una herramienta para resolver problemas reales de personas reales.",
    skills: [
      "Desarrollo web",
      "Bases de datos",
      "Metodologías ágiles",
      "Diseño de interfaces",
      "Trabajo colaborativo"
    ],
    certificateLink: "https://www.credly.com/badges/21259cbb-a1ab-4f71-b55d-34e33ff6f6e1/linked_in_profile"
  },
  {
    title: "Especialización en IA y Automatizaciones",
    institution: "Aprendizaje Continuo",
    period: "2024 - Presente",
    description: "Cuando descubrí la IA, fue como encontrar una llave maestra. De repente, todas esas tareas que me tomaban horas podían automatizarse. La IA no solo transformó mi trabajo, sino mi forma de pensar sobre lo que es posible crear.",
    skills: [
      "Herramientas de IA generativa",
      "Automatización de procesos",
      "Prompt engineering",
      "Creación de flujos de trabajo",
      "Integración de sistemas"
    ]
  }
];

/**
 * Datos de experiencia laboral
 */
export const workExperiences: WorkExperience[] = [
  {
    title: 'Ingeniera de Proyectos',
    company: 'TUXPAN',
    location: 'Viña del Mar',
    period: 'Octubre 2022 – Actual',
    responsibilities: [
      'Diseñé y desarrollé sistemas tecnológicos con Node.js y Python, cumpliendo con los objetivos definidos y mejorando la calidad de los procesos internos.',
      'Contribuí en la migración de plataformas y servicios para Transbank, desarrollando APIs REST y aplicando prácticas de CI/CD.',
      'Trabajé en proyectos interconectados para FLOW, asegurando una integración eficiente y funcionalidad alineada con los requerimientos del cliente.'
    ],
    technologies: ['Node.js', 'Python', 'REST APIs', 'Jenkins', 'Kiuwan', 'AWS Pipeline']
  },
  {
    title: 'Center Junior',
    company: 'NTT Data Chile Centers Ltda',
    location: 'Temuco',
    period: 'Enero 2022 – Octubre 2022',
    responsibilities: [
      'Participé en el desarrollo del proyecto CMAOD, implementando soluciones en Java, JavaScript y Liferay según especificaciones.',
      'Utilicé metodologías ágiles como Scrum y herramientas de CI/CD para garantizar la entrega eficiente de los proyectos asignados.'
    ],
    technologies: ['Java', 'JavaScript', 'Liferay', 'Scrum', 'CI/CD']
  },
  {
    title: 'Promotora, Secretaria y Jefa de Sucursal',
    company: 'Clínica Dental Pacífico',
    location: 'Temuco',
    period: 'Enero 2013 – Enero 2022',
    responsibilities: [
      'Realicé diversas tareas administrativas y de gestión según las políticas de la empresa, brindando un servicio al cliente de calidad.'
    ]
  }
];

/**
 * Datos de servicios
 */
export const servicios: Service[] = [
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

/**
 * Datos de redes sociales
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    icon: Instagram,
    followers: '263K',
    url: 'https://www.instagram.com/camidevai/',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    followers: '165K',
    url: 'https://m.facebook.com/people/Camicatura-Digital/61564523003680/',
    color: 'bg-blue-500'
  },
  {
    name: 'TikTok',
    icon: MessageSquare,
    followers: '75.8K',
    url: 'https://www.tiktok.com/@camidevai',
    color: 'bg-black'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    followers: '3.5K',
    url: 'https://www.linkedin.com/in/camilabanares/',
    color: 'bg-blue-600'
  }
];

/**
 * Datos de colaboraciones con marcas
 */
export const marcas: Brand[] = [
  {
    nombre: "TripleTen",
    logo: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    descripcion: "Colaboración para promover la educación en tecnología y programación, compartiendo recursos y oportunidades para nuevos talentos.",
    enlace: "https://tripleten.com/"
  },
  {
    nombre: "InVideo",
    logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    descripcion: "Creación de contenido educativo sobre herramientas de edición de video potenciadas por IA para creadores de contenido.",
    enlace: "https://invideo.io/"
  },
  {
    nombre: "NIM",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    descripcion: "Difusión de herramientas de inteligencia artificial para automatización y mejora de procesos creativos y empresariales.",
    enlace: "https://nim.ai/"
  },
  {
    nombre: "NutryFactory",
    logo: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    descripcion: "Promoción de soluciones tecnológicas para el sector de nutrición y bienestar, enfocadas en personalización mediante IA.",
    enlace: "https://nutryfactory.com/"
  }
];

/**
 * Datos para la sección de historia
 */
export const historiaItems = [
  {
    titulo: "El cambio",
    descripcion: "Pasar de la clínica dental a la tecnología fue como aprender un nuevo idioma. Cada concepto era un desafío, pero mi motivación por crear un mejor futuro para mis hijos me mantuvo firme.",
    icono: Heart,
  },
  {
    titulo: "El descubrimiento",
    descripcion: "Descubrí mi pasión por el diseño y la programación. Pero fue la inteligencia artificial la que realmente transformó mi forma de trabajar y de ver el mundo. De repente, todo era posible.",
    icono: Star,
  },
  {
    titulo: "La misión",
    descripcion: "Hoy mi misión es clara: empoderar a mujeres y personas que vienen de otros mundos a descubrir la tecnología. Si yo pude hacerlo, tú también puedes. Estamos juntos en este viaje.",
    icono: Rocket,
  }
];
