import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[0.85fr_1fr] md:gap-20">
        <div className="reveal relative aspect-[3/4] overflow-hidden rounded-[28px]">
          <Image
            src="/images/resto-3p.jpg"
            alt="A diner reading the menu boards at a Japanese counter restaurant"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="reveal">
          <p className="eyebrow !text-curry">Our story</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            Respect for the cutlet.
          </h2>

          <figure className="mt-10 border-l-2 border-curry pl-6">
            <blockquote className="font-display text-2xl font-light italic leading-snug md:text-[1.75rem]">
              “Our mission is simple: make sure Melbourne enjoys Japanese food the way it
              should be made.”
            </blockquote>
          </figure>

          <p className="mt-8 max-w-lg leading-relaxed text-paper/75">
            Every katsu we serve shows our respect for Japanese culinary tradition. That
            means fresh panko, the right oil temperature, and a curry that takes its time.
          </p>

          <p className="mt-8 text-sm">
            <span className="font-semibold">Seiba San</span>
            <span className="text-paper/60"> · Founder &amp; head chef</span>
          </p>
        </div>
      </div>
    </section>
  );
}
