import Image from "next/image";
import { dishes, drinks, formatPrice } from "@/lib/content";

export default function Menu() {
  return (
    <section id="menu" className="bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">The menu</p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Three katsu. Done properly.
            </h2>
          </div>
          <p className="max-w-sm text-ink-2">
            A short menu on purpose. Every cutlet is crumbed by hand and fried when you
            order.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {dishes.map((dish) => (
            <li
              key={dish.name}
              className="reveal group flex flex-col overflow-hidden rounded-3xl bg-paper"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {dish.signature && (
                  <span className="absolute left-4 top-4 rounded-full bg-seal px-3 py-1 text-xs font-semibold text-paper">
                    Signature
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium">{dish.name}</h3>
                  <p className="font-display text-xl text-curry-dark">
                    {formatPrice(dish.price)}
                  </p>
                </div>
                <p lang="ja" className="mt-1 font-jp text-sm text-muted">
                  {dish.jp}
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-ink-2">{dish.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
                  {dish.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="reveal mt-6 flex flex-col gap-2 rounded-3xl border border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow !text-muted">Drinks</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {drinks.map((d) => (
              <li key={d.name} className="flex gap-3">
                <span>{d.name}</span>
                <span className="text-muted">{formatPrice(d.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
