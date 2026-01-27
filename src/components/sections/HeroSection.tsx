import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-photo.jpg';

// Organic connection lines SVG component
function ConnectionLines() {
  return (
    <svg
      className="absolute -right-8 top-1/4 w-32 h-48 opacity-[0.08]"
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20 Q 50 40, 90 30 Q 60 60, 80 90"
        stroke="hsl(var(--secondary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M5 50 Q 40 70, 85 55 Q 55 85, 70 120"
        stroke="hsl(var(--secondary))"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 80 Q 45 95, 75 85 Q 50 110, 60 140"
        stroke="hsl(var(--accent))"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-primary/[0.03] via-secondary/[0.02] to-transparent">
      {/* Decorative Elements - Reduced to 2 strategic blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary blob - right side of image, mid-level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/3 right-[10%] w-80 h-80 bg-secondary/[0.08] rounded-full blur-[80px]"
        />
        {/* Secondary blob - base area, follows movement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-20 right-[25%] w-48 h-48 bg-accent/[0.06] rounded-full blur-[60px]"
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

          {/* Right Column - Image with Refined Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Organic Connection Lines - subtle, abstract */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ConnectionLines />
            </motion.div>

            {/* Layer 1 - Diffuse shadow behind image */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/[0.08] rounded-3xl blur-[60px] scale-105" />
            
            {/* Layer 2 - Color halo */}
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-gradient-radial from-secondary/[0.06] to-transparent rounded-3xl blur-[40px] scale-110" />

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Jovens moçambicanos com smartphone"
                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover brightness-[0.95] contrast-[1.02]"
              />
              {/* Layer 3 - Fade at base for seamless integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              {/* Subtle top fade */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent" />
            </div>

            {/* Stats Card with refined shadow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 right-4 md:right-12"
            >
              {/* Card halo */}
              <div className="absolute inset-0 bg-secondary/[0.08] rounded-2xl blur-xl scale-110" />
              {/* Card */}
              <div className="relative bg-card/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">1200+</p>
                    <p className="text-xs text-muted-foreground">Jovens formados</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
