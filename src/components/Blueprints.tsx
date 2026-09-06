import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Maximize2, X } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const images = {
  floor1: 'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_fkc53bfkc53bfkc5.jpeg',
  floor2: 'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_b7f190b7f190b7f1.jpeg',
  tour3d: 'https://cdn.jsdelivr.net/gh/liliyak606-sys/OURA@main/public/img/Gemini_Generated_Image_k0809sk0809sk080.jpeg'
};

const hotspotPositions = [
  { id: 'master', x: 28, y: 35 },
  { id: 'bath', x: 42, y: 22 },
  { id: 'bed2', x: 62, y: 32 },
  { id: 'stairs', x: 50, y: 48 },
  { id: 'pool', x: 78, y: 56 },
  { id: 'living', x: 62, y: 72 },
  { id: 'dining', x: 46, y: 82 },
  { id: 'kitchen', x: 28, y: 65 },
  { id: 'entrance', x: 30, y: 84 },
  { id: 'balcony', x: 18, y: 48 },
];

export function Blueprints() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [activeFloor, setActiveFloor] = useState<'floor1' | 'floor2'>('floor1');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hotspots = hotspotPositions.map(pos => ({
    ...pos,
    title: t.blueprints.hotspots[pos.id].title,
    area: t.blueprints.hotspots[pos.id].area
  }));

  return (
    <section id="blueprints" className="py-16 md:py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Common Header with Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-charcoal leading-[1.1]">
              {t.blueprints.tour3dTitle.split('\n').map((line: string, i: number) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex bg-white p-1.5 rounded-full border border-charcoal/10 self-start lg:self-auto shadow-sm"
          >
            <button 
              onClick={() => setViewMode('3d')} 
              className={`px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-500 ${viewMode === '3d' ? 'bg-charcoal text-white shadow-md' : 'text-charcoal/50 hover:text-charcoal'}`}
            >
              {t.blueprints.tour3dTab}
            </button>
            <button 
              onClick={() => setViewMode('2d')} 
              className={`px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-500 ${viewMode === '2d' ? 'bg-charcoal text-white shadow-md' : 'text-charcoal/50 hover:text-charcoal'}`}
            >
              {t.blueprints.tour2dTab}
            </button>
          </motion.div>
        </div>

        {/* Dynamic Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {viewMode === '3d' ? (
              <motion.div 
                key="3d"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full relative bg-white transition-all duration-500 ${
                  isFullscreen 
                    ? 'fixed inset-0 z-50 p-0 rounded-none h-[100dvh] flex flex-col justify-center bg-black/95 backdrop-blur-xl' 
                    : 'p-2 md:p-4 lg:p-6 rounded-[2rem] lg:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className={`relative w-full overflow-hidden transition-all duration-500 ${
                  isFullscreen ? 'h-[100dvh] rounded-none' : 'aspect-[4/3] md:aspect-[16/9] rounded-2xl lg:rounded-[2.5rem] bg-cream'
                }`}>
                  
                  {/* Fullscreen Toggle Button - Mobile Only */}
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className={`z-50 p-3 bg-white/90 backdrop-blur rounded-full text-charcoal hover:bg-white transition-colors shadow-sm md:hidden ${
                      isFullscreen ? 'fixed top-6 right-6' : 'absolute top-4 right-4'
                    }`}
                    aria-label={isFullscreen ? t.blueprints.collapse : t.blueprints.expand}
                  >
                    {isFullscreen ? <X size={24} /> : <Maximize2 size={20} />}
                  </button>

                  <TransformWrapper
                    key={isFullscreen ? 'fullscreen' : 'inline'}
                    initialScale={1}
                    minScale={1}
                    maxScale={1}
                    centerOnInit
                    wheel={{ disabled: true }}
                    pinch={{ disabled: true }}
                    doubleClick={{ disabled: true }}
                    panning={{ disabled: false }}
                  >
                    {() => (
                      <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "max-content", height: "100%" }}>
                        <div className="relative h-full w-max flex items-center justify-center">
                          <img 
                            src={images.tour3d} 
                            alt={t.blueprints.alt3d} 
                            className="h-full w-auto max-w-none pointer-events-none" 
                            draggable="false"
                          />
                          
                          {/* Hotspots - Hidden on Mobile */}
                          {hotspots.map(spot => (
                            <div key={spot.id} className="hidden md:block absolute group z-10" style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
                              {/* Point with pulse */}
                              <div className="relative w-4 h-4 md:w-5 md:h-5 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer pointer-events-auto">
                                <div className="absolute w-full h-full bg-white rounded-full animate-ping opacity-75"></div>
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-charcoal rounded-full relative z-10"></div>
                              </div>
                              
                              {/* Tooltip */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 md:mb-4 px-4 py-2.5 md:py-3 bg-white/95 backdrop-blur text-charcoal rounded-xl md:rounded-2xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 flex flex-col items-center">
                                <span className="text-[10px] md:text-xs font-semibold tracking-[0.1em] uppercase mb-0.5">{spot.title}</span>
                                <span className="text-charcoal/50 text-xs md:text-sm font-medium">{spot.area}</span>
                                {/* Triangle pointer */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TransformComponent>
                    )}
                  </TransformWrapper>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="2d"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 xl:gap-32"
              >
                {/* Left Column: Text & Specs */}
                <div className="w-full lg:w-[40%] flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-px bg-charcoal mb-8"></div>
                    <p className="text-charcoal/50 text-base md:text-lg leading-relaxed font-light mb-12 lg:mb-16 max-w-sm">
                      {t.blueprints.subtitle}
                    </p>
                  </motion.div>

                  {/* Specs Block */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col border-t border-charcoal/10"
                  >
                    {t.blueprints.specs.map((spec: any, index: number) => (
                      <div key={index} className="flex flex-row justify-between items-center py-5 border-b border-charcoal/10">
                        <span className="text-charcoal/40 text-[10px] md:text-xs tracking-[0.15em] uppercase font-semibold">
                          {spec.label}
                        </span>
                        <span className="text-charcoal text-sm md:text-base font-medium">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Column: Interactive Blueprint */}
                <div className="w-full lg:w-[60%] flex flex-col relative mt-16 lg:mt-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white p-4 md:p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
                  >
                    <div className="relative aspect-[4/3] md:aspect-[16/10] bg-cream rounded-2xl lg:rounded-[2rem] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeFloor}
                          src={images[activeFloor as 'floor1' | 'floor2']}
                          alt={activeFloor === 'floor1' ? t.blueprints.floor1 : t.blueprints.floor2}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="w-full h-full object-cover object-center"
                        />
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Toggle Switch / Buttons (Bottom Left of Right Column) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mt-6 md:mt-8 px-4 md:px-8"
                  >
                    <button
                      onClick={() => setActiveFloor('floor1')}
                      className={`flex items-center space-x-2 md:space-x-3 transition-opacity duration-500 ${
                        activeFloor === 'floor1' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <span className="text-charcoal/30 text-xl md:text-2xl font-display font-light">01</span>
                      <span className="text-charcoal text-lg md:text-xl font-display font-light whitespace-nowrap">{t.blueprints.floor1}</span>
                    </button>
                    
                    <button
                      onClick={() => setActiveFloor('floor2')}
                      className={`flex items-center space-x-2 md:space-x-3 transition-opacity duration-500 ${
                        activeFloor === 'floor2' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                    >
                      <span className="text-charcoal/30 text-xl md:text-2xl font-display font-light">02</span>
                      <span className="text-charcoal text-lg md:text-xl font-display font-light whitespace-nowrap">{t.blueprints.floor2}</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
