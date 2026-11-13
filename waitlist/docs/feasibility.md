# Feasibility: AI + human verified security monitoring

First-pass study, 13 November 2026. Based on public web sources and stated estimates, not vendor quotes. Figures marked "estimate" are assumptions to replace with real numbers.

## Verdict

- **Home version: feasible to launch, hard to win.** The supply chain exists (Wyze sells monitored security at $9.99/month using Noonlight). But $19.99 is the going rate for DIY monitored security, not a discount. Whether it works comes down to what a customer costs to acquire, which is what the waitlist test measures.
- **Business version: better revenue per customer, real fixed costs.** Businesses pay $50–150 per camera per month. Undercutting to $35–50 looks possible; much lower does not, because operator seats cost the same however little you charge.
- **Recommended order:** run the home waitlist test as planned with a clear pass/fail number, get the Noonlight quote, and test business demand in parallel with outreach to two or three industries.

## 1. Home market

### Competitor pricing

| Brand | Professional monitoring, per month |
|---|---|
| Wyze | $9.99 (monitoring by Noonlight) |
| Cove | $17.99–19.99 |
| Ring | $19.99 |
| SimpliSafe | about $22.99 (range quoted $19.99–27.99) |
| Abode | about $20–27 |
| Traditional (ADT class) | $40–60, multi-year contract |

Source prices are from third-party comparison sites and vary; check each vendor's site.

**What this means:** the landing page's "about half the usual price" is true against traditional providers only. Against the DIY brands people will actually compare with, $19.99 is average. The differentiator has to be the human review of video before dispatch, not price.

### Cost per customer per month (buy-the-kit path)

| Item | Low | High | Basis |
|---|---|---|---|
| Verification and dispatch | $3 | $6 | Central stations list $2.50–5 wholesale without video review. Noonlight price unknown; Wyze retailing at $9.99 implies it is well under that |
| Cellular backup | $1 | $2 | $1–2 per SIM plus small data |
| Cloud video, AI processing | $1 | $3 | Estimate |
| Card processing | $0.90 | $0.90 | About 3% + $0.30 |
| Customer support | $1 | $2 | Estimate |
| **Total** | **$7** | **$14** | |
| **Margin on $19.99** | **$13** | **$6** | |

Rental path at $39.99 adds about $20/month against a kit costing roughly $60–125 in hardware (listed prices, before shipping, duty and packaging).

### The number that decides it: acquisition cost

- Working assumption: $10/month margin, 2% monthly cancellations (estimate; ADT reports about 13% a year with contracts, no-contract will be higher). That gives about $500 lifetime margin per customer.
- A common rule is to spend no more than a third of that to win the customer: about **$165**.
- If 10% of waitlist signups eventually buy, that allows about $16 per signup. At 5%, about $8.

**Pass/fail for the ad test:** under $10 per waitlist signup is encouraging. Over $20 means the home version does not work at this price without a cheaper channel.

### Where to aim the ads

Some cities' police no longer respond to alarms without verification, which is exactly what this product provides. Sources name Seattle, Las Vegas, Oakland, Vallejo, Memphis, Salt Lake City and Akron. Policies change (Dallas and San Jose reportedly reversed theirs), so confirm each before using it in ad copy. Targeting these cities first is the strongest version of the pitch.

## 2. Business market

| | Figure |
|---|---|
| Typical price | $50–150 per camera per month; premium 24/7 up to $200+ |
| Lowest found | $40 nights and weekends, $60 for 24/7 |
| Small site (4–8 cameras) | $200–1,200 per month |
| Usual terms | 12–36 month contracts with heavy early-exit fees |

### Operator cost

One seat staffed 24/7 is about 730 hours a month.

| Hourly rate (Philippines, outsourced) | One seat | Two seats (minimum) |
|---|---|---|
| $6 | $4,380 | $8,760 |
| $10 | $7,300 | $14,600 |
| $15 | $10,950 | $21,900 |

Rates found ranged from $4–6 (one vendor advertising video monitoring) to $10–18 (general outsourcing guides).

### Break-even at $40 per camera

- Two seats need about **220–550 cameras** to cover operators alone, which is 45–110 sites at five cameras each.
- How many cameras one operator can cover depends on how well the AI filters. That ratio is the main unknown, and it is what a pilot would measure.
- A no-contract, month-to-month offer at $40–50 is a clear point of difference against 12–36 month terms, and probably a stronger pitch than price alone.

## 3. Shared requirements and risks

- **Licensing.** Alarm licensing follows the customer's state, not yours. California and New Jersey require a licence to monitor systems there even from out of state; Florida is strict; some states have none. Launching in a handful of states first keeps this manageable. Needs a lawyer.
- **Hardware fit.** Cheap Tuya-based kits are tied to Tuya's app and cloud. The kit must be able to report to a US central station and send video to Noonlight or your own system. Roombanker claims central-station support; unverified.
- **Certification.** Sellers' FCC and UL claims on marketplaces are unverified. Ask for FCC ID numbers.
- **Liability.** A missed event at a business is a bigger claim than at a home. Insurance and contract terms matter before any paying customer.
- **Privacy.** Offshore reviewers viewing video from homes must be disclosed; some states license monitoring staff.

## 4. What to do next

1. **Get the Noonlight quote** (per account or per event, video verification with dispatch, supported cameras). This sets the home margin and whether you need your own operators at launch.
2. **Deploy the waitlist page and run a small ad test** against the pass/fail number above, weighted toward verified-response cities.
3. **Get kit quotes** from Roombanker and Wanlin at 100, 500 and 1,000 units, with FCC IDs and central-station compatibility.
4. **Test business demand:** build a prospect list in two or three industries (for example car dealerships, self-storage, construction) and send a short outreach offering month-to-month monitoring.
5. **Reposition the landing page** around human-verified video at $19.99 rather than price alone.

### Enquiry text (edit names before sending)

**To Noonlight**

> We're launching a US home security brand with self-installed cameras and sensors. We'd like pricing for video verification with emergency dispatch: per account or per event, volume tiers starting at a few hundred accounts, and which camera hardware or video formats you support. Do you also cover small business sites?

**To hardware suppliers**

> We're sourcing a white-label starter kit for the US market: hub with LTE backup and battery, one indoor/outdoor Wi-Fi camera, two door/window sensors, one motion sensor. Please quote per kit at 100, 500 and 1,000 units, with add-on sensor and camera prices, lead time, FCC ID numbers, US carrier support, whether the hub can report to a US central station (SIA DC-09 or Contact ID), and whether camera video can be sent to a third-party cloud.

## Sources

- Competitor pricing: https://home-security-reviews.com/wyze-review/ , https://home-security-reviews.com/cove/ , https://home-security-reviews.com/simplisafe/ , https://www.nerdwallet.com/p/best/best-diy-home-security-system , https://www.smarthomeexplorer.com/guides/simplisafe-vs-abode-vs-cove-no-contract-security-2026
- ADT attrition and payback: https://www.sec.gov/Archives/edgar/data/0001703056/000170305626000059/adt-20260331.htm
- Licensing: https://legal.rhombus.com/corporate/state-licenses , https://www.dca.ca.gov/publications/alarm_companies.shtml , https://vortechpro.com/blog/security-alarm-installer-license-requirements-by-state/ , https://www.kirschenbaumesq.com/article/monitoring-license-requirements-in-ny-and-elsewhere
- Business monitoring prices: https://getsafeandsound.com/blog/remote-video-monitoring-service-cost/ , https://www.guardianintegratedsecurity.com/remote-video-monitoring-cost/ , https://visiondetectionsystems.com/blog/remote-video-monitoring-cost , https://sirixmonitoring.com/remote-video-monitoring/ , https://sirixmonitoring.com/blog/remote-video-monitoring-services-cost/
- Operator rates: https://f5hiringsolutions.com/blog/philippines-bpo-evolution-2026-trends , https://globalify.com/bpo-pricing , https://callhounds.com/call-center-solutions-blogs/outsourcing-cost-in-the-philippines-2026-pricing-guide/ , https://isuporta.com/blog/philippines-bpo-pricing-models-2026
- Verified response: https://www.securityindustry.org/2024/10/07/some-cities-are-requiring-alarm-verification-for-response-what-it-means-for-the-security-industry/ , https://www.cloudastructure.com/post/top-5-cities-with-the-most-onerous-verified-response-laws-2025 , https://www.deepsentinel.com/blogs/home-security/vallejo-no-longer-responding-to-unverified-alarm-calls/ , https://www.sdmmag.com/articles/103959-siac-alert-seattles-lesson-on-verified-response
- Hardware and running costs: https://www.roombanker.com/oem-security-system/ , https://en.fujianxiaofang.com/News-and-Trends/1206.html , https://www.alibaba.com/product-introduction/PGST-4G-security-system-wireless-alarm_60793250540.html , https://www.globalsources.com/category/wi-fi-cameras-for-sale-price_33195/ , https://monitoringamerica.com/pricing/ , https://www.hologram.io/pricing/ , https://telnyx.com/pricing/iot-data-plans.md
- Noonlight: https://www.noonlight.com/business/industries/home-security , https://www.noonlight.com/resources/our-partners
