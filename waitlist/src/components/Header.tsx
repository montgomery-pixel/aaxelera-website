import Link from "next/link";
import { header } from "@/config/content";
import { site } from "@/config/site";
import { Logo } from "./Illustrations";

export function Header({ showCta = true }: { showCta?: boolean }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold tracking-tight text-text">
          <Logo />
          {site.brand}
        </Link>
        {showCta ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-medium uppercase tracking-wider text-muted sm:inline">
              {header.badge}
            </span>
            <a
              href="#join"
              className="rounded-md border border-accent/50 px-3 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              {header.cta}
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
