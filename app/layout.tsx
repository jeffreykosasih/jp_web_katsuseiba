import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const shippori = Shippori_Mincho({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katsuseiba.vercel.app"),
  title: "Katsu Seiba | Japanese katsu & curry in Melbourne",
  description:
    "Crisp, panko-crusted katsu and slow-simmered Japanese curry. Three Melbourne locations: Maribyrnong, Port Melbourne and Canterbury.",
  openGraph: {
    title: "Katsu Seiba | Japanese katsu & curry in Melbourne",
    description:
      "Crisp katsu and slow-simmered Japanese curry across three Melbourne locations.",
    images: [{ url: "/images/katsu-1.jpg", width: 1920, height: 1280 }],
    locale: "en_AU",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#f4eee4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${inter.variable} ${shippori.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
