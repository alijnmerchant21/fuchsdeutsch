-- Fuchsdeutsch: make admin@fuchsdeutsch.de an admin.
-- Works now (if the account already exists) and later (when it signs in for the first time).

-- 1. Already signed in once? Then set the flag now.
update public.profiles set is_admin = true where lower(email) = 'admin@fuchsdeutsch.de';

-- 2. Not signed in yet? This trigger sets the flag when the profile row is created.
create or replace function public.set_default_admins() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if lower(new.email) in ('admin@fuchsdeutsch.de') then
    new.is_admin := true;
  end if;
  return new;
end $$;

drop trigger if exists profiles_default_admins on public.profiles;
create trigger profiles_default_admins before insert on public.profiles
for each row execute function public.set_default_admins();

-- Check:
select email, is_admin from public.profiles where is_admin;
