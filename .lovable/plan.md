

# Plano: Hero Section com Imagem Maior e Circulos Decorativos

## Problemas Identificados

1. Imagem actual e pesada e precisa ser substituida
2. Imagem pequena (altura fixa 550px) deixa espacos vazios no hero
3. Os blobs actuais tem blur excessivo - na referencia sao circulos solidos e definidos que atravessam os personagens

---

## 1. Substituir Imagem por Versao Leve

### Accao
- Copiar `user-uploads://Hero_imagem_-transformed.png` para `src/assets/hero-transparent.png`
- Esta imagem ja tem fundo transparente e e mais leve

---

## 2. Corrigir Tamanho da Imagem

### Problema Actual
```tsx
className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-contain"
```
Altura fixa limitada nao preenche o hero section.

### Solucao
- Remover altura fixa limitada
- Usar altura responsiva que preenche a seccao: `h-auto min-h-[500px] lg:min-h-[600px]`
- Posicionar imagem para ocupar mais espaco vertical
- Permitir que a imagem "sangre" para baixo se necessario

### Nova Estrutura do Container da Imagem
```tsx
// Imagem maior, posicionada mais acima para preencher
className="w-full h-auto max-h-[700px] object-contain object-bottom"
```

---

## 3. Adicionar Circulos Decorativos Visiveis (Como na Referencia)

### Analise da Referencia
Na imagem de referencia, os circulos sao:
- **Solidos** (sem blur excessivo)
- **Grandes** e bem visiveis
- **Posicionados ATRAVES dos personagens** (alguns atras, alguns parecem sobrepostos)
- **Cores vibrantes** do logotipo: coral, azul, amarelo, verde/teal

### Problema Actual
Os blobs actuais tem `blur-xl` que os torna demasiado difusos e quase invisiveis.

### Solucao - Circulos Definidos
Substituir blobs difusos por circulos com:
- Menos blur (`blur-md` ou `blur-lg` em vez de `blur-xl`)
- Opacidade mais alta (70-85%)
- Posicoes estrategicas que atravessam os personagens

### Circulos a Implementar (Inspirados na Referencia)

| Circulo | Cor | Tamanho | Posicao | Opacidade | Blur |
|---------|-----|---------|---------|-----------|------|
| Coral Grande | bg-orange-500 | w-80 h-80 | top-16 right-[40%] | 75% | blur-lg |
| Azul Medio | bg-blue-600 | w-56 h-56 | top-4 right-[20%] | 70% | blur-md |
| Amarelo Grande | bg-yellow-400 | w-72 h-72 | bottom-10 right-[0%] | 75% | blur-lg |
| Verde/Teal Pequeno | bg-emerald-500 | w-40 h-40 | bottom-24 right-[12%] | 65% | blur-md |

### Z-Index Estrategico
Para alguns circulos aparecerem "atraves" dos personagens:
- Alguns circulos com `z-0` (atras da imagem)
- Imagem com `z-10`
- Alguns elementos decorativos com `z-5` (entre camadas)

---

## 4. Ajustar Layout para Imagem Maior

### Estrutura Actual
```tsx
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
```

### Ajustes
- Manter grid de duas colunas
- Permitir que coluna da imagem seja maior: `lg:grid-cols-[1fr_1.2fr]`
- Reduzir padding inferior para a imagem poder estender mais

---

## Estrutura Visual Final

```
+------------------------------------------------------------------+
| [Fundo azul escuro]                                              |
|                                                                  |
|  [Ponto branco]        [CIRCULO AZUL]   [WiFi]                   |
|                            |                                     |
|     [CIRCULO CORAL]        |      Personagens                    |
|           \                |       /      \                      |
|  +-----------------+      IMAGEM PNG       [CIRCULO AMARELO]     |
|  | Titulo          |    (maior, preenche)         \              |
|  | Subtitulo       |         |             [CIRCULO VERDE]       |
|  | [CTA1] [CTA2]   |         |                                   |
|  +-----------------+    [Card EM DESTAQUE]                       |
|                                                                  |
|  [Scroll]                                        [Btn Seta]      |
+------------------------------------------------------------------+
```

---

## Ficheiro a Modificar

### `src/components/sections/HeroSection.tsx`

Alteracoes:
1. Copiar nova imagem leve para `src/assets/hero-transparent.png`
2. Remover alturas fixas da imagem - usar altura responsiva maior
3. Substituir blobs difusos por circulos mais definidos (menos blur)
4. Aumentar tamanho dos circulos
5. Aumentar opacidade para 70-85%
6. Posicionar circulos estrategicamente atraves dos personagens
7. Ajustar z-index para criar profundidade visual

---

## Resultado Esperado

- Imagem mais leve e optimizada
- Imagem preenche todo o espaco do hero sem cortes ou espacos vazios
- Circulos coloridos visiveis e vibrantes como na referencia
- Circulos parecem atravessar os personagens, criando profundidade
- Visual coerente e institucional

