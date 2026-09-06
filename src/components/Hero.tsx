import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useRef, useEffect } from 'react';

export function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.65; // Make the video play slower
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Cinematic Slow Zoom Background */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 25, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Liliya_khablo_httpss.mj.rundvLvfmLrcwM_A_luxury_penthouse_ter_9817c99f-2bae-4a64-889a-7968849974ea_2.mp4"
        />
        {/* Top gradient specifically for navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-black/70 to-transparent"></div>
        {/* Subtle gradient for maximum text contrast and moody feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70 pointer-events-none"></div>
      </motion.div>

      <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-between pb-10 md:pb-16 lg:pb-20 pt-32">
        
        {/* Empty top for flex spacing, since center and bottom are populated */}
        <div></div>

        {/* Center: AURA TITLE and BUTTON */}
        <div className="absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20 flex flex-col items-center justify-center mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center w-full"
          >
            <h1 className="font-display text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-[1] m-0 p-0 flex flex-col items-center text-center">
              <span className="text-[clamp(4rem,15vw,11rem)] font-bold tracking-[0.25em] ml-[0.25em]">AURA</span>
              <div className="flex items-center md:space-x-6 mt-1 md:mt-4 lg:mt-6 opacity-90">
                <div className="hidden md:block w-12 lg:w-24 h-px bg-white"></div>
                <span className="text-[11px] sm:text-[clamp(12px,1.5vw,2rem)] tracking-[0.6em] font-light text-white uppercase ml-[0.6em]">TEL AVIV</span>
                <div className="hidden md:block w-12 lg:w-24 h-px bg-white"></div>
              </div>
            </h1>
          </motion.div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10 overflow-hidden w-full flex justify-center py-2 px-4 z-30">
            <motion.button
              initial={{ y: "150%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-4 border border-white/40 rounded-full font-sans text-[9px] md:text-[10px] lg:text-[11px] xl:text-xs font-semibold tracking-[0.25em] md:tracking-[0.3em] uppercase text-white bg-black/20 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:text-charcoal hover:bg-white hover:border-white transition-all duration-500 cursor-pointer group flex items-center space-x-3"
            >
              <span>{t.hero.cta}</span>
              <span className="transform group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300">→</span>
            </motion.button>
          </div>
        </div>

        {/* Stats Row (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-end gap-y-8 gap-x-4 xl:gap-x-8 w-full relative z-20 mt-auto text-center"
        >
          {t.hero.stats.map((stat: any, idx: number) => (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="font-display text-4xl lg:text-5xl xl:text-7xl font-semibold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-none whitespace-nowrap">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-xs lg:text-sm xl:text-lg text-white font-medium drop-shadow-md uppercase tracking-wider">
                    {stat.unit}
                  </span>
                )}
              </div>
              <span className="text-[10px] lg:text-xs xl:text-base text-white/70 uppercase tracking-[0.2em] drop-shadow-md mt-1 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Mobile & Tablet Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex lg:hidden flex-col items-center justify-center relative z-20 mt-auto pb-6 md:pb-10"
        >
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/80 mb-4 drop-shadow-md font-semibold ml-[0.5em]">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/70 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
