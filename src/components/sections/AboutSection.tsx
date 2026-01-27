import { motion, Easing } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Eye, 
  Compass,
  GraduationCap,
  Lock,
  Scale,
  BarChart3,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutIllustration from '@/assets/about-illustration.jpg';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
  }
};

// Areas of action data - compact
const areasOfAction = [
  { icon: GraduationCap, title_pt: 'Educação Digital', title_en: 'Digital Education' },
  { icon: Lock, title_pt: 'Privacidade', title_en: 'Privacy' },
  { icon: Globe, title_pt: 'Inclusão Digital', title_en: 'Digital Inclusion' },
  { icon: Scale, title_pt: 'Ética Tecnológica', title_en: 'Tech Ethics' },
  { icon: BarChart3, title_pt: 'Investigação', title_en: 'Research' }
];

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {language === 'pt' 
                ? 'Somos uma organização moçambicana da sociedade civil dedicada à promoção da cidadania digital e dos Direitos Humanos no ambiente digital.'
                : 'We are a Mozambican civil society organisation dedicated to promoting digital citizenship and human rights in the digital environment.'
              }
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <span>{language === 'pt' ? 'Actuação a nível nacional' : 'Nationwide operation'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>{language === 'pt' ? 'Foco em inclusão e educação cívica digital' : 'Focus on inclusion and digital civic education'}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>{language === 'pt' ? 'Uso ético e responsável das tecnologias' : 'Ethical and responsible use of technology'}</span>
              </li>
            </ul>
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

        {/* Mission, Vision & Objectives - 3 Colored Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Mission */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-primary text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {t('about.mission')}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Promover os Direitos Humanos no ambiente digital, capacitando cidadãos para uma participação segura, ética e responsável na sociedade da informação.'
                    : 'To promote human rights in the digital environment, empowering citizens for safe, ethical, and responsible participation in the information society.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-secondary text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {t('about.vision')}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Um Moçambique onde todos os cidadãos exercem plenamente a sua cidadania digital, beneficiando das oportunidades tecnológicas de forma livre, segura e inclusiva.'
                    : 'A Mozambique where all citizens fully exercise their digital citizenship, benefiting from technological opportunities in a free, safe, and inclusive manner.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Objectives */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-accent text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {t('about.objectives')}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed text-sm">
                  {language === 'pt'
                    ? 'Promover a literacia digital, fortalecer a participação cívica online, e defender os direitos digitais de todos os moçambicanos.'
                    : 'To promote digital literacy, strengthen online civic participation, and defend the digital rights of all Mozambicans.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Areas of Action - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-serif text-foreground text-center mb-8">
            {t('about.areas')}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {areasOfAction.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-center gap-2 bg-card rounded-lg px-4 py-2.5 border border-border/50 shadow-sm hover:shadow-md hover:border-accent/50 transition-all"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {language === 'pt' ? area.title_pt : area.title_en}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
