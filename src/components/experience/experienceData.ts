import { WorkExperience } from './types';

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