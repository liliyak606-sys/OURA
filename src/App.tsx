import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Blueprints } from './components/Blueprints';
import { Contact } from './components/Contact';
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
          <Blueprints />
          <Contact />
        </main>
        
        <footer className="bg-charcoal text-white py-14 text-center">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">
            © {new Date().getFullYear()} AURA | Tel Aviv. All rights reserved.
          </p>
        </footer>
      </div>
    </LanguageProvider>
  );
}
