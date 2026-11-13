import type { Metadata } from "next";
import { BusinessForm } from "@/components/BusinessForm";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Illustrations";
import { Footer } from "@/components/Sections";
import { faq, finalCta, hero, meta, pricing, problem, steps } from "@/config/business";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 8.5 3 3 7-7.5" />
    </svg>
  );
}

export default function BusinessPage() {
  return (
    <>
      <Header ctaLabel="Request a pilot spot" ctaHref="#request" />
      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(60rem_28rem_at_70%_-10%,rgba(94,230,168,0.13),transparent)]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14 lg:pb-24 lg:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {hero.eyebrow}
              </p>
              <h1 className="mt-4 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-[3.2rem]">
                {hero.headline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.subheadline}</p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <Check />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-text">Request a pilot spot</h2>
              <div className="mt-4">
                <BusinessForm id="hero" />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted">{hero.formNote}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line/60 bg-panel/50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{problem.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {problem.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line/60">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{steps.title}</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.items.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-line bg-panel p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon name={step.icon} />
                    </span>
                    <span className="text-sm font-semibold text-muted">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line/60 bg-panel/50">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{pricing.title}</h2>
            <div className="mt-8 rounded-2xl border-2 border-accent/60 bg-panel p-6 sm:p-8">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{pricing.tag}</span>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-text">{pricing.price}</span>
                <span className="text-base text-muted">{pricing.period}</span>
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-text sm:grid-cols-2">
                {pricing.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#request"
                className="mt-8 flex h-12 items-center justify-center rounded-lg bg-accent px-6 text-base font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              >
                Request a pilot spot
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted">{pricing.footnote}</p>
          </div>
        </section>

        <section className="border-t border-line/60">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{faq.title}</h2>
            <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-panel">
              {faq.items.map((item) => (
                <details key={item.q} className="group px-5 sm:px-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-text">
                    {item.q}
                    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M8 2.5v11M2.5 8h11" />
                    </svg>
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="request" className="border-t border-line/60 bg-panel/50">
          <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:py-24">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{finalCta.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{finalCta.body}</p>
            <div className="mx-auto mt-8 max-w-md text-left">
              <BusinessForm id="final" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
