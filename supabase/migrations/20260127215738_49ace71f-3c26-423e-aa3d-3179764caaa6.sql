-- ================================================
-- FASE 1: INFRAESTRUTURA BASE DO CMS CIBERCIDADAOS
-- ================================================

-- 1. ENUM DE ROLES
create type public.app_role as enum ('admin', 'editor', 'moderator', 'member');
create type public.member_status as enum ('pending', 'approved', 'rejected', 'suspended');
create type public.payment_status as enum ('pending', 'confirmed', 'failed', 'refunded');
create type public.payment_method as enum ('mpesa', 'emola', 'bank_transfer', 'cash');
create type public.event_type as enum ('presencial', 'online', 'hibrido');
create type public.publication_type as enum ('relatorio', 'estudo', 'guia', 'artigo', 'manual');

-- 2. TABELA DE ROLES DE UTILIZADOR
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- 3. FUNCAO PARA VERIFICAR ROLE (SECURITY DEFINER)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- 4. FUNCAO PARA VERIFICAR SE E ADMIN OU EDITOR
create or replace function public.is_admin_or_editor(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role in ('admin', 'editor')
  )
$$;

-- 5. TABELA DE PERFIS
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

-- 6. TABELA DE MEMBROS
create table public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null unique,
  full_name text not null,
  email text unique not null,
  phone text,
  province text,
  age integer,
  motivation text,
  how_found text,
  status member_status default 'pending',
  membership_number text unique,
  approved_at timestamptz,
  approved_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.members enable row level security;

-- 7. TABELA DE PAGAMENTOS DE QUOTAS
create table public.member_payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references public.members(id) on delete cascade not null,
  amount decimal(10,2) not null,
  currency text default 'MZN',
  payment_method payment_method,
  reference_number text,
  period_start date not null,
  period_end date not null,
  status payment_status default 'pending',
  confirmed_at timestamptz,
  confirmed_by uuid references auth.users(id),
  notes text,
  created_at timestamptz default now()
);

alter table public.member_payments enable row level security;

-- 8. TABELA DE CONTEUDO DO SITE
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

alter table public.site_content enable row level security;

-- 9. TABELA DE ACTIVIDADES
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

alter table public.activities enable row level security;

-- 10. TABELA DE EVENTOS
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title_pt text not null,
  title_en text not null,
  description_pt text not null,
  description_en text not null,
  date date not null,
  time time not null,
  location_pt text not null,
  location_en text not null,
  event_type event_type not null,
  image_url text,
  registration_url text,
  featured boolean default false,
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users(id)
);

alter table public.events enable row level security;

-- 11. TABELA DE PUBLICACOES
create table public.publications (
  id uuid primary key default gen_random_uuid(),
  title_pt text not null,
  title_en text not null,
  description_pt text,
  description_en text,
  publication_type publication_type not null,
  pdf_url text not null,
  thumbnail_url text,
  download_count integer default 0,
  is_published boolean default true,
  published_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references auth.users(id)
);

alter table public.publications enable row level security;

-- 12. TABELA DE MEMBROS DA EQUIPA
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role_pt text not null,
  role_en text not null,
  bio_pt text,
  bio_en text,
  image_url text,
  email text,
  linkedin_url text,
  twitter_url text,
  display_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.team_members enable row level security;

-- 13. TABELA DE PARCEIROS
create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  website_url text,
  category text,
  featured boolean default false,
  display_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.partners enable row level security;

-- 14. TABELA DE IMAGENS DA GALERIA
create table public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  caption_pt text,
  caption_en text,
  event_id uuid references public.events(id) on delete set null,
  date date,
  display_order integer default 0,
  is_published boolean default true,
  created_at timestamptz default now()
);

alter table public.gallery_images enable row level security;

-- 15. TABELA DE VIDEOS
create table public.videos (
  id uuid primary key default gen_random_uuid(),
  title_pt text not null,
  title_en text not null,
  youtube_id text not null,
  thumbnail_url text,
  description_pt text,
  description_en text,
  display_order integer default 0,
  is_published boolean default true,
  created_at timestamptz default now()
);

alter table public.videos enable row level security;

-- 16. TABELA DE PROVINCIAS (DADOS ESTATISTICOS)
create table public.provinces (
  id uuid primary key default gen_random_uuid(),
  name_pt text not null,
  name_en text not null,
  code text unique not null,
  population integer,
  internet_users integer,
  digital_literacy_rate decimal(5,2),
  updated_at timestamptz default now()
);

alter table public.provinces enable row level security;

-- 17. TABELA DE INDICADORES
create table public.data_indicators (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  label_pt text not null,
  label_en text not null,
  value text not null,
  icon text,
  display_order integer default 0,
  is_visible boolean default true,
  updated_at timestamptz default now()
);

alter table public.data_indicators enable row level security;

-- 18. TABELA DE HEADERS DAS PAGINAS
create table public.page_headers (
  id uuid primary key default gen_random_uuid(),
  page_key text unique not null,
  title_pt text not null,
  title_en text not null,
  subtitle_pt text,
  subtitle_en text,
  background_image_url text,
  updated_at timestamptz default now(),
  updated_by uuid references auth.users(id)
);

alter table public.page_headers enable row level security;

-- 19. TABELA DE MENSAGENS DE CONTACTO
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  is_read boolean default false,
  replied_at timestamptz,
  replied_by uuid references auth.users(id),
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

-- ================================================
-- RLS POLICIES
-- ================================================

-- USER_ROLES POLICIES
create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins can manage all roles"
  on public.user_roles for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- PROFILES POLICIES
create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can update their own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  to authenticated
  with check (auth.uid() = user_id);

-- MEMBERS POLICIES
create policy "Members can view their own data"
  on public.members for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins and moderators can view all members"
  on public.members for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Anyone can submit membership application"
  on public.members for insert
  with check (true);

create policy "Admins and moderators can update members"
  on public.members for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Admins can delete members"
  on public.members for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- MEMBER_PAYMENTS POLICIES
create policy "Members can view their own payments"
  on public.member_payments for select
  to authenticated
  using (
    member_id in (
      select id from public.members where user_id = auth.uid()
    )
  );

create policy "Admins and moderators can view all payments"
  on public.member_payments for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

create policy "Members can create payment records"
  on public.member_payments for insert
  to authenticated
  with check (
    member_id in (
      select id from public.members where user_id = auth.uid()
    )
  );

create policy "Admins and moderators can manage payments"
  on public.member_payments for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin') or public.has_role(auth.uid(), 'moderator'));

-- SITE_CONTENT POLICIES
create policy "Public can view visible content"
  on public.site_content for select
  using (is_visible = true);

create policy "Admins and editors can manage content"
  on public.site_content for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- ACTIVITIES POLICIES
create policy "Public can view published activities"
  on public.activities for select
  using (is_published = true);

create policy "Admins and editors can manage activities"
  on public.activities for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- EVENTS POLICIES
create policy "Public can view published events"
  on public.events for select
  using (is_published = true);

create policy "Admins and editors can manage events"
  on public.events for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- PUBLICATIONS POLICIES
create policy "Public can view published publications"
  on public.publications for select
  using (is_published = true);

create policy "Admins and editors can manage publications"
  on public.publications for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- TEAM_MEMBERS POLICIES
create policy "Public can view active team members"
  on public.team_members for select
  using (is_active = true);

create policy "Admins and editors can manage team members"
  on public.team_members for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- PARTNERS POLICIES
create policy "Public can view active partners"
  on public.partners for select
  using (is_active = true);

create policy "Admins and editors can manage partners"
  on public.partners for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- GALLERY_IMAGES POLICIES
create policy "Public can view published gallery images"
  on public.gallery_images for select
  using (is_published = true);

create policy "Admins and editors can manage gallery"
  on public.gallery_images for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- VIDEOS POLICIES
create policy "Public can view published videos"
  on public.videos for select
  using (is_published = true);

create policy "Admins and editors can manage videos"
  on public.videos for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- PROVINCES POLICIES
create policy "Public can view provinces"
  on public.provinces for select
  using (true);

create policy "Admins and editors can manage provinces"
  on public.provinces for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- DATA_INDICATORS POLICIES
create policy "Public can view visible indicators"
  on public.data_indicators for select
  using (is_visible = true);

create policy "Admins and editors can manage indicators"
  on public.data_indicators for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- PAGE_HEADERS POLICIES
create policy "Public can view page headers"
  on public.page_headers for select
  using (true);

create policy "Admins and editors can manage page headers"
  on public.page_headers for all
  to authenticated
  using (public.is_admin_or_editor(auth.uid()));

-- CONTACT_MESSAGES POLICIES
create policy "Anyone can submit contact message"
  on public.contact_messages for insert
  with check (true);

create policy "Admins can view and manage messages"
  on public.contact_messages for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- ================================================
-- TRIGGERS
-- ================================================

-- Funcao para actualizar updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers para updated_at
create trigger update_profiles_updated_at before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger update_members_updated_at before update on public.members
  for each row execute function public.update_updated_at_column();

create trigger update_site_content_updated_at before update on public.site_content
  for each row execute function public.update_updated_at_column();

create trigger update_activities_updated_at before update on public.activities
  for each row execute function public.update_updated_at_column();

create trigger update_events_updated_at before update on public.events
  for each row execute function public.update_updated_at_column();

create trigger update_publications_updated_at before update on public.publications
  for each row execute function public.update_updated_at_column();

create trigger update_team_members_updated_at before update on public.team_members
  for each row execute function public.update_updated_at_column();

create trigger update_partners_updated_at before update on public.partners
  for each row execute function public.update_updated_at_column();

create trigger update_provinces_updated_at before update on public.provinces
  for each row execute function public.update_updated_at_column();

create trigger update_data_indicators_updated_at before update on public.data_indicators
  for each row execute function public.update_updated_at_column();

create trigger update_page_headers_updated_at before update on public.page_headers
  for each row execute function public.update_updated_at_column();

-- ================================================
-- STORAGE BUCKETS
-- ================================================

-- Criar buckets de storage
insert into storage.buckets (id, name, public) values ('activities', 'activities', true);
insert into storage.buckets (id, name, public) values ('events', 'events', true);
insert into storage.buckets (id, name, public) values ('publications', 'publications', true);
insert into storage.buckets (id, name, public) values ('gallery', 'gallery', true);
insert into storage.buckets (id, name, public) values ('team', 'team', true);
insert into storage.buckets (id, name, public) values ('partners', 'partners', true);
insert into storage.buckets (id, name, public) values ('members', 'members', false);
insert into storage.buckets (id, name, public) values ('reports', 'reports', false);

-- Storage policies para buckets publicos
create policy "Public buckets are viewable by everyone"
  on storage.objects for select
  using (bucket_id in ('activities', 'events', 'publications', 'gallery', 'team', 'partners'));

create policy "Authenticated users can upload to public buckets"
  on storage.objects for insert
  to authenticated
  with check (bucket_id in ('activities', 'events', 'publications', 'gallery', 'team', 'partners'));

create policy "Admins and editors can manage public bucket files"
  on storage.objects for all
  to authenticated
  using (
    bucket_id in ('activities', 'events', 'publications', 'gallery', 'team', 'partners')
    and public.is_admin_or_editor(auth.uid())
  );

-- Storage policies para buckets privados
create policy "Members can view their own files"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'members' 
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Members can upload their own files"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'members' 
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Admins can manage member files"
  on storage.objects for all
  to authenticated
  using (
    bucket_id = 'members' 
    and public.has_role(auth.uid(), 'admin')
  );

create policy "Admins can manage reports"
  on storage.objects for all
  to authenticated
  using (
    bucket_id = 'reports' 
    and public.has_role(auth.uid(), 'admin')
  );

-- Funcao para criar perfil automaticamente
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger para criar perfil quando novo utilizador e criado
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();