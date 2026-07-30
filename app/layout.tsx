import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ClientRecovery from "@/components/client-recovery";
import { LocaleProvider } from "@/components/locale-provider";
import { brand, theme } from "@/lib/brand";
import { defaultCopy, defaultLocale } from "@/lib/i18n";

const inter = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Outfit({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: defaultCopy.meta.title,
  description: defaultCopy.meta.description,
  // Omitted when the brand ships no favicon — Next then serves app/favicon.ico.
  ...(brand.logo.favicon
    ? {
        icons: {
          icon: brand.logo.favicon,
          shortcut: brand.logo.favicon,
          apple: brand.logo.favicon,
        },
      }
    : {}),
};

/* Brand palette as CSS custom properties — read by the brand-* Tailwind utilities. */
const brandVars = `:root{${Object.entries({
  "--brand-ink": theme.INK,
  "--brand-card": theme.CARD,
  "--brand-paper": theme.PAPER,
  "--brand-body": theme.BODY,
  "--brand-muted": theme.MUTED,
  "--brand-accent": theme.BLUE,
  "--brand-violet": theme.VIOLET,
  "--brand-royal": theme.ROYAL,
  "--brand-spark": theme.SPARK,
  "--brand-on-accent": theme.ON_ACCENT,
  "--brand-glow": theme.GLOW,
})
  .map(([k, v]) => `${k}:${v}`)
  .join(";")}}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandVars }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Script
          id="browser-api-fallbacks"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  if (typeof window === "undefined") return;
  if (!("IntersectionObserver" in window)) {
    window.IntersectionObserver = function (callback) {
      this._callback = callback;
      this._elements = [];
    };
    window.IntersectionObserver.prototype.observe = function (target) {
      var self = this;
      this._elements.push(target);
      window.setTimeout(function () {
        self._callback([{ isIntersecting: true, intersectionRatio: 1, target: target }], self);
      }, 0);
    };
    window.IntersectionObserver.prototype.unobserve = function (target) {
      this._elements = this._elements.filter(function (el) { return el !== target; });
    };
    window.IntersectionObserver.prototype.disconnect = function () {
      this._elements = [];
    };
    window.IntersectionObserver.prototype.takeRecords = function () {
      return [];
    };
  }
  if (!("ResizeObserver" in window)) {
    window.ResizeObserver = function (callback) {
      this._callback = callback;
    };
    window.ResizeObserver.prototype.observe = function () {};
    window.ResizeObserver.prototype.unobserve = function () {};
    window.ResizeObserver.prototype.disconnect = function () {};
  }
})();
            `,
          }}
        />
        <ClientRecovery />
        <LocaleProvider>
          <Navbar />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
