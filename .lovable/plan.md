

# Plano: Corrigir Espaços Vazios na Hero Section

## Problema Identificado

A imagem da Hero Section está a deixar espaços vazios na parte inferior e lateral direita porque:

1. **Container limitado**: O conteúdo está restrito a `max-w-7xl` (1280px), não preenchendo toda a largura
2. **Imagem não estendida**: A imagem está contida dentro do grid e não se expande para as bordas
3. **Padding inferior**: O container tem padding excessivo em baixo
4. **Estrutura de grid**: A imagem está posicionada dentro do container em vez de se estender até às bordas

---

## Solucao Proposta

Reestruturar a Hero Section para que a imagem preencha toda a area direita da secção, estendendo-se ate as bordas.

### Alteracoes no Layout

**Antes:**
```text
+------------------------------------------------------------------+
|                          container-custom                         |
|  +---------------------------+  +---------------------------+     |
|  |  Texto                    |  |  Imagem (limitada)        |     |
|  +---------------------------+  +---------------------------+     |
|                                                                   |
|                    [ESPACO VAZIO AQUI]                           |
+------------------------------------------------------------------+
```

**Depois:**
```text
+------------------------------------------------------------------+
|  container-custom (texto) |       Imagem (estendida ate borda)   |
|  +-----------------------+ |                                      |
|  |  Texto                | |        IMAGEM PREENCHE               |
|  +-----------------------+ |        TODA A AREA                   |
|                            |                                      |
+------------------------------------------------------------------+
```

---

## Alteracoes Tecnicas

### 1. Reestruturar o Grid

Mover a imagem para fora do container limitado, criando um layout de duas colunas onde:
- Coluna esquerda: container com texto (mantém padding)
- Coluna direita: imagem que se estende até à borda direita

```typescript
<section className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-primary">
  {/* Grid de 2 colunas a nivel de secção */}
  <div className="grid lg:grid-cols-2 min-h-[inherit]">
    
    {/* Coluna Esquerda - Texto com container */}
    <div className="flex items-center">
      <div className="container-custom py-20 md:py-24 lg:py-0 lg:pr-8">
        {/* Conteudo de texto */}
      </div>
    </div>
    
    {/* Coluna Direita - Imagem ate a borda */}
    <div className="relative h-full min-h-[400px] lg:min-h-full">
      <img 
        src={heroImage}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Cards e elementos sobrepostos */}
    </div>
    
  </div>
</section>
```

### 2. Ajustar Posicionamento da Imagem

- Usar `absolute inset-0` para a imagem preencher todo o container pai
- Usar `object-cover object-top` para manter foco nos rostos
- Remover `min-h-[500px]` e deixar a imagem preencher naturalmente

### 3. Reposicionar Elementos Decorativos

- Mover os circulos decorativos para a camada de fundo da seccao inteira
- Ajustar posicoes para ficarem visiveis com a nova estrutura

### 4. Ajustar Card "EM DESTAQUE"

- Manter posicao absoluta mas ajustar coordenadas
- Garantir que fica visivel sobre a imagem

---

## Ficheiro a Modificar

| Ficheiro | Alteracao |
|----------|-----------|
| `src/components/sections/HeroSection.tsx` | Reestruturar layout do grid |

---

## Codigo Actualizado

```typescript
export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden bg-primary">
      {/* Circulos Decorativos - Camada de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ... mantém círculos existentes ... */}
      </div>

      {/* Grid Principal - Full width */}
      <div className="grid lg:grid-cols-2 min-h-[inherit] relative z-10">
        
        {/* Coluna Esquerda - Texto */}
        <div className="flex items-center pt-24 lg:pt-0">
          <div className="px-4 sm:px-6 lg:px-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] py-16 lg:py-0 max-w-2xl">
            {/* ... conteúdo de texto mantido ... */}
          </div>
        </div>
        
        {/* Coluna Direita - Imagem Full Height */}
        <div className="relative min-h-[350px] lg:min-h-full order-first lg:order-last">
          <img
            src={heroImage}
            alt="Jovens moçambicanos com smartphone"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />
          
          {/* WiFi Icon */}
          <motion.div className="absolute top-8 right-8 z-20">
            <Wifi className="w-16 h-16 text-secondary/90" />
          </motion.div>
          
          {/* Card EM DESTAQUE */}
          <motion.div className="absolute bottom-8 right-8 md:right-16 z-20">
            {/* ... card mantido ... */}
          </motion.div>
        </div>
        
      </div>

      {/* Scroll Indicator - mantido */}
    </section>
  );
}
```

---

## Ajustes de CSS

### Object Position

Usar `object-[center_20%]` em vez de `object-top` para:
- Focar nos rostos sem cortar cabeças
- Preencher melhor a área vertical

### Responsividade

- Mobile: Imagem aparece primeiro (order-first), depois texto
- Desktop: Texto à esquerda, imagem à direita (order-last)

---

## Resultado Visual Esperado

```text
+------------------------------------------------------------------+
|  TEXTO                    |            IMAGEM                    |
|  +-----------------------+ |  +--------------------------------+ |
|  | [dot] Cidadania...    | |  |                                | |
|  |                       | |  |     IMAGEM PREENCHE            | |
|  | Promovendo a          | |  |     TODA A ÁREA               | |
|  | Literacia Digital     | |  |     SEM ESPAÇOS VAZIOS        | |
|  |                       | |  |                                | |
|  | [Saiba Mais]          | |  |     [WiFi]                    | |
|  |                       | |  |              [EM DESTAQUE]    | |
|  +-----------------------+ |  +--------------------------------+ |
+------------------------------------------------------------------+
```

---

## Beneficios

1. **Sem espacos vazios** - Imagem preenche toda a área direita
2. **Visual mais impactante** - Layout edge-to-edge moderno
3. **Melhor responsividade** - Adapta-se bem a diferentes tamanhos
4. **Mantém elementos** - Círculos, cards e ícones continuam visíveis

