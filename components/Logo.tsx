export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-md bg-seal font-jp text-[15px] font-bold leading-none text-paper"
      >
        カツ
      </span>
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          inverted ? "text-paper" : "text-ink"
        }`}
      >
        Katsu Seiba
      </span>
    </span>
  );
}
