import React from 'react';
import { ArrowLeft, Shield, Eye, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PoliticaPrivacidad() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#00c5c5] rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Política de Privacidad</h1>
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
              <Eye className="h-5 w-5 text-[#00c5c5]" />
              <h2 className="text-xl font-semibold text-gray-900 m-0">Compromiso con tu Privacidad</h2>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Responsable del Tratamiento</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Responsable:</strong> Camila Bañares</p>
                  <p><strong>Sitio web:</strong> CamiDevAI</p>
                  <p><strong>Email de contacto:</strong> camidevai@gmail.com</p>
                  <p><strong>País:</strong> Chile</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Datos que Recopilamos</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Información de Contacto:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Nombre completo</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono (opcional)</li>
                      <li>Empresa u organización (opcional)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Información Técnica:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                      <li>Dirección IP</li>
                      <li>Tipo de navegador</li>
                      <li>Páginas visitadas</li>
                      <li>Tiempo de permanencia en el sitio</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Finalidad del Tratamiento</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Responder a consultas y solicitudes de información</li>
                  <li>Proporcionar servicios de consultoría y colaboración</li>
                  <li>Enviar información sobre contenido educativo y servicios</li>
                  <li>Mejorar la experiencia del usuario en el sitio web</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Base Legal</h3>
                <p className="text-gray-700 leading-relaxed">
                  El tratamiento de sus datos personales se basa en:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                  <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                  <li><strong>Ejecución contractual:</strong> Para la prestación de servicios solicitados</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y contenido</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Conservación de Datos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conservaremos sus datos personales durante el tiempo necesario para cumplir con las 
                  finalidades para las que fueron recopilados, o según lo requiera la legislación aplicable. 
                  Los datos de contacto se conservarán mientras mantenga una relación con nosotros.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Compartir Información</h3>
                <p className="text-gray-700 leading-relaxed">
                  No vendemos, alquilamos ni compartimos su información personal con terceros, 
                  excepto en los siguientes casos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                  <li>Cuando sea necesario para proporcionar el servicio solicitado</li>
                  <li>Para cumplir con obligaciones legales</li>
                  <li>Con su consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Sus Derechos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Conforme a la legislación de protección de datos, usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
                  <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Seguridad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos 
                  personales contra el acceso no autorizado, alteración, divulgación o destrucción. 
                  Utilizamos conexiones seguras (SSL) y servicios de terceros confiables.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Servicios de Terceros</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">EmailJS:</h4>
                    <p className="text-gray-700 text-sm">Utilizado para el envío de formularios de contacto</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Hosting:</h4>
                    <p className="text-gray-700 text-sm">Sus datos pueden ser procesados en servidores de hosting</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contacto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para ejercer sus derechos o realizar consultas sobre esta política de privacidad, 
                  puede contactarnos en: 
                  <a href="mailto:camidevai@gmail.com" className="text-[#00c5c5] hover:underline ml-1">
                    camidevai@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Modificaciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de actualizar esta política de privacidad. 
                  Las modificaciones serán publicadas en esta página con la fecha de actualización correspondiente.
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
