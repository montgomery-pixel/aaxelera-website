import Link from "next/link";
import { benefits, faq, finalCta, footer, howItWorks, pricing } from "@/config/content";
import { site } from "@/config/site";
import { Icon } from "./Illustrations";
import { WaitlistForm } from "./WaitlistForm";

function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
    </div>
  );
}

const stepIcons = ["box", "qr", "eye"];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line/60 bg-panel/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading title={howItWorks.title} intro={howItWorks.intro} />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={stepIcons[index]} />
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
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading title={benefits.title} intro={benefits.intro} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {benefits.items.map((item, index) => (
            <li
              key={item.title}
              className={`rounded-2xl border border-line bg-panel p-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PlanPoints({ points, highlight }: { points: readonly string[]; highlight: boolean }) {
  return (
    <ul className="mt-6 space-y-3 text-sm text-muted">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3">
          {highlight ? (
            <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m3 8.5 3 3 7-7.5" />
            </svg>
          ) : (
            <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 rounded bg-line" />
          )}
          <span className={highlight ? "text-text" : undefined}>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export function PriceComparison() {
  const { ours, typical } = pricing;
  return (
    <section id="pricing" className="border-t border-line/60 bg-panel/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading title={pricing.title} intro={pricing.intro} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-accent/60 bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-text">{ours.label}</h3>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{ours.tag}</span>
            </div>
            <p className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight text-text">{ours.price}</span>
              <span className="text-base text-muted">{ours.period}</span>
            </p>
            <PlanPoints points={ours.points} highlight />
            <a
              href="#join"
              className="mt-8 flex h-12 items-center justify-center rounded-lg bg-accent px-6 text-base font-semibold text-on-accent transition-colors hover:bg-accent-strong"
            >
              Join the waitlist
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-text">{typical.label}</h3>
              <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">{typical.tag}</span>
            </div>
            <p className="mt-5 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight text-muted sm:text-5xl">{typical.price}</span>
              <span className="text-base text-muted">{typical.period}</span>
            </p>
            <PlanPoints points={typical.points} highlight={false} />
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{pricing.footnote}</p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-line/60">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading title={faq.title} />
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
  );
}

export function FinalCta() {
  return (
    <section id="join" className="border-t border-line/60 bg-panel/50">
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-text sm:text-4xl">{finalCta.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{finalCta.body}</p>
        <div className="mx-auto mt-8 max-w-md text-left">
          <WaitlistForm id="final" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs leading-relaxed text-muted sm:px-6">
        <p className="max-w-3xl">{footer.disclaimer}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <Link href="/privacy" className="underline underline-offset-2 hover:text-text">
            {footer.privacyLink}
          </Link>
          <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-2 hover:text-text">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
