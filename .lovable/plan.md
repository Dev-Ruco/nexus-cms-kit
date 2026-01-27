
# Plano: Actualizacao do Logotipo, Cores e Seccao Sobre Nos

## Resumo das Alteracoes Solicitadas

| Alteracao | Ficheiro(s) | Descricao |
|-----------|-------------|-----------|
| Novo logotipo no Header | Header.tsx | Substituir logo actual pelo novo (sem fundo), aumentar tamanho |
| Logotipo branco no Footer | Footer.tsx | Adicionar versao branca do logo para harmonia com fundo escuro |
| Remover seccao "Valores" | AboutSection.tsx | Eliminar completamente a seccao "Os Nossos Valores" |
| Adicionar card "Objectivos" | AboutSection.tsx | Criar 3 cards horizontais: Missao, Visao, Objectivos |
| Trocar hierarquia de cores | index.css | Teal passa a secundaria, Verde passa a terciaria (accent) |

---

## 1. Substituicao do Logotipo

### Header
- Copiar novo logotipo `Logotipo_oficial.png` para `src/assets/`
- Substituir import do `logo.png` pelo novo ficheiro
- Aumentar tamanho de `h-10 md:h-12` para `h-14 md:h-16` para maior visibilidade
- O novo logo ja nao tem fundo (transparente)

### Footer
- Necessitamos de uma versao branca do logo para contrastar com o fundo azul escuro
- Aplicar filtro CSS `brightness(0) invert(1)` para converter para branco
- Ou criar versao branca do logo

---

## 2. Reorganizacao da Seccao "Sobre Nos"

### Remover
- Eliminar completamente a seccao "Valores" (linhas 176-210 do AboutSection.tsx)
- Remover array `values` e respectivos icones nao utilizados

### Adicionar Card "Objectivos"
O conteudo sera (conforme plano original aprovado):

**Portugues:**
Promover a literacia digital, fortalecer a participacao civica online, e defender os direitos digitais de todos os mocambicanos.

**Ingles:**
To promote digital literacy, strengthen online civic participation, and defend the digital rights of all Mozambicans.

### Layout Final
```text
+------------------+------------------+------------------+
|     MISSAO       |      VISAO       |    OBJECTIVOS    |
|   [Target icon]  |    [Eye icon]    |  [Compass icon]  |
|   Fundo Azul     |   Fundo Teal     |   Fundo Verde    |
+------------------+------------------+------------------+
```

Grid: `grid md:grid-cols-3 gap-6`

---

## 3. Reordenacao das Cores

### Situacao Actual
```css
--secondary: 180 100% 32%;  /* Teal #00A3A4 */
--accent: 168 100% 41%;     /* Verde #00D1B2 */
```

### Nova Organizacao
Manter os nomes das variaveis mas ajustar uso semantico:
- **Secondary (Teal)**: Cor principal de destaque - continua como esta
- **Accent (Verde)**: Passa a ser usada apenas como terceira opcao

O pedido do utilizador e para dar mais proeminencia ao azul teal sobre o verde. Actualmente:
- Secondary (Teal) ja e usado como cor principal de destaque
- Accent (Verde) e usado em elementos terciarios

Na pratica, a estrutura actual ja segue esta logica. O que podemos fazer e:
1. Ajustar o card de "Visao" para usar secundario (teal)
2. Novo card "Objectivos" pode usar accent (verde) como terceira cor

---

## Ficheiros a Modificar

### 1. `src/assets/Logotipo_oficial.png` (NOVO)
- Copiar ficheiro do user-uploads para src/assets

### 2. `src/components/layout/Header.tsx`

**Alteracoes:**
```tsx
// Linha 8: Alterar import
import logo from '@/assets/Logotipo_oficial.png';

// Linha 55-59: Aumentar tamanho do logo
<img
  src={logo}
  alt="CIBERCIDADAOS"
  className="h-14 md:h-16 w-auto"  // Era h-10 md:h-12
/>
```

### 3. `src/components/layout/Footer.tsx`

**Alteracoes:**
```tsx
// Linha 6: Alterar import
import logo from '@/assets/Logotipo_oficial.png';

// Linha 34-36: Aplicar filtro para versao branca
<img 
  src={logo} 
  alt="CIBERCIDADAOS" 
  className="h-14 w-auto brightness-0 invert"  // Filtro para branco
/>
```

### 4. `src/components/sections/AboutSection.tsx`

**Alteracoes principais:**
1. Remover import dos icones de valores nao usados (Users, Shield, Lightbulb, TrendingUp)
2. Adicionar import do icone Compass para Objectivos
3. Remover array `values`
4. Remover toda a seccao de renderizacao dos valores (linhas 176-210)
5. Alterar grid de Missao/Visao de 2 para 3 colunas
6. Adicionar novo card "Objectivos"

**Estrutura do novo grid:**
```tsx
<motion.div className="grid md:grid-cols-3 gap-6 mb-12">
  {/* Missao - bg-primary */}
  {/* Visao - bg-secondary */}
  {/* Objectivos - bg-accent (novo) */}
</motion.div>
```

### 5. `src/contexts/LanguageContext.tsx`

**Adicionar traducao:**
```tsx
// PT
'about.objectives': 'Objectivos',

// EN
'about.objectives': 'Objectives',
```

---

## Estrutura Visual Final da Seccao Sobre Nos

```text
+------------------------------------------------------------------+
|                    SOBRE NOS (Gradiente azul suave)               |
|   +----------------------+    +-----------------------------+     |
|   |  Texto condensado    |    |  [IMAGEM ILUSTRATIVA]       |     |
|   |  Quem Somos          |    |                             |     |
|   +----------------------+    +-----------------------------+     |
|                                                                   |
|   +----------------+  +----------------+  +----------------+      |
|   |    MISSAO      |  |     VISAO      |  |  OBJECTIVOS   |      |
|   |  [Target]      |  |    [Eye]       |  |  [Compass]    |      |
|   |  Fundo Azul    |  |  Fundo Teal    |  | Fundo Verde   |      |
|   +----------------+  +----------------+  +----------------+      |
|                                                                   |
|   [Area 1] [Area 2] [Area 3] [Area 4] [Area 5]                   |
+------------------------------------------------------------------+
```

---

## Beneficios das Alteracoes

1. **Identidade Visual Forte** - Logo maior e mais visivel no header
2. **Harmonia no Footer** - Logo branco integra-se com fundo escuro
3. **Menos Texto** - Remocao dos valores simplifica a leitura
4. **Estrutura Tripla** - Missao, Visao, Objectivos em 3 cards equilibrados
5. **Hierarquia de Cores** - Azul > Teal > Verde claramente definida

---

## Conteudo do Card Objectivos (Bilingue)

### Portugues
Promover a literacia digital, fortalecer a participacao civica online, e defender os direitos digitais de todos os mocambicanos.

### Ingles
To promote digital literacy, strengthen online civic participation, and defend the digital rights of all Mozambicans.
