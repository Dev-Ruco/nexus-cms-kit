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
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t('data.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                <div className="bg-card rounded-2xl p-6 md:p-8 text-center h-full border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-accent mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2"
                  >
                    <AnimatedCounter value={indicator.value} />
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-foreground font-medium text-sm md:text-base mb-1">
                    {language === 'pt' ? indicator.label_pt : indicator.label_en}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm">
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
