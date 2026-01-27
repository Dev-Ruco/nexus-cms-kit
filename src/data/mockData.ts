// Mock data for CIBERCIDADÃOS website
// Ready for future Supabase integration

export interface Activity {
  id: string;
  title_pt: string;
  title_en: string;
  summary_pt: string;
  summary_en: string;
  content_pt: string;
  content_en: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role_pt: string;
  role_en: string;
  bio_pt: string;
  bio_en: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  order: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: string;
  featured: boolean;
  active: boolean;
}

export interface Province {
  id: string;
  name: string;
  code: string;
  capital: string;
  population: number;
  internetPenetration: number;
  mobileUsers: number;
  digitalLiteracy: number;
}

export interface DataIndicator {
  id: string;
  label_pt: string;
  label_en: string;
  value: string;
  icon: string;
  description_pt: string;
  description_en: string;
}

export interface Publication {
  id: string;
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  type: 'report' | 'study' | 'guide' | 'article';
  file_url: string;
  thumbnail: string;
  date: string;
  pages: number;
}

export interface Event {
  id: string;
  title_pt: string;
  title_en: string;
  description_pt: string;
  description_en: string;
  date: string;
  time: string;
  location_pt: string;
  location_en: string;
  type: 'presencial' | 'online' | 'hibrido';
  image: string;
  registration_url: string;
  featured: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption_pt: string;
  caption_en: string;
  event_id?: string;
  date: string;
}

export interface Video {
  id: string;
  title_pt: string;
  title_en: string;
  youtube_id: string;
  thumbnail: string;
  date: string;
}

// Activities Data
export const activities: Activity[] = [
  {
    id: '1',
    title_pt: 'Workshop de Segurança Digital para Jovens',
    title_en: 'Digital Security Workshop for Youth',
    summary_pt: 'Capacitação de 200 jovens em práticas de segurança online na província de Maputo.',
    summary_en: 'Training of 200 young people in online security practices in Maputo province.',
    content_pt: `Realizámos um workshop intensivo de dois dias focado em práticas de segurança digital para jovens moçambicanos. O evento contou com a participação de 200 jovens de diversas escolas secundárias da província de Maputo.

Os participantes aprenderam sobre:
- Criação de palavras-passe seguras
- Identificação de phishing e fraudes online
- Protecção da privacidade nas redes sociais
- Uso seguro de Wi-Fi público
- Boas práticas de navegação na internet

O workshop incluiu sessões práticas onde os jovens puderam aplicar os conhecimentos adquiridos em cenários reais. Ao final do evento, todos os participantes receberam certificados de participação e materiais educativos para partilhar com as suas famílias e comunidades.`,
    content_en: `We held an intensive two-day workshop focused on digital security practices for Mozambican youth. The event was attended by 200 young people from various secondary schools in Maputo province.

Participants learned about:
- Creating secure passwords
- Identifying phishing and online fraud
- Protecting privacy on social media
- Safe use of public Wi-Fi
- Best practices for internet browsing

The workshop included practical sessions where young people could apply the knowledge acquired in real scenarios. At the end of the event, all participants received certificates of participation and educational materials to share with their families and communities.`,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    date: '2024-01-15',
    category: 'workshop',
    featured: true,
  },
  {
    id: '2',
    title_pt: 'Lançamento da Plataforma de Literacia Digital',
    title_en: 'Launch of Digital Literacy Platform',
    summary_pt: 'Nova plataforma online para formação em competências digitais básicas.',
    summary_en: 'New online platform for basic digital skills training.',
    content_pt: `Com orgulho anunciamos o lançamento da nossa nova plataforma de e-learning para literacia digital. Esta plataforma gratuita oferece cursos em português sobre competências digitais essenciais para todos os moçambicanos.

A plataforma inclui módulos sobre:
- Introdução à informática
- Navegação segura na internet
- Uso de email e comunicação digital
- Redes sociais responsáveis
- Ferramentas de produtividade online

Os cursos são auto-dirigidos e podem ser acedidos a partir de qualquer dispositivo com ligação à internet. Ao completar cada módulo, os utilizadores recebem badges digitais e certificados.`,
    content_en: `We are proud to announce the launch of our new e-learning platform for digital literacy. This free platform offers courses in Portuguese on essential digital skills for all Mozambicans.

The platform includes modules on:
- Introduction to computing
- Safe internet browsing
- Using email and digital communication
- Responsible social media
- Online productivity tools

The courses are self-paced and can be accessed from any device with an internet connection. Upon completing each module, users receive digital badges and certificates.`,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    date: '2024-01-10',
    category: 'lancamento',
    featured: true,
  },
  {
    id: '3',
    title_pt: 'Campanha Anti-Desinformação',
    title_en: 'Anti-Misinformation Campaign',
    summary_pt: 'Iniciativa nacional para combater notícias falsas nas redes sociais.',
    summary_en: 'National initiative to combat fake news on social media.',
    content_pt: `A nossa campanha visa educar a população sobre como identificar desinformação e notícias falsas. Com o aumento do uso das redes sociais em Moçambique, torna-se cada vez mais importante capacitar os cidadãos para distinguir informação credível de conteúdo manipulado.

A campanha inclui:
- Vídeos educativos em português e línguas locais
- Materiais impressos para distribuição em escolas
- Workshops comunitários
- Parcerias com órgãos de comunicação social
- Ferramentas online de verificação de factos`,
    content_en: `Our campaign aims to educate the population on how to identify misinformation and fake news. With the increase in social media use in Mozambique, it becomes increasingly important to empower citizens to distinguish credible information from manipulated content.

The campaign includes:
- Educational videos in Portuguese and local languages
- Printed materials for distribution in schools
- Community workshops
- Partnerships with media outlets
- Online fact-checking tools`,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    date: '2024-01-05',
    category: 'campanha',
    featured: false,
  },
  {
    id: '4',
    title_pt: 'Parceria com Escolas Secundárias',
    title_en: 'Partnership with Secondary Schools',
    summary_pt: 'Acordo com 50 escolas para integrar cidadania digital no currículo.',
    summary_en: 'Agreement with 50 schools to integrate digital citizenship into the curriculum.',
    content_pt: `Estabelecemos parcerias estratégicas com escolas secundárias em todo o país para integrar a cidadania digital no currículo escolar. Este acordo representa um marco importante na nossa missão de preparar a próxima geração de moçambicanos para o mundo digital.

O programa inclui:
- Formação de professores em competências digitais
- Materiais didácticos adaptados ao contexto moçambicano
- Avaliações periódicas do progresso dos alunos
- Suporte técnico contínuo às escolas`,
    content_en: `We have established strategic partnerships with secondary schools across the country to integrate digital citizenship into the school curriculum. This agreement represents an important milestone in our mission to prepare the next generation of Mozambicans for the digital world.

The program includes:
- Training teachers in digital skills
- Educational materials adapted to the Mozambican context
- Periodic assessments of student progress
- Ongoing technical support to schools`,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    date: '2023-12-20',
    category: 'parceria',
    featured: false,
  },
  {
    id: '5',
    title_pt: 'Formação de Jornalistas em Verificação de Factos',
    title_en: 'Training Journalists in Fact-Checking',
    summary_pt: 'Curso intensivo para 50 jornalistas sobre técnicas de verificação de informação.',
    summary_en: 'Intensive course for 50 journalists on information verification techniques.',
    content_pt: `Em parceria com associações de jornalistas, realizámos um curso intensivo de três dias sobre verificação de factos. Os participantes aprenderam técnicas avançadas para verificar informações antes de publicar, contribuindo para um ecossistema de media mais fiável em Moçambique.`,
    content_en: `In partnership with journalist associations, we held an intensive three-day course on fact-checking. Participants learned advanced techniques for verifying information before publishing, contributing to a more reliable media ecosystem in Mozambique.`,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop',
    date: '2023-12-15',
    category: 'workshop',
    featured: false,
  },
  {
    id: '6',
    title_pt: 'Seminário sobre Privacidade de Dados',
    title_en: 'Data Privacy Seminar',
    summary_pt: 'Evento com especialistas internacionais sobre protecção de dados pessoais.',
    summary_en: 'Event with international experts on personal data protection.',
    content_pt: `Organizámos um seminário de alto nível sobre privacidade de dados, reunindo especialistas nacionais e internacionais para discutir os desafios e oportunidades na protecção de dados pessoais em Moçambique.`,
    content_en: `We organized a high-level seminar on data privacy, bringing together national and international experts to discuss the challenges and opportunities in personal data protection in Mozambique.`,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    date: '2023-12-01',
    category: 'evento',
    featured: false,
  },
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ana Maria Santos',
    role_pt: 'Directora Executiva',
    role_en: 'Executive Director',
    bio_pt: 'Especialista em políticas digitais com mais de 15 anos de experiência.',
    bio_en: 'Digital policy specialist with over 15 years of experience.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'ana@cibercidadaos.org',
    order: 1,
  },
  {
    id: '2',
    name: 'João Pedro Machava',
    role_pt: 'Director de Programas',
    role_en: 'Programs Director',
    bio_pt: 'Coordena os programas de literacia digital em todo o país.',
    bio_en: 'Coordinates digital literacy programs across the country.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    order: 2,
  },
  {
    id: '3',
    name: 'Maria Fernanda Lopes',
    role_pt: 'Coordenadora de Comunicação',
    role_en: 'Communications Coordinator',
    bio_pt: 'Responsável pela estratégia de comunicação e redes sociais.',
    bio_en: 'Responsible for communication strategy and social media.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    twitter: 'https://twitter.com',
    order: 3,
  },
  {
    id: '4',
    name: 'Carlos Alberto Nhaca',
    role_pt: 'Especialista em Tecnologia',
    role_en: 'Technology Specialist',
    bio_pt: 'Lidera o desenvolvimento de ferramentas e plataformas digitais.',
    bio_en: 'Leads the development of digital tools and platforms.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    order: 4,
  },
  {
    id: '5',
    name: 'Teresa Mbanze',
    role_pt: 'Coordenadora de Formação',
    role_en: 'Training Coordinator',
    bio_pt: 'Desenvolve e implementa programas de capacitação.',
    bio_en: 'Develops and implements training programs.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    email: 'teresa@cibercidadaos.org',
    order: 5,
  },
  {
    id: '6',
    name: 'Manuel Francisco',
    role_pt: 'Gestor de Parcerias',
    role_en: 'Partnerships Manager',
    bio_pt: 'Estabelece e mantém relações com parceiros estratégicos.',
    bio_en: 'Establishes and maintains relationships with strategic partners.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    order: 6,
  },
  {
    id: '7',
    name: 'Lucia Mondlane',
    role_pt: 'Analista de Dados',
    role_en: 'Data Analyst',
    bio_pt: 'Pesquisa e analisa dados sobre o cenário digital em Moçambique.',
    bio_en: 'Researches and analyzes data on the digital landscape in Mozambique.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    order: 7,
  },
  {
    id: '8',
    name: 'Paulo Tembe',
    role_pt: 'Coordenador Regional - Norte',
    role_en: 'Regional Coordinator - North',
    bio_pt: 'Coordena actividades nas províncias do norte do país.',
    bio_en: 'Coordinates activities in the northern provinces.',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    order: 8,
  },
];

// Partners Data
export const partners: Partner[] = [
  {
    id: '1',
    name: 'UNICEF Moçambique',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_UNICEF.svg/200px-Logo_of_UNICEF.svg.png',
    url: 'https://www.unicef.org/mozambique',
    category: 'internacional',
    featured: true,
    active: true,
  },
  {
    id: '2',
    name: 'Fundação Vodafone',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/200px-Vodafone_icon.svg.png',
    url: 'https://www.vodafone.com',
    category: 'privado',
    featured: true,
    active: true,
  },
  {
    id: '3',
    name: 'Google.org',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png',
    url: 'https://www.google.org',
    category: 'tecnologia',
    featured: true,
    active: true,
  },
  {
    id: '4',
    name: 'Ministério da Educação',
    logo: 'https://via.placeholder.com/200x80?text=MINED',
    url: 'https://www.mined.gov.mz',
    category: 'governo',
    featured: true,
    active: true,
  },
  {
    id: '5',
    name: 'UNESCO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UNESCO_logo.svg/200px-UNESCO_logo.svg.png',
    url: 'https://www.unesco.org',
    category: 'internacional',
    featured: false,
    active: true,
  },
  {
    id: '6',
    name: 'Mozilla Foundation',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/200px-Firefox_logo%2C_2019.svg.png',
    url: 'https://www.mozilla.org',
    category: 'tecnologia',
    featured: false,
    active: true,
  },
  {
    id: '7',
    name: 'Universidade Eduardo Mondlane',
    logo: 'https://via.placeholder.com/200x80?text=UEM',
    url: 'https://www.uem.mz',
    category: 'educacao',
    featured: false,
    active: true,
  },
  {
    id: '8',
    name: 'USAID',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/USAID-Identity.svg/200px-USAID-Identity.svg.png',
    url: 'https://www.usaid.gov',
    category: 'internacional',
    featured: false,
    active: true,
  },
  {
    id: '9',
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png',
    url: 'https://www.meta.com',
    category: 'tecnologia',
    featured: false,
    active: true,
  },
  {
    id: '10',
    name: 'Instituto Nacional de Estatística',
    logo: 'https://via.placeholder.com/200x80?text=INE',
    url: 'https://www.ine.gov.mz',
    category: 'governo',
    featured: false,
    active: true,
  },
];

// Provinces Data
export const provinces: Province[] = [
  { id: 'niassa', name: 'Niassa', code: 'NI', capital: 'Lichinga', population: 1865976, internetPenetration: 12, mobileUsers: 45, digitalLiteracy: 18 },
  { id: 'cabo-delgado', name: 'Cabo Delgado', code: 'CD', capital: 'Pemba', population: 2320261, internetPenetration: 15, mobileUsers: 48, digitalLiteracy: 20 },
  { id: 'nampula', name: 'Nampula', code: 'NP', capital: 'Nampula', population: 6102867, internetPenetration: 22, mobileUsers: 55, digitalLiteracy: 28 },
  { id: 'zambezia', name: 'Zambézia', code: 'ZA', capital: 'Quelimane', population: 5110787, internetPenetration: 18, mobileUsers: 50, digitalLiteracy: 22 },
  { id: 'tete', name: 'Tete', code: 'TE', capital: 'Tete', population: 2764169, internetPenetration: 16, mobileUsers: 52, digitalLiteracy: 24 },
  { id: 'manica', name: 'Manica', code: 'MA', capital: 'Chimoio', population: 1945994, internetPenetration: 20, mobileUsers: 54, digitalLiteracy: 26 },
  { id: 'sofala', name: 'Sofala', code: 'SO', capital: 'Beira', population: 2259248, internetPenetration: 25, mobileUsers: 58, digitalLiteracy: 30 },
  { id: 'inhambane', name: 'Inhambane', code: 'IN', capital: 'Inhambane', population: 1496883, internetPenetration: 23, mobileUsers: 56, digitalLiteracy: 28 },
  { id: 'gaza', name: 'Gaza', code: 'GA', capital: 'Xai-Xai', population: 1422460, internetPenetration: 21, mobileUsers: 55, digitalLiteracy: 27 },
  { id: 'maputo-provincia', name: 'Maputo Província', code: 'MP', capital: 'Matola', population: 2507098, internetPenetration: 35, mobileUsers: 68, digitalLiteracy: 42 },
  { id: 'maputo-cidade', name: 'Maputo Cidade', code: 'MC', capital: 'Maputo', population: 1120867, internetPenetration: 55, mobileUsers: 82, digitalLiteracy: 58 },
];

// Data Indicators
export const dataIndicators: DataIndicator[] = [
  {
    id: '1',
    label_pt: 'Utilizadores de Internet',
    label_en: 'Internet Users',
    value: '7.2M',
    icon: 'Wifi',
    description_pt: 'Moçambicanos com acesso à internet',
    description_en: 'Mozambicans with internet access',
  },
  {
    id: '2',
    label_pt: 'Penetração Mobile',
    label_en: 'Mobile Penetration',
    value: '52%',
    icon: 'Smartphone',
    description_pt: 'da população com telemóvel',
    description_en: 'of the population with mobile phones',
  },
  {
    id: '3',
    label_pt: 'Literacia Digital',
    label_en: 'Digital Literacy',
    value: '28%',
    icon: 'GraduationCap',
    description_pt: 'com competências digitais básicas',
    description_en: 'with basic digital skills',
  },
  {
    id: '4',
    label_pt: 'Jovens Online',
    label_en: 'Youth Online',
    value: '3.8M',
    icon: 'Users',
    description_pt: 'jovens activos na internet',
    description_en: 'young people active online',
  },
];

// National Statistics
export const nationalStats = {
  population: 32077072,
  internetUsers: 7200000,
  internetPenetration: 22.4,
  mobileSubscriptions: 16700000,
  mobilePenetration: 52,
  averageDigitalLiteracy: 28,
};

// Publications Data
export const publications: Publication[] = [
  {
    id: '1',
    title_pt: 'Relatório Anual 2023',
    title_en: 'Annual Report 2023',
    description_pt: 'Relatório completo das actividades realizadas pela CIBERCIDADÃOS em 2023, incluindo resultados, impacto e lições aprendidas.',
    description_en: 'Complete report of activities carried out by CIBERCIDADÃOS in 2023, including results, impact, and lessons learned.',
    type: 'report',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
    date: '2024-01-15',
    pages: 48,
  },
  {
    id: '2',
    title_pt: 'Guia de Segurança Digital para Jovens',
    title_en: 'Digital Security Guide for Youth',
    description_pt: 'Manual prático com dicas e boas práticas de segurança online para jovens moçambicanos.',
    description_en: 'Practical manual with tips and best practices for online security for Mozambican youth.',
    type: 'guide',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    date: '2023-11-20',
    pages: 32,
  },
  {
    id: '3',
    title_pt: 'Estudo sobre Literacia Digital em Moçambique',
    title_en: 'Study on Digital Literacy in Mozambique',
    description_pt: 'Pesquisa abrangente sobre o estado actual da literacia digital no país, com dados por província.',
    description_en: 'Comprehensive research on the current state of digital literacy in the country, with data by province.',
    type: 'study',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    date: '2023-10-05',
    pages: 64,
  },
  {
    id: '4',
    title_pt: 'Kit de Formação para Professores',
    title_en: 'Training Kit for Teachers',
    description_pt: 'Materiais e recursos para professores integrarem a cidadania digital nas suas aulas.',
    description_en: 'Materials and resources for teachers to integrate digital citizenship into their classes.',
    type: 'guide',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    date: '2023-09-15',
    pages: 28,
  },
  {
    id: '5',
    title_pt: 'Artigo: O Impacto das Redes Sociais na Juventude',
    title_en: 'Article: The Impact of Social Media on Youth',
    description_pt: 'Análise do impacto das redes sociais no comportamento e bem-estar dos jovens moçambicanos.',
    description_en: 'Analysis of the impact of social media on the behavior and well-being of Mozambican youth.',
    type: 'article',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    date: '2023-08-10',
    pages: 12,
  },
  {
    id: '6',
    title_pt: 'Relatório de Desinformação Online 2023',
    title_en: 'Online Misinformation Report 2023',
    description_pt: 'Análise das principais tendências de desinformação nas redes sociais em Moçambique.',
    description_en: 'Analysis of the main misinformation trends on social media in Mozambique.',
    type: 'report',
    file_url: '#',
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
    date: '2023-07-20',
    pages: 36,
  },
];

// Events Data
export const events: Event[] = [
  {
    id: '1',
    title_pt: 'Conferência Nacional de Cidadania Digital',
    title_en: 'National Digital Citizenship Conference',
    description_pt: 'Junte-se a nós para dois dias de palestras, workshops e networking sobre cidadania digital em Moçambique.',
    description_en: 'Join us for two days of talks, workshops and networking on digital citizenship in Mozambique.',
    date: '2026-02-15',
    time: '09:00',
    location_pt: 'Centro de Conferências Joaquim Chissano, Maputo',
    location_en: 'Joaquim Chissano Conference Center, Maputo',
    type: 'presencial',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    registration_url: '#',
    featured: true,
  },
  {
    id: '2',
    title_pt: 'Webinar: Segurança Digital para Famílias',
    title_en: 'Webinar: Digital Security for Families',
    description_pt: 'Aprenda a proteger a sua família no ambiente digital. Sessão interactiva com especialistas.',
    description_en: 'Learn how to protect your family in the digital environment. Interactive session with experts.',
    date: '2026-02-22',
    time: '18:00',
    location_pt: 'Online via Zoom',
    location_en: 'Online via Zoom',
    type: 'online',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
    registration_url: '#',
    featured: true,
  },
  {
    id: '3',
    title_pt: 'Workshop de Verificação de Factos',
    title_en: 'Fact-Checking Workshop',
    description_pt: 'Aprenda técnicas práticas para identificar e combater a desinformação online.',
    description_en: 'Learn practical techniques to identify and combat online misinformation.',
    date: '2026-03-05',
    time: '14:00',
    location_pt: 'Universidade Eduardo Mondlane, Maputo',
    location_en: 'Eduardo Mondlane University, Maputo',
    type: 'presencial',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    registration_url: '#',
    featured: false,
  },
  {
    id: '4',
    title_pt: 'Seminário Híbrido: Privacidade de Dados',
    title_en: 'Hybrid Seminar: Data Privacy',
    description_pt: 'Discussão sobre protecção de dados pessoais com participação presencial e online.',
    description_en: 'Discussion on personal data protection with in-person and online participation.',
    date: '2026-03-12',
    time: '10:00',
    location_pt: 'Hotel Polana, Maputo / Online',
    location_en: 'Polana Hotel, Maputo / Online',
    type: 'hibrido',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    registration_url: '#',
    featured: false,
  },
];

// Gallery Images Data
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=800&fit=crop',
    caption_pt: 'Workshop de Segurança Digital - Maputo 2024',
    caption_en: 'Digital Security Workshop - Maputo 2024',
    date: '2024-01-15',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop',
    caption_pt: 'Conferência Anual de Cidadania Digital',
    caption_en: 'Annual Digital Citizenship Conference',
    date: '2024-01-10',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop',
    caption_pt: 'Formação em Escolas Secundárias',
    caption_en: 'Training in Secondary Schools',
    date: '2023-12-20',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop',
    caption_pt: 'Lançamento da Plataforma de E-Learning',
    caption_en: 'E-Learning Platform Launch',
    date: '2023-12-15',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=800&fit=crop',
    caption_pt: 'Campanha Anti-Desinformação',
    caption_en: 'Anti-Misinformation Campaign',
    date: '2023-11-20',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop',
    caption_pt: 'Seminário de Privacidade de Dados',
    caption_en: 'Data Privacy Seminar',
    date: '2023-11-10',
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=800&fit=crop',
    caption_pt: 'Sessão de Formação Online',
    caption_en: 'Online Training Session',
    date: '2023-10-25',
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=800&fit=crop',
    caption_pt: 'Reunião com Parceiros Estratégicos',
    caption_en: 'Meeting with Strategic Partners',
    date: '2023-10-15',
  },
];

// Videos Data
export const videos: Video[] = [
  {
    id: '1',
    title_pt: 'O que é Cidadania Digital?',
    title_en: 'What is Digital Citizenship?',
    youtube_id: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    date: '2024-01-10',
  },
  {
    id: '2',
    title_pt: 'Como Proteger a Sua Privacidade Online',
    title_en: 'How to Protect Your Online Privacy',
    youtube_id: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    date: '2023-12-05',
  },
  {
    id: '3',
    title_pt: 'Identificar Notícias Falsas em 5 Passos',
    title_en: 'Identify Fake News in 5 Steps',
    youtube_id: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    date: '2023-11-20',
  },
];
