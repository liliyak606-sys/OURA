import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden flex items-center justify-center min-h-screen">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_2fvj0t2fvj0t2fvj.png")',
        }}
      ></div>
      {/* Gradient overlay for moody feel */}
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"></div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-luxe rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
          style={{ background: 'rgba(249, 249, 247, 0.85)' }} // Slightly more opaque for better readability against the new bg
        >
          <div className="mb-12 lg:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-charcoal mb-6 leading-[1.1]">
              {t.contact.title.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="text-charcoal/70 font-light text-lg md:text-xl max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 text-left max-w-2xl mx-auto">
            <div className="flex flex-col space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.name}
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/90 focus:ring-0 rounded-full px-8 py-5 text-charcoal placeholder-charcoal/30 outline-none transition-all duration-500 font-medium text-lg"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.phone}
                </label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/90 focus:ring-0 rounded-full px-8 py-5 text-charcoal placeholder-charcoal/30 outline-none transition-all duration-500 font-medium text-lg"
                  placeholder="+972 50 123 4567"
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={submitted}
                className="w-full relative overflow-hidden group bg-charcoal text-white rounded-full py-7 px-10 font-bold tracking-[0.2em] uppercase text-[11px] hover:bg-black transition-all duration-500 disabled:bg-charcoal/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {submitted ? t.contact.success : t.contact.submit}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
