import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import ScrollProgress from './components/ScrollProgress';
import SnowParticles from './components/SnowParticles';
import PrivacyPolicy from './components/PrivacyPolicy';

function MainPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <ScrollProgress />
      <AmbientBackground />
      <SnowParticles />
      <Navigation />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
