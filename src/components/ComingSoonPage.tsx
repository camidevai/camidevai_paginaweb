import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Check, Mail, Phone, Building, DollarSign, MessageSquare, User, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAIL_JS_CONFIG } from '../config/constants';

interface FormData {
  user_name: string;
  user_email: string;
  user_company: string;
  collaboration_type: string;
  user_origin: string;
  user_phone: string;
  country_code: string;
  budget: string;
  message: string;
}

const COLLABORATION_TYPES = [
  'Colaboración con marca',
  'Diseño y desarrollo de sitios web',
  'Charlas y talleres',
  'Entrevistas y medios',
  'Desarrollo de aplicaciones web',
  'Quiero una solución como esta ❤️',
  'Otra propuesta personalizada'
];

const COUNTRY_CODES = [
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+1', country: 'Estados Unidos', flag: '🇺🇸' },
  { code: '+34', country: 'España', flag: '🇪🇸' },
  { code: '+52', country: 'México', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Perú', flag: '🇵🇪' },
];

const BUDGET_RANGES = [
  'Menos de $500 USD',
  '$500 - $1,500 USD',
  '$1,500 - $3,000 USD',
  '$3,000 - $5,000 USD',
  'Más de $5,000 USD',
  'Prefiero no especificar'
];

export default function ComingSoonPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    user_company: '',
    collaboration_type: '',
    user_origin: '',
    user_phone: '',
    country_code: '+56',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};
    
    switch (step) {
      case 1:
        if (!formData.user_name.trim()) {
          newErrors.user_name = 'El nombre es requerido';
        }
        break;
      case 2:
        if (!formData.user_email.trim()) {
          newErrors.user_email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
          newErrors.user_email = 'Ingresa un email válido';
        }
        break;
      case 4:
        if (!formData.collaboration_type.trim()) {
          newErrors.collaboration_type = 'Selecciona un tipo de colaboración';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 7));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!EMAIL_JS_CONFIG.SERVICE_ID || !EMAIL_JS_CONFIG.TEMPLATE_ID || !EMAIL_JS_CONFIG.PUBLIC_KEY) {
      alert('Error de configuración: faltan las variables de entorno de EmailJS. Contacta al administrador.');
      return;
    }

    setLoading(true);

    try {
      const emailData = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        company: formData.user_company || 'No especificada',
        services: formData.collaboration_type,
        phone: formData.user_phone ? `${formData.country_code} ${formData.user_phone}` : 'No proporcionado',
        budget: formData.budget || 'No especificado',
        message: formData.message || 'Sin mensaje adicional',
        origin: formData.user_origin || 'No especificado',
      };

      await emailjs.send(
        EMAIL_JS_CONFIG.SERVICE_ID,
        EMAIL_JS_CONFIG.TEMPLATE_ID,
        emailData,
        { publicKey: EMAIL_JS_CONFIG.PUBLIC_KEY }
      );

      setSubmitted(true);
    } catch (error: any) {
      console.error('Error al enviar:', error);
      const detail = error?.text || error?.message || 'Error desconocido';
      alert(`Error al enviar el formulario: ${detail}. Por favor, intenta nuevamente.`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="w-16 h-16 bg-[#00c5c5] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">¡Tu mensaje llegó a mi corazón! 💕</h2>
            <p className="text-slate-300 mb-6">
              ¡Qué emoción recibir tu mensaje! Me encanta conocer nuevas personas y proyectos.
              Te escribiré pronto con mucho cariño para conversar sobre tu idea. ✨
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-[#00c5c5] hover:bg-[#00a5a5] text-white py-3 rounded-lg font-semibold transition-all"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00c5c5] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">¡Hola, hermosa alma! 💕</h1>
          <p className="text-slate-300 text-sm sm:text-base px-2">Cuéntame sobre tu proyecto con mucho amor, paso a paso ✨</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-slate-400">Paso {currentStep} de 7</span>
            <span className="text-xs sm:text-sm text-slate-400">{Math.round((currentStep / 7) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] h-1.5 sm:h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50">
          <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">
            
            {/* Step 1: Name */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¡Empecemos por conocernos! ¿Cómo te llamas? 😊</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Me encanta saber con quién estoy hablando ✨</p>
                <input
                  type="text"
                  value={formData.user_name}
                  onChange={(e) => handleInputChange('user_name', e.target.value)}
                  placeholder="Tu nombre completo"
                  className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                  autoFocus
                />
                {errors.user_name && (
                  <p className="text-red-400 text-xs sm:text-sm mt-2">{errors.user_name}</p>
                )}
              </div>
            )}

            {/* Step 2: Email */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¿Cuál es tu email? 💌</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Para poder responderte con todo mi cariño</p>
                <input
                  type="email"
                  value={formData.user_email}
                  onChange={(e) => handleInputChange('user_email', e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                  autoFocus
                />
                {errors.user_email && (
                  <p className="text-red-400 text-xs sm:text-sm mt-2">{errors.user_email}</p>
                )}
              </div>
            )}

            {/* Step 3: Company */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <Building className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¿Representas alguna empresa? 🏢</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Si es un proyecto personal, ¡también está perfecto! 💕</p>
                <input
                  type="text"
                  value={formData.user_company}
                  onChange={(e) => handleInputChange('user_company', e.target.value)}
                  placeholder="Nombre de tu empresa (opcional)"
                  className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                  autoFocus
                />
              </div>
            )}

            {/* Step 4: Collaboration Type */}
            {currentStep === 4 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¿Qué tipo de colaboración buscas? ✨</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">¡Me emociona saber en qué podemos trabajar juntos!</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {COLLABORATION_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleInputChange('collaboration_type', type)}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${
                        formData.collaboration_type === type
                          ? 'border-[#00c5c5] bg-[#00c5c5]/10 text-[#00c5c5]'
                          : 'border-slate-600 bg-slate-700/30 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm sm:text-base">{type}</span>
                        {formData.collaboration_type === type && (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                {errors.collaboration_type && (
                  <p className="text-red-400 text-xs sm:text-sm mt-2">{errors.collaboration_type}</p>
                )}
              </div>
            )}

            {/* Step 5: How did you find me */}
            {currentStep === 5 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¿Cómo me conociste? 🌟</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">¡Me da mucha curiosidad saber cómo llegaste hasta mí!</p>
                <input
                  type="text"
                  value={formData.user_origin}
                  onChange={(e) => handleInputChange('user_origin', e.target.value)}
                  placeholder="Ej: Instagram, TikTok, recomendación de un amigo..."
                  className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                  autoFocus
                />
              </div>
            )}

            {/* Step 6: Phone (Optional) */}
            {currentStep === 6 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¿Tu teléfono? 📱</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">Es opcional, pero a veces es más fácil conversar por WhatsApp 😊</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <select
                    value={formData.country_code}
                    onChange={(e) => handleInputChange('country_code', e.target.value)}
                    className="w-full sm:w-auto p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                  >
                    {COUNTRY_CODES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={formData.user_phone}
                    onChange={(e) => handleInputChange('user_phone', e.target.value)}
                    placeholder="123456789"
                    className="flex-1 p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all text-sm sm:text-base"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* Step 7: Message */}
            {currentStep === 7 && (
              <div className="animate-fadeIn">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-[#00c5c5] mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">¡Cuéntame todo! 💕</h3>
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">Aquí puedes contarme todos los detalles de tu proyecto, tus sueños, ideas... ¡Todo lo que quieras compartir conmigo!</p>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Cuéntame sobre tu proyecto, qué te emociona, qué necesitas, o simplemente salúdame... ¡Me encanta conocer nuevas historias! ✨"
                  rows={4}
                  className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all resize-none text-sm sm:text-base leading-relaxed min-h-[100px] sm:min-h-[120px]"
                  autoFocus
                />
              </div>
            )}



            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 sm:pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all text-sm sm:text-base order-2 sm:order-1"
                >
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  Atrás
                </button>
              )}

              <div className="flex-1 hidden sm:block" />

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] hover:from-[#00a5a5] hover:to-[#008080] text-white rounded-lg transition-all text-sm sm:text-base font-medium order-1 sm:order-2"
                >
                  Siguiente ✨
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-lg font-semibold transition-all text-sm sm:text-base order-1 sm:order-2 ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#00a5a5] hover:to-[#008080] hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent" />
                      <span className="hidden sm:inline">Enviando con amor...</span>
                      <span className="sm:hidden">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">¡Enviar mi mensaje! 💕</span>
                      <span className="sm:hidden">¡Enviar! 💕</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-[#00c5c5] transition-colors text-sm sm:text-base"
          >
            ← Volver al sitio principal
          </button>
        </div>
      </div>
    </div>
  );
}
