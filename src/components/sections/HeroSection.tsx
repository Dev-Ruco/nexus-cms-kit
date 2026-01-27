import { motion } from 'framer-motion';
import { ArrowRight, Play, Wifi, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-new.png';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-primary">
      {/* Decorative Circles - Vibrant, defined, visible through characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coral Grande - behind group, center-left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-16 right-[40%] w-80 h-80 bg-orange-500/75 rounded-full blur-lg z-0"
        />
        {/* Blue Medium - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-4 right-[20%] w-56 h-56 bg-blue-600/70 rounded-full blur-md z-0"
        />
        {/* Yellow Large - right side, lower */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-10 right-[0%] w-72 h-72 bg-yellow-400/75 rounded-full blur-lg z-0"
        />
        {/* Green/Teal Small - bottom right accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-24 right-[12%] w-40 h-40 bg-emerald-500/65 rounded-full blur-md z-0"
        />
      </div>

      {/* Content Grid */}
      <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
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

          {/* Right Column - Image with Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* WiFi Icon - Prominent teal, positioned top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 right-8 z-20"
            >
              <Wifi className="w-16 h-16 text-secondary/90" strokeWidth={1.5} />
            </motion.div>

            {/* Main Image Container - Larger, fills section properly */}
            <div className="relative h-full">
              <img
                src={heroImage}
                alt="Jovens moçambicanos com smartphone"
                className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover object-top drop-shadow-2xl"
              />
            </div>

            {/* Featured Card - "EM DESTAQUE" style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 right-4 md:right-12"
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

            {/* Circular navigation button - bottom right corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-16 right-4 md:right-0"
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex"
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
      </div>
    </section>
  );
}
