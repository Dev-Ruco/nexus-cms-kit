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

// Activities Data
export const activities: Activity[] = [
  {
    id: '1',
    title_pt: 'Workshop de Segurança Digital para Jovens',
    title_en: 'Digital Security Workshop for Youth',
    summary_pt: 'Capacitação de 200 jovens em práticas de segurança online na província de Maputo.',
    summary_en: 'Training of 200 young people in online security practices in Maputo province.',
    content_pt: 'Realizámos um workshop intensivo de dois dias focado em práticas de segurança digital...',
    content_en: 'We held an intensive two-day workshop focused on digital security practices...',
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
    content_pt: 'Com orgulho anunciamos o lançamento da nossa nova plataforma de e-learning...',
    content_en: 'We are proud to announce the launch of our new e-learning platform...',
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
    content_pt: 'A nossa campanha visa educar a população sobre como identificar desinformação...',
    content_en: 'Our campaign aims to educate the population on how to identify misinformation...',
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
    content_pt: 'Estabelecemos parcerias estratégicas com escolas secundárias em todo o país...',
    content_en: 'We have established strategic partnerships with secondary schools across the country...',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    date: '2023-12-20',
    category: 'parceria',
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
