import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { activities } from '@/data/mockData';

const categoryColors: Record<string, string> = {
  workshop: 'bg-secondary text-secondary-foreground',
  lancamento: 'bg-accent text-accent-foreground',
  campanha: 'bg-primary text-primary-foreground',
  parceria: 'bg-muted text-muted-foreground',
};

export function ActivitiesSection() {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const featuredActivities = activities.slice(0, 4);

  return (
    <section className="section-padding bg-background">
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
            {t('activities.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredActivities.map((activity, index) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/actividades/${activity.id}`} className="block">
                <div className="bg-card rounded-xl h-full flex flex-col overflow-hidden border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={activity.image}
                      alt={language === 'pt' ? activity.title_pt : activity.title_en}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={categoryColors[activity.category] || 'bg-secondary'}>
                        <Tag className="h-3 w-3 mr-1" />
                        {activity.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="h-4 w-4" />
                      {formatDate(activity.date)}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                      {language === 'pt' ? activity.title_pt : activity.title_en}
                    </h3>

                    {/* Summary */}
                    <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
                      {language === 'pt' ? activity.summary_pt : activity.summary_en}
                    </p>

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-1 text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                      {t('activities.read_more')}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/actividades">
              {t('activities.view_all')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
