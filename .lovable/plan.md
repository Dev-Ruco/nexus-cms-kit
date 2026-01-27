

# Plano: Hero Section Escura com Integracao Visual Completa

## Analise da Situacao

O plano anterior criou um Hero **claro** (fundo branco, texto azul). A imagem de referencia mostra um Hero **escuro** (fundo azul institucional, texto branco, blobs coloridos visiveis). Sao abordagens visuais opostas.

---

## Objectivo Final

Criar um Hero onde:
- O fundo escuro e a fotografia formam uma unica cena
- Os blobs coloridos pertencem naturalmente a composicao
- A imagem parece "nascer" do fundo, nao "colada" em cima

---

## 1. Fundo Azul Escuro Institucional

### Implementacao
- Substituir `bg-gradient-to-r from-primary/[0.03]...` por fundo azul solido
- Cor: `bg-primary` (#001A3D) ou gradiente subtil azul-para-azul-petroleo
- Remover todos os tons claros/brancos

```text
Esquerda: Azul institucional profundo (#001A3D)
Centro: Transicao para azul-petroleo (#00303D)
Direita: Ligeiramente mais claro para receber a imagem
```

---

## 2. Blobs Coloridos Visiveis

### Configuracao (inspirada na referencia)

| Blob | Cor | Tamanho | Posicao | Opacidade |
|------|-----|---------|---------|-----------|
| Coral | bg-orange-500 | w-48 h-48 | top-40 right-[45%] | 40-50% |
| Azul | bg-blue-600 | w-40 h-40 | top-20 right-[30%] | 35-45% |
| Amarelo | bg-yellow-400 | w-32 h-32 | bottom-32 right-[15%] | 40-50% |
| Verde | bg-accent | w-28 h-28 | bottom-40 right-[35%] | 30-40% |

### Notas
- Blobs com blur moderado (blur-2xl a blur-3xl), nao excessivo
- Alguns blobs parcialmente atras da imagem (z-index negativo)
- Posicionamento estrategico: acompanham o movimento do grupo

---

## 3. Icone WiFi Estilizado

### Implementacao
- Manter icone WiFi mas em versao mais abstracta
- Cor: `text-secondary` (teal)
- Opacidade: 60-80% (mais visivel que antes)
- Posicao: canto superior direito da imagem
- Opcional: adicionar 2-3 arcos separados com animacao sutil

---

## 4. Fotografia Sem Fundo (Integrada)

### Problema Actual
A imagem tem `rounded-3xl` e parece um "cartao" recortado.

### Solucao
- Remover `rounded-3xl` da imagem
- Usar `object-cover` com posicionamento estrategico
- Adicionar fade nas bordas (esquerda e base) para fundir com o fundo
- Gradientes de transicao:
  - Esquerda: `bg-gradient-to-r from-primary via-primary/50 to-transparent`
  - Base: `bg-gradient-to-t from-primary/80 to-transparent`

### Resultado
A imagem "desaparece" nas bordas, fundindo-se com o fundo azul.

---

## 5. Tipografia (Texto Branco)

### Alteracoes
| Elemento | Actual | Novo |
|----------|--------|------|
| Titulo | text-primary (azul) | text-white |
| Subtitulo | text-muted-foreground | text-white/80 |
| Badge | bg-secondary/10 text-secondary | glass text-white/90 |

---

## 6. Botoes Actualizados

### CTA Principal
- Manter `btn-gradient` (teal)
- Texto branco

### CTA Secundario
- Mudar de `border-primary text-primary` para `border-white/80 text-white`
- Hover: `bg-white/10`

---

## 7. Card de Estatisticas

### Ajustes para tema escuro
- Fundo: `bg-white` ou `bg-card` (contraste com fundo escuro)
- Texto: `text-primary` (azul sobre branco)
- Adicionar sombra mais pronunciada para destacar

---

## 8. Scroll Indicator

### Cores para tema escuro
- Texto: `text-white/60`
- Borda: `border-white/30`
- Dot: `bg-white/60`

---

## Estrutura Visual Final

```text
+------------------------------------------------------------------+
| [Fundo azul escuro institucional #001A3D]                        |
|                                                                  |
|  [Blob coral]              [Blob azul]                           |
|         \                      /     [WiFi teal]                 |
|  +-----------------+    +---------------------------+            |
|  | Badge (glass)   |    |                           |            |
|  | Titulo (branco) |    |      FOTOGRAFIA           |            |
|  | Subtit (branco) |    |  [fade nas bordas]        |            |
|  | [CTA1] [CTA2]   |    |         [Blob amarelo]    |            |
|  +-----------------+    |    [Blob verde]           |            |
|                         |      [Card stats branco]  |            |
|                         +---------------------------+            |
|                                                                  |
|              [Scroll indicator branco]                           |
+------------------------------------------------------------------+
```

---

## Ficheiro a Modificar

### `src/components/sections/HeroSection.tsx`

Alteracoes completas:
1. Fundo: `bg-primary` com gradiente subtil
2. Blobs: 4-5 blobs coloridos com opacidade visivel
3. WiFi: Icone teal abstracto
4. Imagem: Remover rounded, adicionar fades nas bordas
5. Texto: Mudar para branco
6. Botoes: Actualizar para tema escuro
7. Card: Fundo branco para contraste
8. Scroll: Cores brancas

---

## O Que NAO Sera Alterado

- Conteudo dos textos (traducoes mantidas)
- Hierarquia de informacao
- Fotografia original (hero-photo.jpg)
- Restantes seccoes do site
- Header e Footer

---

## Resultado Esperado

Uma Hero Section onde:
- O fundo azul escuro e a fotografia sao uma unica composicao
- Os blobs coloridos pertencem a cena (energia, dinamismo)
- A imagem parece "nascer" do fundo, sem recorte visivel
- O tom e institucional mas vibrante
- Alta legibilidade com texto branco sobre azul escuro (contraste 15.6:1)

