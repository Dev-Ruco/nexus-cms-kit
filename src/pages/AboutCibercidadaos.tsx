import { motion, Easing } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/layout/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  Eye, 
  Compass,
  GraduationCap,
  Lock,
  Scale,
  BarChart3,
  Globe,
  Users,
  Megaphone,
  Handshake,
  BookOpen
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

const areasOfAction = [
  { 
    icon: GraduationCap, 
    title_pt: 'Educação Digital', 
    title_en: 'Digital Education',
    description_pt: 'Capacitamos cidadãos em competências digitais básicas e avançadas, desde navegação segura até literacia mediática.',
    description_en: 'We train citizens in basic and advanced digital skills, from safe browsing to media literacy.'
  },
  { 
    icon: Lock, 
    title_pt: 'Privacidade e Segurança', 
    title_en: 'Privacy and Security',
    description_pt: 'Promovemos a protecção de dados pessoais e práticas de segurança online para indivíduos e organizações.',
    description_en: 'We promote personal data protection and online security practices for individuals and organizations.'
  },
  { 
    icon: Globe, 
    title_pt: 'Inclusão Digital', 
    title_en: 'Digital Inclusion',
    description_pt: 'Trabalhamos para reduzir a exclusão digital, levando tecnologia e conhecimento às comunidades marginalizadas.',
    description_en: 'We work to reduce digital exclusion, bringing technology and knowledge to marginalized communities.'
  },
  { 
    icon: Scale, 
    title_pt: 'Ética Tecnológica', 
    title_en: 'Tech Ethics',
    description_pt: 'Defendemos o uso ético e responsável das tecnologias, promovendo os direitos humanos no espaço digital.',
    description_en: 'We advocate for ethical and responsible use of technology, promoting human rights in the digital space.'
  },
  { 
    icon: BarChart3, 
    title_pt: 'Investigação e Dados', 
    title_en: 'Research and Data',
    description_pt: 'Conduzimos pesquisas sobre o cenário digital em Moçambique, fornecendo dados para políticas públicas.',
    description_en: 'We conduct research on the digital landscape in Mozambique, providing data for public policies.'
  }
];

const operatingModels = [
  {
    icon: Users,
    title_pt: 'Formações Presenciais',
    title_en: 'In-Person Training',
    description_pt: 'Workshops e cursos realizados em escolas, comunidades e organizações em todo o país.',
    description_en: 'Workshops and courses held in schools, communities, and organizations across the country.'
  },
  {
    icon: Megaphone,
    title_pt: 'Campanhas de Sensibilização',
    title_en: 'Awareness Campaigns',
    description_pt: 'Iniciativas de comunicação para educar o público sobre temas digitais relevantes.',
    description_en: 'Communication initiatives to educate the public on relevant digital topics.'
  },
  {
    icon: Handshake,
    title_pt: 'Parcerias Estratégicas',
    title_en: 'Strategic Partnerships',
    description_pt: 'Colaborações com governo, sector privado, academia e organizações internacionais.',
    description_en: 'Collaborations with government, private sector, academia, and international organizations.'
  },
  {
    icon: BookOpen,
    title_pt: 'Publicações e Recursos',
    title_en: 'Publications and Resources',
    description_pt: 'Produção de materiais educativos, relatórios e guias para diversos públicos.',
    description_en: 'Production of educational materials, reports, and guides for diverse audiences.'
  }
];

const AboutCibercidadaos = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHero
          title={t('about.page.title')}
          subtitle={t('about.page.subtitle')}
          breadcrumbs={[
            { label: t('nav.about'), href: '/sobre/cibercidadaos' },
            { label: t('nav.about.organization') }
          ]}
        />

        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                {t('about.history.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  {language === 'pt'
                    ? 'A CIBERCIDADÃOS foi fundada em 2020 por um grupo de activistas, académicos e profissionais de tecnologia preocupados com os desafios da era digital em Moçambique. Desde então, temos trabalhado incansavelmente para promover uma sociedade digital mais justa, segura e inclusiva.'
                    : 'CIBERCIDADÃOS was founded in 2020 by a group of activists, academics, and technology professionals concerned about the challenges of the digital age in Mozambique. Since then, we have worked tirelessly to promote a more just, safe, and inclusive digital society.'
                  }
                </p>
                <p>
                  {language === 'pt'
                    ? 'A nossa organização nasceu da constatação de que, à medida que Moçambique se digitaliza rapidamente, milhões de cidadãos ficam para trás, sem acesso a ferramentas ou conhecimentos para participar plenamente da sociedade da informação. Também observamos o aumento de ameaças digitais, desde cibercrimes até desinformação, que afectam especialmente os mais vulneráveis.'
                    : 'Our organization was born from the realization that, as Mozambique digitizes rapidly, millions of citizens are left behind, without access to tools or knowledge to fully participate in the information society. We also observed the increase in digital threats, from cybercrimes to misinformation, which especially affect the most vulnerable.'
                  }
                </p>
                <p>
                  {language === 'pt'
                    ? 'Ao longo dos anos, já impactámos directamente mais de 50.000 pessoas através dos nossos programas de formação, alcançámos mais de 2 milhões de moçambicanos com as nossas campanhas de sensibilização, e estabelecemos parcerias com dezenas de instituições nacionais e internacionais.'
                    : 'Over the years, we have directly impacted more than 50,000 people through our training programs, reached over 2 million Mozambicans with our awareness campaigns, and established partnerships with dozens of national and international institutions.'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Objectives */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Mission */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-primary text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold">
                        {t('about.mission')}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {language === 'pt'
                        ? 'Promover os Direitos Humanos no ambiente digital, capacitando cidadãos para uma participação segura, ética e responsável na sociedade da informação. Trabalhamos para que todos os moçambicanos possam beneficiar das oportunidades digitais sem comprometer a sua segurança e privacidade.'
                        : 'To promote human rights in the digital environment, empowering citizens for safe, ethical, and responsible participation in the information society. We work so that all Mozambicans can benefit from digital opportunities without compromising their security and privacy.'
                      }
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Vision */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-secondary text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold">
                        {t('about.vision')}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {language === 'pt'
                        ? 'Um Moçambique onde todos os cidadãos exercem plenamente a sua cidadania digital, beneficiando das oportunidades tecnológicas de forma livre, segura e inclusiva. Visualizamos um país onde a tecnologia é uma ferramenta de desenvolvimento humano e não de exclusão.'
                        : 'A Mozambique where all citizens fully exercise their digital citizenship, benefiting from technological opportunities in a free, safe, and inclusive manner. We envision a country where technology is a tool for human development and not exclusion.'
                      }
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Objectives */}
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-accent text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold">
                        {t('about.objectives')}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {language === 'pt'
                        ? 'Promover a literacia digital em todas as faixas etárias, fortalecer a participação cívica online, combater a desinformação, defender a privacidade digital, e advogar por políticas públicas que protejam os direitos digitais de todos os moçambicanos.'
                        : 'To promote digital literacy across all age groups, strengthen online civic participation, combat misinformation, defend digital privacy, and advocate for public policies that protect the digital rights of all Mozambicans.'
                      }
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Areas of Action */}
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
                {t('about.areas')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areasOfAction.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                          {language === 'pt' ? area.title_pt : area.title_en}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {language === 'pt' ? area.description_pt : area.description_en}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Operating Models */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                {t('about.models.title')}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingModels.map((model, index) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground mb-2">
                      {language === 'pt' ? model.title_pt : model.title_en}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === 'pt' ? model.description_pt : model.description_en}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutCibercidadaos;
