
# Plano: Ajustes no Hero Section e Header

## Problemas Identificados

Com base no screenshot de referencia e na analise do codigo actual:

| Problema | Ficheiro | Solucao |
|----------|----------|---------|
| Hero preenche toda a tela (90vh) | HeroSection.tsx | Reduzir para ~75-80vh para mostrar titulo da proxima seccao |
| Imagem pequena e cortada em baixo | HeroSection.tsx | Ajustar tamanho e posicionamento da imagem |
| Falta botao "Tornar-se Membro" no header | Header.tsx | Adicionar CTA button destacado |
| Indicador de scroll mal posicionado | HeroSection.tsx | Mover para area visivel |

---

## 1. Reduzir Altura do Hero Section

### Problema Actual
```tsx
<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
```
O hero ocupa 90% da viewport, nao deixando espaco para ver a proxima seccao.

### Solucao
- Reduzir de `min-h-[90vh]` para `min-h-[75vh]` ou `min-h-[80vh]`
- Isto permite que ~20-25% da tela mostre o inicio da proxima seccao
- O utilizador ve imediatamente que ha mais conteudo abaixo
- Cria direccao visual para scroll

### Codigo Proposto
```tsx
<section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-primary">
```

---

## 2. Corrigir Tamanho e Posicao da Imagem

### Problema Actual
A imagem tem restricoes que a tornam pequena:
```tsx
className="w-full h-auto min-h-[500px] lg:min-h-[600px] max-h-[700px] object-contain object-bottom"
```

### Solucao
- Remover `max-h-[700px]` que limita a altura
- Ajustar `min-h` para valores mais proporcionais ao novo hero
- Usar `object-cover` parcial ou ajustar posicionamento
- Permitir que a imagem preencha naturalmente a area

### Codigo Proposto
```tsx
className="w-full h-auto min-h-[400px] lg:min-h-[500px] object-contain object-center drop-shadow-2xl"
```

---

## 3. Adicionar Botao "Tornar-se Membro" no Header

### Localizacao
Na area de accoes do header (lado direito), antes do toggle de idioma.

### Design
- Botao destacado com cor accent (teal gradient)
- Visivel apenas em desktop (hidden em mobile - pode ir no menu mobile)
- Estilo `btn-gradient` ja existente no CSS

### Codigo Proposto
```tsx
{/* CTA Button - Desktop */}
<Button
  className="hidden lg:inline-flex btn-gradient text-sm px-5 py-2 h-auto rounded-full"
>
  {t('nav.become_member')}
</Button>
```

### Traducoes a Adicionar
```typescript
'nav.become_member': 'Tornar-se Membro' // PT
'nav.become_member': 'Become a Member'   // EN
```

---

## 4. Ajustar Indicador de Scroll

### Problema Actual
O scroll indicator esta posicionado em `bottom-8` mas com o hero mais curto, pode ficar cortado ou mal posicionado.

### Solucao
- Manter o scroll indicator visivel
- Ajustar posicionamento para `bottom-4` ou `bottom-6`
- Garantir que fica dentro da area do hero

---

## 5. Adicionar Botao no Menu Mobile

Para consistencia, adicionar o CTA "Tornar-se Membro" tambem no menu mobile, como ultimo item com estilo destacado.

---

## Ficheiros a Modificar

### `src/components/sections/HeroSection.tsx`
1. Reduzir `min-h-[90vh]` para `min-h-[75vh] lg:min-h-[80vh]`
2. Ajustar tamanho da imagem removendo `max-h` restritivo
3. Ajustar posicao do scroll indicator
4. Ajustar padding inferior do container

### `src/components/layout/Header.tsx`
1. Adicionar botao "Tornar-se Membro" no header desktop
2. Adicionar item correspondente no menu mobile
3. Usar classe `btn-gradient` para destaque

### `src/contexts/LanguageContext.tsx`
1. Adicionar traducoes para `nav.become_member`

---

## Estrutura Visual Esperada

```text
+------------------------------------------------------------------+
| [Logo]     [Nav Items...]               [Tornar-se Membro] [PT]  |
+==================================================================+
|                                                                   |
|                     HERO SECTION (75-80vh)                       |
|                                                                   |
|   [Texto]                    [Imagem preenchendo area]           |
|   [CTAs]                                                         |
|                                                                   |
|                           [Scroll]                               |
+------------------------------------------------------------------+
|                                                                   |
|     SOBRE NOS (titulo visivel acima da dobra)                    |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Beneficios

1. **Direccao Visual** - Utilizador ve que ha mais conteudo abaixo
2. **Imagem Natural** - Preenche a area sem cortes ou espacos vazios
3. **CTA Destacado** - "Tornar-se Membro" visivel em todas as paginas
4. **Hierarquia Clara** - Fluxo natural de navegacao
5. **Mobile Friendly** - Botao tambem disponivel no menu mobile

---

## Detalhes Tecnicos

### Classes CSS Actualizadas

**Hero Section:**
```css
/* Antes */
min-h-[90vh]

/* Depois */
min-h-[75vh] lg:min-h-[80vh]
```

**Imagem Hero:**
```css
/* Antes */
min-h-[500px] lg:min-h-[600px] max-h-[700px] object-bottom

/* Depois */
min-h-[400px] lg:min-h-[500px] object-center
```

**Header CTA Button:**
```css
btn-gradient text-sm px-5 py-2 h-auto rounded-full
```
