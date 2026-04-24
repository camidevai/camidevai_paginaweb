import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const preguntas = [
  {
    q: '¿Cuánto cuesta un servicio?',
    a: 'Cada proyecto es único, por eso no manejo tarifas fijas. Primero hacemos un diagnóstico gratuito de 30 minutos para entender tu necesidad, y luego te entrego una propuesta personalizada con el precio exacto y sin sorpresas. No hay letra pequeña.',
  },
  {
    q: '¿Trabajas con empresas fuera de Chile?',
    a: 'Sí, trabajo de forma 100% remota con clientes de toda Latinoamérica y España. La distancia no es un problema: la comunicación es fluida por videollamada, correo y plataformas de gestión de proyectos.',
  },
  {
    q: '¿Cuánto tiempo toma implementar una automatización?',
    a: 'Depende de la complejidad. Una automatización simple puede estar lista en 3-5 días hábiles; proyectos más elaborados pueden tomar entre 2 y 4 semanas. En la reunión inicial definimos tiempos concretos para tu caso.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar contigo?',
    a: 'Para nada. Me especializo en hacer la tecnología accesible y comprensible. Te explico todo en términos simples, sin jerga técnica, y me aseguro de que tú y tu equipo entiendan y puedan usar lo que implementamos.',
  },
  {
    q: '¿Qué herramientas de IA usas?',
    a: 'Uso Make (Integromat), Zapier y N8N para automatizaciones; ChatGPT, Claude y Gemini para soluciones de IA generativa; y herramientas como Notion AI, HubSpot y Airtable según las necesidades del proyecto. Siempre elijo las herramientas que mejor se adaptan a tu caso.',
  },
  {
    q: '¿Incluye soporte después de la entrega?',
    a: 'Sí. Todos mis proyectos incluyen un período de soporte post-entrega para resolver dudas, ajustar detalles y asegurar que todo funcione correctamente. Además, capacito a tu equipo para que puedan usar y mantener la solución de forma autónoma.',
  },
  {
    q: '¿Puedo contratar solo una consultoría sin un proyecto completo?',
    a: '¡Por supuesto! Ofrezco sesiones de consultoría puntual donde revisamos tu situación actual, identificamos oportunidades con IA y te doy un plan de acción concreto. Es una excelente forma de empezar si aún no estás segura/o de qué necesitas exactamente.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#00c5c5] uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Preguntas frecuentes
            </span>
          </h2>
          <p className="text-gray-500">
            Todo lo que necesitas saber antes de dar el primer paso.
          </p>
        </div>

        <div className="space-y-3">
          {preguntas.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#00c5c5]/40 shadow-sm' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#00c5c5] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-[#00c5c5]/10 to-[#00a5a5]/10 rounded-2xl p-6">
          <MessageCircle className="h-8 w-8 text-[#00c5c5] mx-auto mb-3" />
          <p className="font-semibold text-gray-800 mb-1">¿Tienes otra pregunta?</p>
          <p className="text-gray-500 text-sm mb-4">Escríbeme directamente y te respondo en menos de 24 horas.</p>
          <button
            onClick={() => navigate('/contactame')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Hacer mi pregunta
          </button>
        </div>
      </div>
    </section>
  );
}
