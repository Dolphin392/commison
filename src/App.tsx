import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import ScrollProgress from './components/ScrollProgress';
import SnowParticles from './components/SnowParticles';

function App() {
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

export default App;
