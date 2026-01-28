import { motion } from 'framer-motion';
import { ArrowRight, Play, Wifi, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-new.png';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-primary">
      {/* Decorative Circles - Background layer with BRAND COLORS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Teal Grande - Top center-left, principal destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-8 right-[35%] w-96 h-96 bg-secondary/60 rounded-full blur-xl z-0"
        />
        {/* Verde Grande - Bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-[-5%] w-80 h-80 bg-accent/50 rounded-full blur-xl z-0"
        />
        {/* Teal Medio - Top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-4 right-[15%] w-60 h-60 bg-secondary/70 rounded-full blur-lg z-0"
        />
        {/* Verde Medio - Center left, atras da imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/3 right-[45%] w-52 h-52 bg-accent/55 rounded-full blur-lg z-0"
        />
        {/* Branco Pequeno - Top left accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-20 right-[55%] w-32 h-32 bg-white/25 rounded-full blur-md z-0"
        />
        {/* Teal Solido Pequeno - Bottom accent, sem blur */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-32 right-[25%] w-20 h-20 bg-secondary/80 rounded-full z-0"
        />
      </div>

      {/* Main Grid - Full width, edge-to-edge */}
      <div className="grid lg:grid-cols-2 min-h-[75vh] lg:min-h-[80vh] relative z-10">
        
        {/* Left Column - Text Content */}
        <div className="flex items-center pt-24 lg:pt-0 order-last lg:order-first">
          <div className="px-4 sm:px-6 lg:px-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] py-12 lg:py-0 max-w-2xl">
            {/* White decorative dot - top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-4 h-4 bg-white rounded-full mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge - Glass style */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-white/90 text-sm font-medium">
                  Cidadania Digital para Todos
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                className="btn-gradient text-base px-8 py-6 h-auto rounded-full"
              >
                {t('hero.cta.learn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 h-auto rounded-full border-white/60 text-white hover:bg-white/10 hover:border-white/80 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.cta.activities')}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Image Full Height & Edge-to-Edge */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-[350px] lg:min-h-full order-first lg:order-last"
        >
          {/* Main Image - Fills entire column */}
          <img
            src={heroImage}
            alt="Jovens moçambicanos com smartphone"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />

          {/* WiFi Icon - Prominent teal, positioned top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-8 right-8 z-20"
          >
            <Wifi className="w-16 h-16 text-secondary/90" strokeWidth={1.5} />
          </motion.div>

          {/* Featured Card - "EM DESTAQUE" style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 right-8 md:right-16 z-20"
          >
            <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold text-primary/60 uppercase tracking-wider mb-1">
                    Em Destaque
                  </p>
                  <p className="text-sm font-bold text-primary leading-tight mb-2">
                    1200+ Jovens formados em literacia digital
                  </p>
                  <button className="text-xs text-secondary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Ler mais
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Circular navigation button - bottom left of image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-8 z-20"
          >
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Simple white dot style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
