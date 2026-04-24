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
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector('link[href*="scheduling-button-script.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const init = () => {
      if (targetRef.current && window.calendar?.schedulingButton) {
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
