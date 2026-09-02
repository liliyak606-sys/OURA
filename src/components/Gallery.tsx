import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'https://raw.githubusercontent.com/liliyak606-sys/OURA/refs/heads/main/public/img/Gemini_Generated_Image_3nc0lq3nc0lq3nc0.png',
  'https://raw.githubusercontent.com/liliyak606-sys/OURA/refs/heads/main/public/img/Gemini_Generated_Image_dbvvemdbvvemdbvv.png',
  'https://raw.githubusercontent.com/liliyak606-sys/OURA/refs/heads/main/public/img/Gemini_Generated_Image_nnmwwwnnmwwwnnmw.png',
  'https://raw.githubusercontent.com/liliyak606-sys/OURA/refs/heads/main/public/img/Gemini_Generated_Image_p930qxp930qxp930.png',
];

const videoUrl = 'https://raw.githubusercontent.com/liliyak606-sys/OURA/main/public/img/%D1%81%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B8%CC%86_%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE_%D1%80%D1%83%D0%BC_%D1%82%D1%83%D1%80_%D1%8D%D1%82%D0%BE%D0%B3%D0%BE.mp4';

export function Gallery() {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<{url: string, type: 'image' | 'video'} | null>(null);

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
            className="md:col-span-8 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedMedia({ url: images[0], type: 'image' })}
          >
            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src={images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Villa Exterior" />
            <div className="absolute top-8 left-8 z-20 glass-luxe rounded-full px-8 py-3 pointer-events-none">
              <span className="text-charcoal font-semibold text-[10px] tracking-[0.2em] uppercase">Architecture</span>
            </div>
          </motion.div>

          {/* Image 2: Tall */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedMedia({ url: images[1], type: 'image' })}
          > 
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src={images[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Details" />
          </motion.div>

          {/* Image 3: Square-ish */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedMedia({ url: images[2], type: 'image' })}
          > 
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
            <img src={images[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Architecture" />
          </motion.div>

          {/* Image 4: Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedMedia({ url: images[3], type: 'image' })}
          > 
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
             <img src={images[3]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Interior" />
             <div className="absolute top-8 left-8 z-20 glass-luxe rounded-full px-8 py-3 pointer-events-none">
              <span className="text-charcoal font-semibold text-[10px] tracking-[0.2em] uppercase">Interior</span>
            </div>
          </motion.div>

          {/* Image 5: Full Width Wide (Video) */}
          <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedMedia({ url: videoUrl, type: 'video' })}
          >
             <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
             <video src={videoUrl} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" autoPlay loop muted playsInline preload="metadata" />
             <div className="absolute bottom-8 right-8 z-20 glass-luxe rounded-full px-8 py-3 pointer-events-none">
              <span className="text-charcoal font-semibold text-[10px] tracking-[0.2em] uppercase">Perspective</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.url} className="max-w-full max-h-[90vh] object-contain rounded-2xl" alt="Full screen" />
              ) : (
                <video src={selectedMedia.url} className="max-w-full max-h-[90vh] object-contain rounded-2xl outline-none" autoPlay loop playsInline controls />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
