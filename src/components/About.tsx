import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-cream">
              <img 
                src="https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Liliya_khablo_A_stately_influential_and_successful_chief_arch_cb42a9ee-e642-4e36-b593-5f01aea46919_3.png" 
                alt={t.about.signature} 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-16 h-px bg-charcoal mb-8"></div>
              
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-charcoal mb-8 leading-[1.1]">
                {t.about.title.split('\n').map((line: string, i: number) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>

              <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed font-light mb-12">
                {t.about.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-charcoal/20"></div>
                <span className="text-charcoal/80 text-sm md:text-base font-semibold tracking-wider uppercase">
                  {t.about.signature}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
