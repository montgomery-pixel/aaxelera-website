import { hero } from "@/config/content";
import { HeroIllustration } from "./Illustrations";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(60rem_28rem_at_70%_-10%,rgba(94,230,168,0.13),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.subheadline}</p>

          <div className="mt-6 max-w-md">
            <WaitlistForm id="hero" />
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m3 8.5 3 3 7-7.5" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted">{hero.formNote}</p>
        </div>

        <figure className="flex flex-col items-center">
          <HeroIllustration />
          <figcaption className="mt-3 text-center text-xs text-muted">{hero.illustrationCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
