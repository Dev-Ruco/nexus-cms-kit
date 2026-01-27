import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Smartphone, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { dataIndicators } from '@/data/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Smartphone,
  GraduationCap,
  Users,
};

interface CounterProps {
  value: string;
  duration?: number;
}

function AnimatedCounter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isPercentage = value.includes('%');

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * numericValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericValue, duration]);

  const displayValue = isPercentage 
    ? `${Math.round(count)}%`
    : `${count.toFixed(1).replace('.0', '')}${suffix}`;

  return <span>{displayValue}</span>;
}

export function DataSection() {
  const { language, t } = useLanguage();

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            {t('data.title')}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {t('data.subtitle')}
          </p>
        </motion.div>

        {/* Data Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {dataIndicators.map((indicator, index) => {
            const Icon = iconMap[indicator.icon] || Wifi;
            
            return (
              <motion.div
                key={indicator.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center h-full border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                  >
                    <AnimatedCounter value={indicator.value} />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-white font-medium text-sm md:text-base mb-1">
                    {language === 'pt' ? indicator.label_pt : indicator.label_en}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs md:text-sm">
                    {language === 'pt' ? indicator.description_pt : indicator.description_en}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
