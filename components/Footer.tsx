import { credits, locations, nav, site } from "@/lib/content";
import Logo from "./Logo";

const Instagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TikTok = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
    <path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Japanese katsu and curry, made the traditional way in Melbourne.
            </p>
            <div className="mt-6 flex gap-2">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink">
                <Instagram />
              </a>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid size-11 place-items-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink">
                <TikTok />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-paper">{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#reserve" className="hover:text-paper">Book a table</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Locations</h2>
            <ul className="mt-4 space-y-3 text-sm text-paper/70">
              {locations.map((l) => (
                <li key={l.suburb}>{l.suburb}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <a href={site.phoneHref} className="mt-4 block text-sm text-paper/70 hover:text-paper">
              {site.phone}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-start sm:justify-between">
          <p>© {new Date().getFullYear()} Katsu Seiba</p>
          <details className="sm:max-w-md sm:text-right">
            <summary className="cursor-pointer list-none hover:text-paper [&::-webkit-details-marker]:hidden">
              Photo credits
            </summary>
            <p className="mt-2 leading-relaxed">
              {credits.map((c, i) => (
                <span key={c.href}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-paper hover:underline">
                    {c.name}
                  </a>
                  {i < credits.length - 1 ? ", " : ""}
                </span>
              ))}
              {" "}via Unsplash &amp; Pexels.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
