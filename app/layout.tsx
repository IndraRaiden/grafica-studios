import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ClientRecovery from "@/components/client-recovery";

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
  title: "BlackStronghold - AI-Powered Web Apps for Modern Business",
  description: "BlackStronghold builds AI-powered web applications — from lead management and ticket triage to vehicle tracking — engineered to automate and scale your operations.",
  icons: {
    icon: "/logostrong.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
