-- Fuchsdeutsch: admin by email.
-- is_admin() now also returns true for the emails listed here, taken from the login token.
-- So the admin works even if the profiles row has no flag or no email yet.

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false)
      or lower(coalesce(auth.jwt() ->> 'email', '')) in ('admin@fuchsdeutsch.de');
$$;

grant execute on function public.is_admin() to authenticated;

-- Also set the flag on the existing row (if it exists).
update public.profiles p set is_admin = true
from auth.users u
where u.id = p.id and lower(u.email) = 'admin@fuchsdeutsch.de';

-- Check: this should show the admin account with is_admin = true.
select u.email, p.is_admin, p.id is not null as has_profile
from auth.users u left join public.profiles p on p.id = u.id
where lower(u.email) = 'admin@fuchsdeutsch.de';
