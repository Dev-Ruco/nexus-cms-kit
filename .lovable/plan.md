
# Plano: Actualização para Tema Claro Institucional

## Sumário Executivo
Transformar o site actual com tema predominantemente escuro para um design claro, leve e institucional, mantendo a identidade visual da CIBERCIDADÃOS e melhorando significativamente a legibilidade e credibilidade.

---

## 1. Actualização do Design System (CSS/Tailwind)

### 1.1 Paleta de Cores Revista
| Elemento | Actual | Novo |
|----------|--------|------|
| Background | Cinza claro #F7F8FA | Branco #FFFFFF |
| Foreground | Azul escuro | Azul institucional #001A3D |
| Cards | Branco | Branco com borda sutil |
| Hover/Active | Verde | Teal #00A3A4 |

### 1.2 Ficheiros a Modificar
- **src/index.css**: Ajustar variáveis CSS para tema claro predominante
- Remover gradientes escuros dominantes
- Adicionar sombras subtis institucionais
- Manter gradientes apenas para Hero e separadores

---

## 2. Header com Fundo Branco

### Mudancas no Header
- Fundo branco solido (sem transparencia escura)
- Logotipo original totalmente visivel
- Texto do menu em azul institucional (#001A3D)
- Estado hover/activo em teal (#00A3A4)
- Sombra sutil ao fazer scroll
- Menu mobile com fundo branco

### Codigo a Alterar
```text
src/components/layout/Header.tsx
- Remover: bg-primary/95 e bg-transparent
- Adicionar: bg-white shadow-sm (scroll) e bg-white/95 (topo)
- Cores do texto: text-primary hover:text-secondary
```

---

## 3. Hero Section (Unica seccao com overlay escuro)

A Hero Section mantem o gradiente escuro sobre a imagem para garantir legibilidade do texto branco. Esta e a unica excepcao ao tema claro.

### Ajustes Menores
- Gradiente mais suave para melhor transicao
- Manter CTAs com gradiente teal

---

## 4. Seccoes com Fundo Claro

### 4.1 ActivitiesSection
- Fundo: bg-white
- Cards: Borda sutil + sombra leve
- Titulos: Azul institucional
- Links hover: Teal

### 4.2 DataSection (Mudanca Significativa)
- **Actual**: Fundo gradiente azul escuro com texto branco
- **Novo**: Fundo off-white com cards brancos
- Icones: Fundo teal em circulo
- Numeros: Azul institucional
- Decoracao: Linha/separador teal subtil no topo

### 4.3 MapSection
- Fundo: Branco/off-white
- Cards laterais: Brancos com sombra
- Mapa: Tons de teal com hover mais intenso

### 4.4 TeamSection
- Fundo: Branco
- Cards: Borda sutil ou sombra leve
- Overlay hover: Gradiente teal (mais claro)

### 4.5 PartnersSection
- Fundo: Off-white (bg-muted/20)
- Cards: Brancos com hover teal

---

## 5. Mapa SVG de Mocambique

### Problema Actual
O mapa actual usa paths simplificados (formas geometricas basicas) que nao representam correctamente a geografia de Mocambique.

### Solucao
O utilizador forneceu um SVG geograficamente correcto, mas este contem um unico path complexo (nao dividido por provincias).

### Abordagem Tecnica
1. Criar um componente React com SVG inline dividido por 11 provincias
2. Cada provincia tera um path separado com id unico
3. Estilos: Preenchimento claro, hover teal, active mais intenso
4. Manter interactividade com painel lateral

### Provincias de Mocambique (11 total)
```text
- Niassa (norte)
- Cabo Delgado (nordeste)
- Nampula (norte-centro)
- Zambezia (centro)
- Tete (noroeste)
- Manica (centro-oeste)
- Sofala (centro-litoral)
- Inhambane (sul-litoral)
- Gaza (sul)
- Maputo Provincia (extremo sul)
- Maputo Cidade (capital)
```

### Estilo do Mapa
```text
Estado normal: fill-secondary/15 stroke-secondary
Estado hover: fill-secondary/30 stroke-secondary stroke-width-2
Estado active: fill-secondary/50 + drop-shadow teal
```

---

## 6. Footer (Mantem Tema Escuro)

O Footer pode manter o fundo azul escuro institucional, criando um contraste elegante e definindo claramente o fim da pagina.

### Ajustes
- Manter bg-primary (azul escuro)
- Melhorar contraste do texto
- Links hover em teal

---

## 7. Componentes UI Afectados

### Cards (card-elevated)
```text
Actual: bg-card shadow-md
Novo: bg-white border border-border/50 shadow-sm
Hover: shadow-md + translate-y
```

### Botoes
```text
btn-gradient: Manter gradiente teal (CTA principal)
Outline: border-primary text-primary hover:bg-primary/5
```

### Links
```text
Normal: text-primary
Hover: text-secondary
Underline: gradient teal
```

---

## 8. Acessibilidade e Legibilidade

### Garantias
- Contraste minimo WCAG AA (4.5:1 para texto normal)
- Azul #001A3D sobre branco: 15.6:1 (Excelente)
- Teal #00A3A4 sobre branco: 3.2:1 (usar apenas para decoracao, nao texto pequeno)
- Texto secundario em cinza escuro, nao teal

---

## Resumo de Ficheiros a Modificar

| Ficheiro | Alteracoes |
|----------|------------|
| src/index.css | Variaveis CSS, classes utilitarias |
| src/components/layout/Header.tsx | Fundo branco, cores do texto |
| src/components/sections/HeroSection.tsx | Ajustes menores no overlay |
| src/components/sections/DataSection.tsx | Redesign completo para fundo claro |
| src/components/sections/MapSection.tsx | Novo SVG, estilos claros |
| src/components/sections/ActivitiesSection.tsx | Cores e sombras dos cards |
| src/components/sections/TeamSection.tsx | Overlay hover mais claro |
| src/components/sections/PartnersSection.tsx | Cores consistentes |
| src/components/layout/Footer.tsx | Pequenos ajustes de contraste |

---

## Resultado Visual Esperado

- Header branco com logo colorido totalmente visivel
- Navegacao em azul institucional, hover teal
- Hero Section impactante (unica area escura)
- Seccoes limpas sobre fundo branco/off-white
- Cards com sombras subtis e bordas elegantes
- Mapa geograficamente correcto e interactivo
- Tipografia de alta legibilidade
- Identidade visual coerente e credivel
