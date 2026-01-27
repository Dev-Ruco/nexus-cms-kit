import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre Nós',
    'nav.about.organization': 'Sobre Cibercidadãos',
    'nav.about.governance': 'Estrutura de Governança',
    'nav.activities': 'Actividades',
    'nav.data': 'Dados',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contacto',
    'nav.become_member': 'Tornar-se Membro',
    'nav.enter': 'Entrar',
    'nav.my_area': 'Minha Área',
    'nav.member_portal': 'Portal do Membro',
    
    // Hero
    'hero.title': 'Promovendo a Cidadania Digital em Moçambique',
    'hero.subtitle': 'Capacitando jovens e comunidades para um futuro digital seguro, inclusivo e responsável.',
    'hero.cta.learn': 'Conhecer Mais',
    'hero.cta.activities': 'Ver Actividades',
    
    // Activities
    'activities.title': 'Últimas Actividades',
    'activities.subtitle': 'Descubra as nossas iniciativas mais recentes para promover a cidadania digital.',
    'activities.view_all': 'Ver Todas',
    'activities.read_more': 'Ler Mais',
    'activities.all': 'Todas',
    'activities.workshop': 'Workshops',
    'activities.campanha': 'Campanhas',
    'activities.parceria': 'Parcerias',
    'activities.lancamento': 'Lançamentos',
    'activities.evento': 'Eventos',
    'activities.related': 'Actividades Relacionadas',
    'activities.page.title': 'Nossas Actividades',
    'activities.page.subtitle': 'Conheça todas as iniciativas que desenvolvemos para promover a cidadania digital em Moçambique.',
    
    // Events
    'events.title': 'Próximos Eventos',
    'events.subtitle': 'Participe das nossas iniciativas',
    'events.learn_more': 'Ver Todos os Eventos',
    'events.participate': 'Participar',
    'events.register': 'Inscrever-se',
    'events.add_calendar': 'Agendar',
    'events.presencial': 'Presencial',
    'events.online': 'Online',
    'events.hibrido': 'Híbrido',
    'events.all': 'Todos',
    
    // Press
    'nav.press': 'Imprensa',
    'press.title': 'Centro de Imprensa',
    'press.subtitle': 'Eventos, galeria de fotos e vídeos da nossa actuação',
    'press.events': 'Próximos Eventos',
    'press.gallery': 'Galeria de Fotos',
    'press.videos': 'Vídeos',
    'press.contact': 'Contacto para Imprensa',
    'press.download_kit': 'Descarregar Kit de Imprensa',
    
    // Data Section
    'data.title': 'Moçambique em Números',
    'data.subtitle': 'O cenário digital no país',
    'data.internet_users': 'Utilizadores de Internet',
    'data.mobile_users': 'Utilizadores de Mobile',
    'data.digital_literacy': 'Literacia Digital',
    'data.youth_online': 'Jovens Online',
    'data.page.title': 'Moçambique Digital em Dados',
    'data.page.subtitle': 'Explore indicadores e estatísticas sobre o panorama digital do país.',
    'data.national_indicators': 'Indicadores Nacionais',
    'data.by_province': 'Dados por Província',
    'data.download_report': 'Descarregar Relatório',
    
    // Map
    'map.title': 'Mapa Interactivo',
    'map.subtitle': 'Explore os dados por província',
    'map.select_province': 'Seleccione uma província para ver mais detalhes',
    'map.view_details': 'Ver Detalhes',
    
    // About
    'about.title': 'Sobre Nós',
    'about.mission': 'Missão',
    'about.vision': 'Visão',
    'about.objectives': 'Objectivos',
    'about.areas': 'Áreas de Actuação',
    'about.learn_more': 'Saiba Mais',
    'about.history.title': 'Nossa História',
    'about.models.title': 'Modelos de Actuação',
    'about.page.title': 'Sobre a CIBERCIDADÃOS',
    'about.page.subtitle': 'Conheça a nossa organização, missão e impacto na sociedade moçambicana.',
    
    // Team
    'team.title': 'Nossa Equipa',
    'team.subtitle': 'Conheça os profissionais que tornam isto possível',
    'team.meet_all': 'Conheça toda a equipa',
    
    // Governance
    'governance.title': 'Estrutura de Governança',
    'governance.subtitle': 'Conheça a equipa e estrutura organizacional da CIBERCIDADÃOS.',
    'governance.team': 'Equipa Técnica',
    'governance.board': 'Conselho de Administração',
    
    // Partners
    'partners.title': 'Parceiros',
    'partners.subtitle': 'Organizações que apoiam a nossa missão',
    
    // Publications
    'publications.title': 'Publicações',
    'publications.subtitle': 'Relatórios, estudos e recursos produzidos pela nossa equipa.',
    'publications.download': 'Descarregar',
    'publications.view': 'Ver Online',
    'publications.pages': 'páginas',
    'publications.all': 'Todos',
    'publications.report': 'Relatórios',
    'publications.study': 'Estudos',
    'publications.guide': 'Guias',
    'publications.article': 'Artigos',
    
    // Contact
    'contact.title': 'Entre em Contacto',
    'contact.subtitle': 'Estamos aqui para ajudar. Entre em contacto connosco.',
    'contact.info': 'Informações de Contacto',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'contact.address': 'Endereço',
    'contact.phone': 'Telefone',
    'contact.email': 'Email',
    
    // Member
    'member.title': 'Junte-se a Nós',
    'member.subtitle': 'Torne-se membro da CIBERCIDADÃOS e faça parte da mudança digital em Moçambique.',
    'member.benefits': 'Benefícios de Ser Membro',
    'member.benefit1': 'Acesso a formações exclusivas',
    'member.benefit2': 'Participação em eventos',
    'member.benefit3': 'Newsletter mensal',
    'member.benefit4': 'Certificados de participação',
    'member.form.title': 'Formulário de Adesão',
    'member.form.personal': 'Informações Pessoais',
    'member.form.name': 'Nome Completo',
    'member.form.email': 'Email',
    'member.form.phone': 'Telefone',
    'member.form.province': 'Província',
    'member.form.age': 'Idade',
    'member.form.motivation': 'Motivação',
    'member.form.why': 'Porque deseja tornar-se membro?',
    'member.form.how': 'Como conheceu a CIBERCIDADÃOS?',
    'member.form.terms': 'Aceito os termos e condições',
    'member.form.newsletter': 'Desejo receber comunicações',
    'member.form.submit': 'Submeter Candidatura',
    'member.form.success': 'Candidatura submetida com sucesso!',
    
    // Footer
    'footer.description': 'Trabalhamos para promover a cidadania digital responsável e inclusiva em Moçambique.',
    'footer.quick_links': 'Links Rápidos',
    'footer.contact_us': 'Contacte-nos',
    'footer.follow_us': 'Siga-nos',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'O seu email',
    'footer.newsletter.subscribe': 'Subscrever',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Auth
    'auth.welcome': 'Bem-vindo',
    'auth.description': 'Aceda à sua conta ou crie uma nova',
    'auth.login': 'Entrar',
    'auth.signup': 'Criar Conta',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.full_name': 'Nome Completo',
    'auth.confirm_password': 'Confirmar Password',
    'auth.forgot_password': 'Esqueceu a password?',
    'auth.logout': 'Terminar Sessão',
    
    // Common
    'common.loading': 'A carregar...',
    'common.error': 'Ocorreu um erro',
    'common.empty': 'Sem resultados',
    'common.back': 'Voltar',
    'common.select': 'Seleccionar',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.about.organization': 'About Cibercidadãos',
    'nav.about.governance': 'Governance Structure',
    'nav.activities': 'Activities',
    'nav.data': 'Data',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.become_member': 'Become a Member',
    'nav.enter': 'Sign In',
    'nav.my_area': 'My Area',
    'nav.member_portal': 'Member Portal',
    
    // Hero
    'hero.title': 'Promoting Digital Citizenship in Mozambique',
    'hero.subtitle': 'Empowering youth and communities for a safe, inclusive, and responsible digital future.',
    'hero.cta.learn': 'Learn More',
    'hero.cta.activities': 'View Activities',
    
    // Activities
    'activities.title': 'Latest Activities',
    'activities.subtitle': 'Discover our most recent initiatives to promote digital citizenship.',
    'activities.view_all': 'View All',
    'activities.read_more': 'Read More',
    'activities.all': 'All',
    'activities.workshop': 'Workshops',
    'activities.campanha': 'Campaigns',
    'activities.parceria': 'Partnerships',
    'activities.lancamento': 'Launches',
    'activities.evento': 'Events',
    'activities.related': 'Related Activities',
    'activities.page.title': 'Our Activities',
    'activities.page.subtitle': 'Discover all the initiatives we develop to promote digital citizenship in Mozambique.',
    
    // Events
    'events.title': 'Upcoming Events',
    'events.subtitle': 'Join our initiatives',
    'events.learn_more': 'View All Events',
    'events.participate': 'Participate',
    'events.register': 'Register',
    'events.add_calendar': 'Add to Calendar',
    'events.presencial': 'In-Person',
    'events.online': 'Online',
    'events.hibrido': 'Hybrid',
    'events.all': 'All',
    
    // Press
    'nav.press': 'Press',
    'press.title': 'Press Center',
    'press.subtitle': 'Events, photo gallery and videos of our work',
    'press.events': 'Upcoming Events',
    'press.gallery': 'Photo Gallery',
    'press.videos': 'Videos',
    'press.contact': 'Press Contact',
    'press.download_kit': 'Download Press Kit',
    
    // Data Section
    'data.title': 'Mozambique in Numbers',
    'data.subtitle': 'The digital landscape in the country',
    'data.internet_users': 'Internet Users',
    'data.mobile_users': 'Mobile Users',
    'data.digital_literacy': 'Digital Literacy',
    'data.youth_online': 'Youth Online',
    'data.page.title': 'Digital Mozambique in Data',
    'data.page.subtitle': 'Explore indicators and statistics about the country\'s digital landscape.',
    'data.national_indicators': 'National Indicators',
    'data.by_province': 'Data by Province',
    'data.download_report': 'Download Report',
    
    // Map
    'map.title': 'Interactive Map',
    'map.subtitle': 'Explore data by province',
    'map.select_province': 'Select a province to see more details',
    'map.view_details': 'View Details',
    
    // About
    'about.title': 'About Us',
    'about.mission': 'Mission',
    'about.vision': 'Vision',
    'about.objectives': 'Objectives',
    'about.areas': 'Areas of Action',
    'about.learn_more': 'Learn More',
    'about.history.title': 'Our History',
    'about.models.title': 'Operating Models',
    'about.page.title': 'About CIBERCIDADÃOS',
    'about.page.subtitle': 'Learn about our organization, mission, and impact on Mozambican society.',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the professionals who make this possible',
    'team.meet_all': 'Meet the full team',
    
    // Governance
    'governance.title': 'Governance Structure',
    'governance.subtitle': 'Meet the team and organizational structure of CIBERCIDADÃOS.',
    'governance.team': 'Technical Team',
    'governance.board': 'Board of Directors',
    
    // Partners
    'partners.title': 'Partners',
    'partners.subtitle': 'Organizations that support our mission',
    
    // Publications
    'publications.title': 'Publications',
    'publications.subtitle': 'Reports, studies, and resources produced by our team.',
    'publications.download': 'Download',
    'publications.view': 'View Online',
    'publications.pages': 'pages',
    'publications.all': 'All',
    'publications.report': 'Reports',
    'publications.study': 'Studies',
    'publications.guide': 'Guides',
    'publications.article': 'Articles',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re here to help. Get in touch with us.',
    'contact.info': 'Contact Information',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    
    // Member
    'member.title': 'Join Us',
    'member.subtitle': 'Become a member of CIBERCIDADÃOS and be part of the digital change in Mozambique.',
    'member.benefits': 'Member Benefits',
    'member.benefit1': 'Access to exclusive training',
    'member.benefit2': 'Event participation',
    'member.benefit3': 'Monthly newsletter',
    'member.benefit4': 'Participation certificates',
    'member.form.title': 'Membership Form',
    'member.form.personal': 'Personal Information',
    'member.form.name': 'Full Name',
    'member.form.email': 'Email',
    'member.form.phone': 'Phone',
    'member.form.province': 'Province',
    'member.form.age': 'Age',
    'member.form.motivation': 'Motivation',
    'member.form.why': 'Why do you want to become a member?',
    'member.form.how': 'How did you hear about CIBERCIDADÃOS?',
    'member.form.terms': 'I accept the terms and conditions',
    'member.form.newsletter': 'I want to receive communications',
    'member.form.submit': 'Submit Application',
    'member.form.success': 'Application submitted successfully!',
    
    // Footer
    'footer.description': 'We work to promote responsible and inclusive digital citizenship in Mozambique.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_us': 'Contact Us',
    'footer.follow_us': 'Follow Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    
    // Auth
    'auth.welcome': 'Welcome',
    'auth.description': 'Access your account or create a new one',
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.full_name': 'Full Name',
    'auth.confirm_password': 'Confirm Password',
    'auth.forgot_password': 'Forgot password?',
    'auth.logout': 'Sign Out',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.empty': 'No results',
    'common.back': 'Back',
    'common.select': 'Select',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
