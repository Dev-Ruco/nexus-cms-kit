
# Plano: Arquitectura Completa do CMS Dashboard CIBERCIDADAOS

## Resumo Executivo

Este plano define a arquitectura completa de um sistema CMS (Content Management System) que permite controlo total do frontend do website, incluindo gestao de conteudo, membros, pagamentos de quotas e geracao de relatorios.

---

## 1. Arquitectura Geral do Sistema

```text
+------------------------------------------------------------------+
|                      FRONTEND PUBLICO                            |
|  (Website Actual - React + Tailwind)                            |
|  - Consome dados da API/Supabase                                |
|  - Renderiza conteudo dinamico                                   |
+------------------------------------------------------------------+
                              |
                              | API / Supabase Client
                              v
+------------------------------------------------------------------+
|                      SUPABASE BACKEND                            |
|  +--------------------+  +----------------------+                |
|  |   Base de Dados    |  |   Autenticacao       |                |
|  |   PostgreSQL       |  |   (Supabase Auth)    |                |
|  +--------------------+  +----------------------+                |
|  +--------------------+  +----------------------+                |
|  |   Storage          |  |   Edge Functions     |                |
|  |   (Imagens/PDFs)   |  |   (Relatorios PDF)   |                |
|  +--------------------+  +----------------------+                |
+------------------------------------------------------------------+
                              ^
                              |
+------------------------------------------------------------------+
|                      DASHBOARD CMS                               |
|  (Nova Aplicacao React Separada ou Rotas Protegidas)            |
|  - Gestao de Conteudo                                           |
|  - Gestao de Membros                                            |
|  - Controlo de Quotas                                           |
|  - Relatorios                                                   |
+------------------------------------------------------------------+
```

---

## 2. Estrutura da Base de Dados (Supabase)

### 2.1 Tabelas Principais

| Tabela | Descricao |
|--------|-----------|
| `user_roles` | Roles de utilizadores (admin, editor, member) |
| `profiles` | Perfis de utilizadores com dados adicionais |
| `members` | Membros registados da organizacao |
| `member_payments` | Pagamentos de quotas dos membros |
| `activities` | Actividades/Noticias do site |
| `events` | Eventos agendados |
| `publications` | Publicacoes (PDFs, relatorios) |
| `team_members` | Membros da equipa tecnica |
| `partners` | Parceiros da organizacao |
| `gallery_images` | Imagens da galeria |
| `videos` | Videos do YouTube |
| `provinces` | Dados estatisticos por provincia |
| `data_indicators` | Indicadores nacionais |
| `site_content` | Conteudo editavel das seccoes do site |
| `page_headers` | Headers das paginas internas |
| `contact_messages` | Mensagens recebidas do formulario |

### 2.2 Esquema Detalhado das Tabelas Principais

**Tabela: members**
```sql
create table public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  full_name text not null,
  email text unique not null,
  phone text,
  province text,
  age integer,
  motivation text,
  how_found text,
  status text default 'pending' check (status in ('pending', 'approved', 'rejected', 'suspended')),
  membership_number text unique,
  approved_at timestamptz,
  approved_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

**Tabela: member_payments**
```sql
create table public.member_payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade not null,
  amount decimal(10,2) not null,
  currency text default 'MZN',
  payment_method text check (payment_method in ('mpesa', 'emola', 'bank_transfer', 'cash')),
  reference_number text,
  period_start date not null,
  period_end date not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'failed', 'refunded')),
  confirmed_at timestamptz,
  confirmed_by uuid references auth.users(id),
  notes text,
  created_at timestamptz default now()
);
```

**Tabela: site_content**
```sql
create table public.site_content (
  id uuid primary key default gen_random_uuid(),
  section_key text unique not null,
  content_pt jsonb not null default '{}',
  content_en jsonb not null default '{}',
  is_visible boolean default true,
  display_order integer default 0,
  updated_at timestamptz default now(),
  updated_by uuid references auth.users(id)
);
```

**Tabela: activities**
```sql
create table public.activities (
  id uuid primary key default gen_random_uuid(),
  title_pt text not null,
  title_en text not null,
  summary_pt text not null,
  summary_en text not null,
  content_pt text not null,
  content_en text not null,
  image_url text,
  category text not null,
  date date not null,
  featured boolean default false,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users(id)
);
```

---

## 3. Sistema de Autenticacao e Roles

### 3.1 Roles do Sistema

| Role | Permissoes |
|------|-----------|
| `admin` | Acesso total ao CMS, gestao de utilizadores, relatorios |
| `editor` | Editar conteudo, actividades, eventos, publicacoes |
| `moderator` | Aprovar membros, gerir pagamentos |
| `member` | Acesso ao portal de membro, pagar quotas |

### 3.2 Implementacao de Roles

```sql
-- Criar enum de roles
create type public.app_role as enum ('admin', 'editor', 'moderator', 'member');

-- Tabela de roles
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

-- Funcao para verificar role
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;
```

---

## 4. Modulos do Dashboard CMS

### 4.1 Dashboard Principal

```text
+------------------------------------------------------------------+
|  DASHBOARD CMS - CIBERCIDADAOS                                   |
+------------------------------------------------------------------+
|  [Logo]   |  Pesquisa Global...  |  [Notificacoes]  [Admin ▼]   |
+------------------------------------------------------------------+
|           |                                                       |
|  MENU     |  RESUMO DO DIA                                       |
|  ------   |  +----------+ +----------+ +----------+ +----------+ |
|  Dashboard|  | Membros  | | Quotas   | | Eventos  | | Visitas  | |
|  Conteudo |  |   245    | | 12 pend. | |  3 prox. | |  1,234   | |
|  ------   |  +----------+ +----------+ +----------+ +----------+ |
|  Activid. |                                                       |
|  Eventos  |  ACTIVIDADE RECENTE                                  |
|  Publicac.|  - Novo membro registado                             |
|  Galeria  |  - Pagamento confirmado                              |
|  Videos   |  - Artigo publicado                                   |
|  ------   |                                                       |
|  Equipa   |  PROXIMOS EVENTOS                                    |
|  Parceiros|  [Lista de eventos agendados]                        |
|  ------   |                                                       |
|  Membros  |  MEMBROS PENDENTES                                   |
|  Pagament.|  [Lista para aprovacao]                              |
|  ------   |                                                       |
|  Dados    |                                                       |
|  Config.  |                                                       |
|  ------   |                                                       |
|  Relator. |                                                       |
|           |                                                       |
+------------------------------------------------------------------+
```

### 4.2 Modulo: Gestao de Conteudo do Site

**Funcionalidades:**
- Editar textos de cada seccao (Hero, About, Footer)
- Alterar imagens de fundo e headers
- Mostrar/Ocultar seccoes
- Reordenar seccoes
- Preview em tempo real

### 4.3 Modulo: Actividades/Noticias

**Funcionalidades:**
- Listar todas as actividades
- Criar nova actividade com editor rich-text
- Editar actividade existente
- Publicar/Despublicar
- Marcar como destaque
- Upload de imagem
- Preview

### 4.4 Modulo: Eventos

**Funcionalidades:**
- Calendario visual de eventos
- Criar evento (presencial/online/hibrido)
- Definir data, hora, local
- Adicionar link de registo
- Upload de imagem
- Gerir inscricoes

### 4.5 Modulo: Publicacoes

**Funcionalidades:**
- Upload de PDF
- Geracao automatica de thumbnail
- Adicionar metadados (titulo, descricao, tipo)
- Categorizar (Relatorio, Estudo, Guia, Artigo)
- Download tracking

### 4.6 Modulo: Galeria de Fotos

**Funcionalidades:**
- Upload multiplo de imagens
- Adicionar legendas bilingues
- Organizar por evento/data
- Marcar favoritos
- Redimensionamento automatico

### 4.7 Modulo: Videos

**Funcionalidades:**
- Adicionar videos por URL do YouTube
- Extraccao automatica de thumbnail
- Ordenar videos
- Categorizar

### 4.8 Modulo: Equipa Tecnica

**Funcionalidades:**
- Adicionar/Editar membros da equipa
- Upload de foto
- Definir cargo (PT/EN)
- Adicionar redes sociais
- Ordenar membros
- Activar/Desactivar

### 4.9 Modulo: Parceiros

**Funcionalidades:**
- Adicionar parceiro com logo
- Definir categoria
- Marcar como destaque
- Activar/Desactivar (ocultar temporariamente)
- Ordenar

### 4.10 Modulo: Gestao de Membros

```text
+------------------------------------------------------------------+
|  GESTAO DE MEMBROS                                               |
+------------------------------------------------------------------+
|  [Novo Membro] [Exportar CSV] [Gerar Relatorio PDF]             |
+------------------------------------------------------------------+
|  Filtros: [Status ▼] [Provincia ▼] [Data ▼]  Pesquisa: [____]   |
+------------------------------------------------------------------+
|  # | Nome           | Email          | Provincia | Status    |  |
|----|----------------|----------------|-----------|-----------|--|
|  1 | Joao Silva     | joao@...       | Maputo    | Aprovado  |  |
|  2 | Maria Santos   | maria@...      | Gaza      | Pendente  | [Aprovar]
|  3 | Carlos Nhaca   | carlos@...     | Nampula   | Aprovado  |  |
+------------------------------------------------------------------+
|  [Anterior] Pagina 1 de 25 [Proximo]                            |
+------------------------------------------------------------------+
```

**Funcionalidades:**
- Lista de todos os candidatos/membros
- Filtrar por status, provincia, data
- Aprovar/Rejeitar candidaturas
- Suspender membro
- Ver historico de pagamentos
- Enviar email
- Gerar numero de membro automatico
- Exportar para CSV/PDF

### 4.11 Modulo: Pagamentos de Quotas

```text
+------------------------------------------------------------------+
|  PAGAMENTOS DE QUOTAS                                            |
+------------------------------------------------------------------+
|  [Registar Pagamento] [Relatorio Mensal] [Relatorio Anual]      |
+------------------------------------------------------------------+
|  RESUMO FINANCEIRO                                               |
|  +------------------+ +------------------+ +------------------+  |
|  | Total Recebido   | | Quotas em Dia    | | Quotas Atrasadas |  |
|  | 245,000 MZN     | |      187         | |       58         |  |
|  +------------------+ +------------------+ +------------------+  |
+------------------------------------------------------------------+
|  PAGAMENTOS PENDENTES DE CONFIRMACAO                            |
|  [Lista de pagamentos para confirmar]                           |
+------------------------------------------------------------------+
|  HISTORICO DE PAGAMENTOS                                        |
|  [Tabela com filtros e pesquisa]                                |
+------------------------------------------------------------------+
```

**Funcionalidades:**
- Registar pagamento manual
- Confirmar/Rejeitar pagamentos pendentes
- Historico completo de pagamentos
- Filtrar por membro, periodo, metodo
- Relatorio mensal automatico
- Relatorio anual
- Exportar para PDF/Excel

### 4.12 Modulo: Dados e Estatisticas

**Funcionalidades:**
- Editar indicadores nacionais
- Actualizar dados por provincia
- Graficos de evolucao
- Importar dados de CSV

### 4.13 Modulo: Relatorios

**Tipos de Relatorios (PDF):**
- Lista de membros activos
- Membros por provincia
- Receitas de quotas por periodo
- Actividades realizadas
- Relatorio anual completo

---

## 5. Portal do Membro (Frontend)

### 5.1 Acesso

Apos aprovacao, o membro recebe credenciais e pode aceder ao portal em `/membro/portal`

### 5.2 Funcionalidades do Portal

```text
+------------------------------------------------------------------+
|  PORTAL DO MEMBRO                                                |
+------------------------------------------------------------------+
|  Bem-vindo, Joao Silva!              [Perfil] [Sair]            |
+------------------------------------------------------------------+
|                                                                   |
|  ESTADO DA MINHA CONTA                                          |
|  +----------------------------------------------------------+   |
|  | Numero de Membro: CID-2024-00123                          |   |
|  | Status: Activo                                             |   |
|  | Membro desde: 15/03/2024                                   |   |
|  | Proxima quota: 15/02/2026                                  |   |
|  +----------------------------------------------------------+   |
|                                                                   |
|  PAGAMENTO DE QUOTA                                             |
|  +----------------------------------------------------------+   |
|  | Valor: 500 MZN (Mensal) / 5000 MZN (Anual)               |   |
|  |                                                            |   |
|  | Metodo de Pagamento:                                       |   |
|  | [M-Pesa] [e-Mola] [Transferencia Bancaria]                |   |
|  |                                                            |   |
|  | [Pagar Agora]                                              |   |
|  +----------------------------------------------------------+   |
|                                                                   |
|  HISTORICO DE PAGAMENTOS                                        |
|  +----------------------------------------------------------+   |
|  | Data       | Periodo         | Valor    | Estado         |   |
|  |------------|-----------------|----------|----------------|   |
|  | 15/01/2026 | Jan 2026        | 500 MZN  | Confirmado     |   |
|  | 15/12/2025 | Dez 2025        | 500 MZN  | Confirmado     |   |
|  +----------------------------------------------------------+   |
|                                                                   |
+------------------------------------------------------------------+
```

---

## 6. Estrutura de Ficheiros (Novos)

```text
src/
├── pages/
│   ├── admin/                          # Dashboard CMS
│   │   ├── Dashboard.tsx               # Pagina inicial do CMS
│   │   ├── Layout.tsx                  # Layout com sidebar
│   │   ├── Login.tsx                   # Login de admin
│   │   ├── content/
│   │   │   ├── SiteContent.tsx         # Editor de conteudo
│   │   │   ├── Activities.tsx          # Gestao de actividades
│   │   │   ├── ActivityEditor.tsx      # Editor de actividade
│   │   │   ├── Events.tsx              # Gestao de eventos
│   │   │   ├── EventEditor.tsx         # Editor de evento
│   │   │   ├── Publications.tsx        # Gestao de publicacoes
│   │   │   ├── Gallery.tsx             # Gestao de galeria
│   │   │   └── Videos.tsx              # Gestao de videos
│   │   ├── team/
│   │   │   ├── TeamMembers.tsx         # Lista de equipa
│   │   │   └── TeamMemberEditor.tsx    # Editor de membro
│   │   ├── partners/
│   │   │   ├── Partners.tsx            # Lista de parceiros
│   │   │   └── PartnerEditor.tsx       # Editor de parceiro
│   │   ├── members/
│   │   │   ├── Members.tsx             # Lista de membros
│   │   │   ├── MemberDetail.tsx        # Detalhe do membro
│   │   │   └── MemberApproval.tsx      # Aprovacao de membros
│   │   ├── payments/
│   │   │   ├── Payments.tsx            # Lista de pagamentos
│   │   │   ├── PaymentConfirm.tsx      # Confirmacao
│   │   │   └── Reports.tsx             # Relatorios
│   │   ├── data/
│   │   │   ├── Indicators.tsx          # Indicadores
│   │   │   └── Provinces.tsx           # Dados provinciais
│   │   └── settings/
│   │       ├── Settings.tsx            # Configuracoes gerais
│   │       └── Users.tsx               # Gestao de utilizadores
│   │
│   ├── member/                         # Portal do Membro
│   │   ├── Portal.tsx                  # Dashboard do membro
│   │   ├── Profile.tsx                 # Perfil do membro
│   │   ├── Payment.tsx                 # Pagar quota
│   │   └── History.tsx                 # Historico
│   │
│   └── auth/
│       ├── Login.tsx                   # Login geral
│       ├── Register.tsx                # Registo (redireciona para membro)
│       └── ForgotPassword.tsx          # Recuperar senha
│
├── components/
│   ├── admin/                          # Componentes do CMS
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── DataTable.tsx
│   │   ├── RichTextEditor.tsx
│   │   ├── ImageUploader.tsx
│   │   ├── PDFUploader.tsx
│   │   └── StatCard.tsx
│   │
│   └── member/                         # Componentes do Portal
│       ├── MemberCard.tsx
│       ├── PaymentForm.tsx
│       └── PaymentHistory.tsx
│
├── hooks/
│   ├── useAuth.tsx                     # Autenticacao
│   ├── useRole.tsx                     # Verificacao de roles
│   ├── useMembers.tsx                  # Gestao de membros
│   ├── usePayments.tsx                 # Gestao de pagamentos
│   └── useContent.tsx                  # Gestao de conteudo
│
├── services/
│   ├── api.ts                          # Cliente API
│   ├── auth.ts                         # Servicos de auth
│   ├── members.ts                      # Servicos de membros
│   ├── payments.ts                     # Servicos de pagamentos
│   ├── content.ts                      # Servicos de conteudo
│   └── reports.ts                      # Geracao de relatorios
│
└── integrations/
    └── supabase/
        ├── client.ts                   # Cliente Supabase
        └── types.ts                    # Tipos gerados
```

---

## 7. Edge Functions Necessarias

| Funcao | Descricao |
|--------|-----------|
| `generate-member-number` | Gerar numero de membro sequencial |
| `generate-pdf-report` | Gerar relatorios em PDF |
| `send-email-notification` | Enviar emails (aprovacao, pagamento) |
| `process-payment-webhook` | Processar webhooks de pagamento |
| `generate-pdf-thumbnail` | Gerar preview de PDFs |

---

## 8. Storage Buckets (Supabase)

| Bucket | Conteudo | Publico |
|--------|----------|---------|
| `activities` | Imagens de actividades | Sim |
| `events` | Imagens de eventos | Sim |
| `publications` | PDFs e thumbnails | Sim |
| `gallery` | Fotos da galeria | Sim |
| `team` | Fotos da equipa | Sim |
| `partners` | Logos de parceiros | Sim |
| `members` | Documentos de membros | Nao |
| `reports` | Relatorios gerados | Nao |

---

## 9. Rotas do Sistema

### 9.1 Rotas Publicas (Frontend Existente)
```text
/                           - Homepage
/sobre/cibercidadaos        - Sobre a organizacao
/sobre/governanca           - Estrutura de governanca
/actividades                - Lista de actividades
/actividades/:id            - Detalhe de actividade
/imprensa                   - Centro de imprensa
/dados                      - Dashboard de dados
/publicacoes                - Lista de publicacoes
/contacto                   - Formulario de contacto
/membro                     - Formulario de adesao
```

### 9.2 Rotas Protegidas (Portal do Membro)
```text
/auth/login                 - Login
/member/portal              - Dashboard do membro
/member/profile             - Perfil
/member/payment             - Pagar quota
/member/history             - Historico de pagamentos
```

### 9.3 Rotas do CMS (Admin)
```text
/admin                      - Dashboard
/admin/content              - Editor de conteudo
/admin/activities           - Gestao de actividades
/admin/events               - Gestao de eventos
/admin/publications         - Gestao de publicacoes
/admin/gallery              - Gestao de galeria
/admin/videos               - Gestao de videos
/admin/team                 - Gestao de equipa
/admin/partners             - Gestao de parceiros
/admin/members              - Gestao de membros
/admin/payments             - Gestao de pagamentos
/admin/data                 - Gestao de dados
/admin/reports              - Relatorios
/admin/settings             - Configuracoes
```

---

## 10. Fases de Implementacao

### Fase 1: Infraestrutura Base
1. Configurar Supabase Cloud
2. Criar esquema da base de dados
3. Configurar autenticacao e roles
4. Criar storage buckets
5. Configurar RLS policies

### Fase 2: Portal do Membro
6. Criar sistema de login
7. Converter formulario de adesao para criar conta
8. Implementar portal do membro
9. Implementar sistema de pagamento de quotas

### Fase 3: Dashboard CMS - Base
10. Criar layout do admin
11. Implementar dashboard inicial
12. Criar gestao de membros
13. Criar gestao de pagamentos
14. Implementar relatorios basicos

### Fase 4: Dashboard CMS - Conteudo
15. Criar editor de conteudo do site
16. Criar gestao de actividades
17. Criar gestao de eventos
18. Criar gestao de publicacoes
19. Criar gestao de galeria e videos

### Fase 5: Dashboard CMS - Configuracao
20. Criar gestao de equipa
21. Criar gestao de parceiros
22. Criar gestao de dados/indicadores
23. Criar gestao de utilizadores admin

### Fase 6: Integracao Frontend
24. Migrar dados mock para Supabase
25. Actualizar componentes para consumir API
26. Implementar cache e optimizacoes
27. Testes e ajustes finais

---

## 11. Tecnologias Adicionais Necessarias

| Tecnologia | Uso |
|------------|-----|
| Supabase | Backend, Auth, Storage |
| TipTap/Lexical | Editor rich-text para artigos |
| React-PDF | Preview de PDFs |
| jsPDF | Geracao de relatorios PDF |
| date-fns | Manipulacao de datas |
| Recharts | Graficos (ja instalado) |
| React Hook Form | Formularios (ja instalado) |
| Zod | Validacao (ja instalado) |

---

## 12. Seguranca

### 12.1 Row Level Security (RLS)

Todas as tabelas terao politicas RLS:

```sql
-- Exemplo: Activities
create policy "Publico pode ver actividades publicadas"
on public.activities for select
using (is_published = true);

create policy "Editores podem gerir actividades"
on public.activities for all
to authenticated
using (public.has_role(auth.uid(), 'editor') or public.has_role(auth.uid(), 'admin'));
```

### 12.2 Proteccao de Rotas

```typescript
// ProtectedRoute.tsx
function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  const { hasRole } = useRole();
  
  if (!user) return <Navigate to="/auth/login" />;
  if (requiredRole && !hasRole(requiredRole)) return <Navigate to="/" />;
  
  return children;
}
```

---

## 13. Resultado Final

Apos implementacao completa:

1. **Website Publico** - Consome dados dinamicos do Supabase
2. **Portal do Membro** - Membros gerem conta e pagam quotas
3. **Dashboard CMS** - Controlo total do frontend por admins/editores
4. **Relatorios** - Geracao automatica de PDFs
5. **Seguranca** - Roles e permissoes bem definidas
6. **Escalabilidade** - Arquitectura preparada para crescimento

Este e um projecto extenso que sera implementado em fases para garantir qualidade e funcionalidade em cada etapa.
