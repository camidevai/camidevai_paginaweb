import { Home, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CancelacionPaypal() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#f0fdfd] p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
        {/* Encabezado */}
        <div className="h-16 bg-gradient-to-r from-gray-400 to-gray-500 relative">
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">😢</span>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="pt-16 pb-8 px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Donación Cancelada
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Has cancelado tu donación. No te preocupes, entiendo que a veces no es el momento adecuado.
            Siempre puedes volver cuando quieras apoyar mi trabajo.
          </p>

          {/* Imagen de cancelación */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
            <img 
              src="/img/paypal/paypalTriste.png" 
              alt="Donación cancelada" 
              className="w-full h-auto"
            />
          </div>

          {/* Mensaje personal */}
          <div className="bg-gray-100 p-6 rounded-xl mb-8">
            <p className="text-gray-700 italic">
              "Tu interés en mi trabajo ya significa mucho para mí. Seguiré compartiendo contenido valioso 
              y espero que sigas disfrutando de mis recursos gratuitos. ¡Gracias por considerarlo!"
            </p>
            <p className="mt-4 font-semibold text-gray-600">— Camila Bañares (CamiDevAI)</p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              <Home className="h-5 w-5 mr-2" />
              Volver a la página principal
            </Link>
            
            <a 
              href="https://www.paypal.com/paypalme/camidevai" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00c5c5] to-[#00a5a5] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart className="h-5 w-5 mr-2" />
              Intentar donar de nuevo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
