import React from 'react';
import { Code, Brain, Lightbulb, Heart, Users, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-mí" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
                Sobre mí
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              Ingeniera en Informática apasionada por la Inteligencia Artificial y la educación tecnológica. Con una comunidad vibrante que supera los 246,000 seguidores en Instagram, Facebook, TikTok y otras plataformas, comparto contenido educativo diseñado para transformar temas complejos de tecnología en explicaciones prácticas y accesibles.
            </p>
            <p className="text-gray-600 mb-6">
              Mi objetivo es inspirar y empoderar a personas de todas las edades para explorar el mundo de la tecnología y la innovación. A través de mis redes sociales, ofrezco recursos, consejos y experiencias para aprender, crecer y disfrutar del camino tecnológico.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Code className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Desarrollo</h3>
                  <p className="text-sm text-gray-500">Experta en IA y tecnología</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Educación</h3>
                  <p className="text-sm text-gray-500">Contenido práctico y accesible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Impacto</h3>
                  <p className="text-sm text-gray-500">Más de 246,000 seguidores</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Innovación</h3>
                  <p className="text-sm text-gray-500">Transformando ideas en tecnología</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Comunidad</h3>
                  <p className="text-sm text-gray-500">Inspirando a futuros talentos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-[#00c5c5]" />
                <div>
                  <h3 className="font-semibold">Aprendizaje continuo</h3>
                  <p className="text-sm text-gray-500">Actualizada con las últimas tendencias</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/83/43/c1/8343c1e08b9d5192ead386f4b85d324d.jpg"
              alt="Professional workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <Lightbulb className="h-8 w-8 text-[#00c5c5]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}