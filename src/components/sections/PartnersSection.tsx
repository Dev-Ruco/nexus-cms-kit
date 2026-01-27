import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { partners } from '@/data/mockData';

export function PartnersSection() {
  const { t } = useLanguage();

  const activePartners = partners.filter(p => p.active);
  const featuredPartners = activePartners.filter(p => p.featured);
  const regularPartners = activePartners.filter(p => !p.featured);

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        {/* Featured Partners */}
        {featuredPartners.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredPartners.map((partner, index) => (
                <motion.a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-card rounded-xl p-6 md:p-8 flex flex-col items-center justify-center h-full min-h-[140px] border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:border-secondary">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="mt-3 flex items-center gap-1 text-muted-foreground group-hover:text-secondary transition-colors">
                      <span className="text-sm font-medium text-center line-clamp-1">
                        {partner.name}
                      </span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Partners */}
        {regularPartners.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {regularPartners.map((partner, index) => (
                <motion.a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group"
                >
                  <div className="bg-card rounded-lg p-4 flex items-center justify-center h-20 transition-all duration-300 hover:shadow-md hover:bg-card/80">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      title={partner.name}
                      className="h-8 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Partner Categories Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary/50" />
            <span>Internacionais</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            <span>Tecnologia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <span>Governo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
            <span>Educação</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
