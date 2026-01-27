import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: t('contact.form.success'),
      description: language === 'pt' 
        ? 'Entraremos em contacto em breve.' 
        : 'We will get back to you soon.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
          breadcrumbs={[
            { label: t('nav.contact') }
          ]}
        />

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  {t('contact.info')}
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contact.address')}</h3>
                      <p className="text-muted-foreground">
                        Av. Julius Nyerere, 1234<br />
                        Maputo, Moçambique
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contact.phone')}</h3>
                      <a href="tel:+258841234567" className="text-muted-foreground hover:text-secondary transition-colors">
                        +258 84 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contact.email')}</h3>
                      <a href="mailto:info@cibercidadaos.org" className="text-muted-foreground hover:text-secondary transition-colors">
                        info@cibercidadaos.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">
                        {language === 'pt' ? 'Mapa será adicionado em breve' : 'Map will be added soon'}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-serif font-semibold mb-2">
                          {t('contact.form.success')}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {language === 'pt' 
                            ? 'Obrigado pelo seu contacto. Responderemos em breve.' 
                            : 'Thank you for your message. We will respond soon.'
                          }
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          {language === 'pt' ? 'Enviar outra mensagem' : 'Send another message'}
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">{t('contact.form.name')} *</Label>
                            <Input id="name" required placeholder={language === 'pt' ? 'O seu nome' : 'Your name'} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">{t('contact.form.email')} *</Label>
                            <Input id="email" type="email" required placeholder="email@exemplo.com" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                          <Input id="subject" required placeholder={language === 'pt' ? 'Assunto da mensagem' : 'Message subject'} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{t('contact.form.message')} *</Label>
                          <Textarea 
                            id="message" 
                            required 
                            rows={6}
                            placeholder={language === 'pt' ? 'Escreva a sua mensagem...' : 'Write your message...'}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-secondary hover:bg-secondary/90 rounded-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="animate-spin">⏳</span>
                              {language === 'pt' ? 'A enviar...' : 'Sending...'}
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              {t('contact.form.submit')}
                            </span>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
