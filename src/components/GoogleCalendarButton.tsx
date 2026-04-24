import { CalendarDays } from 'lucide-react';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true';

export default function GoogleCalendarButton() {
  return (
    <a
      href={CALENDAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00c5c5] hover:bg-[#00a5a5] text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-[#00c5c5]/20"
    >
      <CalendarDays className="h-4 w-4" />
      Reservar una cita
    </a>
  );
}
