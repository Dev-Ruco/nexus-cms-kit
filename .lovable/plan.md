
# Plano: Substituir Fotografia do Hero Section

## Problema Identificado

A imagem actual usa classes CSS que limitam o seu tamanho:
```tsx
className="w-full h-auto min-h-[350px] lg:min-h-[450px] object-contain object-center drop-shadow-2xl"
```

Estas restricoes fazem com que a imagem nao preencha adequadamente toda a area do painel direito do hero section.

---

## Solucao

### 1. Copiar Nova Imagem

Copiar o ficheiro `Adobe_Express_-_file.png` de user-uploads para `src/assets/hero-new.png`

### 2. Actualizar Import

```tsx
// Antes
import heroImage from '@/assets/hero-transparent.png';

// Depois  
import heroImage from '@/assets/hero-new.png';
```

### 3. Ajustar Classes CSS da Imagem

Para garantir que a imagem preencha toda a area disponivel sem cortes:

```tsx
// Antes
className="w-full h-auto min-h-[350px] lg:min-h-[450px] object-contain object-center drop-shadow-2xl"

// Depois
className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover object-top drop-shadow-2xl"
```

### Explicacao das Alteracoes CSS:

| Propriedade | Antes | Depois | Razao |
|-------------|-------|--------|-------|
| `h-auto` | Altura automatica | `h-full` | Preenche altura do container |
| `min-h-[350px]` | Altura minima pequena | `min-h-[400px]` | Altura minima maior |
| `lg:min-h-[450px]` | Desktop pequeno | `lg:min-h-[500px]` | Desktop maior |
| `object-contain` | Mantem proporcao | `object-cover` | Preenche area toda |
| `object-center` | Centrado | `object-top` | Foca nos rostos/topo |

---

## Estrutura Visual

```text
+------------------------------------------------------------------+
|                      HERO SECTION                                 |
|                                                                   |
|   [TEXTO]                    [IMAGEM NOVA]                       |
|   Titulo                     +--------------------------+        |
|   Subtitulo                  |                          |        |
|   [Botoes]                   |  Jovens mocambicanos     |        |
|                              |  com smartphone          |        |
|                              |  (preenche toda area)    |        |
|                              |                          |        |
|                              +--------------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Ficheiro a Modificar

### `src/components/sections/HeroSection.tsx`

**Linha 5** - Alterar import:
```tsx
import heroImage from '@/assets/hero-new.png';
```

**Linha 132-136** - Ajustar container e imagem:
```tsx
<div className="relative h-full">
  <img
    src={heroImage}
    alt="Jovens moçambicanos com smartphone"
    className="w-full h-full min-h-[400px] lg:min-h-[500px] object-cover object-top drop-shadow-2xl"
  />
</div>
```

---

## Beneficios

1. **Imagem Maior** - Preenche toda a area do painel direito
2. **Sem Cortes** - `object-cover` + `object-top` mantem rostos visiveis
3. **Responsivo** - Adapta-se a diferentes tamanhos de ecra
4. **Harmonia Visual** - Nova fotografia integra-se com design existente

---

## Ficheiros Alterados

| Ficheiro | Accao |
|----------|-------|
| `src/assets/hero-new.png` | CRIAR (copiar de user-uploads) |
| `src/components/sections/HeroSection.tsx` | MODIFICAR (import + classes CSS) |
