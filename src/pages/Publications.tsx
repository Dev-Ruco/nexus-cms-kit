import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Eye, FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { publications } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const types = ['all', 'report', 'study', 'guide', 'article'];

const Publications = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPublications = activeFilter === 'all'
    ? publications
    : publications.filter(p => p.type === activeFilter);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('publications.title')}
          subtitle={t('publications.subtitle')}
          breadcrumbs={[
            { label: t('nav.publications') }
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
              {types.map((type) => (
                <Button
                  key={type}
                  variant={activeFilter === type ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(type)}
                  className={cn(
                    'rounded-full',
                    activeFilter === type && 'bg-secondary hover:bg-secondary/90'
                  )}
                >
                  {t(`publications.${type}`)}
                </Button>
              ))}
            </motion.div>

            {/* Publications List */}
            <div className="space-y-6">
              {filteredPublications.map((pub, index) => (
                <motion.article
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail */}
                    <div className="md:w-64 lg:w-80 shrink-0">
                      <div className="aspect-[4/3] md:h-full relative overflow-hidden bg-muted">
                        <img
                          src={pub.thumbnail}
                          alt={language === 'pt' ? pub.title_pt : pub.title_en}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                          <FileText className="w-12 h-12 text-primary/50" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-secondary border-secondary">
                          {t(`publications.${pub.type}`)}
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(pub.date)}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {pub.pages} {t('publications.pages')}
                        </span>
                      </div>

                      <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                        {language === 'pt' ? pub.title_pt : pub.title_en}
                      </h3>

                      <p className="text-muted-foreground mb-6 flex-1">
                        {language === 'pt' ? pub.description_pt : pub.description_en}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <Button className="bg-secondary hover:bg-secondary/90 rounded-full">
                          <Download className="h-4 w-4 mr-2" />
                          {t('publications.download')}
                        </Button>
                        <Button variant="outline" className="rounded-full">
                          <Eye className="h-4 w-4 mr-2" />
                          {t('publications.view')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPublications.length === 0 && (
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

export default Publications;
