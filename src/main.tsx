import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ComingSoonPage from './components/ComingSoonPage.tsx';
import AvisoLegal from './components/AvisoLegal.tsx';
import PoliticaPrivacidad from './components/PoliticaPrivacidad.tsx';
import PoliticaCookies from './components/PoliticaCookies.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactame" element={<ComingSoonPage />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
