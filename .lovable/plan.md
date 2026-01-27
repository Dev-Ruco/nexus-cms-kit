

# Plano: Hero Section Escura Inspirada na Referencia

## Analise da Imagem de Referencia
- mantenha as coires ja feitas 

A referencia mostra um Hero com estas caracteristicas exactas:

1. **Fundo**: Azul escuro institucional solido (#001A3D ou muito proximo)
2. **Blobs coloridos vibrantes** (nao subtis):
   - Coral/Laranja (grande, atras do grupo a esquerda)
   - Azul (medio, topo direita)
   - Amarelo (grande, lado direito)
   - Verde (pequeno, canto inferior direito)
3. **Icone WiFi**: Teal, visivel no topo direito
4. **Imagem**: Pessoas sem fundo visivel, integradas naturalmente no fundo azul
5. **Tipografia**: Branca, fonte serifada no titulo
6. **Ponto decorativo**: Circulo branco pequeno no topo esquerdo
7. **Card "EM DESTAQUE"**: Fundo branco no canto inferior direito
8. **Botoes**: Um claro (outline branco), um escuro (outline escuro)

---

## 1. Copiar Nova Imagem

### Accao
- Copiar `user-uploads://hero_imagem.jpg` para `src/assets/hero-new.jpg`
- Actualizar o import no componente

---

## 2. Fundo Azul Escuro Solido

### Actual
`bg-primary` ja esta correcto (#001A3D)

### Verificacao
Manter o fundo escuro institucional exactamente como na referencia.

---

## 3. Blobs Coloridos VISIVEIS (Como na Referencia)

### Problema Actual
Os blobs actuais tem `blur-2xl` e opacidade moderada - parecem demasiado difusos.

### Ajuste Necessario
Blobs com cores mais saturadas, menos blur, e opacidade mais alta para serem visivelmente identicos a referencia:

| Blob | Cor | Tamanho | Posicao | Opacidade | Blur |
|------|-----|---------|---------|-----------|------|
| Coral | bg-orange-500 | w-72 h-72 | top-20 right-[35%] | 60-70% | blur-xl |
| Azul | bg-blue-600 | w-48 h-48 | top-8 right-[18%] | 55-65% | blur-xl |
| Amarelo | bg-yellow-400 | w-64 h-64 | bottom-20 right-[5%] | 60-70% | blur-xl |
| Verde | bg-emerald-500 | w-32 h-32 | bottom-32 right-[15%] | 50-60% | blur-lg |

### Posicionamento Estrategico
- Coral: atras das pessoas, lado esquerdo do grupo
- Azul: acima e a direita das cabecas
- Amarelo: grande, lado direito acompanhando o movimento
- Verde: pequeno, canto inferior direito

---

## 4. Icone WiFi Proeminente

### Problema Actual
WiFi com opacidade 70% (`text-secondary/70`)

### Ajuste
- Aumentar visibilidade para ~85-90% opacidade
- Manter no topo direito da composicao
- Cor teal (secondary)

---

## 5. Ponto Decorativo Branco (Novo Elemento)

### Adicionar
- Circulo branco pequeno (`w-4 h-4 bg-white`)
- Posicao: topo esquerdo do conteudo de texto
- Igual ao da referencia

---

## 6. Integracao da Imagem

### Manter
- Fades nas bordas (esquerda, base, topo) para fundir com o fundo azul
- A imagem deve parecer que emerge do fundo, sem contornos visiveis

### Ajuste dos Gradientes de Fade
- Esquerda: `from-primary via-primary/60 to-transparent` (mais suave)
- Base: `from-primary via-primary/70 to-transparent`
- Topo: `from-primary/40 to-transparent`

---

## 7. Card de Destaque (Inspirado na Referencia)

### Actual
Card simples com "1200+ Jovens formados"

### Ajuste para Estilo da Referencia
Transformar num card "EM DESTAQUE" similar:
- Fundo branco
- Titulo pequeno "EM DESTAQUE"
- Subtitulo descritivo
- Link "Ler mais >"
- Icone ou indicador colorido

---

## 8. Botoes (Ajuste de Estilo)

### CTA Principal
- Manter `btn-gradient` ou usar fundo claro/off-white
- Na referencia: botao claro com texto escuro

### CTA Secundario
- Outline com borda escura/preta
- Na referencia: "Conheca a Fundacao" com borda escura

### Opcao de Implementacao
- Botao 1: `bg-white text-primary` (claro)
- Botao 2: `border-2 border-primary text-white` (outline escuro no fundo azul)

---

## 9. Botao de Navegacao (Canto Inferior Direito)

### Novo Elemento (Inspirado na Referencia)
- Circulo branco com seta
- Posicao: canto inferior direito, abaixo do card
- Estilo: `w-12 h-12 bg-white rounded-full` com icone ArrowRight

---

## Estrutura Visual Final

```text
+------------------------------------------------------------------+
| [Fundo azul escuro #001A3D]                                      |
|                                                                  |
|  [Ponto branco]                                                  |
|                                                                  |
|  [Blob coral]         [Blob azul]       [WiFi teal]              |
|         \                 |                /                     |
|  +-----------------+     +---------------------------+           |
|  | Titulo (branco) |     |                           |           |
|  | serifado        |     |      FOTOGRAFIA           |           |
|  |                 |     |  (fades nas bordas)       |           |
|  | Subtitulo       |     |                           |           |
|  | (branco/80)     |     |         [Blob amarelo]    |           |
|  |                 |     |              [Blob verde] |           |
|  | [Btn1] [Btn2]   |     |                           |           |
|  +-----------------+     |  [Card EM DESTAQUE]       |           |
|                          +---------------------------+           |
|                                                                  |
|  [Scroll dot]                              [Btn circulo seta]    |
+------------------------------------------------------------------+
```

---

## Ficheiro a Modificar

### `src/components/sections/HeroSection.tsx`

Alteracoes completas:
1. Copiar e importar nova imagem
2. Aumentar opacidade e saturacao dos blobs
3. Reduzir blur dos blobs (de blur-2xl para blur-xl/blur-lg)
4. Ajustar tamanhos e posicoes dos blobs para corresponder a referencia
5. Adicionar ponto decorativo branco no topo esquerdo
6. Aumentar visibilidade do icone WiFi
7. Transformar card de stats em card "EM DESTAQUE"
8. Ajustar estilo dos botoes
9. Adicionar botao circular com seta no canto inferior direito
10. Substituir scroll indicator pelo estilo da referencia (ponto branco simples)

---

## O Que NAO Sera Alterado

- Conteudo dos textos (traducoes mantidas)
- Hierarquia de informacao
- Estrutura de duas colunas
- Animacoes com Framer Motion
- Header e Footer
- Restantes seccoes do site

---

## Cores Exactas dos Blobs (da Referencia)

- **Coral**: `#E8734A` ou `bg-orange-500`
- **Azul**: `#3B5998` ou `bg-blue-600`
- **Amarelo**: `#F5B041` ou `bg-yellow-400`
- **Verde**: `#00A896` ou `bg-emerald-500`

---

## Resultado Esperado

Uma Hero Section visualmente identica a referencia:
- Fundo azul escuro institucional
- Blobs coloridos vibrantes e visiveis (nao demasiado subtis)
- Imagem integrada naturalmente no fundo
- Elementos decorativos (ponto branco, icone WiFi)
- Card de destaque moderno
- Botoes com estilo da referencia

