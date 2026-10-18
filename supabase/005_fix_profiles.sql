-- Fuchsdeutsch fix: profiles were never saved.
-- Cause: the app saves with an upsert. Postgres needs UPDATE permission on every column in it,
-- including id, but id was not in the update grant. Row level security still makes sure that
-- every learner can only touch their own row (id = auth.uid()), so this grant is safe.
grant update (id) on public.profiles to authenticated;

-- Belt and braces: create the profile row automatically when someone signs up.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, coalesce(new.email, ''), coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(coalesce(new.email, ''), '@', 1)))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute function public.handle_new_user();

-- Create the missing rows for everyone who already signed up.
insert into public.profiles (id, email, name)
select u.id, coalesce(u.email, ''), split_part(coalesce(u.email, ''), '@', 1)
from auth.users u
where not exists (select 1 from public.profiles p where p.id = u.id);

-- Check: every account should now have a row (is_admin true or false, never NULL).
select u.email, p.is_admin, p.xp
from auth.users u left join public.profiles p on p.id = u.id
order by u.created_at;
