

# Plano: Adicionar Circulos Decorativos com Cores da Marca

## Analise da Referencia

A imagem de referencia mostra circulos coloridos sobrepostos por detras da fotografia, criando profundidade e destaque visual. Vou adaptar este conceito usando EXCLUSIVAMENTE as cores da paleta do logotipo CIBERCIDADAOS.

---

## Paleta de Cores a Usar

| Cor | Codigo | Uso nos Circulos |
|-----|--------|------------------|
| Azul Escuro (Primary) | `#001A3D` | Circulo grande de fundo |
| Teal (Secondary) | `#00A3A4` | Circulos de destaque principal |
| Verde (Accent) | `#00D1B2` | Circulos de accent menor |
| Branco | `#FFFFFF` | Pequenos detalhes/dots |

**Nota:** Os circulos actuais usam cores FORA da paleta (orange-500, blue-600, yellow-400, emerald-500). Estes serao substituidos pelas cores institucionais.

---

## Desenho dos Circulos

Inspirado na referencia, vou criar uma composicao de circulos sobrepostos:

```text
                     +---------------+
    [Teal Grande]    |               |
         O           |   IMAGEM      |
    [Verde Medio]    |   PRINCIPAL   |
       o             |               |
  [Azul Claro]       |               |
      O              +---------------+
         [Teal Pequeno]
              o
```

### Configuracao dos Circulos

| Circulo | Tamanho | Cor | Posicao | Efeito |
|---------|---------|-----|---------|--------|
| Grande 1 | 400px | Teal (#00A3A4) 60% | Top center-left | blur-lg |
| Grande 2 | 320px | Verde (#00D1B2) 50% | Bottom right | blur-lg |
| Medio 1 | 240px | Teal (#00A3A4) 70% | Top right | blur-md |
| Medio 2 | 200px | Verde (#00D1B2) 55% | Center left | blur-md |
| Pequeno 1 | 120px | Branco 30% | Top left | blur-sm |
| Pequeno 2 | 80px | Teal 80% | Bottom center | sem blur (solido) |

---

## Alteracoes Tecnicas

### Antes (cores incorrectas):
```tsx
// Coral
<div className="bg-orange-500/75" />
// Azul generico
<div className="bg-blue-600/70" />
// Amarelo
<div className="bg-yellow-400/75" />
// Verde generico
<div className="bg-emerald-500/65" />
```

### Depois (cores da marca):
```tsx
// Teal Grande
<div className="bg-[#00A3A4]/60" />
// Verde Accent
<div className="bg-[#00D1B2]/50" />
// Teal Medio
<div className="bg-secondary/70" />
// Verde Accent Medio
<div className="bg-accent/55" />
```

---

## Codigo Actualizado

```tsx
{/* Decorative Circles - Background layer with BRAND COLORS */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  
  {/* Teal Grande - Top center-left, principal destaque */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="absolute top-8 right-[35%] w-96 h-96 bg-secondary/60 rounded-full blur-xl z-0"
  />
  
  {/* Verde Grande - Bottom right */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="absolute bottom-0 right-[-5%] w-80 h-80 bg-accent/50 rounded-full blur-xl z-0"
  />
  
  {/* Teal Medio - Top right */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="absolute top-4 right-[15%] w-60 h-60 bg-secondary/70 rounded-full blur-lg z-0"
  />
  
  {/* Verde Medio - Center left, atras da imagem */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute top-1/3 right-[45%] w-52 h-52 bg-accent/55 rounded-full blur-lg z-0"
  />
  
  {/* Branco Pequeno - Top left accent */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="absolute top-20 right-[55%] w-32 h-32 bg-white/25 rounded-full blur-md z-0"
  />
  
  {/* Teal Solido Pequeno - Bottom accent, sem blur */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="absolute bottom-32 right-[25%] w-20 h-20 bg-secondary/80 rounded-full z-0"
  />
  
</div>
```

---

## Comparacao Visual

**Antes:**
```text
+------------------------------------------------------------------+
|  [Laranja]   [Azul]        IMAGEM                                |
|      O         O                                                  |
|                                                                   |
|           [Amarelo]  [Verde]                                     |
+------------------------------------------------------------------+
   Cores fora da paleta da marca
```

**Depois:**
```text
+------------------------------------------------------------------+
|  [Branco]  [Teal]          IMAGEM                                |
|    o         O                                                    |
|       [Verde]                                                     |
|          o      [Teal solido]                                    |
|                     o                                             |
|              [Verde Grande]                                       |
+------------------------------------------------------------------+
   Cores 100% institucionais (Teal + Verde + Branco)
```

---

## Ficheiro a Modificar

| Ficheiro | Alteracao |
|----------|-----------|
| `src/components/sections/HeroSection.tsx` | Substituir cores dos circulos decorativos |

---

## Beneficios

1. **Coerencia Visual** - Circulos usam apenas cores da marca
2. **Identidade Forte** - Reforça as cores institucionais (Teal e Verde)
3. **Destaque Elegante** - Efeito de profundidade atras da fotografia
4. **Animacao Suave** - Circulos aparecem com fade e scale animados

