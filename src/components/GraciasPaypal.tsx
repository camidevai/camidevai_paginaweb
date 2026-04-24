import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GraciasPaypal() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#f0fdfd] p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#00c5c5]/20">
        {/* Encabezado */}
        <div className="h-16 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] relative">
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] flex items-center justify-center">
              <span className="text-white text-3xl font-bold">❤️</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="pt-16 pb-8 px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            ¡Muchísimas Gracias por tu Donación!
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Tu apoyo significa mucho para mí y me ayuda a seguir creando contenido y compartiendo conocimiento.
            Personas como tú hacen posible que pueda seguir <span className="font-semibold text-[#00c5c5]">prochechando</span> cada día.
          </p>

          {/* Imagen de agradecimiento */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
            <img 
              src="/img/paypal/paypalGracias.png" 
              alt="Gracias por tu donación" 
              className="w-full h-auto"
            />
          </div>

          {/* Mensaje personal */}
          <div className="bg-[#00c5c5]/10 p-6 rounded-xl mb-8">
            <p className="text-gray-700 italic">
              "Cada donación es un recordatorio de que mi trabajo tiene valor y un impacto positivo. 
              Prometo seguir compartiendo, aprendiendo y creciendo junto a esta maravillosa comunidad. 
              ¡Gracias por ser parte de este viaje!"
            </p>
            <p className="mt-4 font-semibold text-[#00a5a5]">— Camila Bañares (CamiDevAI)</p>
          </div>

          {/* Botón para volver */}
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            <Home className="h-5 w-5 mr-2" />
            Volver a la página principal
          </Link>
        </div>
      </div>
    </section>
  );
}
