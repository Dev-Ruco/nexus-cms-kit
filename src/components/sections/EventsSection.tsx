import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, Globe, CalendarPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { events, Event } from '@/data/mockData';

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
  
  // Format date for ICS (YYYYMMDD)
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

export function EventsSection() {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'pt' ? 'pt-MZ' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const featuredEvents = events.filter(e => e.featured).slice(0, 2);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t('events.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredEvents.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl h-full flex flex-col overflow-hidden border border-border/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={event.image}
                    alt={language === 'pt' ? event.title_pt : event.title_en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${typeColors[event.type]} flex items-center`}>
                      {typeIcons[event.type]}
                      {t(`events.${event.type}`)}
                    </Badge>
                  </div>

                  {/* Date overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="line-clamp-1">
                      {language === 'pt' ? event.location_pt : event.location_en}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {language === 'pt' ? event.title_pt : event.title_en}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm line-clamp-2 flex-1 mb-5">
                    {language === 'pt' ? event.description_pt : event.description_en}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button
                      asChild
                      className="flex-1 btn-gradient rounded-full"
                    >
                      <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                        {event.type === 'online' ? t('events.register') : t('events.participate')}
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="shrink-0 rounded-full"
                      onClick={() => generateICS(event, language)}
                      title={t('events.add_calendar')}
                    >
                      <CalendarPlus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="group rounded-full">
            <Link to="/imprensa">
              {t('events.learn_more')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
