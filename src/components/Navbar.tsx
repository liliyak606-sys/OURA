import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLang(lang === 'en' ? 'ru' : 'en');
  const navLinks = [
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.blueprints, href: '#blueprints' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`relative flex items-center justify-between transition-all duration-700 ${
          isScrolled ? 'glass-luxe rounded-full px-8 py-5' : 'px-4'
        }`}>
          
          {/* Logo */}
          <a href="#" className={`font-display font-medium text-2xl md:text-3xl tracking-[0.25em] uppercase transition-colors duration-500 ${isScrolled ? 'text-charcoal' : 'text-white drop-shadow-md'}`}>
            AURA
          </a>

          {/* Desktop Center Links */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-12">
             {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 hover:opacity-100 ${isScrolled ? 'text-charcoal/60 hover:text-charcoal' : 'text-white/80 hover:text-white drop-shadow-sm'}`}
              >
                {link.name}
              </a>
             ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-8">
            <button
              onClick={toggleLanguage}
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-charcoal/60 hover:text-charcoal' : 'text-white/80 hover:text-white drop-shadow-sm'}`}
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors duration-500 ${isScrolled ? 'text-charcoal' : 'text-white drop-shadow-sm'}`}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" strokeWidth={1.5} /> : <Menu className="w-7 h-7" strokeWidth={1.5} />}
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Nav overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full px-4 mt-2 lg:hidden"
          >
            <div className="glass-luxe rounded-[2rem] p-8 flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-display tracking-[0.2em] uppercase text-charcoal"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
