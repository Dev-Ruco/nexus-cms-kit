import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { activities } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const categories = ['all', 'workshop', 'campanha', 'parceria', 'lancamento', 'evento'];

const Activities = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(a => a.category === activeFilter);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('activities.page.title')}
          subtitle={t('activities.page.subtitle')}
          breadcrumbs={[
            { label: t('nav.activities') }
          ]}
        />

        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-10 justify-center"
            >
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeFilter === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    'rounded-full',
                    activeFilter === cat && 'bg-secondary hover:bg-secondary/90'
                  )}
                >
                  {t(`activities.${cat}`)}
                </Button>
              ))}
            </motion.div>

            {/* Activities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity, index) => (
                <motion.article
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/actividades/${activity.id}`}>
                    <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={activity.image}
                          alt={language === 'pt' ? activity.title_pt : activity.title_en}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-secondary text-white">
                            {t(`activities.${activity.category}`)}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(activity.date)}</span>
                        </div>

                        <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {language === 'pt' ? activity.title_pt : activity.title_en}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                          {language === 'pt' ? activity.summary_pt : activity.summary_en}
                        </p>

                        <span className="inline-flex items-center text-secondary text-sm font-medium group-hover:gap-2 transition-all">
                          {t('activities.read_more')}
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredActivities.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t('common.empty')}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
