

# Plano: Secção Imprensa e Eventos

## Resumo das Alterações

| Componente | Descrição |
|------------|-----------|
| **Menu Header** | Adicionar item "Imprensa" com link para `/imprensa` |
| **Nova Secção Homepage** | Criar `EventsSection` com 2 cards de eventos próximos + botão "Saiba Mais" |
| **Nova Página** | Criar `/imprensa` com eventos, galeria de fotos e vídeos |
| **Dados Mock** | Adicionar eventos com dados bilingues |
| **Traduções** | Adicionar chaves para Imprensa e Eventos |

---

## 1. Estrutura de Dados para Eventos

Nova interface e dados mock:

```typescript
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
```

**Eventos de Exemplo:**
1. **Conferência Nacional de Cidadania Digital** - 15 Fevereiro 2026, Maputo (Presencial)
2. **Webinar: Segurança Digital para Famílias** - 22 Fevereiro 2026 (Online)

---

## 2. Nova Secção na Homepage - Próximos Eventos

**Localização:** Entre `ActivitiesSection` e `DataSection`

**Layout:**
```
+------------------------------------------------------------------+
|                    PRÓXIMOS EVENTOS                              |
|   Participe das nossas iniciativas                               |
+------------------------------------------------------------------+
|                                                                   |
|   +-----------------------------+   +---------------------------+ |
|   | [IMAGEM]                    |   | [IMAGEM]                  | |
|   | 📅 15 Fev 2026 | 📍 Maputo |   | 📅 22 Fev 2026 | 🌐 Online| |
|   | Conferência Nacional de     |   | Webinar: Segurança        | |
|   | Cidadania Digital           |   | Digital para Famílias     | |
|   | Breve descrição...          |   | Breve descrição...        | |
|   | [Participar] [Agendar]     |   | [Inscrever-se] [Agendar] | |
|   +-----------------------------+   +---------------------------+ |
|                                                                   |
|            [Saiba Mais - Ver Todos os Eventos]                   |
|                    (leva a /imprensa)                            |
+------------------------------------------------------------------+
```

**Funcionalidades dos Botões:**
- **Participar/Inscrever-se:** Abre URL de registo (`registration_url`)
- **Agendar:** Gera ficheiro `.ics` para adicionar ao calendário
- **Saiba Mais:** Navega para `/imprensa`

---

## 3. Menu Header Actualizado

**Estrutura:**
```
Início | Sobre Nós (dropdown) | Actividades | Imprensa | Dados | Publicações | Contacto
                                              ↓
                                    Link para /imprensa
```

---

## 4. Página de Imprensa (`/imprensa`)

**Estrutura Completa:**

```
+------------------------------------------------------------------+
|                    HERO SECTION                                   |
|   "Centro de Imprensa"                                           |
|   Eventos, galeria de fotos e vídeos da nossa actuação           |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    PRÓXIMOS EVENTOS                              |
+------------------------------------------------------------------+
|   FILTROS: [Todos] [Presencial] [Online] [Híbrido]              |
|                                                                   |
|   Grid de cards com TODOS os eventos (expandido)                |
|   Cada card tem: imagem, data, local, título, descrição         |
|   Botões: [Participar] [Agendar no Calendário]                  |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    GALERIA DE FOTOS                              |
+------------------------------------------------------------------+
|   Grid de imagens com lightbox ao clicar                        |
|   +-------+ +-------+ +-------+ +-------+                       |
|   |       | |       | |       | |       |                       |
|   +-------+ +-------+ +-------+ +-------+                       |
|   +-------+ +-------+ +-------+ +-------+                       |
|   |       | |       | |       | |       |                       |
|   +-------+ +-------+ +-------+ +-------+                       |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    VÍDEOS                                        |
+------------------------------------------------------------------+
|   +--------------------+  +--------------------+                 |
|   | [YouTube Embed]    |  | [YouTube Embed]    |                 |
|   | Título do vídeo    |  | Título do vídeo    |                 |
|   +--------------------+  +--------------------+                 |
+------------------------------------------------------------------+

+------------------------------------------------------------------+
|                    CONTACTO PARA IMPRENSA                        |
+------------------------------------------------------------------+
|   Email: imprensa@cibercidadaos.org                             |
|   Telefone: +258 84 XXX XXX                                     |
|   [Descarregar Kit de Imprensa]                                 |
+------------------------------------------------------------------+
```

---

## 5. Ficheiros a Criar

| Ficheiro | Descrição |
|----------|-----------|
| `src/components/sections/EventsSection.tsx` | Nova secção de eventos para homepage |
| `src/pages/Press.tsx` | Página completa de Imprensa |

---

## 6. Ficheiros a Modificar

| Ficheiro | Alteração |
|----------|-----------|
| `src/components/layout/Header.tsx` | Adicionar item "Imprensa" no menu |
| `src/pages/Index.tsx` | Importar e adicionar `EventsSection` |
| `src/data/mockData.ts` | Adicionar interface e dados de `Event`, `GalleryImage`, `Video` |
| `src/contexts/LanguageContext.tsx` | Adicionar traduções para imprensa e eventos |
| `src/App.tsx` | Adicionar rota `/imprensa` |

---

## 7. Traduções a Adicionar

```typescript
// Português
'nav.press': 'Imprensa',
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
'press.title': 'Centro de Imprensa',
'press.subtitle': 'Eventos, galeria de fotos e vídeos da nossa actuação',
'press.events': 'Próximos Eventos',
'press.gallery': 'Galeria de Fotos',
'press.videos': 'Vídeos',
'press.contact': 'Contacto para Imprensa',
'press.download_kit': 'Descarregar Kit de Imprensa',

// English
'nav.press': 'Press',
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
'press.title': 'Press Center',
'press.subtitle': 'Events, photo gallery and videos of our work',
'press.events': 'Upcoming Events',
'press.gallery': 'Photo Gallery',
'press.videos': 'Videos',
'press.contact': 'Press Contact',
'press.download_kit': 'Download Press Kit',
```

---

## 8. Estrutura de Rotas Actualizada

```typescript
<Routes>
  // ... rotas existentes ...
  <Route path="/imprensa" element={<Press />} />
</Routes>
```

---

## 9. Dados Mock para Eventos

```typescript
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
  // ... mais eventos
];
```

---

## 10. Dados Mock para Galeria e Vídeos

```typescript
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

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    caption_pt: 'Workshop de Segurança Digital - Maputo 2024',
    caption_en: 'Digital Security Workshop - Maputo 2024',
    date: '2024-01-15',
  },
  // ... mais imagens
];

export const videos: Video[] = [
  {
    id: '1',
    title_pt: 'O que é Cidadania Digital?',
    title_en: 'What is Digital Citizenship?',
    youtube_id: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    date: '2024-01-10',
  },
  // ... mais vídeos
];
```

---

## 11. Hierarquia da Homepage Actualizada

```
1. HeroSection
2. AboutSection
3. ActivitiesSection
4. EventsSection (NOVO)
5. DataSection
6. TeamSection
7. PartnersSection
```

---

## 12. Funcionalidade de Agendar no Calendário

Função utilitária para gerar ficheiro `.ics`:

```typescript
function generateICS(event: Event, language: 'pt' | 'en'): void {
  const title = language === 'pt' ? event.title_pt : event.title_en;
  const location = language === 'pt' ? event.location_pt : event.location_en;
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(event.date, event.time)}
SUMMARY:${title}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

  // Descarregar ficheiro
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  // ... trigger download
}
```

---

## 13. Benefícios

1. **Comunicação Centralizada** - Toda informação de eventos num só local
2. **Interactividade** - Botões funcionais para participar e agendar
3. **Media Rich** - Galeria de fotos e vídeos para mostrar impacto
4. **Navegação Intuitiva** - Preview de eventos na homepage com link para mais
5. **Profissionalismo** - Centro de imprensa completo para jornalistas

