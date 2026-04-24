import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Check, Mail, Phone,
  Building, MessageSquare, User, Star, Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAIL_JS_CONFIG } from '../config/constants';

interface FormData {
  user_name: string;
  user_email: string;
  has_company: string;
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
  'Consultoría en IA',
  'Automatización de procesos',
  'Otra propuesta personalizada',
];

const ORIGIN_OPTIONS = [
  { value: 'Instagram',       label: 'Instagram',        emoji: '📸' },
  { value: 'TikTok',          label: 'TikTok',           emoji: '🎵' },
  { value: 'Facebook',        label: 'Facebook',         emoji: '📘' },
  { value: 'LinkedIn',        label: 'LinkedIn',         emoji: '💼' },
  { value: 'YouTube',         label: 'YouTube',          emoji: '▶️' },
  { value: 'Google',          label: 'Google',           emoji: '🔍' },
  { value: 'Recomendación',   label: 'Me recomendaron',  emoji: '🤝' },
  { value: 'Otro',            label: 'Otro',             emoji: '✨' },
];

const COUNTRY_CODES = [
  { code: '+56', flag: '🇨🇱', country: 'Chile' },
  { code: '+1',  flag: '🇺🇸', country: 'EE.UU.' },
  { code: '+34', flag: '🇪🇸', country: 'España' },
  { code: '+52', flag: '🇲🇽', country: 'México' },
  { code: '+54', flag: '🇦🇷', country: 'Argentina' },
  { code: '+57', flag: '🇨🇴', country: 'Colombia' },
  { code: '+51', flag: '🇵🇪', country: 'Perú' },
  { code: '+598', flag: '🇺🇾', country: 'Uruguay' },
  { code: '+593', flag: '🇪🇨', country: 'Ecuador' },
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

const TOTAL_STEPS     = 7;
const MIN_MSG         = 50;
const MAX_NAME        = 60;
const MIN_NAME        = 2;
const MAX_COMPANY     = 100;
const MIN_COMPANY     = 2;
const MIN_PHONE_DIGITS = 7;
const MAX_PHONE_DIGITS = 15;

const STEP_META = [
  { icon: User,          label: 'Nombre'    },
  { icon: Mail,          label: 'Email'     },
  { icon: Building,      label: 'Empresa'   },
  { icon: Star,          label: 'Servicio'  },
  { icon: Sparkles,      label: 'Origen'    },
  { icon: Phone,         label: 'Teléfono'  },
  { icon: MessageSquare, label: 'Mensaje'   },
];

export default function ComingSoonPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading]         = useState(false);
  const [submitted, setSubmitted]     = useState(false);

  const [formData, setFormData] = useState<FormData>({
    user_name: '', user_email: '', has_company: '', user_company: '',
    collaboration_type: '', user_origin: '',
    user_phone: '', country_code: '+56', budget: '', message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const onlyDigits = (value: string) => set('user_phone', value.replace(/\D/g, ''));

  const validate = (step: number): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      const v = formData.user_name.trim();
      if (!v)               e.user_name = 'El nombre es obligatorio';
      else if (v.length < MIN_NAME) e.user_name = `Mínimo ${MIN_NAME} caracteres`;
      else if (v.length > MAX_NAME) e.user_name = `Máximo ${MAX_NAME} caracteres`;
    }
    if (step === 2) {
      const v = formData.user_email.trim();
      if (!v)                        e.user_email = 'El email es obligatorio';
      else if (!EMAIL_REGEX.test(v)) e.user_email = 'Ingresa un email válido (ej: nombre@dominio.com)';
    }
    if (step === 3) {
      if (!formData.has_company) e.has_company = 'Selecciona una opción';
      else if (formData.has_company === 'si' && !formData.user_company.trim())
        e.user_company = 'Escribe el nombre de tu empresa';
      else if (formData.has_company === 'si' && formData.user_company.trim().length < MIN_COMPANY)
        e.user_company = `Mínimo ${MIN_COMPANY} caracteres`;
    }
    if (step === 4) {
      if (!formData.collaboration_type) e.collaboration_type = 'Selecciona un tipo de colaboración';
    }
    if (step === 5) {
      if (!formData.user_origin) e.user_origin = 'Selecciona cómo nos encontraste';
    }
    if (step === 6) {
      const v = formData.user_phone.trim();
      if (!v)                          e.user_phone = 'El teléfono es obligatorio';
      else if (v.length < MIN_PHONE_DIGITS) e.user_phone = `Mínimo ${MIN_PHONE_DIGITS} dígitos`;
      else if (v.length > MAX_PHONE_DIGITS) e.user_phone = `Máximo ${MAX_PHONE_DIGITS} dígitos`;
    }
    if (step === 7) {
      const v = formData.message.trim();
      if (!v)              e.message = 'El mensaje es obligatorio';
      else if (v.length < MIN_MSG)
        e.message = `Mínimo ${MIN_MSG} caracteres (faltan ${MIN_MSG - v.length})`;
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(currentStep)) setCurrentStep(s => Math.min(s + 1, TOTAL_STEPS)); };
  const prev = () => { setCurrentStep(s => Math.max(s - 1, 1)); setErrors({}); };

  const submit = async () => {
    if (!validate(TOTAL_STEPS)) return;
    if (!EMAIL_JS_CONFIG.SERVICE_ID || !EMAIL_JS_CONFIG.TEMPLATE_ID || !EMAIL_JS_CONFIG.PUBLIC_KEY) {
      alert('Error de configuración. Contacta al administrador.');
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAIL_JS_CONFIG.SERVICE_ID,
        EMAIL_JS_CONFIG.TEMPLATE_ID,
        {
          user_name:          formData.user_name,
          user_email:         formData.user_email,
          company:            formData.user_company,
          user_company:       formData.user_company,
          services:           formData.collaboration_type,
          collaboration_type: formData.collaboration_type,
          phone:              `${formData.country_code} ${formData.user_phone}`,
          budget:             formData.budget || 'No especificado',
          message:            formData.message,
          user_origin:        formData.user_origin,
        },
        { publicKey: EMAIL_JS_CONFIG.PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err: any) {
      const detail = err?.text || err?.message || 'Error desconocido';
      alert(`Error al enviar: ${detail}. Por favor intenta nuevamente.`);
    } finally {
      setLoading(false);
    }
  };

  // ── Estilos reutilizables ─────────────────────────────────────
  const inputCls = (hasErr?: boolean) =>
    `w-full p-3.5 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400
     focus:ring-2 focus:ring-[#00c5c5]/40 focus:border-[#00c5c5] outline-none transition-all text-sm
     ${hasErr ? 'border-red-500/60 bg-red-500/5' : 'border-slate-600/70'}`;

  const Err = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="flex items-center gap-1.5 text-red-400 text-xs mt-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 inline-block" />
        {msg}
      </p>
    ) : null;

  // ── Pantalla de éxito ─────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00c5c5] to-[#00a5a5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#00c5c5]/20">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">¡Mensaje enviado!</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              ¡Qué emoción recibir tu mensaje! Te responderé pronto para conversar sobre tu proyecto. ✨
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Formulario principal ──────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-[#00c5c5] to-[#00a5a5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00c5c5]/20">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Cuéntame tu proyecto</h1>
          <p className="text-slate-400 text-sm">Paso a paso para conocerte mejor ✨</p>
        </div>

        {/* Dots de progreso */}
        <div className="flex items-center justify-center gap-2 mb-5">
          {STEP_META.map((_, i) => {
            const n = i + 1;
            const done = n < currentStep;
            const cur  = n === currentStep;
            return (
              <div
                key={n}
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                  done ? 'w-7 h-7 bg-[#00c5c5]'
                  : cur ? 'w-8 h-8 border-2 border-[#00c5c5] bg-[#00c5c5]/10 text-[#00c5c5]'
                  :        'w-6 h-6 bg-slate-700 text-slate-500'
                }`}
              >
                {done
                  ? <Check className="h-3.5 w-3.5 text-white" />
                  : <span className="text-xs font-bold">{n}</span>
                }
              </div>
            );
          })}
        </div>

        {/* Barra de progreso */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-slate-400">{STEP_META[currentStep - 1].label}</span>
            <span>{Math.round((currentStep / TOTAL_STEPS) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700/60 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* Card del formulario */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-xl">
          <form onSubmit={(e) => e.preventDefault()}>

            {/* ── Paso 1: Nombre ──────────────────────────────── */}
            {currentStep === 1 && (
              <div>
                <StepHeader icon={User} title="¿Cómo te llamas?" subtitle="Tu nombre completo, por favor" />
                <div className="relative">
                  <input
                    type="text"
                    value={formData.user_name}
                    onChange={(e) => set('user_name', e.target.value)}
                    placeholder="Nombre Apellido"
                    maxLength={MAX_NAME}
                    autoFocus
                    className={inputCls(!!errors.user_name)}
                  />
                  <span className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none ${
                    formData.user_name.length > MAX_NAME * 0.85 ? 'text-amber-400' : 'text-slate-500'
                  }`}>
                    {formData.user_name.length}/{MAX_NAME}
                  </span>
                </div>
                <Err msg={errors.user_name} />
              </div>
            )}

            {/* ── Paso 2: Email ───────────────────────────────── */}
            {currentStep === 2 && (
              <div>
                <StepHeader icon={Mail} title="¿Cuál es tu email?" subtitle="Para poder responderte" />
                <input
                  type="email"
                  value={formData.user_email}
                  onChange={(e) => set('user_email', e.target.value)}
                  placeholder="nombre@dominio.com"
                  autoFocus
                  className={inputCls(!!errors.user_email)}
                />
                {!errors.user_email && EMAIL_REGEX.test(formData.user_email) && (
                  <p className="flex items-center gap-1.5 text-[#00c5c5] text-xs mt-2">
                    <Check className="h-3.5 w-3.5" /> Email válido
                  </p>
                )}
                <Err msg={errors.user_email} />
              </div>
            )}

            {/* ── Paso 3: Empresa — SÍ / NO ───────────────────── */}
            {currentStep === 3 && (
              <div>
                <StepHeader icon={Building} title="¿Representas alguna empresa?" subtitle="Cuéntanos si vienes de una organización o es un proyecto propio" />

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { value: 'si', label: 'Sí, represento una empresa', emoji: '🏢' },
                    { value: 'no', label: 'No, es un proyecto personal', emoji: '🙋' },
                  ].map((opt) => {
                    const selected = formData.has_company === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          set('has_company', opt.value);
                          if (opt.value === 'no') set('user_company', 'Proyecto personal');
                        }}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                          selected
                            ? 'border-[#00c5c5] bg-[#00c5c5]/15 shadow-lg shadow-[#00c5c5]/10'
                            : 'border-slate-600/60 bg-slate-700/30 hover:border-slate-500'
                        }`}
                      >
                        <span className="text-3xl">{opt.emoji}</span>
                        <span className={`text-xs font-medium text-center leading-tight ${selected ? 'text-[#00c5c5]' : 'text-slate-300'}`}>
                          {opt.label}
                        </span>
                        {selected && <Check className="h-3.5 w-3.5 text-[#00c5c5]" />}
                      </button>
                    );
                  })}
                </div>
                <Err msg={errors.has_company} />

                {/* Input de nombre de empresa solo si eligió SÍ */}
                {formData.has_company === 'si' && (
                  <div className="mt-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.user_company}
                        onChange={(e) => set('user_company', e.target.value)}
                        placeholder="Nombre de tu empresa"
                        maxLength={MAX_COMPANY}
                        autoFocus
                        className={inputCls(!!errors.user_company)}
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 pointer-events-none">
                        {formData.user_company.length}/{MAX_COMPANY}
                      </span>
                    </div>
                    <Err msg={errors.user_company} />
                  </div>
                )}
              </div>
            )}

            {/* ── Paso 4: Tipo de colaboración — SELECT ────────── */}
            {currentStep === 4 && (
              <div>
                <StepHeader icon={Star} title="¿Qué tipo de colaboración buscas?" subtitle="Selecciona la que mejor describe tu proyecto" />
                <div className="relative">
                  <select
                    value={formData.collaboration_type}
                    onChange={(e) => set('collaboration_type', e.target.value)}
                    autoFocus
                    className={`${inputCls(!!errors.collaboration_type)} appearance-none cursor-pointer pr-10`}
                  >
                    <option value="" disabled>Selecciona una opción...</option>
                    {COLLABORATION_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {/* Chevron decorativo */}
                  <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <Err msg={errors.collaboration_type} />
              </div>
            )}

            {/* ── Paso 5: ¿Cómo me conociste? — BOTONES ───────── */}
            {currentStep === 5 && (
              <div>
                <StepHeader icon={Sparkles} title="¿Cómo me conociste?" subtitle="Elige la opción que más se acerca" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {ORIGIN_OPTIONS.map((opt) => {
                    const selected = formData.user_origin === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => set('user_origin', opt.value)}
                        className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all duration-200 ${
                          selected
                            ? 'border-[#00c5c5] bg-[#00c5c5]/15 shadow-lg shadow-[#00c5c5]/10'
                            : 'border-slate-600/60 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
                        }`}
                      >
                        {selected && (
                          <span className="absolute top-1.5 right-1.5">
                            <Check className="h-3 w-3 text-[#00c5c5]" />
                          </span>
                        )}
                        <span className="text-2xl leading-none">{opt.emoji}</span>
                        <span className={`text-xs font-medium text-center leading-tight ${selected ? 'text-[#00c5c5]' : 'text-slate-300'}`}>
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <Err msg={errors.user_origin} />
              </div>
            )}

            {/* ── Paso 6: Teléfono ────────────────────────────── */}
            {currentStep === 6 && (
              <div>
                <StepHeader icon={Phone} title="¿Tu número de teléfono?" subtitle="Solo números — sin espacios ni guiones" />
                <div className="flex gap-2">
                  <select
                    value={formData.country_code}
                    onChange={(e) => set('country_code', e.target.value)}
                    className="shrink-0 p-3.5 bg-slate-700/50 border border-slate-600/70 rounded-xl text-white focus:ring-2 focus:ring-[#00c5c5]/40 focus:border-[#00c5c5] outline-none transition-all text-sm"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div className="flex-1 relative">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={formData.user_phone}
                      onChange={(e) => onlyDigits(e.target.value)}
                      placeholder="912345678"
                      maxLength={MAX_PHONE_DIGITS}
                      autoFocus
                      className={inputCls(!!errors.user_phone)}
                    />
                    {formData.user_phone.length >= MIN_PHONE_DIGITS && !errors.user_phone && (
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
                        <Check className="h-4 w-4 text-[#00c5c5]" />
                      </span>
                    )}
                  </div>
                </div>
                {!errors.user_phone && formData.user_phone && (
                  <p className="text-slate-500 text-xs mt-2">
                    Vista previa: {formData.country_code} {formData.user_phone}
                  </p>
                )}
                <Err msg={errors.user_phone} />
              </div>
            )}

            {/* ── Paso 7: Mensaje ─────────────────────────────── */}
            {currentStep === 7 && (
              <div>
                <StepHeader
                  icon={MessageSquare}
                  title="¡Cuéntame todo!"
                  subtitle={`Mínimo ${MIN_MSG} caracteres — ¡mientras más detalle, mejor!`}
                />
                <textarea
                  value={formData.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="Cuéntame sobre tu proyecto, qué necesitas, tu visión y objetivos... ¡Todo ayuda para darte la mejor respuesta!"
                  rows={5}
                  autoFocus
                  className={`${inputCls(!!errors.message)} resize-none leading-relaxed`}
                />
                {/* Barra de progreso de caracteres */}
                <div className="mt-2.5 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        formData.message.length >= MIN_MSG ? 'bg-[#00c5c5]' : 'bg-slate-500'
                      }`}
                      style={{ width: `${Math.min((formData.message.length / MIN_MSG) * 100, 100)}%` }}
                    />
                  </div>
                  <span className={`text-xs flex-shrink-0 font-medium ${
                    formData.message.length >= MIN_MSG ? 'text-[#00c5c5]' : 'text-slate-500'
                  }`}>
                    {formData.message.length}/{MIN_MSG} mín.
                  </span>
                </div>
                <Err msg={errors.message} />
              </div>
            )}

            {/* ── Navegación ─────────────────────────────────── */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-700/40">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition-all text-sm font-medium"
                >
                  <ArrowLeft className="h-4 w-4" /> Atrás
                </button>
              ) : (
                <div />
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={next}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] hover:opacity-90 text-white rounded-xl transition-all text-sm font-semibold shadow-lg shadow-[#00c5c5]/20"
                >
                  Continuar <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={loading}
                  className={`flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#00c5c5]/20 transition-all ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      Enviando...
                    </>
                  ) : (
                    <><Mail className="h-4 w-4" /> Enviar mensaje</>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="text-center mt-5">
          <button
            onClick={() => navigate('/')}
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm"
          >
            ← Volver al sitio
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Sub-componente header de cada paso ──────────────────────────
function StepHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-[#00c5c5]/15 flex items-center justify-center flex-shrink-0">
        <Icon className="h-5 w-5 text-[#00c5c5]" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-white leading-tight">{title}</h3>
        <p className="text-slate-400 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
