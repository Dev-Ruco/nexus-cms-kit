import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Award, Mail } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { provinces } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const benefits = [
  { icon: Star, key: 'benefit1' },
  { icon: Users, key: 'benefit2' },
  { icon: Mail, key: 'benefit3' },
  { icon: Award, key: 'benefit4' },
];

const BecomeMember = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      toast({
        title: language === 'pt' ? 'Erro' : 'Error',
        description: language === 'pt' 
          ? 'Por favor, aceite os termos e condições.' 
          : 'Please accept the terms and conditions.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: t('member.form.success'),
      description: language === 'pt' 
        ? 'Entraremos em contacto em breve para confirmar a sua adesão.' 
        : 'We will contact you soon to confirm your membership.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('member.title')}
          subtitle={t('member.subtitle')}
          breadcrumbs={[
            { label: t('nav.become_member') }
          ]}
        />

        {/* Benefits Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-10 text-center"
            >
              {t('member.benefits')}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-7 h-7 text-secondary" />
                        </div>
                        <p className="font-medium text-foreground">
                          {t(`member.${benefit.key}`)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 md:p-10">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
                    {t('member.form.title')}
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {t('member.form.success')}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {language === 'pt' 
                          ? 'A sua candidatura foi recebida com sucesso. Entraremos em contacto para confirmar a sua adesão.' 
                          : 'Your application has been received successfully. We will contact you to confirm your membership.'
                        }
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        {language === 'pt' ? 'Submeter outra candidatura' : 'Submit another application'}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-secondary text-white text-sm flex items-center justify-center">1</span>
                          {t('member.form.personal')}
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">{t('member.form.name')} *</Label>
                              <Input id="name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">{t('member.form.email')} *</Label>
                              <Input id="email" type="email" required />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="phone">{t('member.form.phone')}</Label>
                              <Input id="phone" type="tel" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="province">{t('member.form.province')}</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder={t('common.select')} />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  {provinces.map((province) => (
                                    <SelectItem key={province.id} value={province.id}>
                                      {province.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="age">{t('member.form.age')}</Label>
                              <Input id="age" type="number" min="16" max="100" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Motivation */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-secondary text-white text-sm flex items-center justify-center">2</span>
                          {t('member.form.motivation')}
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="why">{t('member.form.why')}</Label>
                            <Textarea id="why" rows={3} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="how">{t('member.form.how')}</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder={t('common.select')} />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectItem value="social">
                                  {language === 'pt' ? 'Redes Sociais' : 'Social Media'}
                                </SelectItem>
                                <SelectItem value="event">
                                  {language === 'pt' ? 'Evento' : 'Event'}
                                </SelectItem>
                                <SelectItem value="friend">
                                  {language === 'pt' ? 'Amigo/Colega' : 'Friend/Colleague'}
                                </SelectItem>
                                <SelectItem value="search">
                                  {language === 'pt' ? 'Pesquisa Online' : 'Online Search'}
                                </SelectItem>
                                <SelectItem value="other">
                                  {language === 'pt' ? 'Outro' : 'Other'}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-start gap-3">
                          <Checkbox 
                            id="terms" 
                            checked={termsAccepted}
                            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                          />
                          <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                            {t('member.form.terms')} *
                          </Label>
                        </div>
                        <div className="flex items-start gap-3">
                          <Checkbox 
                            id="newsletter"
                            checked={newsletterAccepted}
                            onCheckedChange={(checked) => setNewsletterAccepted(checked as boolean)}
                          />
                          <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
                            {t('member.form.newsletter')}
                          </Label>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-secondary/90 rounded-full py-3 h-auto text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin">⏳</span>
                            {language === 'pt' ? 'A submeter...' : 'Submitting...'}
                          </span>
                        ) : (
                          t('member.form.submit')
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeMember;
