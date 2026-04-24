/**
 * Función para desplazarse al formulario de contacto
 * Esta función primero se desplaza a la sección de contacto y luego al formulario específico
 */
export const scrollToContactForm = () => {
  // Primero nos desplazamos a la sección de contacto
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Después de un pequeño retraso, nos desplazamos al formulario
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Opcional: resaltar el formulario brevemente
        contactForm.classList.add('ring-4', 'ring-[#00c5c5]', 'ring-opacity-50');
        setTimeout(() => {
          contactForm.classList.remove('ring-4', 'ring-[#00c5c5]', 'ring-opacity-50');
        }, 1500);
      }
    }, 500);
  }
};
