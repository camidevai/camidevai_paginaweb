import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Historia from './components/Historia';
import MiCamino from './components/MiCamino';
import Aprendizaje from './components/Aprendizaje';
import Servicios from './components/Servicios';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Historia />
        <MiCamino />
        <Aprendizaje />
        <Servicios />
        <SocialLinks />
      </main>
      <Footer />
      <ContactButton />
      <BackgroundMusic audioSrc="/audio/background-music.mp3" autoPlay={true} />
    </div>
  );
}

export default App;