import React from 'react';

interface Marca {
  nombre: string;
  logo: string;
  enlace: string;
}

const marcas: Marca[] = [
  {
    nombre: "TripleTen",
    logo: "/img/colaboraciones/tripleten.png",
    enlace: "https://tripleten.com/"
  },
  {
    nombre: "InVideo",
    logo: "/img/colaboraciones/invideo.png",
    enlace: "https://invideo.io/i/camidevai"
  },
  {
    nombre: "NIM",
    logo: "/img/colaboraciones/nim.jpeg",
    enlace: "https://nim.video/l/camidevai"
  },
  {
    nombre: "NutryFactory",
    logo: "/img/colaboraciones/nutrifactory.jpeg",
    enlace: "https://nutrifactory.cl/"
  },
  {
    nombre: "Peregrino",
    logo: "/img/colaboraciones/Peregrino.png",
    enlace: "https://peregrino.ai//"
  },
  {
    nombre: "Centeia",
    logo: "/img/colaboraciones/centeia.png",
    enlace: "https://rebrand.ly/centeia-av-gen-camidevai"
  },
  {
    nombre: "ZeroChats",
    logo: "/img/colaboraciones/zerochats.png",
    enlace: "https://zerochats.com/"
  },
  {
    nombre: "usalainteligencia",
    logo: "/img/colaboraciones/usaLaInteligencia.png",
    enlace: "https://www.usalainteligencia.com/"
  }
];

export default function Colaboraciones() {
  return (
    <section id="colaboraciones" className="py-12 bg-gradient-to-br from-white to-[#f0fdfd]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium mb-2 text-gray-700">
            Colaboraciones
          </h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto">
            Marcas con las que he compartido conocimiento sobre IA
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {marcas.map((marca, index) => (
            <a
              key={index}
              href={marca.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#00c5c5]/30 hover:scale-105"
            >
              {/* Logo Container */}
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-3 p-3 group-hover:from-[#00c5c5]/5 group-hover:to-[#00a5a5]/5 transition-all duration-300">
                <img
                  src={marca.logo}
                  alt={`Logo de ${marca.nombre}`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">${marca.nombre}</div>`;
                  }}
                />
              </div>

              {/* Nombre */}
              <h3 className="text-xs font-medium text-gray-600 text-center truncate group-hover:text-[#00c5c5] transition-colors">
                {marca.nombre}
              </h3>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
