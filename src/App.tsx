import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { SmallCTA } from './components/SmallCTA';
import { Blueprints } from './components/Blueprints';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream font-sans selection:bg-charcoal selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Gallery />
          <SmallCTA />
          <Blueprints />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
