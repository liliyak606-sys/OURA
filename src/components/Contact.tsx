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
    <section id="contact" className="py-32 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")',
        }}
      ></div>
      {/* Gradient overlay for moody feel */}
      <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"></div>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-luxe rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
          style={{ background: 'rgba(249, 249, 247, 0.7)' }} // Ensure bright but frosted look
        >
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-charcoal mb-6">
              {t.contact.title}
            </h2>
            <p className="text-charcoal/70 font-light text-lg md:text-xl max-w-xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.name}
                </label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/80 focus:ring-0 rounded-full px-8 py-5 text-charcoal placeholder-charcoal/30 outline-none transition-all duration-500 font-medium"
                  placeholder="E.g. Jane Doe"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.phone}
                </label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/80 focus:ring-0 rounded-full px-8 py-5 text-charcoal placeholder-charcoal/30 outline-none transition-all duration-500 font-medium"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.email}
                </label>
                <input 
                  type="email" 
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/80 focus:ring-0 rounded-full px-8 py-5 text-charcoal placeholder-charcoal/30 outline-none transition-all duration-500 font-medium"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/50 ml-6">
                  {t.contact.date}
                </label>
                <input 
                  type="date" 
                  className="w-full bg-white/60 backdrop-blur-lg border border-white/80 focus:border-charcoal focus:bg-white/80 focus:ring-0 rounded-full px-8 py-5 text-charcoal outline-none transition-all duration-500 font-medium"
                />
              </div>
            </div>

            <div className="pt-10">
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
