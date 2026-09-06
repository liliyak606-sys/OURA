import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export function SmallCTA() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_fkc53bfkc53bfkc5.jpeg')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight">
              {t.smallCta.text}
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <button 
              onClick={scrollToContact}
              className="group flex items-center gap-4 bg-white text-charcoal px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors duration-300 shadow-xl"
            >
              <span>{t.smallCta.button}</span>
              <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-charcoal/10 transition-colors">
                <ArrowRight size={16} className="text-charcoal group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
