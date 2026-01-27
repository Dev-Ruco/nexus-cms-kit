import { motion } from 'framer-motion';
import { ArrowRight, Play, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-photo.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal circle - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-20 right-[15%] w-64 h-64 bg-secondary/15 rounded-full blur-xl"
        />
        {/* Coral circle - middle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-32 right-[40%] w-32 h-32 bg-orange-400/20 rounded-full blur-lg"
        />
        {/* Yellow circle - bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-40 right-[20%] w-24 h-24 bg-yellow-400/25 rounded-full blur-lg"
        />
        {/* Green accent circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-20 left-[45%] w-20 h-20 bg-accent/20 rounded-full blur-lg"
        />
        {/* Small blue circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-40 left-[35%] w-16 h-16 bg-primary/10 rounded-full blur-md"
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary text-sm font-medium">
                  Cidadania Digital para Todos
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
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
                className="text-base px-8 py-6 h-auto rounded-full border-primary text-primary hover:bg-primary/5"
              >
                <Play className="mr-2 h-5 w-5" />
                {t('hero.cta.activities')}
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image with Decorations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* WiFi Icon Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 -left-4 z-10"
            >
              <div className="bg-secondary/20 p-4 rounded-2xl backdrop-blur-sm">
                <Wifi className="w-8 h-8 text-secondary" />
              </div>
            </motion.div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Jovens moçambicanos com smartphone"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />
              {/* Subtle gradient overlay for image integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>

            {/* Stats Card Decoration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-card p-4 md:p-6 rounded-2xl shadow-xl border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">1200+</p>
                  <p className="text-sm text-muted-foreground">Jovens formados</p>
                </div>
              </div>
            </motion.div>

            {/* Additional decorative circle on image */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/30 rounded-full blur-xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary/60 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary/60 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
