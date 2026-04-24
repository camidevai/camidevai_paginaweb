/**
 * Constantes globales para la aplicación
 */

// Información de contacto
export const CONTACT_INFO = {
  EMAIL: 'camidevai@gmail.com',
  LOCATION: 'Chile',
  DONATION_LINK: 'https://www.paypal.com/donate/?hosted_button_id=BE44AS4XZZHDW',
};

// Configuración de EmailJS
export const EMAIL_JS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
};

// IDs de secciones para navegación
export const SECTION_IDS = {
  HOME: 'inicio',
  HISTORY: 'mi-historia',
  JOURNEY: 'mi-camino',
  LEARNING: 'aprendizaje',
  SERVICES: 'servicios',
  COLLABORATIONS: 'colaboraciones',
  CONTACT: 'contacto',
};

// Mensajes de alerta
export const MESSAGES = {
  EMAIL_SUCCESS: 'Correo enviado correctamente',
  EMAIL_ERROR: 'Error al enviar el correo: ',
  FORM_VALIDATION: 'Por favor completa todos los campos requeridos',
};

// Configuración de meta tags
export const META_TAGS = {
  TITLE: 'CamiDevAI - Camila Bañares',
  DESCRIPTION: 'Ingeniera en Informática especializada en IA y creación de contenido tecnológico',
  KEYWORDS: 'IA, inteligencia artificial, tecnología, desarrollo web, automatización',
  AUTHOR: 'Camila Bañares',
};

// Frases inspiradoras
export const INSPIRATIONAL_QUOTES = [
  '"Procechando" — procesando y echándole ganas al mismo tiempo',
  'Si yo pude hacerlo, tú también puedes',
  'La tecnología es más poderosa cuando nos conecta, no cuando nos aísla',
  'El aprendizaje nunca termina. Cada día es una oportunidad para descubrir algo nuevo',
];

export default {
  CONTACT_INFO,
  EMAIL_JS_CONFIG,
  SECTION_IDS,
  MESSAGES,
  META_TAGS,
  INSPIRATIONAL_QUOTES,
};
