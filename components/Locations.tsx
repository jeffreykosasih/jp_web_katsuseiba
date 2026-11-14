import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { locations, mapsUrl, site } from "@/lib/content";

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Locations</p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Three kitchens across Melbourne.
            </h2>
          </div>
          <p className="max-w-sm text-ink-2 md:justify-self-end">
            Same menu, same standard, wherever you are. Walk-ins welcome; booking is
            recommended on weekends.
          </p>
        </div>

        <div className="reveal relative mt-12 aspect-[16/7] overflow-hidden rounded-[28px] max-sm:aspect-[4/3]">
          <Image
            src="/images/resto-1.jpg"
            alt="Diners seated along the counter of a busy Japanese restaurant"
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {locations.map((loc, i) => (
            <li
              key={loc.suburb}
              className="reveal flex flex-col rounded-3xl border border-line p-6"
            >
              <p className="font-display text-sm text-muted">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-medium">{loc.suburb}</h3>
              <address className="mt-2 flex-1 not-italic text-ink-2">{loc.address}</address>
              <a
                href={mapsUrl(loc.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start font-semibold text-curry-dark underline-offset-4 hover:underline"
              >
                Get directions <ArrowUpRight size={18} aria-hidden />
                <span className="sr-only">to {loc.suburb} (opens Google Maps)</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <Phone size={16} aria-hidden />
          Questions or large groups? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-ink underline-offset-4 hover:underline">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
