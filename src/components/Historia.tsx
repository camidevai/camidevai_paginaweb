import React from 'react';
import { Sparkles, Heart, Star, Lightbulb, Users, Rocket } from 'lucide-react';

export default function Historia() {
  return (
    <section id="mi-historia" className="py-20 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-transparent bg-clip-text">
              Mi Historia
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Un viaje de transformación, perseverancia y descubrimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/img/camisol.jpg"
              alt="Camila Bañares - CamiDevAI"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <Sparkles className="h-8 w-8 text-[#00c5c5]" />
            </div>
          </div>

          <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
    <span className="font-semibold text-[#00a5a5]">Hola, soy Camila</span>, aunque en internet muchos me conocen como <strong className="text-[#00a5a5]">CamiDevAI</strong>. Mi historia no parte entre cables o códigos, sino en una clínica dental, donde trabajé durante casi 10 años como promotora.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed">
    Siempre soñé con tener más tiempo para mi familia, especialmente para mis hijos pequeños. Ver a mi esposo trabajando desde casa, presente para ellos, fue lo que me impulsó a cambiar de rumbo. Así que, sin saber mucho de computación, me inscribí en ingeniería informática... ¡de noche y desde cero!
  </p>

  <p className="text-gray-700 text-lg leading-relaxed">
  Al principio no entendía nada. Venía del mundo de la salud, y todo esto era completamente nuevo para mí. Había días en que sentía que mi cabeza no daba más, pero no me rendía. En medio de ese caos, intentando aprender y seguir adelante con una sonrisa, nació una palabra que hoy me acompaña siempre: <span className="font-semibold">“¡Prochechando!”</span>. Una mezcla entre procesar y echarle ganas. Porque aunque no lo supiera todo, yo seguía avanzando.
</p>


  <p className="text-gray-700 text-lg leading-relaxed">
    Con el tiempo descubrí mi pasión por el diseño, la programación y, más adelante, la inteligencia artificial. Hoy, gracias a ella, puedo automatizar procesos, crear contenido, enseñar a otros y vivir de lo que amo. No fue fácil, pero valió cada esfuerzo.
  </p>

            <div className="pt-4">
              <blockquote className="border-l-4 border-[#00c5c5] pl-4 italic text-gray-700">
                "Cada noche que pasaba estudiando mientras mis hijos dormían era un paso más hacia la libertad que anhelaba para mi familia."
              </blockquote>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#00c5c5]/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-[#00c5c5]" />
              </div>
              <h3 className="font-semibold text-xl">El cambio</h3>
            </div>
            <p className="text-gray-600">
              Pasar de la clínica dental a la tecnología fue como aprender un nuevo idioma. Cada concepto era un desafío, pero mi motivación por crear un mejor futuro para mis hijos me mantuvo firme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#00c5c5]/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-[#00c5c5]" />
              </div>
              <h3 className="font-semibold text-xl">El descubrimiento</h3>
            </div>
            <p className="text-gray-600">
              Descubrí mi pasión por el diseño y la programación. Pero fue la inteligencia artificial la que realmente transformó mi forma de trabajar y de ver el mundo. De repente, todo era posible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#00c5c5]/10 p-3 rounded-full">
                <Rocket className="h-6 w-6 text-[#00c5c5]" />
              </div>
              <h3 className="font-semibold text-xl">La misión</h3>
            </div>
            <p className="text-gray-600">
              Hoy mi misión es clara: empoderar a mujeres y personas que vienen de otros mundos a descubrir la tecnología. Si yo pude hacerlo, tú también puedes. Estamos juntos en este viaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
