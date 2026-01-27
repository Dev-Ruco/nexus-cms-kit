

# Auditoria UX/UI - Plano de Melhoria do Site CIBERCIDADAOS

## Diagnostico Actual

### Problemas Identificados

| Problema | Seccao Afectada | Impacto UX |
|----------|-----------------|------------|
| Monotonia visual - fundos brancos/claros em todas as seccoes | Todo o site | Navegacao confusa, falta de ritmo visual |
| Excesso de texto na seccao Sobre Nos | AboutSection | Fadiga de leitura, baixo engagement |
| Ausencia de imagens ilustrativas | AboutSection | Conteudo pouco atrativo |
| Seccao Mapa Interactivo desnecessaria | MapSection | Distraccao do fluxo principal |
| Ordem das seccoes nao segue hierarquia organizacional | Toda a homepage | Dificuldade em encontrar informacao |

### Fundos Actuais por Seccao

```text
Hero         -> bg-primary (azul escuro) - BOM
About        -> bg-muted/30 (cinza claro) - Monotono
Activities   -> bg-background (branco) - Monotono
Data         -> bg-muted/30 (cinza claro) - Monotono
Map          -> bg-white - A REMOVER
Team         -> bg-background (branco) - Monotono
Partners     -> bg-muted/20 (cinza claro) - Monotono
```

---

## Solucao Proposta

### 1. Remover Seccao Mapa Interactivo

Remover `<MapSection />` do `Index.tsx` para simplificar a navegacao.

### 2. Nova Ordem das Seccoes (Hierarquia Organizacional)

A ordem proposta segue o modelo tipico de organizacoes da sociedade civil:

```text
1. Hero          - Primeira impressao e chamada de accao
2. About         - Quem somos (institucional)
3. Activities    - O que fazemos (trabalho)
4. Data          - Impacto mensuravel (credibilidade)
5. Team          - Quem somos (equipa)
6. Partners      - Rede de apoio (credibilidade externa)
```

### 3. Alternancia de Fundos com Cores da Marca

Para criar ritmo visual e fluidez de navegacao:

| Seccao | Novo Fundo | Efeito Visual |
|--------|------------|---------------|
| Hero | `bg-primary` (azul #001A3D) | Impacto inicial - MANTER |
| About | `bg-gradient-to-b from-primary/5 to-background` + imagem | Transicao suave do hero |
| Activities | `bg-secondary/5` (teal leve) | Destaque para actividades |
| Data | `bg-primary` (azul escuro) | Contraste forte, texto branco |
| Team | `bg-background` (branco) | Clareza nas fotos |
| Partners | `bg-gradient-to-br from-secondary/10 to-accent/10` | Encerramento colorido |

### 4. Redesign da Seccao Sobre Nos

#### Reducao de Texto
- Condensar paragrafos longos em bullet points
- Usar "ler mais" expansivel para texto adicional
- Destacar frases-chave em negrito

#### Adicionar Imagem Ilustrativa
- Incluir imagem da equipa ou de actividades no lado direito
- Criar layout em 2 colunas: texto esquerda, imagem direita
- Adicionar elementos decorativos (circulos coloridos como no hero)

#### Reorganizar Visualmente
- Missao/Visao em cards com icones maiores e fundo colorido
- Valores em formato icone-texto horizontal mais compacto
- Areas de Actuacao com icones ilustrativos maiores

---

## Alteracoes por Ficheiro

### `src/pages/Index.tsx`

**Alteracoes:**
- Remover import do `MapSection`
- Remover `<MapSection />` do JSX
- Manter nova ordem das seccoes

### `src/components/sections/AboutSection.tsx`

**Alteracoes:**
- Alterar fundo para gradiente suave com toque de azul
- Adicionar imagem ilustrativa no topo ou lado
- Redesign do layout Missao/Visao com cores de fundo
- Compactar texto - destacar palavras-chave
- Adicionar elementos decorativos (circulos subtis)

### `src/components/sections/ActivitiesSection.tsx`

**Alteracoes:**
- Alterar fundo de `bg-background` para `bg-secondary/5`
- Adicionar borda decorativa superior em gradiente

### `src/components/sections/DataSection.tsx`

**Alteracoes:**
- Alterar fundo para `bg-primary` (azul escuro)
- Mudar cores de texto para branco
- Ajustar cards para funcionar em fundo escuro

### `src/components/sections/TeamSection.tsx`

**Alteracoes:**
- Manter `bg-background` (branco) para clareza das fotos
- Adicionar separador visual superior em cor de marca

### `src/components/sections/PartnersSection.tsx`

**Alteracoes:**
- Alterar fundo para gradiente colorido subtil
- Manter clareza dos logos

---

## Estrutura Visual Proposta

```text
+==================================================================+
|                     HERO (Azul Escuro #001A3D)                    |
|                  [Circulos coloridos + Imagem]                    |
+==================================================================+
|                                                                   |
|                   SOBRE NOS (Gradiente azul suave)                |
|   +----------------------+    +-----------------------------+     |
|   |  Texto condensado    |    |  [IMAGEM ILUSTRATIVA]       |     |
|   |  Quem Somos          |    |   Equipa ou Actividade      |     |
|   +----------------------+    +-----------------------------+     |
|                                                                   |
|   [MISSAO card azul]          [VISAO card teal]                  |
|                                                                   |
|   [Valor1] [Valor2] [Valor3] [Valor4] - horizontal compacto      |
|                                                                   |
|   [Area 1] [Area 2] [Area 3] [Area 4] [Area 5]                   |
+------------------------------------------------------------------+
|                                                                   |
|              ACTIVIDADES (Fundo Teal/Verde Leve 5%)               |
|                                                                   |
|   [Card 1] [Card 2] [Card 3] [Card 4]                            |
|                                                                   |
+------------------------------------------------------------------+
|==================================================================|
|                    DADOS (Azul Escuro #001A3D)                    |
|                                                                   |
|   [Stat 1]    [Stat 2]    [Stat 3]    [Stat 4]                   |
|   (texto branco, cards glassmorphism)                            |
|==================================================================|
|                                                                   |
|                    EQUIPA (Fundo Branco)                          |
|                                                                   |
|   [Foto 1] [Foto 2] [Foto 3] [Foto 4]                            |
|                                                                   |
+------------------------------------------------------------------+
|                                                                   |
|              PARCEIROS (Gradiente Teal/Verde Suave)               |
|                                                                   |
|   [Logo 1] [Logo 2] [Logo 3] [Logo 4]                            |
|                                                                   |
+==================================================================+
```

---

## Beneficios da Solucao

1. **Ritmo Visual** - Alternancia claro/escuro cria sensacao de navegacao fluida
2. **Hierarquia Clara** - Ordem segue expectativas de organizacoes similares
3. **Reducao de Texto** - Maior engagement com conteudo visual
4. **Cores da Marca** - Reforco da identidade CIBERCIDADAOS
5. **Simplicidade** - Remocao do mapa reduz complexidade

---

## Detalhes Tecnicos

### Cores a Utilizar
- **Primary (Azul):** `bg-primary` / `hsl(213, 100%, 12%)`
- **Secondary (Teal):** `bg-secondary` / `hsl(180, 100%, 32%)`
- **Accent (Verde):** `bg-accent` / `hsl(168, 100%, 41%)`

### Classes CSS para Fundos Novos
```css
/* Data Section - Fundo escuro */
bg-primary text-white

/* Activities - Teal leve */
bg-secondary/5

/* About - Gradiente suave */
bg-gradient-to-b from-primary/5 to-background

/* Partners - Gradiente colorido */
bg-gradient-to-br from-secondary/10 to-accent/10
```

### Imagem para About Section
Sugere-se usar uma das imagens existentes ou adicionar nova imagem ilustrativa mostrando jovens em formacao digital.

