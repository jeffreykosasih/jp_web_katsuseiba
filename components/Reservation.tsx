"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Minus, Plus } from "lucide-react";
import { locations, site } from "@/lib/content";

// Bookable time slots. Adjust to match real opening hours.
const SLOTS = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
];
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

type Form = {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  guests: number;
};
type Errors = Partial<Record<keyof Form, string>>;

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const formatTime = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
};

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 12)
    e.phone = "Enter a valid phone number so we can confirm your booking.";
  if (!f.location) e.location = "Choose a location.";
  if (!f.date) e.date = "Choose a date.";
  else if (f.date < todayISO()) e.date = "That date has passed. Pick today or later.";
  if (!f.time) e.time = "Choose a time.";
  return e;
}

export default function Reservation() {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    guests: 2,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const minDate = useMemo(todayISO, []);

  const set = <K extends keyof Form>(key: K, value: Form[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`r-${first}`)?.focus();
      return;
    }
    // TODO: send to a booking service or API route. This form does not store bookings yet.
    setSubmitted(true);
  };

  const err = (k: keyof Form) =>
    errors[k] ? (
      <p id={`r-${k}-err`} className="mt-1.5 text-sm text-seal">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof Form) => ({
    id: `r-${k}`,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `r-${k}-err` : undefined,
  });

  return (
    <section id="reserve" className="bg-paper-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="reveal flex flex-col">
          <p className="eyebrow">Reservations</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            Save yourself a seat.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-2">
            Book in under a minute. We&rsquo;ll text you to confirm. Prefer to talk? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-ink underline underline-offset-4">
              {site.phone}
            </a>
            .
          </p>
          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[28px] md:block">
            <Image
              src="/images/katsu-3.jpg"
              alt="Katsu curry with rice on a green tiled table"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal rounded-[28px] bg-paper p-6 shadow-[0_24px_60px_-30px_rgba(27,24,21,0.35)] sm:p-8">
          {submitted ? (
            <div role="status" className="flex h-full flex-col items-start justify-center py-6">
              <CheckCircle2 size={40} className="text-curry" aria-hidden />
              <h3 className="mt-5 font-display text-3xl font-medium">
                Thanks, {form.name.split(" ")[0]}. Request received.
              </h3>
              <p className="mt-3 text-ink-2">
                Table for {form.guests} at {form.location} on{" "}
                {new Date(form.date + "T00:00").toLocaleDateString("en-AU", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
                at {formatTime(form.time)}. We&rsquo;ll text {form.phone} to confirm.
              </p>
              <button
                type="button"
                className="btn btn-ghost mt-8"
                onClick={() => {
                  setSubmitted(false);
                  setForm((f) => ({ ...f, date: "", time: "" }));
                }}
              >
                Make another booking
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="r-name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    {...a11y("name")}
                    className="field"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="r-phone" className="mb-1.5 block text-sm font-medium">
                    Mobile
                  </label>
                  <input
                    {...a11y("phone")}
                    className="field"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="04XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {err("phone")}
                </div>
              </div>

              <fieldset>
                <legend className="mb-1.5 text-sm font-medium">Location</legend>
                <div
                  id="r-location"
                  tabIndex={-1}
                  className="grid gap-2 sm:grid-cols-3"
                  aria-describedby={errors.location ? "r-location-err" : undefined}
                >
                  {locations.map((l) => (
                    <label
                      key={l.suburb}
                      className={`flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 text-center text-sm font-medium transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-curry ${
                        form.location === l.suburb
                          ? "border-ink bg-ink text-paper"
                          : errors.location
                            ? "border-seal"
                            : "border-line hover:border-ink-2"
                      }`}
                    >
                      <input
                        type="radio"
                        name="location"
                        value={l.suburb}
                        checked={form.location === l.suburb}
                        onChange={() => set("location", l.suburb)}
                        className="sr-only"
                      />
                      {l.suburb}
                    </label>
                  ))}
                </div>
                {err("location")}
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="r-date" className="mb-1.5 block text-sm font-medium">
                    Date
                  </label>
                  <input
                    {...a11y("date")}
                    className="field"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={(e) => set("date", e.target.value)}
                  />
                  {err("date")}
                </div>
                <div>
                  <label htmlFor="r-time" className="mb-1.5 block text-sm font-medium">
                    Time
                  </label>
                  <select
                    {...a11y("time")}
                    className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%234a433c%22 stroke-width=%221.6%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10"
                    value={form.time}
                    onChange={(e) => set("time", e.target.value)}
                  >
                    <option value="">Select a time</option>
                    <optgroup label="Lunch">
                      {SLOTS.filter((s) => s < "16:00").map((s) => (
                        <option key={s} value={s}>
                          {formatTime(s)}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Dinner">
                      {SLOTS.filter((s) => s >= "16:00").map((s) => (
                        <option key={s} value={s}>
                          {formatTime(s)}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  {err("time")}
                </div>
              </div>

              <div>
                <span id="r-guests-label" className="mb-1.5 block text-sm font-medium">
                  Guests
                </span>
                <div
                  role="group"
                  aria-labelledby="r-guests-label"
                  className="flex h-12 w-fit items-center rounded-xl border border-line bg-[#fffdf9]"
                >
                  <button
                    type="button"
                    aria-label="Fewer guests"
                    disabled={form.guests <= MIN_GUESTS}
                    onClick={() => set("guests", form.guests - 1)}
                    className="grid size-12 place-items-center rounded-l-xl disabled:opacity-30"
                  >
                    <Minus size={18} />
                  </button>
                  <output aria-live="polite" className="w-16 text-center font-semibold">
                    {form.guests}
                  </output>
                  <button
                    type="button"
                    aria-label="More guests"
                    disabled={form.guests >= MAX_GUESTS}
                    onClick={() => set("guests", form.guests + 1)}
                    className="grid size-12 place-items-center rounded-r-xl disabled:opacity-30"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <p className="mt-1.5 text-sm text-muted">
                  More than {MAX_GUESTS}? Call us and we&rsquo;ll sort it.
                </p>
              </div>

              <button type="submit" className="btn btn-primary mt-2 w-full">
                Request booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
