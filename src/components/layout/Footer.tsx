import { NAV_LINKS, CALENDLY_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-base font-medium tracking-[0.1em] uppercase text-white/60 mb-4">Aaxelera</h3>
            <p className="text-white/25 text-sm leading-relaxed font-light">
              AI-powered demo pipeline systems built exclusively for PropTech SaaS teams.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] font-medium text-white/40 uppercase tracking-[0.15em] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/25 hover:text-white/60 transition-colors text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-medium text-white/40 uppercase tracking-[0.15em] mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/60 transition-colors text-sm font-light">
                  Book a Call
                </a>
              </li>
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white/60 transition-colors text-sm font-light">
                  Pipeline Audit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.04] mt-12 pt-8 text-center">
          <p className="text-white/15 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Aaxelera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
