import { motion } from 'framer-motion';
import { ArrowRight, Play, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-photo.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Colorful Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coral blob - top center-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-32 right-[42%] w-48 h-48 bg-orange-500/45 rounded-full blur-2xl"
        />
        {/* Blue blob - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-16 right-[28%] w-40 h-40 bg-blue-500/40 rounded-full blur-2xl"
        />
        {/* Yellow blob - bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-40 right-[12%] w-36 h-36 bg-yellow-400/45 rounded-full blur-2xl"
        />
        {/* Green/Accent blob - bottom center-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-56 right-[32%] w-32 h-32 bg-accent/35 rounded-full blur-2xl"
        />
      </div>

      {/* Content Grid */}
      <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
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
            className="relative"
          >
            {/* WiFi Icon - Abstract, positioned top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 right-8 z-10"
            >
              <Wifi className="w-16 h-16 text-secondary/70" strokeWidth={1.5} />
            </motion.div>

            {/* Main Image Container - No rounded corners */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Jovens moçambicanos com smartphone"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />
              {/* Left fade - blends into dark background */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
              {/* Bottom fade - blends into dark background */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
              {/* Top subtle fade */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/40 to-transparent" />
            </div>

            {/* Stats Card - White for contrast */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 right-4 md:right-12"
            >
              <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">1200+</p>
                    <p className="text-xs text-primary/70">Jovens formados</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - White for dark background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
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
