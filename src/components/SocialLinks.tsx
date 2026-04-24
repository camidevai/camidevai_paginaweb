import React, { useRef, FormEvent, useState } from 'react';
import { Instagram, Facebook, Linkedin, MessageSquare, Mail, Users, Sparkles, CalendarDays } from 'lucide-react';
import emailjs from '@emailjs/browser';
import GoogleCalendarButton from './GoogleCalendarButton';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    followers: '263K',
    url: 'https://www.instagram.com/camidevai/',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    followers: '165K',
    url: 'https://m.facebook.com/people/Camicatura-Digital/61564523003680/',
    color: 'bg-blue-500'
  },
  {
    name: 'TikTok',
    icon: MessageSquare,
    followers: '75.8K',
    url: 'https://www.tiktok.com/@camidevai',
    color: 'bg-black'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    followers: '3.5K',
    url: 'https://www.linkedin.com/in/camilabanares/',
    color: 'bg-blue-600'
  }
];

export default function SocialLinks() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_t0cvv27',
        'template_lh7gtfd',
        formRef.current,
        { publicKey: '1aZEaVP20Ayfhpkp0' }
      );
      alert('Correo enviado correctamente');
      formRef.current.reset();
    } catch (error) {
      alert('Error al enviar el correo: ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00c5c5]/10 mb-6">
            <Users className="h-8 w-8 text-[#00c5c5]" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Mi Comunidad
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Juntos estamos creando un espacio donde la tecnología es accesible para todos
          </p>
        </div>

        {/* Banner de reserva destacado */}
        <div className="mb-12 relative overflow-hidden rounded-2xl shadow-xl">
          {/* Fondo degradado */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00c5c5] via-[#00a5a5] to-[#007f7f]" />
          {/* Círculos decorativos */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-white/5 rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-white text-xs font-semibold mb-4">
                <CalendarDays className="h-3.5 w-3.5" />
                Agenda disponible
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¿Trabajamos juntos?
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-md">
                Reserva una reunión conmigo directamente en mi calendario. Hablemos de tu proyecto, consultoría en IA o colaboración.
              </p>
            </div>

            {/* Botón Google Calendar */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <GoogleCalendarButton />
              <p className="text-white/60 text-xs">Sin costo · Elige el horario que prefieras</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 relative overflow-hidden"
            >
              {/* Decoración de fondo */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gray-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className={`${social.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                  <social.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
                <p className="text-gray-500">{social.followers} seguidores</p>
                <p className="mt-3 text-sm text-[#00c5c5] group-hover:underline">Visitar perfil</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-6">
              <Mail className="h-6 w-6 text-[#00c5c5] mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Escríbeme</h3>
            </div>

            <form id="contact-form" ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Tu nombre</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="¿Cómo te llamas?"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Tu email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Para poder responderte"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_company" className="block text-sm font-medium text-gray-700 mb-1">Empresa (Opcional)</label>
                <input
                  id="user_company"
                  type="text"
                  name="user_company"
                  placeholder="¿Representas a alguna empresa?"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
                />
              </div>




              <div>
  <label htmlFor="collaboration_type" className="block text-sm font-medium text-gray-700 mb-1">¿Qué tipo de colaboración buscas?</label>
  <select
    id="collaboration_type"
    name="collaboration_type"
    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
    required
  >
    <option value="">Selecciona una opción</option>
    <option value="Automatización con IA">Automatización con IA</option>
    <option value="Creación de sitio web">Creación de sitio web</option>
    <option value="Contenido para marca">Contenido para mi marca</option>
    <option value="Charla o curso">Charla o curso</option>
    <option value="Otro">Otro</option>
  </select>
</div>

<div>
  <label htmlFor="user_origin" className="block text-sm font-medium text-gray-700 mb-1">¿Cómo me conociste?</label>
  <input
    id="user_origin"
    type="text"
    name="user_origin"
    placeholder="Ej: Instagram, TikTok, recomendación..."
    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
  />
</div>















              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tu mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame en qué puedo ayudarte"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#00c5c5]/50 focus:border-[#00c5c5] outline-none transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-[#00c5c5] text-white py-3 rounded-lg font-semibold transition-all ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#009999]"
                }`}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Construyamos juntos</h3>
              <p className="text-gray-600">
                Mi comunidad es el corazón de todo lo que hago. Cada mensaje, cada comentario, cada interacción es una oportunidad para aprender y crecer juntos. No importa si estás dando tus primeros pasos en tecnología o si ya tienes experiencia, aquí hay espacio para todos.
              </p>
            </div>

            <div className="bg-[#00c5c5]/10 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <Sparkles className="h-5 w-5 text-[#00c5c5] mr-2" />
                <h4 className="font-semibold text-gray-800">¿Por qué conectar?</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#00c5c5] mr-2">•</span>
                  Para colaboraciones y proyectos
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c5c5] mr-2">•</span>
                  Consultas sobre mis servicios
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c5c5] mr-2">•</span>
                  Compartir tu historia de transformación
                </li>
                <li className="flex items-start">
                  <span className="text-[#00c5c5] mr-2">•</span>
                  Sugerencias para contenido futuro
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-500 italic mb-4">
                "La tecnología es más poderosa cuando nos conecta, no cuando nos aísla."
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
