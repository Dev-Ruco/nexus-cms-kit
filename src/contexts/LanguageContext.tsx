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
    'nav.activities': 'Actividades',
    'nav.data': 'Dados',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contacto',
    
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
    
    // Data Section
    'data.title': 'Moçambique em Números',
    'data.subtitle': 'O cenário digital no país',
    'data.internet_users': 'Utilizadores de Internet',
    'data.mobile_users': 'Utilizadores de Mobile',
    'data.digital_literacy': 'Literacia Digital',
    'data.youth_online': 'Jovens Online',
    
    // Map
    'map.title': 'Mapa Interactivo',
    'map.subtitle': 'Explore os dados por província',
    'map.select_province': 'Seleccione uma província para ver mais detalhes',
    'map.view_details': 'Ver Detalhes',
    
    // Team
    'team.title': 'Nossa Equipa',
    'team.subtitle': 'Conheça os profissionais que tornam isto possível',
    
    // Partners
    'partners.title': 'Parceiros',
    'partners.subtitle': 'Organizações que apoiam a nossa missão',
    
    // Footer
    'footer.description': 'Trabalhamos para promover a cidadania digital responsável e inclusiva em Moçambique.',
    'footer.quick_links': 'Links Rápidos',
    'footer.contact_us': 'Contacte-nos',
    'footer.follow_us': 'Siga-nos',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'O seu email',
    'footer.newsletter.subscribe': 'Subscrever',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Common
    'common.loading': 'A carregar...',
    'common.error': 'Ocorreu um erro',
    'common.empty': 'Sem resultados',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.activities': 'Activities',
    'nav.data': 'Data',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    
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
    
    // Data Section
    'data.title': 'Mozambique in Numbers',
    'data.subtitle': 'The digital landscape in the country',
    'data.internet_users': 'Internet Users',
    'data.mobile_users': 'Mobile Users',
    'data.digital_literacy': 'Digital Literacy',
    'data.youth_online': 'Youth Online',
    
    // Map
    'map.title': 'Interactive Map',
    'map.subtitle': 'Explore data by province',
    'map.select_province': 'Select a province to see more details',
    'map.view_details': 'View Details',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the professionals who make this possible',
    
    // Partners
    'partners.title': 'Partners',
    'partners.subtitle': 'Organizations that support our mission',
    
    // Footer
    'footer.description': 'We work to promote responsible and inclusive digital citizenship in Mozambique.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_us': 'Contact Us',
    'footer.follow_us': 'Follow Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.empty': 'No results',
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
