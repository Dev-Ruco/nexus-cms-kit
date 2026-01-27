import { motion, Easing } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Lightbulb, 
  TrendingUp,
  GraduationCap,
  Lock,
  Scale,
  BarChart3,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
  }
};

// Values data
const values = [
  {
    icon: Users,
    title_pt: 'Inclusão',
    title_en: 'Inclusion',
    description_pt: 'Defendemos uma transformação digital que não exclua ninguém, promovendo o acesso equitativo às tecnologias e à informação.',
    description_en: 'We support a digital transformation that leaves no one behind, promoting equitable access to technology and information.'
  },
  {
    icon: Shield,
    title_pt: 'Integridade',
    title_en: 'Integrity',
    description_pt: 'Actuamos com transparência, ética e responsabilidade em todas as nossas iniciativas e parcerias.',
    description_en: 'We act with transparency, ethics, and accountability in all our initiatives and partnerships.'
  },
  {
    icon: Lightbulb,
    title_pt: 'Inovação',
    title_en: 'Innovation',
    description_pt: 'Incentivamos soluções criativas e sustentáveis para responder aos desafios emergentes do ambiente digital.',
    description_en: 'We encourage creative and sustainable solutions to address emerging challenges in the digital environment.'
  },
  {
    icon: TrendingUp,
    title_pt: 'Impacto',
    title_en: 'Impact',
    description_pt: 'Trabalhamos com foco em resultados concretos e mensuráveis que fortaleçam a cidadania digital e os Direitos Humanos.',
    description_en: 'We focus on concrete and measurable results that strengthen digital citizenship and human rights.'
  }
];

// Areas of action data
const areasOfAction = [
  {
    icon: GraduationCap,
    title_pt: 'Educação para a cidadania digital',
    title_en: 'Digital Citizenship Education',
    description_pt: 'Desenvolvimento de programas de formação em competências digitais, promovendo o uso crítico, consciente e responsável das tecnologias.',
    description_en: 'Development of training programmes in digital skills, promoting critical, informed, and responsible use of technology.'
  },
  {
    icon: Lock,
    title_pt: 'Liberdades e privacidade no ambiente digital',
    title_en: 'Digital Freedoms and Privacy',
    description_pt: 'Promoção do acesso à informação, da liberdade de expressão e da protecção da privacidade no espaço digital.',
    description_en: 'Promotion of access to information, freedom of expression, and privacy protection in the digital space.'
  },
  {
    icon: Globe,
    title_pt: 'Inclusão digital e justiça social',
    title_en: 'Digital Inclusion and Social Justice',
    description_pt: 'Iniciativas que reduzem desigualdades no acesso e no uso das tecnologias, com atenção especial a grupos vulneráveis.',
    description_en: 'Initiatives that reduce inequalities in access to and use of technology, with particular attention to vulnerable groups.'
  },
  {
    icon: Scale,
    title_pt: 'Transparência e ética tecnológica',
    title_en: 'Transparency and Tech Ethics',
    description_pt: 'Promoção da transparência e da responsabilização no uso de dados, algoritmos, inteligência artificial e tecnologias emergentes.',
    description_en: 'Promotion of transparency and accountability in the use of data, algorithms, artificial intelligence, and emerging technologies.'
  },
  {
    icon: BarChart3,
    title_pt: 'Investigação, dados e análise',
    title_en: 'Research, Data and Analysis',
    description_pt: 'Produção e divulgação de estudos e análises sobre cidadania digital, democracia digital e Direitos Humanos em Moçambique.',
    description_en: 'Production and dissemination of studies and analyses on digital citizenship, digital democracy, and human rights in Mozambique.'
  }
];

export function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'pt' 
              ? 'A CIBERCIDADÃOS é uma organização moçambicana da sociedade civil que trabalha na promoção da cidadania digital, dos Direitos Humanos no ambiente digital e do uso ético e responsável das tecnologias. Actuamos a nível nacional, com foco na inclusão, na educação cívica digital e no fortalecimento da participação cidadã na sociedade da informação.'
              : 'CIBERCIDADÃOS is a Mozambican civil society organisation working to promote digital citizenship, human rights in the digital environment, and the ethical and responsible use of technology. We operate nationwide, focusing on inclusion, digital civic education, and strengthening citizen participation in the information society.'
            }
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {/* Mission */}
          <motion.div variants={cardVariants}>
            <Card className="h-full bg-card border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Target className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground">
                    {t('about.mission')}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'pt'
                    ? 'Promover os Direitos Humanos no ambiente digital, capacitando cidadãos com conhecimentos, competências e consciência crítica para uma participação segura, ética, informada e responsável na sociedade da informação.'
                    : 'To promote human rights in the digital environment by empowering citizens with knowledge, skills, and critical awareness for safe, ethical, informed, and responsible participation in the information society.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div variants={cardVariants}>
            <Card className="h-full bg-card border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground">
                    {t('about.vision')}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'pt'
                    ? 'Um Moçambique onde todos os cidadãos possam exercer plenamente a sua cidadania no ambiente digital, beneficiando das oportunidades tecnológicas de forma livre, segura, ética, inclusiva e socialmente justa.'
                    : 'A Mozambique where all citizens can fully exercise their digital citizenship, benefiting from technological opportunities in a free, safe, ethical, inclusive, and socially just manner.'
                  }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">
            {t('about.values')}
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {language === 'pt' ? value.title_pt : value.title_en}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {language === 'pt' ? value.description_pt : value.description_en}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Areas of Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">
            {t('about.areas')}
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {areasOfAction.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {language === 'pt' ? area.title_pt : area.title_en}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {language === 'pt' ? area.description_pt : area.description_en}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
