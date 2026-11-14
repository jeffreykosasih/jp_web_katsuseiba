import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { formatPrice, dishes, locations } from "@/lib/content";

const fromPrice = Math.min(...dishes.map((d) => d.price));

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-24 md:pt-14">
      <div>
        <p className="eyebrow">Japanese katsu &amp; curry · Melbourne</p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em]">
          Crisp outside.
          <br />
          <em className="font-normal italic text-curry-dark">Tender</em> inside.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
          Panko-crusted katsu, fried to order and served with our slow-simmered Japanese
          curry. Made the traditional way, across three Melbourne kitchens.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#reserve" className="btn btn-primary">
            Book a table <ArrowRight size={18} aria-hidden />
          </a>
          <a href="#menu" className="btn btn-ghost">
            See the menu
          </a>
        </div>

        <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-6">
          <div>
            <dt className="text-sm text-muted">Mains from</dt>
            <dd className="mt-1 font-display text-2xl">{formatPrice(fromPrice)}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Find us in</dt>
            <dd className="mt-1 flex items-center gap-1.5 font-display text-2xl">
              <MapPin size={18} className="text-curry" aria-hidden />
              {locations.length} suburbs
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ink md:aspect-[5/6]">
          <Image
            src="/images/katsu-1.jpg"
            alt="Sliced tonkatsu over rice with Japanese curry, shot from above"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
        <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-[0_12px_32px_-12px_rgba(27,24,21,0.35)] sm:left-8">
          <span
            aria-hidden
            className="grid size-11 shrink-0 place-items-center rounded-full bg-seal font-jp text-sm font-bold text-paper"
          >
            人気
          </span>
          <div>
            <p className="text-xs text-muted">Most ordered</p>
            <p className="font-semibold">Tonkatsu Curry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
