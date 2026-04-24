import React from 'react';
import { ArrowLeft, Cookie, Settings, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PoliticaCookies() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#00c5c5] rounded-full flex items-center justify-center">
                <Cookie className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Política de Cookies</h1>
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
              <Info className="h-5 w-5 text-[#00c5c5]" />
              <h2 className="text-xl font-semibold text-gray-900 m-0">¿Qué son las Cookies?</h2>
            </div>

            <div className="space-y-6">
              <section>
                <p className="text-gray-700 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
                  visita un sitio web. Nos ayudan a mejorar su experiencia de navegación, recordar sus 
                  preferencias y analizar cómo utiliza nuestro sitio.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Tipos de Cookies que Utilizamos</h3>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Settings className="h-4 w-4 text-[#00c5c5] mr-2" />
                      Cookies Técnicas (Necesarias)
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Estas cookies son esenciales para el funcionamiento del sitio web.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Mantener la sesión del usuario</li>
                      <li>Recordar preferencias de navegación</li>
                      <li>Garantizar la seguridad del sitio</li>
                    </ul>
                    <div className="mt-2 text-xs text-gray-500">
                      <strong>Duración:</strong> Sesión | <strong>Tipo:</strong> Propias
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Info className="h-4 w-4 text-blue-500 mr-2" />
                      Cookies Analíticas
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Nos ayudan a entender cómo los visitantes interactúan con el sitio web.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Páginas más visitadas</li>
                      <li>Tiempo de permanencia</li>
                      <li>Rutas de navegación</li>
                      <li>Errores encontrados</li>
                    </ul>
                    <div className="mt-2 text-xs text-gray-500">
                      <strong>Duración:</strong> 2 años | <strong>Tipo:</strong> Terceros (si aplica)
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Cookie className="h-4 w-4 text-orange-500 mr-2" />
                      Cookies de Funcionalidad
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Mejoran la funcionalidad y personalización del sitio web.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Recordar idioma preferido</li>
                      <li>Configuraciones de usuario</li>
                      <li>Preferencias de visualización</li>
                    </ul>
                    <div className="mt-2 text-xs text-gray-500">
                      <strong>Duración:</strong> 1 año | <strong>Tipo:</strong> Propias
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Cookies de Terceros</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">EmailJS</h4>
                    <p className="text-gray-700 text-sm">
                      Para el funcionamiento del formulario de contacto
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">Servicios de Hosting</h4>
                    <p className="text-gray-700 text-sm">
                      Para la entrega y optimización del contenido del sitio
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Gestión de Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Puede gestionar las cookies de las siguientes maneras:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Configuración del Navegador:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                      <li>Bloquear todas las cookies</li>
                      <li>Permitir solo cookies de sitios específicos</li>
                      <li>Eliminar cookies existentes</li>
                      <li>Recibir notificaciones antes de aceptar cookies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800">Enlaces de Configuración por Navegador:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#00c5c5] hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#00c5c5] hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#00c5c5] hover:underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#00c5c5] hover:underline">Internet Explorer</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Consecuencias de Deshabilitar Cookies</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>Importante:</strong> Si deshabilita las cookies, algunas funcionalidades del sitio 
                    web pueden no funcionar correctamente, como el formulario de contacto o la navegación 
                    personalizada.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Consentimiento</h3>
                <p className="text-gray-700 leading-relaxed">
                  Al continuar navegando en nuestro sitio web, usted acepta el uso de cookies conforme 
                  a esta política. Puede retirar su consentimiento en cualquier momento modificando 
                  la configuración de su navegador.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Actualizaciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Esta política de cookies puede ser actualizada periódicamente. Le recomendamos 
                  revisarla regularmente para estar informado sobre cómo utilizamos las cookies.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contacto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en: 
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
