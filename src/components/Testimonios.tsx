import React from 'react';
import { Star, Quote } from 'lucide-react';

// TODO: Reemplazar con testimonios reales de clientes
const testimonios = [
  {
    nombre: 'María González',
    cargo: 'Directora de Operaciones',
    empresa: 'RetailMax Chile',
    texto: 'Camila transformó completamente nuestros procesos internos con IA. Pasamos de 8 horas semanales en reportes manuales a 20 minutos automatizados. El ROI fue inmediato.',
    color: 'from-[#00c5c5] to-[#00a5a5]',
    inicial: 'M',
  },
  {
    nombre: 'Roberto Campos',
    cargo: 'CEO',
    empresa: 'Agencia Digital Pro',
    texto: 'Entendió exactamente lo que necesitábamos sin que tuviéramos que explicar demasiado. El sitio web que nos entregó superó todas las expectativas en diseño y velocidad.',
    color: 'from-violet-500 to-purple-600',
    inicial: 'R',
  },
  {
    nombre: 'Valentina Soto',
    cargo: 'Gerente de Transformación Digital',
    empresa: 'ConsultingGroup',
    texto: 'La charla para nuestro equipo directivo fue reveladora. Camila tiene un don para explicar IA de forma práctica y sin tecnicismos. Seguimos trabajando juntas.',
    color: 'from-amber-500 to-orange-500',
    inicial: 'V',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#00c5c5] uppercase mb-3">
            Lo que dicen mis clientes
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Resultados reales
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Empresas y profesionales que confiaron en el proceso y transformaron su forma de trabajar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Comillas */}
              <Quote className="h-8 w-8 text-[#00c5c5]/30 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.texto}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.inicial}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.nombre}</p>
                  <p className="text-gray-500 text-xs">{t.cargo} · {t.empresa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
