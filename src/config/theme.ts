/**
 * Configuración del tema para la aplicación
 * Centraliza colores, espaciados y otros valores de diseño
 */

export const theme = {
  colors: {
    primary: {
      light: '#00c5c5',
      DEFAULT: '#00a5a5',
      dark: '#009999',
    },
    secondary: {
      light: '#ffcc00',
      DEFAULT: '#e6b800',
      dark: '#cc9900',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    white: '#ffffff',
    black: '#000000',
  },
  
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  
  // Gradientes comunes
  gradients: {
    primary: 'from-[#00c5c5] to-[#00a5a5]',
    secondary: 'from-yellow-400 to-yellow-500',
    blue: 'from-blue-500 to-indigo-600',
    pink: 'from-pink-500 to-rose-500',
    amber: 'from-amber-500 to-orange-500',
  },
  
  // Sombras
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Transiciones
  transitions: {
    DEFAULT: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
};

/**
 * Función para obtener un valor del tema
 * @param {string} path - Ruta al valor (ej: 'colors.primary.DEFAULT')
 * @returns {any} - Valor del tema
 */
export const getThemeValue = (path: string): any => {
  const keys = path.split('.');
  return keys.reduce((obj, key) => {
    return obj && obj[key] !== undefined ? obj[key] : undefined;
  }, theme as any);
};

export default theme;
