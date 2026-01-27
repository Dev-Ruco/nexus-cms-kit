

# Plano de Implementação — CIBERCIDADÃOS

## Visão Geral
Website institucional moderno e dinâmico para promover a cidadania digital em Moçambique, com arquitectura preparada para CMS/Dashboard e integração futura com Supabase.

---

## Fase 1: Website Público (Prioridade Imediata)

### 1.1 Estrutura Base e Design System
- **Paleta de cores** extraída do logótipo (azul escuro #001A3D, teal #00A3A4, verde #00D1B2)
- **Gradientes subtis** aplicados em fundos e CTAs
- **Tipografia institucional** com hierarquia clara (Inter + Playfair Display)
- **Componentes reutilizáveis**: botões, cards, badges, formulários
- **Modo claro/escuro** com toggle acessível
- **Animações suaves** (scroll reveal, hover effects, transições)

### 1.2 Header Global
- Logótipo CIBERCIDADÃOS (imagem fornecida)
- Menu de navegação responsivo (hambúrguer em mobile)
- Selector de idioma PT/EN
- Design "glass" com blur para sobreposição elegante

### 1.3 Hero Section
- Fotografia dos três adolescentes com smartphone (imagem fornecida)
- Overlay com gradiente para legibilidade
- Título impactante + texto institucional curto
- Botões CTA ("Conhecer Mais" / "Ver Actividades")

### 1.4 Últimas Actividades
- Grid de 3-4 cards com imagem, título, data e resumo
- Categorias/tags visuais
- Link para página de listagem completa
- Página de detalhe de cada actividade com layout editorial

### 1.5 Dados em Destaque
- Cards animados com indicadores-chave (ícones + números)
- Layout visual claro com ilustrações simples
- Dados mockados, prontos para edição via CMS

### 1.6 Mapa Interactivo de Moçambique
- SVG do mapa com províncias clicáveis
- Hover com destaque visual da província
- **Painel lateral** que desliza ao clicar, mostrando:
  - Nome da província
  - Indicadores digitais resumidos
  - Link para página de detalhe
- Dados gerais de Moçambique ao lado do mapa

### 1.7 Publicações / Artigos
- Página de listagem com cards/preview
- Página de detalhe com formatação rica (títulos, subtítulos, imagens, citações)
- Filtros por categoria

### 1.8 Equipa Técnica (Nova secção Home)
- Grid de 6-12 membros
- Cards com: foto, nome, função, mini-bio
- Links para redes sociais (opcional)
- Design institucional e uniforme

### 1.9 Parceiros (Nova secção Home)
- Grelha de logos de parceiros
- Logos monocromáticos ou com padding consistente
- Hover para mostrar nome completo + link
- Possibilidade de destaque para parceiros principais

### 1.10 Footer
- Links de navegação secundária
- Contactos e redes sociais
- Créditos e políticas
- Newsletter (opcional)

---

## Fase 2: Páginas Internas

### 2.1 Página "Sobre Nós"
- Missão, visão, valores
- História da organização
- Equipa expandida

### 2.2 Página "Dados" (Cenário Digital)
- Secções estruturadas com dados do país
- Gráficos e visualizações
- Fonte dos dados

### 2.3 Páginas por Província
- Template reutilizável
- Indicadores provinciais
- Actividades locais

---

## Fase 3: Dashboard CMS (Após Website)

### 3.1 Autenticação
- Login com email/password
- Perfis: Admin, Editor, Leitor
- Preparado para Supabase Auth

### 3.2 Menu Lateral
- Gestão de Secções da Home (ordenação drag-and-drop)
- Actividades (CRUD)
- Artigos/Publicações
- Dados e Indicadores
- Províncias
- Equipa Técnica
- Parceiros
- Menus e Navegação
- Media Library
- Definições (idiomas, SEO)

### 3.3 Editor de Conteúdos
- Campos PT/EN para cada texto
- Upload de imagens
- Preview em tempo real
- Activar/desactivar secções
- Criar secções novas (tipos reutilizáveis)

---

## Estrutura de Dados (Modelo Lógico)

Preparação para Supabase com tabelas conceptuais:
- `sections` (id, type, order, active, page)
- `content_translations` (section_id, field, lang, value)
- `activities` (id, title_pt, title_en, image, date, category, featured)
- `articles` (id, title_pt, title_en, content_pt, content_en, status)
- `team_members` (id, name, role_pt, role_en, photo, bio, order)
- `partners` (id, name, logo, url, category, active, featured)
- `provinces` (id, name, code, data_json)
- `media` (id, url, alt, type)

---

## Requisitos Técnicos

- **Responsivo mobile-first** com breakpoints consistentes
- **Acessibilidade WCAG 2.1 AA** (contrastes, navegação por teclado)
- **Estados de loading** e empty states
- **SEO básico** com meta tags dinâmicas
- **Performance** optimizada (lazy loading, imagens optimizadas)

---

## Assets Incluídos
- ✅ Logótipo (Logotipo.png)
- ✅ Foto Hero (setion_hero_foto.jpg)
- ✅ Referência do mapa (mapa-mocambique.webp → será convertido em SVG interactivo)

