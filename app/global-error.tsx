"use client";

import { useEffect } from "react";
import { theme } from "@/lib/brand";
import { defaultCopy, defaultLocale } from "@/lib/i18n";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang={defaultLocale}>
      <body>
        <main
          style={{
            alignItems: "center",
            background: theme.INK,
            color: theme.PAPER,
            display: "flex",
            fontFamily: "system-ui, sans-serif",
            justifyContent: "center",
            minHeight: "100vh",
            padding: 24,
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <p
              style={{
                color: theme.MUTED,
                fontFamily: "monospace",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {defaultCopy.error.eyebrow}
            </p>
            <h1 style={{ fontSize: 32, margin: "16px 0 0" }}>{defaultCopy.error.title}</h1>
            <p style={{ color: theme.BODY, fontSize: 14, lineHeight: 1.6 }}>
              {defaultCopy.error.body}
            </p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                background: theme.BLUE,
                border: 0,
                borderRadius: 999,
                color: theme.ON_ACCENT,
                cursor: "pointer",
                fontWeight: 700,
                marginTop: 24,
                padding: "12px 24px",
              }}
            >
              {defaultCopy.error.retry}
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
