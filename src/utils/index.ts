/**
 * Funciones de utilidad para la aplicación
 */

/**
 * Función para desplazarse suavemente a un elemento por su ID
 * @param {string} id - ID del elemento al que desplazarse
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Función para formatear fechas
 * @param {string} dateString - Fecha en formato string
 * @returns {string} - Fecha formateada
 */
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

/**
 * Función para truncar texto
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Función para validar email
 * @param {string} email - Email a validar
 * @returns {boolean} - Si el email es válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
