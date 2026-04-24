import React from 'react';
import { Bot, Sparkles, MessageSquare } from 'lucide-react';

export default function ChatbotTeaser() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#00c5c5]/10 to-[#00a5a5]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="w-64 h-64 mx-auto bg-[#00c5c5]/20 rounded-full flex items-center justify-center">
              <Bot className="h-32 w-32 text-[#00c5c5]/40" />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute top-0 right-1/4 w-12 h-12 bg-[#00c5c5]/10 rounded-full flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-[#00c5c5]/60" />
            </div>
            <div className="absolute bottom-8 left-1/4 w-16 h-16 bg-[#00c5c5]/10 rounded-full flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-[#00c5c5]/60" />
            </div>
          </div>

          <div className="md:w-1/2 text-left">
            <div className="inline-flex items-center px-4 py-2 bg-[#00c5c5]/10 rounded-full text-[#00c5c5] mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Próximamente</span>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Mi Asistente Virtual: Una extensión de mi misión
            </h2>

            <p className="text-gray-600 mb-6">
              Así como la tecnología me transformó a mí, quiero que mi asistente virtual te transforme a ti. Estoy creando un compañero de aprendizaje que responderá tus preguntas sobre inteligencia artificial y te guiará en tu propio viaje de descubrimiento.
            </p>

            <p className="text-gray-600 mb-8">
              No será solo un chatbot, sino una extensión de mi compromiso con hacer la tecnología accesible para todos, especialmente para quienes, como yo alguna vez, se sienten intimidados por este mundo.
            </p>

            <div className="mt-8">
              <button
                disabled
                className="px-6 py-3 bg-[#00c5c5]/20 text-[#00c5c5] rounded-lg cursor-not-allowed"
              >
                Muy pronto
              </button>
              <p className="mt-3 text-sm text-gray-500 italic">
                Mientras tanto, no dudes en contactarme directamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}