import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { teamMembers } from '@/data/mockData';

const Governance = () => {
  const { language, t } = useLanguage();
  const sortedMembers = [...teamMembers].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('governance.title')}
          subtitle={t('governance.subtitle')}
          breadcrumbs={[
            { label: t('nav.about'), href: '/sobre/cibercidadaos' },
            { label: t('nav.about.governance') }
          ]}
        />

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('governance.team')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-card rounded-xl overflow-hidden h-full border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    {/* Photo */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Social Links Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`LinkedIn de ${member.name}`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`Twitter de ${member.name}`}
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            aria-label={`Email de ${member.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 text-center">
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm mb-2">
                        {language === 'pt' ? member.role_pt : member.role_en}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {language === 'pt' ? member.bio_pt : member.bio_en}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Section - Placeholder */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('governance.board')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'pt'
                  ? 'Informações sobre o Conselho de Administração serão disponibilizadas em breve.'
                  : 'Information about the Board of Directors will be available soon.'
                }
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;
