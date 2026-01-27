import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutIllustration from '@/assets/about-illustration.jpg';

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                {language === 'pt' 
                  ? 'Somos uma organização moçambicana da sociedade civil dedicada à promoção da cidadania digital e dos Direitos Humanos no ambiente digital.'
                  : 'We are a Mozambican civil society organisation dedicated to promoting digital citizenship and human rights in the digital environment.'
                }
              </p>
              <p>
                {language === 'pt'
                  ? 'Trabalhamos em todo o território nacional para capacitar cidadãos, especialmente jovens, a navegar de forma segura, ética e responsável no mundo digital.'
                  : 'We work across the country to empower citizens, especially young people, to navigate safely, ethically, and responsibly in the digital world.'
                }
              </p>
              <p>
                {language === 'pt'
                  ? 'A nossa actuação assenta em pilares fundamentais: educação cívica digital, protecção da privacidade online, combate à desinformação e promoção da inclusão tecnológica.'
                  : 'Our work is based on fundamental pillars: digital civic education, online privacy protection, fighting misinformation, and promoting technological inclusion.'
                }
              </p>
            </div>

            <Button 
              asChild
              className="btn-gradient rounded-full px-6 py-2 h-auto group"
            >
              <Link to="/sobre/cibercidadaos">
                {t('about.learn_more')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutIllustration} 
                alt={language === 'pt' ? 'Jovens em formação digital' : 'Youth in digital training'}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
