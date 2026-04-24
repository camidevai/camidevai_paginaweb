import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface BackgroundMusicProps {
  audioSrc: string;
  autoPlay?: boolean;
  immediatePlay?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioSrc,
  autoPlay = true,
  immediatePlay = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Intento de reproducción inmediata al montar (para /contactame)
  useEffect(() => {
    if (!immediatePlay || !audioRef.current) return;
    audioRef.current.volume = 0.2;
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      })
      .catch(() => {
        // El navegador bloqueó el autoplay: esperar primera interacción
      });
  }, [immediatePlay]);

  // Reproducción al primera interacción (comportamiento por defecto)
  useEffect(() => {
    if (immediatePlay) return;
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (autoPlay && audioRef.current) {
          audioRef.current.volume = 0.2;
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(error => console.error('Error al reproducir audio:', error));
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasInteracted, autoPlay, immediatePlay]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error al reproducir audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />

      <div className="fixed bottom-8 left-8 z-50 flex flex-col items-end">
        {/* Botón principal con animación de pulso cuando está reproduciendo */}
        <button
          onClick={() => setShowControls(!showControls)}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
          style={{
            boxShadow: isPlaying
              ? '0 0 15px rgba(0, 197, 197, 0.4), 0 0 5px rgba(0, 197, 197, 0.2)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
          aria-label="Controles de música"
        >
          <Music className={`h-6 w-6 ${isPlaying ? 'text-[#00c5c5]' : 'text-gray-500'}`} />

          {/* Indicador de reproducción */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00c5c5] rounded-full"></span>
          )}
        </button>

        {/* Controles expandidos */}
        {showControls && (
          <div className="absolute bottom-14 left-0 bg-white rounded-lg shadow-xl p-4 flex flex-col items-center gap-3 animate-fadeIn">
            <div className="text-sm font-medium text-gray-700 mb-1">Música Ambiental</div>

            <button
              onClick={togglePlayPause}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isPlaying ? 'bg-[#00c5c5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
            >
              {isPlaying ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>

            <span className="text-xs text-gray-500">
              {isPlaying ? "Pausar música" : "Reproducir música"}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;
