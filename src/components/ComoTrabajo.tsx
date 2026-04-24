import React from 'react';
import { Search, FileText, Cog, Rocket, ArrowRight, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pasos = [
  {
    numero: '01',
    icono: Search,
    titulo: 'Diagnóstico inicial gratuito',
    descripcion: 'Conversamos 30 minutos para entender tu proyecto, tus retos y objetivos. Sin costo, sin compromiso.',
    color: 'from-[#00c5c5] to-[#00a5a5]',
    light: 'bg-[#00c5c5]/10 text-[#00c5c5]',
  },
  {
    numero: '02',
    icono: FileText,
    titulo: 'Propuesta personalizada',
    descripcion: 'Diseño una solución a medida con tiempos, herramientas y presupuesto claro. Sin letra pequeña.',
    color: 'from-violet-500 to-purple-600',
    light: 'bg-violet-500/10 text-violet-400',
  },
  {
    numero: '03',
    icono: Cog,
    titulo: 'Implementación con seguimiento',
    descripcion: 'Ejecuto el proyecto con reportes de avance y comunicación constante. Siempre sabes cómo va todo.',
    color: 'from-amber-500 to-orange-500',
    light: 'bg-amber-500/10 text-amber-400',
  },
  {
    numero: '04',
    icono: Rocket,
    titulo: 'Entrega + soporte post-lanzamiento',
    descripcion: 'Te acompaño para que todo funcione perfectamente y tu equipo adopte la solución con confianza.',
    color: 'from-emerald-500 to-teal-500',
    light: 'bg-emerald-500/10 text-emerald-400',
  },
];

export default function ComoTrabajo() {
  const navigate = useNavigate();

  return (
    <section id="como-trabajo" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#00c5c5] uppercase mb-3">
            Mi proceso
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              ¿Cómo trabajamos juntos?
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Un proceso claro y transparente desde el primer contacto hasta la entrega final.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, i) => {
            const Icon = paso.icono;
            return (
              <div key={i} className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                {/* Línea conectora (desktop) */}
                {i < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-gray-200 z-10 -translate-y-1/2" />
                )}

                {/* Número */}
                <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none leading-none block mb-3">
                  {paso.numero}
                </span>

                {/* Icono */}
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${paso.light} mb-4`}>
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-bold text-gray-800 mb-2 text-sm leading-snug">{paso.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">¿Listo para empezar? El primer paso es gratis.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/contactame')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#00c5c5]/20"
            >
              Solicitar diagnóstico gratis
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uz1JFoc9bKbUpVzeIlg9eFnUKXaBtydshlgQQDQPHMQzLc1I-vm4bvW6GK0zo-gGcH4spWo3l?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#00c5c5] text-[#00c5c5] font-semibold rounded-xl hover:bg-[#00c5c5]/5 transition-all"
            >
              <CalendarDays className="h-4 w-4" />
              Agendar llamada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
