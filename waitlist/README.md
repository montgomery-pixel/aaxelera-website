# [BRAND] waitlist landing page

A one-page waitlist site for a home security concept, built to receive paid traffic from Meta and YouTube ads and measure cost per signup.

- Next.js 16, React 19, Tailwind 4. No other runtime dependencies.
- Signups are saved to a Supabase table, with the UTM parameters of the ad that drove them.
- Meta Pixel and Google tag are built in and switch on when you add their IDs.

This folder is self-contained. It lives inside the `aaxelera-website` repo for now and can be moved to its own repo by copying the folder.

## Pages

| Address | What it is | Copy lives in | Signups go to |
|---|---|---|---|
| `/` | Home security waitlist | `src/config/content.ts` | `waitlist_signups` table |
| `/business` | Business monitoring pilot request | `src/config/business.ts` | `business_leads` table |
| `/privacy` | Privacy policy | `src/app/privacy/page.tsx` | |

Both tables are created by `supabase/schema.sql`. The business offer (price, camera count, hours, free trial length) is set at the top of `src/config/business.ts`.

## Run it on your computer

```bash
cd waitlist
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # open http://localhost:3000
```

## Edit the copy

Every word on the landing page is in **`src/config/content.ts`**, grouped by section (hero, how it works, benefits, pricing, FAQ, final CTA, footer). Edit the text between the quotes and save.

The privacy policy text is in `src/app/privacy/page.tsx`.

Copy rules this page was written to (keep them when editing):

- The product is not available yet: say "launching soon", "planned", "waitlist".
- No testimonials, reviews, customer counts or "as seen in" logos.
- No claims about police response times or crimes prevented.
- No named competitors in the price comparison.
- Do not present staged or AI-generated imagery as real incidents.

## Swap the brand name

Open **`src/config/site.ts`** and change `brand: "[BRAND]"`. It updates the page, the browser tab title, the footer and the privacy policy. The same file holds:

| Setting | What it is |
|---|---|
| `legalName` | Company name used in the privacy policy |
| `contactEmail` | Contact address in the footer and privacy policy |
| `url` | The final public address, used for link previews |
| `price`, `typicalRange`, `setupMinutes` | Numbers used throughout the copy |
| `showPrivacyDraftNotice` | Set to `false` after your lawyer has reviewed the policy |

## Swap the placeholder images

The hero image and icons are placeholder drawings in `src/components/Illustrations.tsx`. To use a real product shot, put the file in `public/` and replace `<HeroIllustration />` in `src/components/Hero.tsx` with a Next.js `<Image />`. Update or remove the caption (`hero.illustrationCaption` in `content.ts`) to match.

## Set up signups (Supabase)

1. Create a free account at supabase.com and create a new project.
2. In the project, open **SQL Editor**, choose **New query**, paste the contents of `supabase/schema.sql`, and press **Run**. This creates the `waitlist_signups` table and locks it so the website can add rows but nobody can read them with the public key.
3. Open **Project Settings > API** and copy the **Project URL** and the public key (labelled **anon** or **publishable**).
4. Put them in `.env.local` for local use and in Vercel for the live site:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-key
```

Never use the `service_role` / secret key here.

## View signups

Supabase dashboard > **Table Editor** > `waitlist_signups`. Each row has the email, ZIP, home type, signup time, and the `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `fbclid`, `gclid`, referrer and landing page. Use **Export > CSV** to download.

For signups per ad, run this in the SQL Editor:

```sql
select utm_source, utm_campaign, utm_content, count(*) as signups
from public.waitlist_signups
group by 1, 2, 3
order by signups desc;
```

An email can only join once. A repeat signup shows the thank-you message but is not saved again and is not counted as a conversion.

## Tag your ad links

Add UTM parameters to the destination URL of every ad so each signup records where it came from:

```
https://your-domain.com/?utm_source=meta&utm_medium=paid_social&utm_campaign=launch_test&utm_content=video_a
https://your-domain.com/?utm_source=youtube&utm_medium=paid_video&utm_campaign=launch_test&utm_content=ad_1
```

## Add pixel IDs

Set these environment variables (in `.env.local` and in Vercel), then redeploy:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Your Meta Pixel ID (numbers only) |
| `NEXT_PUBLIC_GOOGLE_TAG_ID` | Your Google tag ID: `AW-XXXXXXXXXX` (Google Ads) or `G-XXXXXXXXXX` (GA4) |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` | Optional. The `send_to` value of your Google Ads conversion action, like `AW-XXXXXXXXXX/AbCdEfGhIjK` |

A tracker only loads when its ID is set. On each new signup the page sends:

- Meta: `PageView` on load, and the standard **`Lead`** event on signup. Pick `Lead` as the conversion event in your Meta campaign.
- Google: **`generate_lead`** on signup, plus a Google Ads **`conversion`** event if `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` is set. Use that conversion action for your YouTube campaigns.

The code is in `src/components/Tracking.tsx` and `src/lib/tracking.ts`. Check it is working with the Meta Pixel Helper and Google Tag Assistant browser extensions.

## Deploy to Vercel

1. Make sure this code is on GitHub (it is in the `waitlist/` folder of `aaxelera-website`). Vercel publishes from the repo's main branch by default, so either merge this branch into `main` first, or after step 3 set the project's production branch to this branch under **Settings > Git** (wording may differ slightly).
2. At vercel.com choose **Add New > Project** and import the `aaxelera-website` repository. This creates a second Vercel project, separate from the Aaxelera site.
3. Set **Root Directory** to `waitlist`. Framework should be detected as Next.js. Leave build settings at their defaults.
4. Under **Environment Variables**, add the Supabase values and any pixel IDs from the sections above.
5. Press **Deploy**.
6. Test it: open the live URL with `?utm_source=test&utm_campaign=test` on the end, join the waitlist, and confirm the row appears in Supabase with those UTM values. Delete the test row afterwards.
7. Add your domain under **Settings > Domains**, then set `url` in `src/config/site.ts` to that address.

Environment variables are read when the site is built, so redeploy after changing any of them.

## Before sending real traffic

- Have a lawyer review the privacy policy, then set `showPrivacyDraftNotice` to `false`.
- Replace `[BRAND]`, `[COMPANY LEGAL NAME]` and `hello@example.com` in `src/config/site.ts`.
- Confirm the claims on the page match what you will really offer (UL-listed monitoring center, cellular backup, no contract, price).
- The page has no cookie consent banner. Ask your lawyer whether you need one for the states you advertise in.
