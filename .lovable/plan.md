

# Plano: Reestruturacao Completa do Site CIBERCIDADAOS

## Resumo Executivo

Este plano transforma o site de uma pagina unica (homepage) num website multi-paginas completo e funcional, com navegacao por submenus, formularios interactivos e todas as paginas clicaveis e preparadas para receber conteudo.

---

## 1. Alteracoes na Seccao "Sobre Nos" (Homepage)

### Problema Actual
O texto da esquerda nao preenche a altura da imagem ao lado, criando desequilibrio visual.

### Solucao
Reformular o texto para equilibrar com a altura da fotografia:

**Novo Texto (PT):**
> Somos uma organizacao mocambicana da sociedade civil dedicada a promocao da cidadania digital e dos Direitos Humanos no ambiente digital.
>
> Trabalhamos em todo o territorio nacional para capacitar cidadaos, especialmente jovens, a navegar de forma segura, etica e responsavel no mundo digital.
>
> A nossa actuacao assenta em pilares fundamentais: educacao civica digital, proteccao da privacidade online, combate a desinformacao e promocao da inclusao tecnologica.

**Adicionar botao discreto:**
```
[Saiba Mais] -> Link para /sobre/cibercidadaos
```

**Remover da homepage:**
- Cards de Missao, Visao, Objectivos
- Areas de Actuacao

Estes elementos passam para a pagina dedicada "Sobre Cibercidadaos".

---

## 2. Reestruturacao do Menu Header

### Estrutura Actual
```
Inicio | Sobre Nos | Actividades | Dados | Publicacoes | Contacto
```

### Nova Estrutura com Submenus
```
Inicio | Sobre Nos (dropdown) | Actividades | Dados | Publicacoes | Contacto
           |
           +-- Sobre Cibercidadaos
           +-- Estrutura de Governanca
```

### Implementacao Tecnica
Utilizar componente `NavigationMenu` do Radix UI (ja instalado no projecto) para criar dropdowns elegantes no desktop e accordions no mobile.

---

## 3. Simplificacao da Seccao "Nossa Equipa" (Homepage)

### Situacao Actual
Mostra 8 membros da equipa na homepage.

### Nova Abordagem
- Mostrar apenas **3 membros principais** (Director Executivo, Director de Programas, Coordenadora de Comunicacao)
- Adicionar botao **"Conheca toda a equipa"** que leva a `/sobre/governanca`

---

## 4. Novas Paginas a Criar

### 4.1 Pagina "Sobre Cibercidadaos" (`/sobre/cibercidadaos`)

**Estrutura:**
```
+------------------------------------------------------------------+
|                    HERO SECTION (com foto)                       |
|   [Imagem institucional + Titulo "Sobre a CIBERCIDADAOS"]        |
+------------------------------------------------------------------+
|                                                                   |
|   QUEM SOMOS (texto expandido)                                   |
|   Historia e contexto da organizacao                             |
|                                                                   |
+------------------------------------------------------------------+
|   +----------------+  +----------------+  +----------------+      |
|   |    MISSAO      |  |     VISAO      |  |  OBJECTIVOS   |      |
|   |  (detalhado)   |  |  (detalhado)   |  |  (detalhado)  |      |
|   +----------------+  +----------------+  +----------------+      |
+------------------------------------------------------------------+
|                                                                   |
|   AREAS DE ACTUACAO (cada area com descricao completa)           |
|   - Educacao Digital: explicacao detalhada                       |
|   - Privacidade: explicacao detalhada                            |
|   - Inclusao Digital: explicacao detalhada                       |
|   - Etica Tecnologica: explicacao detalhada                      |
|   - Investigacao: explicacao detalhada                           |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   MODELOS DE ACTUACAO                                            |
|   - Formacoes presenciais                                        |
|   - Campanhas de sensibilizacao                                  |
|   - Parcerias estrategicas                                       |
|   - Investigacao e publicacoes                                   |
|                                                                   |
+------------------------------------------------------------------+
```

### 4.2 Pagina "Estrutura de Governanca" (`/sobre/governanca`)

**Estrutura:**
```
+------------------------------------------------------------------+
|                    HERO SECTION                                   |
|   [Titulo "Estrutura de Governanca"]                             |
+------------------------------------------------------------------+
|                                                                   |
|   ORGANIGRAMA (diagrama visual opcional)                         |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   EQUIPA TECNICA (todos os 8 membros)                            |
|   Grid completo com fotos, funcoes e redes sociais               |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   CONSELHO DE ADMINISTRACAO (placeholder para futuro)            |
|                                                                   |
+------------------------------------------------------------------+
```

### 4.3 Pagina de Actividades (`/actividades`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO SECTION - "Nossas Actividades"                            |
+------------------------------------------------------------------+
|   FILTROS: [Todas] [Workshop] [Campanha] [Parceria] [Lancamento] |
+------------------------------------------------------------------+
|                                                                   |
|   GRID DE ACTIVIDADES (todas as actividades)                     |
|   Cards clicaveis que abrem pagina de detalhe                    |
|                                                                   |
+------------------------------------------------------------------+
|   PAGINACAO                                                      |
+------------------------------------------------------------------+
```

### 4.4 Pagina de Detalhe de Actividade (`/actividades/:id`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO com imagem de fundo da actividade                         |
+------------------------------------------------------------------+
|   BREADCRUMB: Inicio > Actividades > [Nome da Actividade]        |
+------------------------------------------------------------------+
|   [Categoria] [Data]                                             |
|                                                                   |
|   TITULO DA ACTIVIDADE                                           |
|                                                                   |
|   CONTEUDO COMPLETO (content_pt / content_en)                    |
|                                                                   |
+------------------------------------------------------------------+
|   ACTIVIDADES RELACIONADAS                                       |
+------------------------------------------------------------------+
```

### 4.5 Pagina de Dados (`/dados`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO SECTION - "Mocambique Digital em Dados"                   |
+------------------------------------------------------------------+
|                                                                   |
|   INDICADORES NACIONAIS (cards interactivos)                     |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   MAPA INTERACTIVO DE MOCAMBIQUE                                 |
|   (mostra dados por provincia ao clicar)                         |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   GRAFICOS E VISUALIZACOES                                       |
|   (usando Recharts - ja instalado)                               |
|                                                                   |
+------------------------------------------------------------------+
|   DOWNLOAD DE RELATORIOS (links para PDFs)                       |
+------------------------------------------------------------------+
```

### 4.6 Pagina de Publicacoes (`/publicacoes`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO SECTION - "Publicacoes"                                   |
+------------------------------------------------------------------+
|   FILTROS: [Todos] [Relatorios] [Estudos] [Guias] [Artigos]     |
+------------------------------------------------------------------+
|                                                                   |
|   LISTA DE PUBLICACOES                                           |
|   +----------------------------------------------------------+   |
|   | [Preview PDF thumbnail] | Titulo                          |   |
|   |                         | Descricao                       |   |
|   |                         | [Descarregar] [Ver Online]     |   |
|   +----------------------------------------------------------+   |
|                                                                   |
+------------------------------------------------------------------+
```

### 4.7 Pagina de Contacto (`/contacto`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO SECTION - "Entre em Contacto"                             |
+------------------------------------------------------------------+
|                                                                   |
|   [MAPA Google]              | FORMULARIO DE CONTACTO           |
|                              | Nome:                            |
|   INFORMACOES DE CONTACTO    | Email:                           |
|   - Endereco                 | Assunto:                         |
|   - Telefone                 | Mensagem:                        |
|   - Email                    | [Enviar]                         |
|   - Redes Sociais            |                                  |
|                                                                   |
+------------------------------------------------------------------+
```

### 4.8 Pagina "Tornar-se Membro" (`/membro`)

**Estrutura:**
```
+------------------------------------------------------------------+
|   HERO SECTION - "Junte-se a Nos"                                |
+------------------------------------------------------------------+
|                                                                   |
|   BENEFICIOS DE SER MEMBRO                                       |
|   - Acesso a formacoes exclusivas                                |
|   - Participacao em eventos                                      |
|   - Newsletter mensal                                            |
|   - Certificados de participacao                                 |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|   FORMULARIO DE ADESAO                                           |
|   +----------------------------------------------------------+   |
|   | Informacoes Pessoais                                      |   |
|   | - Nome Completo*                                          |   |
|   | - Email*                                                  |   |
|   | - Telefone                                                |   |
|   | - Provincia                                               |   |
|   | - Idade                                                   |   |
|   |                                                           |   |
|   | Motivacao                                                 |   |
|   | - Porque deseja tornar-se membro?                        |   |
|   | - Como conheceu a CIBERCIDADAOS?                         |   |
|   |                                                           |   |
|   | [X] Aceito os termos e condicoes                         |   |
|   | [X] Desejo receber comunicacoes                          |   |
|   |                                                           |   |
|   | [Submeter Candidatura]                                    |   |
|   +----------------------------------------------------------+   |
|                                                                   |
+------------------------------------------------------------------+
```

---

## 5. Ficheiros a Criar

| Ficheiro | Tipo | Descricao |
|----------|------|-----------|
| `src/pages/AboutCibercidadaos.tsx` | Pagina | Pagina completa sobre a organizacao |
| `src/pages/Governance.tsx` | Pagina | Estrutura de governanca e equipa completa |
| `src/pages/Activities.tsx` | Pagina | Lista de actividades com filtros |
| `src/pages/ActivityDetail.tsx` | Pagina | Detalhe de uma actividade |
| `src/pages/Data.tsx` | Pagina | Dashboard de dados com graficos |
| `src/pages/Publications.tsx` | Pagina | Lista de publicacoes com preview |
| `src/pages/Contact.tsx` | Pagina | Formulario e informacoes de contacto |
| `src/pages/BecomeMember.tsx` | Pagina | Formulario de adesao |
| `src/components/layout/PageHero.tsx` | Componente | Hero reutilizavel para paginas internas |
| `src/components/layout/Breadcrumb.tsx` | Componente | Navegacao por migalhas |

---

## 6. Ficheiros a Modificar

| Ficheiro | Alteracao |
|----------|-----------|
| `src/App.tsx` | Adicionar todas as novas rotas |
| `src/components/layout/Header.tsx` | Implementar dropdown no "Sobre Nos" |
| `src/components/sections/AboutSection.tsx` | Simplificar, adicionar botao "Saiba Mais" |
| `src/components/sections/TeamSection.tsx` | Limitar a 3 membros, adicionar botao |
| `src/contexts/LanguageContext.tsx` | Adicionar traducoes para novas paginas |
| `src/data/mockData.ts` | Adicionar dados para publicacoes |

---

## 7. Estrutura de Rotas Final

```typescript
<Routes>
  <Route path="/" element={<Index />} />
  
  {/* Sobre */}
  <Route path="/sobre" element={<Navigate to="/sobre/cibercidadaos" />} />
  <Route path="/sobre/cibercidadaos" element={<AboutCibercidadaos />} />
  <Route path="/sobre/governanca" element={<Governance />} />
  
  {/* Actividades */}
  <Route path="/actividades" element={<Activities />} />
  <Route path="/actividades/:id" element={<ActivityDetail />} />
  
  {/* Dados */}
  <Route path="/dados" element={<Data />} />
  
  {/* Publicacoes */}
  <Route path="/publicacoes" element={<Publications />} />
  
  {/* Contacto */}
  <Route path="/contacto" element={<Contact />} />
  
  {/* Membro */}
  <Route path="/membro" element={<BecomeMember />} />
  
  {/* Catch-all */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 8. Dados Mock Adicionais

### Publicacoes
```typescript
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

export const publications: Publication[] = [
  {
    id: '1',
    title_pt: 'Relatorio Anual 2023',
    title_en: 'Annual Report 2023',
    description_pt: 'Relatorio completo das actividades realizadas em 2023.',
    description_en: 'Complete report of activities carried out in 2023.',
    type: 'report',
    file_url: '#',
    thumbnail: '/placeholder.svg',
    date: '2024-01-15',
    pages: 48,
  },
  // ... mais publicacoes
];
```

---

## 9. Traducoes Adicionais

Novas chaves a adicionar ao `LanguageContext.tsx`:

```typescript
// Submenus
'nav.about.organization': 'Sobre Cibercidadaos' / 'About Cibercidadaos',
'nav.about.governance': 'Estrutura de Governanca' / 'Governance Structure',

// Sobre
'about.learn_more': 'Saiba Mais' / 'Learn More',
'about.history.title': 'Nossa Historia' / 'Our History',
'about.models.title': 'Modelos de Actuacao' / 'Operating Models',

// Equipa
'team.meet_all': 'Conheca toda a equipa' / 'Meet the full team',

// Publicacoes
'publications.title': 'Publicacoes' / 'Publications',
'publications.download': 'Descarregar' / 'Download',
'publications.view': 'Ver Online' / 'View Online',

// Contacto
'contact.title': 'Entre em Contacto' / 'Get in Touch',
'contact.form.name': 'Nome Completo' / 'Full Name',
'contact.form.email': 'Email',
'contact.form.subject': 'Assunto' / 'Subject',
'contact.form.message': 'Mensagem' / 'Message',
'contact.form.submit': 'Enviar' / 'Send',

// Membro
'member.title': 'Junte-se a Nos' / 'Join Us',
'member.benefits': 'Beneficios de Ser Membro' / 'Member Benefits',
'member.form.submit': 'Submeter Candidatura' / 'Submit Application',
```

---

## 10. Prioridade de Implementacao

**Fase 1 - Estrutura Base:**
1. Criar componente PageHero reutilizavel
2. Modificar Header com dropdown
3. Simplificar AboutSection na homepage
4. Simplificar TeamSection na homepage
5. Actualizar App.tsx com rotas

**Fase 2 - Paginas Sobre:**
6. Criar AboutCibercidadaos.tsx
7. Criar Governance.tsx

**Fase 3 - Paginas de Conteudo:**
8. Criar Activities.tsx
9. Criar ActivityDetail.tsx
10. Criar Publications.tsx

**Fase 4 - Paginas de Interaccao:**
11. Criar Data.tsx (com graficos)
12. Criar Contact.tsx (com formulario)
13. Criar BecomeMember.tsx (com formulario)

---

## 11. Beneficios da Reestruturacao

1. **Homepage Leve** - Apenas introducao com links para mais detalhes
2. **Navegacao Clara** - Submenus organizam informacao logicamente
3. **Conteudo Profundo** - Paginas dedicadas para cada topico
4. **Interactividade** - Formularios funcionais para contacto e adesao
5. **SEO Melhorado** - Cada pagina com URL proprio
6. **Escalabilidade** - Estrutura pronta para adicionar mais conteudo
7. **UX Profissional** - Website institucional completo e funcional

