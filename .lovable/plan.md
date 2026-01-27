

# Plano: Hero Section Clara e Institucional

## Objectivo
Transformar a Hero Section actual (fundo escuro com overlay pesado) num layout claro e moderno, inspirado na referencia fornecida, mantendo a fotografia e o conteudo existentes.

---

## Analise da Referencia

A imagem de referencia mostra um hero com:
- Layout em duas colunas (texto esquerda, imagem direita)
- Formas geometricas decorativas (circulos coloridos: coral, azul, amarelo, verde, teal)
- Icones graficos (WiFi) como elementos de accent
- Botoes com cantos arredondados
- Card de destaque no canto inferior direito

---

## Mudancas Propostas

### 1. Estrutura de Layout
| Elemento | Actual | Novo |
|----------|--------|------|
| Layout | Imagem fullscreen + overlay | Duas colunas: texto (esq) + imagem (dir) |
| Fundo | Gradiente azul escuro sobre foto | Branco/off-white limpo |
| Altura | min-h-screen | min-h-[90vh] ou altura dinamica |

### 2. Tratamento da Imagem
- Remover overlay escuro pesado
- Posicionar imagem no lado direito (50-60% da largura)
- Aplicar apenas sombra subtil ou gradiente minimo para integracao
- Manter a mesma fotografia (`hero-photo.jpg`)

### 3. Tipografia e Cores
| Elemento | Actual | Novo |
|----------|--------|------|
| Titulo | text-white | text-primary (azul #001A3D) |
| Subtitulo | text-white/80 | text-muted-foreground (cinza escuro) |
| Badge | glass (fundo escuro) | bg-secondary/10 text-secondary border |

### 4. Elementos Graficos Decorativos
Inspirados na referencia, adicionar formas geometricas em opacidade baixa:
- Circulo teal (grande, canto superior direito da imagem)
- Circulo coral/laranja (medio, interseccao texto/imagem)
- Circulo amarelo (pequeno, proximo da imagem)
- Circulo azul (pequeno, decorativo)
- Icone WiFi estilizado (elemento de conexao digital)

Todas as formas usam cores da paleta CIBERCIDADAOS:
- Teal: #00A3A4 (secondary)
- Verde: #00D1B2 (accent)
- Azul: #001A3D (primary)
- Coral/Laranja: tom complementar quente

### 5. Botoes (CTAs)
- Manter btn-gradient para CTA principal
- Segundo botao: borda institucional (border-primary text-primary)
- Cantos mais arredondados (rounded-full ou rounded-xl)

### 6. Scroll Indicator
- Alterar cores para tema claro: text-primary/60 e border-primary/30

---

## Codigo a Modificar

### Ficheiro: `src/components/sections/HeroSection.tsx`

Alteracoes principais:
1. Remover o overlay escuro (`bg-gradient-to-b from-primary/80...`)
2. Mudar layout para grid de duas colunas
3. Adicionar formas decorativas com motion animations
4. Actualizar cores do texto para azul/cinza
5. Reposicionar imagem para lado direito
6. Actualizar badge para tema claro
7. Actualizar botao outline para tema claro

### Estrutura do Novo Layout
```text
+--------------------------------------------------+
|  [Fundo branco/off-white]                        |
|                                                  |
|  +-------------------+   +--------------------+  |
|  | Badge             |   |                    |  |
|  | Titulo (azul)     |   |    FOTOGRAFIA      |  |
|  | Subtitulo (cinza) |   |    + formas        |  |
|  | [CTA1] [CTA2]     |   |    decorativas     |  |
|  +-------------------+   +--------------------+  |
|                                                  |
|           [Scroll indicator]                     |
+--------------------------------------------------+
```

---

## Formas Decorativas (Detalhes)

Posicionamento (usando Tailwind + motion):
- Circulo teal grande: `absolute top-20 right-[30%] w-32 h-32 bg-secondary/20 rounded-full`
- Circulo coral: `absolute top-40 right-[45%] w-24 h-24 bg-orange-400/20 rounded-full`
- Circulo amarelo: `absolute bottom-32 right-[25%] w-20 h-20 bg-yellow-400/20 rounded-full`
- Circulo verde: `absolute bottom-20 right-[40%] w-16 h-16 bg-accent/15 rounded-full`
- Icone WiFi: SVG inline em `text-secondary/30` posicionado sobre a imagem

---

## Nao Sera Alterado

- Logica de traducao (useLanguage)
- Conteudo dos textos (t('hero.title'), etc.)
- Outras seccoes do site (ActivitiesSection, DataSection, etc.)
- Header e Footer

---

## Acessibilidade

- Titulo em azul #001A3D sobre branco: contraste 15.6:1 (excelente)
- Subtitulo em cinza escuro: contraste minimo 4.5:1
- Imagem com alt text descritivo mantido

---

## Resultado Esperado

Um hero leve e institucional que:
- Usa fundo claro (branco/off-white)
- Mostra a fotografia com destaque no lado direito
- Apresenta texto em cores escuras com alta legibilidade
- Integra formas decorativas subtis da paleta CIBERCIDADAOS
- Mantem CTAs e copy existentes
- Cria transicao suave para as seccoes seguintes

