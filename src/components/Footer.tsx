import { useLanguage } from '../context/LanguageContext';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 md:pt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
          
          {/* Brand & Address */}
          <div className="lg:w-1/3">
            <h2 className="font-display text-3xl font-light tracking-widest text-white mb-8">
              AURA
            </h2>
            <div className="flex items-start gap-4 text-white/70">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-white/50" />
              <div>
                <span className="block font-medium text-white mb-1">{t.footer.office}</span>
                <span className="leading-relaxed font-light">{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Working Hours */}
            <div className="flex items-start gap-4 text-white/70">
              <Clock className="w-5 h-5 shrink-0 mt-0.5 text-white/50" />
              <div>
                <span className="block font-medium text-white mb-1">{t.footer.hoursTitle}</span>
                <span className="leading-relaxed font-light">{t.footer.hoursText}</span>
              </div>
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 text-white/70">
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-white/50" />
                <div>
                  <span className="block font-medium text-white mb-1">{t.footer.phoneLabel}</span>
                  <a href="tel:+972540000000" className="leading-relaxed font-light hover:text-white transition-colors">
                    +972 54 000 0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 text-white/70">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-white/50" />
                <div>
                  <span className="block font-medium text-white mb-1">{t.footer.emailLabel}</span>
                  <a href="mailto:concierge@aura-telaviv.com" className="leading-relaxed font-light hover:text-white transition-colors">
                    concierge@aura-telaviv.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Copyright & Design Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-medium">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.design}</p>
        </div>
      </div>
    </footer>
  );
}
