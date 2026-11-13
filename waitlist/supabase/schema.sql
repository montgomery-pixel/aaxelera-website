-- Waitlist signups table.
-- Run this once: Supabase dashboard > SQL Editor > New query > paste > Run.

create table if not exists public.waitlist_signups (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  email         text not null
                check (char_length(email) <= 254 and email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  zip           text check (zip is null or zip ~ '^\d{5}$'),
  home_type     text check (home_type is null or home_type in ('house', 'apartment', 'townhouse')),
  utm_source    text check (char_length(utm_source) <= 300),
  utm_medium    text check (char_length(utm_medium) <= 300),
  utm_campaign  text check (char_length(utm_campaign) <= 300),
  utm_content   text check (char_length(utm_content) <= 300),
  utm_term      text check (char_length(utm_term) <= 300),
  fbclid        text check (char_length(fbclid) <= 300),
  gclid         text check (char_length(gclid) <= 300),
  referrer      text check (char_length(referrer) <= 300),
  landing_page  text check (char_length(landing_page) <= 300)
);

-- One row per email address (the page stores emails in lowercase).
create unique index if not exists waitlist_signups_email_key
  on public.waitlist_signups (lower(email));

-- Lock the table down: the public website may add rows and nothing else.
-- Nobody can read, change or delete signups with the public key.
alter table public.waitlist_signups enable row level security;

revoke all on public.waitlist_signups from anon, authenticated;
grant insert on public.waitlist_signups to anon;

drop policy if exists "Public can join the waitlist" on public.waitlist_signups;
create policy "Public can join the waitlist"
  on public.waitlist_signups
  for insert
  to anon
  with check (true);

-- Handy report: signups per ad source and campaign.
-- select utm_source, utm_campaign, count(*) as signups
-- from public.waitlist_signups
-- group by 1, 2
-- order by signups desc;
