import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true';

export default function GoogleCalendarButton() {
  const targetRef  = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Evita doble inicialización (React StrictMode ejecuta useEffect 2 veces en dev)
    if (initializedRef.current) return;

    if (!document.querySelector('link[href*="scheduling-button-script.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const init = () => {
      if (!targetRef.current || initializedRef.current) return;
      // Si el target ya tiene contenido, no volver a inyectar
      if (targetRef.current.childElementCount > 0) return;
      if (window.calendar?.schedulingButton) {
        initializedRef.current = true;
        window.calendar.schedulingButton.load({
          url: CALENDAR_URL,
          color: '#00c5c5',
          label: 'Reservar una cita',
          target: targetRef.current,
        });
      }
    };

    if (window.calendar?.schedulingButton) {
      init();
      return;
    }

    if (!document.querySelector('script[src*="scheduling-button-script.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = init;
      document.head.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.calendar?.schedulingButton) {
          clearInterval(interval);
          init();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return <div ref={targetRef} />;
}
