"use client";

import { useEffect } from "react";

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
    <html lang="en">
      <body>
        <main
          style={{
            alignItems: "center",
            background: "#000000",
            color: "#EEF0FF",
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
                color: "#8B92C9",
                fontFamily: "monospace",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Runtime recovered
            </p>
            <h1 style={{ fontSize: 32, margin: "16px 0 0" }}>
              Something went wrong.
            </h1>
            <p style={{ color: "#C7CBEA", fontSize: 14, lineHeight: 1.6 }}>
              Refresh the experience to load the latest version of the site.
            </p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                background: "#8B5CF6",
                border: 0,
                borderRadius: 999,
                color: "#0A0E27",
                cursor: "pointer",
                fontWeight: 700,
                marginTop: 24,
                padding: "12px 24px",
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
