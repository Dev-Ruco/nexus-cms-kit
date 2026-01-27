-- Corrigir funcoes com search_path nao definido
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

-- Corrigir politicas RLS permissivas (members insert e contact_messages insert)
-- Remover politicas antigas e criar novas mais seguras

drop policy if exists "Anyone can submit membership application" on public.members;
drop policy if exists "Anyone can submit contact message" on public.contact_messages;

-- Nova politica para members - permite apenas inserir com campos validados
create policy "Anyone can submit membership application"
  on public.members for insert
  with check (
    full_name is not null 
    and email is not null 
    and status = 'pending'
    and user_id is null
    and membership_number is null
    and approved_at is null
    and approved_by is null
  );

-- Nova politica para contact_messages - permite apenas inserir mensagens novas
create policy "Anyone can submit contact message"
  on public.contact_messages for insert
  with check (
    name is not null 
    and email is not null 
    and message is not null
    and is_read = false
    and replied_at is null
    and replied_by is null
  );