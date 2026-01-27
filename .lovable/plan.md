

# Plano: Refinamento da Integracao Visual do Hero

## Diagnostico do Problema

O Hero actual tem a direccao correcta, mas a execucao falha em criar uma composicao unificada. Os elementos parecem camadas independentes em vez de uma unica peca visual coerente.

---

## 1. Fundo com Gradiente de 3 Camadas

### Problema Actual
- Fundo `bg-background` simples (branco/off-white)
- Sem transicao para a zona da imagem

### Solucao
Criar um gradiente horizontal em 3 zonas:

```text
Esquerda (0-35%)     Centro (35-60%)      Direita (60-100%)
+------------------+--------------------+-------------------+
| Azul institucional| Transicao suave   | Claro / difuso    |
| profundo (#001A3D)| azul-petroleo     | para acolher      |
| com opacidade 3-5%| subtil            | a imagem          |
+------------------+--------------------+-------------------+
```

### Implementacao CSS
Adicionar gradiente ao fundo da seccao:
- `bg-gradient-to-r from-primary/[0.03] via-secondary/[0.02] to-transparent`
- Criar uma sensacao de que o fundo "nasce" da imagem

---

## 2. Reducao de Blobs (de 5 para 2)

### Problema Actual
- 5 circulos decorativos dispersos (teal, coral, amarelo, verde, azul)
- Parecem decoracao aleatoria, nao pertencem a cena

### Solucao
Manter apenas 2 blobs estrategicos:

| Blob | Posicao | Cor | Opacidade | Proposito |
|------|---------|-----|-----------|-----------|
| Principal | Lado direito da imagem, nivel medio | Teal (secondary) | 8-10% | Energia/contexto |
| Secundario | Entre as figuras (base) | Accent (verde) | 6-8% | Acompanhar movimento |

### Posicionamento Correcto
- Blob principal: acompanha o movimento do grupo (lado direito)
- Blob secundario: encaixa na base, entre os corpos (nao atras das cabecas)
- Ambos com blur maior para maior suavidade

---

## 3. Tratamento da Imagem com Sombra Difusa

### Problema Actual
- Imagem com `rounded-3xl` e `shadow-2xl`
- Parece recortada e colada
- Falta transicao suave

### Solucao: Mascara de Sombra + Halo

**Camada 1 - Sombra difusa atras:**
- Div posicionado atras da imagem
- `blur-3xl` ou `blur-[60px]`
- Cor: `bg-primary/8` (azul muito subtil)
- Tamanho: ligeiramente maior que a imagem

**Camada 2 - Halo de cor:**
- Gradiente radial muito subtil (5-8% opacidade)
- Cor derivada da paleta (teal/azul)
- Posicionado atras da imagem

**Camada 3 - Fade na base:**
- Gradiente na parte inferior da imagem
- `from-transparent via-transparent to-background/40`
- A base "desaparece" no fundo

### Resultado Visual
O cerebro deixa de ver um "recorte" e passa a ver a imagem integrada no ambiente.

---

## 4. Icone WiFi - Transformacao

### Problema Actual
- Icone literal (`<Wifi />` do Lucide)
- Caixa visivel com `bg-secondary/20 p-4 rounded-2xl`
- Parece infantil e distrai

### Solucao A: WiFi Abstracto
- Remover a caixa/fundo
- Icone muito menor
- Opacidade muito baixa (10-15%)
- Parcialmente escondido atras da imagem (z-index negativo)
- Posicao: canto superior direito da imagem

### Solucao B: Substituir por Linhas Curvas (Recomendado)
Desenhar SVG inline com 2-3 linhas curvas organicas:
- Sugerem "ligacao" sem serem tecnologia literal
- Cor: `stroke-secondary` com opacidade 8-12%
- Posicao: emergem do lado direito da imagem
- Nao interferem com a composicao principal

### Implementacao
```text
<svg> com 2-3 paths curvos
- stroke-secondary/10
- stroke-width: 1-2px
- Nenhum fill
- Posicao absoluta, z-index baixo
```

---

## 5. Card de Estatisticas

### Problema Actual
- Card com `bg-card` e `border border-border/50`
- Parece "colado" na imagem

### Solucao
- Manter o card mas com sombra mais difusa
- Adicionar halo subtil atras (`blur-xl` com cor da marca)
- Reduzir tamanho ligeiramente
- Garantir que "respira" com a composicao

---

## 6. Ajuste de Brilho da Imagem (Opcional)

### Recomendacao
Aplicar filtro CSS subtil para reduzir brilho:
- `brightness(0.93)` ou `brightness(0.95)`
- `contrast(1.02)` para manter definicao

### Resultado
- Expressao menos exagerada
- Mais credivel e institucional
- Melhor integracao com o fundo

---

## Estrutura Final do Layout

```text
+----------------------------------------------------------------+
| [Gradiente 3 camadas: azul profundo → transitorio → claro]     |
|                                                                |
|  +-----------------------+   +---------------------------+     |
|  | Badge                 |   |                           |     |
|  | Titulo (azul)         |   |  [Sombra difusa atras]    |     |
|  | Subtitulo (cinza)     |   |  [Halo subtil]            |     |
|  | [CTA1] [CTA2]         |   |       FOTOGRAFIA          |     |
|  |                       |   |  [Linhas curvas organicas]|     |
|  |                       |   |       [2 blobs integrados]|     |
|  +-----------------------+   |  [Fade na base]           |     |
|                              |       [Card stats]         |     |
|                              +---------------------------+     |
|                                                                |
|                    [Scroll indicator]                          |
+----------------------------------------------------------------+
```

---

## Ficheiro a Modificar

### `src/components/sections/HeroSection.tsx`

Alteracoes:
1. Adicionar gradiente de fundo de 3 camadas
2. Reduzir blobs de 5 para 2 (reposicionar)
3. Adicionar camada de sombra difusa atras da imagem
4. Adicionar halo de cor subtil
5. Adicionar fade na base da imagem
6. Substituir icone WiFi por linhas curvas organicas (SVG)
7. Ajustar card de estatisticas
8. Opcional: aplicar filtro de brilho na imagem

---

## O Que NAO Sera Alterado

- Conteudo dos textos (traducoes)
- CTAs e hierarquia
- Fotografia original
- Restantes seccoes do site (Header, Footer, etc.)
- Estrutura de duas colunas

---

## Resultado Esperado

Uma Hero Section onde:
- O fundo parece nascer da fotografia
- Os elementos pertencem a mesma cena
- A imagem esta integrada, nao "recortada"
- A composicao e mais credivel e institucional
- O tom visual e mais sério, sem perder dinamismo

