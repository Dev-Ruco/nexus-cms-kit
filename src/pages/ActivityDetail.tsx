import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { activities } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ActivityDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const activity = activities.find(a => a.id === id);
  
  if (!activity) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-custom py-32 text-center">
          <h1 className="text-2xl font-serif">{t('common.error')}</h1>
          <Button asChild className="mt-4">
            <Link to="/actividades">{t('common.back')}</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedActivities = activities
    .filter(a => a.id !== id && a.category === activity.category)
    .slice(0, 3);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const title = language === 'pt' ? activity.title_pt : activity.title_en;
  const content = language === 'pt' ? activity.content_pt : activity.content_en;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={title}
          image={activity.image}
          breadcrumbs={[
            { label: t('nav.activities'), href: '/actividades' },
            { label: title }
          ]}
        />

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Meta info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Badge className="bg-secondary text-white">
                  {t(`activities.${activity.category}`)}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(activity.date)}</span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-lg max-w-none"
              >
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.article>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 pt-10 border-t border-border"
              >
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/actividades">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('common.back')}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Activities */}
        {relatedActivities.length > 0 && (
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                {t('activities.related')}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedActivities.map((related, index) => (
                  <motion.article
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/actividades/${related.id}`}>
                      <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={related.image}
                            alt={language === 'pt' ? related.title_pt : related.title_en}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                            {language === 'pt' ? related.title_pt : related.title_en}
                          </h3>
                          <span className="inline-flex items-center text-secondary text-sm font-medium mt-2">
                            {t('activities.read_more')}
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ActivityDetail;
