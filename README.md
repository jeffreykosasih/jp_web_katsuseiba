# Katsu Seiba

A concept website for a Japanese katsu restaurant in Melbourne: menu, story, three locations and a table-booking form.

**Live:** [katsuseiba.vercel.app](https://katsuseiba.vercel.app)

## Features

- Menu with photos, descriptions, tags and prices
- Three locations with Google Maps directions and tap-to-call
- Booking form with location picker, date and time slots, a guest counter, validation and a confirmation screen (front end only; it doesn't store bookings yet)
- Works at any screen size, with keyboard and screen-reader support

## Stack

Next.js 15 (App Router), TypeScript, Tailwind CSS 4.

## Editing content

Copy, dishes, locations and photo credits live in `lib/content.ts`. Booking time slots are at the top of `components/Reservation.tsx`.

## Running locally

```bash
npm install
npm run dev
```

Photos from Unsplash and Pexels; credits are in the site footer.
