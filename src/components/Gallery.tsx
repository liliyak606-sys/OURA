import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09be15ea?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop',
];

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-32 md:py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24 md:mb-32 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-charcoal mb-6"
        >
          {t.gallery.title}
        </motion.h2>
        <p className="text-xl text-charcoal/50 font-light max-w-2xl mx-auto">
          {t.gallery.subtitle}
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 auto-rows-[350px] md:auto-rows-[450px] lg:auto-rows-[600px]">
          
          {/* Image 1: Large Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img src={images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Villa Exterior" />
            <div className="absolute top-8 left-8 z-20 glass-luxe rounded-full px-8 py-3">
              <span className="text-charcoal font-semibold text-[10px] tracking-[0.2em] uppercase">Exterior</span>
            </div>
          </motion.div>

          {/* Image 2: Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group"
          >
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img src={images[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Details" />
          </motion.div>

          {/* Image 3: Square-ish */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group"
          >
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img src={images[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Architecture" />
          </motion.div>

          {/* Image 4: Wide */}
          <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group"
          >
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
             <img src={images[3]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Interior" />
             <div className="absolute top-8 left-8 z-20 glass-luxe rounded-full px-8 py-3">
              <span className="text-charcoal font-semibold text-[10px] tracking-[0.2em] uppercase">Interior</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
