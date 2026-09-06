import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const images = [
  'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_w6abv9w6abv9w6ab.png', // Architecture
  'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_2fvj0t2fvj0t2fvj.png', // Interior
  'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_l4m92ol4m92ol4m9.png'  // Details/Lifestyle
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-charcoal mb-6 md:mb-8"
          >
            {t.features.title}
          </motion.h2>
          <div className="w-px h-16 md:h-24 bg-charcoal/20"></div>
        </div>

        {/* Editorial Layout Grid */}
        <div className="space-y-20 md:space-y-28 lg:space-y-32">
          {t.features.items.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col gap-10 lg:gap-16 xl:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image block */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
                    <img 
                      src={images[index]} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Text block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-charcoal/10 font-display text-[6rem] md:text-[10rem] font-light mb-2 block leading-none select-none">
                    0{index + 1}
                  </span>
                  <div className="relative -mt-10 md:-mt-20">
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-charcoal mb-8 leading-tight max-w-md">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-lg md:text-xl leading-relaxed font-light max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
