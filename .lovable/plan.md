
# Plano: Seccao "Sobre Nos" com Valores, Missao, Objectivos e Areas de Actuacao

## Visao Geral

Criar uma nova seccao moderna e intuitiva para a homepage que apresenta a organizacao CIBERCIDADAOS de forma completa, incluindo:
- Quem Somos (introducao)
- Missao e Visao
- Valores (com icones ilustrativos)
- Objectivos estrategicos
- Areas de Actuacao

O design seguira o estilo visual ja estabelecido no site, com animacoes Framer Motion, paleta de cores institucional, e layout moderno UX.

---

## Posicionamento na Homepage

A seccao sera inserida **logo apos o Hero** e **antes das Actividades**, pois:
- E a primeira informacao institucional que os visitantes devem conhecer
- Contextualiza o trabalho antes de mostrar actividades concretas

### Nova Ordem das Seccoes
```text
1. Hero Section
2. AboutSection (NOVA)
3. Activities Section
4. Data Section
5. Map Section
6. Team Section
7. Partners Section
```

---

## Estrutura Visual da Seccao

### Layout Geral
A seccao sera dividida em sub-seccoes visuais distintas para facilitar a leitura:

```text
+------------------------------------------------------------------+
|                    SOBRE NOS (Header)                             |
|           Breve introducao sobre a organizacao                    |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------------+    +------------------------------+   |
|  |       MISSAO          |    |           VISAO              |   |
|  |  [Icone ilustrativo]  |    |    [Icone ilustrativo]       |   |
|  |  Texto da missao      |    |    Texto da visao            |   |
|  +------------------------+    +------------------------------+   |
|                                                                   |
+------------------------------------------------------------------+
|                       VALORES (Grid 2x2 ou 4 colunas)             |
|                                                                   |
|  [Icone]  [Icone]  [Icone]  [Icone]                              |
|  Valor 1  Valor 2  Valor 3  Valor 4                              |
|                                                                   |
+------------------------------------------------------------------+
|                    AREAS DE ACTUACAO                              |
|                                                                   |
|  [Card ilustrado 1]  [Card ilustrado 2]  [Card ilustrado 3]      |
|  Literacia Digital   Seguranca Online   Inclusao Digital         |
|                                                                   |
|  [Card ilustrado 4]  [Card ilustrado 5]                          |
|  Advocacia           Pesquisa e Dados                            |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Conteudo (Bilingue PT/EN)

Quem somos

PT
A CIBERCIDADÃOS é uma organização moçambicana da sociedade civil que trabalha na promoção da cidadania digital, dos Direitos Humanos no ambiente digital e do uso ético e responsável das tecnologias. Actuamos a nível nacional, com foco na inclusão, na educação cívica digital e no fortalecimento da participação cidadã na sociedade da informação.

EN
CIBERCIDADÃOS is a Mozambican civil society organisation working to promote digital citizenship, human rights in the digital environment, and the ethical and responsible use of technology. We operate nationwide, focusing on inclusion, digital civic education, and strengthening citizen participation in the information society.

Missão

PT
Promover os Direitos Humanos no ambiente digital, capacitando cidadãos com conhecimentos, competências e consciência crítica para uma participação segura, ética, informada e responsável na sociedade da informação.

EN
To promote human rights in the digital environment by empowering citizens with knowledge, skills, and critical awareness for safe, ethical, informed, and responsible participation in the information society.

Visão

PT
Um Moçambique onde todos os cidadãos possam exercer plenamente a sua cidadania no ambiente digital, beneficiando das oportunidades tecnológicas de forma livre, segura, ética, inclusiva e socialmente justa.

EN
A Mozambique where all citizens can fully exercise their digital citizenship, benefiting from technological opportunities in a free, safe, ethical, inclusive, and socially just manner.

Valores
Inclusão

PT: Defendemos uma transformação digital que não exclua ninguém, promovendo o acesso equitativo às tecnologias e à informação.
EN: We support a digital transformation that leaves no one behind, promoting equitable access to technology and information.

Integridade

PT: Actuamos com transparência, ética e responsabilidade em todas as nossas iniciativas e parcerias.
EN: We act with transparency, ethics, and accountability in all our initiatives and partnerships.

Inovação

PT: Incentivamos soluções criativas e sustentáveis para responder aos desafios emergentes do ambiente digital.
EN: We encourage creative and sustainable solutions to address emerging challenges in the digital environment.

Impacto

PT: Trabalhamos com foco em resultados concretos e mensuráveis que fortaleçam a cidadania digital e os Direitos Humanos.
EN: We focus on concrete and measurable results that strengthen digital citizenship and human rights.

Áreas de actuação
Educação para a cidadania digital

PT: Desenvolvimento de programas de formação em competências digitais, promovendo o uso crítico, consciente e responsável das tecnologias.
EN: Development of training programmes in digital skills, promoting critical, informed, and responsible use of technology.

Liberdades e privacidade no ambiente digital

PT: Promoção do acesso à informação, da liberdade de expressão e da protecção da privacidade no espaço digital.
EN: Promotion of access to information, freedom of expression, and privacy protection in the digital space.

Inclusão digital e justiça social

PT: Iniciativas que reduzem desigualdades no acesso e no uso das tecnologias, com atenção especial a grupos vulneráveis.
EN: Initiatives that reduce inequalities in access to and use of technology, with particular attention to vulnerable groups.

Transparência e ética tecnológica

PT: Promoção da transparência e da responsabilização no uso de dados, algoritmos, inteligência artificial e tecnologias emergentes.
EN: Promotion of transparency and accountability in the use of data, algorithms, artificial intelligence, and emerging technologies.

Investigação, dados e análise

PT: Produção e divulgação de estudos e análises sobre cidadania digital, democracia digital e Direitos Humanos em Moçambique.
EN: Production and dissemination of studies and analyses on digital citizenship, digital democracy, and human rights in Mozambique.
---

## Componentes Visuais

### Icones (Lucide React)
Utilizaremos icones da biblioteca Lucide ja instalada:
- **Missao**: Target
- **Visao**: Eye
- **Inclusao**: Users
- **Integridade**: Shield
- **Inovacao**: Lightbulb
- **Impacto**: TrendingUp
- **Literacia Digital**: GraduationCap
- **Seguranca Online**: Lock
- **Inclusao Digital**: Wifi
- **Advocacia**: Scale
- **Pesquisa**: BarChart3

### Elementos Decorativos
- Circulos coloridos subtis (teal, accent) como decoracao
- Cards com hover effects e sombras
- Linhas ou separadores gradiente entre sub-seccoes

### Animacoes (Framer Motion)
- Fade in e slide up ao entrar na viewport
- Stagger effect nos cards de valores e areas
- Hover scale nos cards interactivos

---

## Ficheiros a Criar/Modificar

### 1. Novo Componente: `src/components/sections/AboutSection.tsx`

Estrutura do componente:
```text
AboutSection
  - Container com padding section-padding
  - Header (titulo + introducao)
  - Grid Missao/Visao (2 colunas)
  - Grid Valores (4 colunas responsivo)
  - Grid Areas de Actuacao (3 colunas responsivo)
```

### 2. Actualizar Dados: `src/data/mockData.ts`

Adicionar interfaces e dados para:
- `AboutContent` - Textos de missao, visao, introducao
- `Value` - Valores com icone, titulo, descricao (PT/EN)
- `ActionArea` - Areas de actuacao com icone, titulo, descricao (PT/EN)

### 3. Actualizar Traducoes: `src/contexts/LanguageContext.tsx`

Adicionar keys de traducao:
- `about.title`, `about.intro`
- `about.mission`, `about.vision`
- `about.values`, `about.areas`

### 4. Actualizar Index: `src/pages/Index.tsx`

Importar e adicionar `<AboutSection />` apos o Hero.

---

## Design UX Moderno

### Cards de Valores
- Fundo `bg-card` com bordas subtis
- Icone grande colorido (teal/accent) no topo
- Titulo em bold
- Descricao curta
- Hover: elevacao + borda colorida

### Cards de Areas de Actuacao
- Layout com ilustracao/icone no lado esquerdo
- Texto descritivo no lado direito
- Cores alternadas ou gradiente subtil
- Hover: scale + sombra

### Seccao Missao/Visao
- Cards lado a lado em desktop
- Empilhados em mobile
- Icone ilustrativo grande
- Fundo com gradiente subtil ou pattern

---

## Responsividade

| Viewport | Layout |
|----------|--------|
| Mobile (< 640px) | Stack vertical, 1 coluna |
| Tablet (640-1024px) | Valores 2x2, Areas 2 colunas |
| Desktop (> 1024px) | Valores 4 colunas, Areas 3 colunas |

---

## Cores e Estilos (Seguindo Design System)

- **Fundo seccao**: `bg-background` ou `bg-muted/30` alternado
- **Titulos**: `text-foreground font-serif`
- **Icones valores**: `text-secondary` (teal)
- **Icones areas**: `text-accent` (verde) ou gradiente
- **Cards**: `bg-card border border-border/50`
- **Hover states**: `hover:shadow-md hover:-translate-y-1`

---

## Resultado Visual Esperado

Uma seccao institucional completa que:
- Apresenta claramente quem e a CIBERCIDADAOS
- Mostra missao e visao de forma visual e impactante
- Lista valores com icones memoraveis
- Detalha areas de actuacao com cards ilustrativos
- Segue o design system existente
- E totalmente bilingue (PT/EN)
- Tem animacoes suaves e modernas
- E responsivo em todos os dispositivos
