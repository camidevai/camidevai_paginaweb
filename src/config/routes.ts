/**
 * Configuración de rutas para la aplicación
 * Aunque actualmente es una SPA, esta estructura permite escalar a múltiples páginas
 */

import { SECTION_IDS } from './constants';

// Definición de rutas internas (anclas)
export const INTERNAL_ROUTES = {
  HOME: `#${SECTION_IDS.HOME}`,
  HISTORY: `#${SECTION_IDS.HISTORY}`,
  JOURNEY: `#${SECTION_IDS.JOURNEY}`,
  LEARNING: `#${SECTION_IDS.LEARNING}`,
  SERVICES: `#${SECTION_IDS.SERVICES}`,
  COLLABORATIONS: `#${SECTION_IDS.COLLABORATIONS}`,
  CONTACT: `#${SECTION_IDS.CONTACT}`,
};

// Definición de rutas externas
export const EXTERNAL_ROUTES = {
  INSTAGRAM: 'https://www.instagram.com/camidevai/',
  LINKEDIN: 'https://www.linkedin.com/in/camilabanares/',
  FACEBOOK: 'https://m.facebook.com/people/Camicatura-Digital/61564523003680/',
  TIKTOK: 'https://www.tiktok.com/@camidevai',
  DONATION: 'https://www.paypal.com/donate/?hosted_button_id=BE44AS4XZZHDW',
  EMAIL: 'mailto:camidevai@gmail.com',
};

// Definición de rutas para navegación principal
export const NAVIGATION_ITEMS = [
  { name: 'Inicio', href: INTERNAL_ROUTES.HOME },
  { name: 'Mi Historia', href: INTERNAL_ROUTES.HISTORY },
  { name: 'Mi Camino', href: INTERNAL_ROUTES.JOURNEY },
  { name: 'Aprendizaje', href: INTERNAL_ROUTES.LEARNING },
  { name: 'Servicios', href: INTERNAL_ROUTES.SERVICES },
  { name: 'Colaboraciones', href: INTERNAL_ROUTES.COLLABORATIONS },
  { name: 'Contacto', href: INTERNAL_ROUTES.CONTACT },
];

export default {
  INTERNAL_ROUTES,
  EXTERNAL_ROUTES,
  NAVIGATION_ITEMS,
};
