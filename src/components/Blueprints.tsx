import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Blueprints() {
  const { t } = useLanguage();

  const floorPlans = [
    {
      name: t.blueprints.floor1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      name: t.blueprints.floor2,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="blueprints" className="py-32 md:py-48 bg-cream border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Sticky Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-5/12 lg:sticky lg:top-40"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-charcoal mb-8">
              {t.blueprints.title}
            </h2>
            <div className="w-16 h-px bg-charcoal mb-8"></div>
            <p className="text-lg md:text-xl text-charcoal/50 font-light mb-16 leading-relaxed max-w-md">
              {t.blueprints.subtitle}
            </p>

            <div className="space-y-6">
              {t.blueprints.specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center border-b border-charcoal/10 pb-5">
                  <span className="text-charcoal/40 uppercase tracking-[0.2em] text-[10px] font-bold">{spec.label}</span>
                  <span className="font-display text-lg font-medium text-charcoal text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scrolling Blueprints */}
          <div className="lg:w-7/12 space-y-24">
            {floorPlans.map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col space-y-8"
              >
                <h3 className="font-display text-2xl md:text-3xl font-light text-charcoal">
                  <span className="text-charcoal/20 font-medium mr-6">0{index + 1}</span>
                  {plan.name}
                </h3>
                
                <div className="glass-luxe p-4 md:p-6 rounded-[2rem] md:rounded-[3rem]">
                  <div className="relative aspect-[16/10] w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-white/50">
                    {/* Architectural imagery acting as blueprint placeholders for now 
                        in production, swap with actual architectural svgs/plans */}
                    <img 
                      src={plan.image} 
                      alt={plan.name} 
                      className="absolute inset-0 w-full h-full object-cover filter contrast-125 grayscale opacity-70 mix-blend-multiply hover:grayscale-0 hover:opacity-100 transition-all duration-[2s]" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
