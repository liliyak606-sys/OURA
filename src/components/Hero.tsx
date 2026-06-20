import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Cinematic Slow Zoom Background */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 25, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
          style={{
            // High-end cinematic luxury villa hero image
            backgroundImage: 'url("https://images.unsplash.com/photo-1613490908688-66236b22eb01?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        {/* Subtle gradient for maximum text contrast and moody feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-10"
        >
          {t.hero.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-dark-luxe p-10 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] flex flex-col items-center"
        >
          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white drop-shadow-2xl leading-[1.1] mb-8">
            <span className="tracking-[0.05em]">AURA</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-normal text-white/90 tracking-widest mt-4">TEL AVIV</span>
          </h1>
          <p className="text-white/80 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-white/50 tracking-[0.3em] text-[10px] uppercase font-bold">Discover</span>
        <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
