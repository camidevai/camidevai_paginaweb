import React from 'react';
import { ArrowLeft, Scale, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AvisoLegal() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#00c5c5] rounded-full flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Aviso Legal</h1>
                <p className="text-gray-600">CamiDevAI - Camila Bañares</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#00c5c5] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="prose prose-gray max-w-none">
            
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-5 w-5 text-[#00c5c5]" />
              <h2 className="text-xl font-semibold text-gray-900 m-0">Información General</h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Datos del Titular</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Nombre:</strong> Camila Bañares</p>
                  <p><strong>Sitio web:</strong> CamiDevAI</p>
                  <p><strong>Email:</strong> camidevai@gmail.com</p>
                  <p><strong>País:</strong> Chile</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Objeto del Sitio Web</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este sitio web tiene como finalidad compartir conocimientos sobre inteligencia artificial, 
                  tecnología y programación. Ofrece contenido educativo, servicios de consultoría y 
                  colaboraciones en el ámbito tecnológico.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Condiciones de Uso</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>El acceso y uso de este sitio web implica la aceptación de estos términos.</li>
                  <li>El contenido está protegido por derechos de autor y propiedad intelectual.</li>
                  <li>Está prohibido el uso comercial no autorizado del contenido.</li>
                  <li>El usuario se compromete a hacer un uso responsable del sitio.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Limitación de Responsabilidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  La información contenida en este sitio web tiene carácter meramente informativo. 
                  No nos hacemos responsables de los daños que puedan derivarse del uso de la información 
                  proporcionada. El usuario utiliza la información bajo su propia responsabilidad.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Propiedad Intelectual</h3>
                <p className="text-gray-700 leading-relaxed">
                  Todos los contenidos de este sitio web, incluyendo textos, imágenes, videos y diseños, 
                  están protegidos por derechos de autor. Queda prohibida su reproducción total o parcial 
                  sin autorización expresa del titular.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Enlaces Externos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este sitio puede contener enlaces a sitios web de terceros. No nos hacemos responsables 
                  del contenido o las políticas de privacidad de estos sitios externos.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Modificaciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de modificar este aviso legal en cualquier momento. 
                  Las modificaciones entrarán en vigor desde su publicación en el sitio web.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Legislación Aplicable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este aviso legal se rige por la legislación chilena. Para cualquier controversia 
                  será competente la jurisdicción de los tribunales de Chile.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contacto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para cualquier consulta relacionada con este aviso legal, puedes contactarnos en: 
                  <a href="mailto:camidevai@gmail.com" className="text-[#00c5c5] hover:underline ml-1">
                    camidevai@gmail.com
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-CL')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
