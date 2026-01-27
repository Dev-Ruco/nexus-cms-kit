import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Globe, CalendarPlus, Play, X, Download, Mail, Phone } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, galleryImages, videos, Event } from '@/data/mockData';

const typeColors: Record<string, string> = {
  presencial: 'bg-secondary text-secondary-foreground',
  online: 'bg-accent text-accent-foreground',
  hibrido: 'bg-primary text-primary-foreground',
};

const typeIcons: Record<string, React.ReactNode> = {
  presencial: <MapPin className="h-3 w-3 mr-1" />,
  online: <Globe className="h-3 w-3 mr-1" />,
  hibrido: <Globe className="h-3 w-3 mr-1" />,
};

function generateICS(event: Event, language: 'pt' | 'en') {
  const title = language === 'pt' ? event.title_pt : event.title_en;
  const description = language === 'pt' ? event.description_pt : event.description_en;
  const location = language === 'pt' ? event.location_pt : event.location_en;
  
  const dateStr = event.date.replace(/-/g, '');
  const timeStr = event.time.replace(':', '') + '00';
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//CIBERCIDADAOS//Events//PT
BEGIN:VEVENT
DTSTART:${dateStr}T${timeStr}
DURATION:PT2H
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.id}-evento.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

const Press = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(e => e.type === activeFilter);

  const filters = [
    { key: 'all', label: t('events.all') },
    { key: 'presencial', label: t('events.presencial') },
    { key: 'online', label: t('events.online') },
    { key: 'hibrido', label: t('events.hibrido') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        title={t('press.title')}
        subtitle={t('press.subtitle')}
      />

      <main className="pb-20">
        {/* Events Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8"
            >
              {t('press.events')}
            </motion.h2>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveFilter(filter.key)}
                  className="rounded-full"
                >
                  {filter.label}
                </Button>
              ))}
            </motion.div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-xl h-full flex flex-col overflow-hidden border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={language === 'pt' ? event.title_pt : event.title_en}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={`${typeColors[event.type]} flex items-center text-xs`}>
                          {typeIcons[event.type]}
                          {t(`events.${event.type}`)}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Date & Time */}
                      <div className="flex items-center gap-3 text-muted-foreground text-xs mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(event.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {event.time}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span className="line-clamp-1">
                          {language === 'pt' ? event.location_pt : event.location_en}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                        {language === 'pt' ? event.title_pt : event.title_en}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm line-clamp-2 flex-1 mb-4">
                        {language === 'pt' ? event.description_pt : event.description_en}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 btn-gradient rounded-full text-xs"
                        >
                          <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                            {event.type === 'online' ? t('events.register') : t('events.participate')}
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="shrink-0 rounded-full h-8 w-8"
                          onClick={() => generateICS(event, language)}
                          title={t('events.add_calendar')}
                        >
                          <CalendarPlus className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-secondary/5">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8"
            >
              {t('press.gallery')}
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setLightboxImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={language === 'pt' ? image.caption_pt : image.caption_en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                    <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                      {language === 'pt' ? image.caption_pt : image.caption_en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setLightboxImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={lightboxImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Videos Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8"
            >
              {t('press.videos')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl overflow-hidden border border-border/50"
                >
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtube_id}`}
                      title={language === 'pt' ? video.title_pt : video.title_en}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground line-clamp-2">
                      {language === 'pt' ? video.title_pt : video.title_en}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {formatDate(video.date)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('press.contact')}
              </h2>
              
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:imprensa@cibercidadaos.org"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  imprensa@cibercidadaos.org
                </a>
                <a
                  href="tel:+25884XXXXXXX"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +258 84 XXX XXX
                </a>
              </div>

              <Button className="btn-gradient rounded-full" size="lg">
                <Download className="h-4 w-4 mr-2" />
                {t('press.download_kit')}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
