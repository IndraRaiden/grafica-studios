"use client";

import { useEffect } from "react";
import { defaultCopy } from "@/lib/i18n";

export default function Error({
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
    <main className="flex min-h-screen items-center justify-center bg-brand-ink px-6 text-center text-brand-paper">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-muted">
          {defaultCopy.error.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold">{defaultCopy.error.title}</h1>
        <p className="mt-4 text-sm leading-6 text-brand-body">{defaultCopy.error.body}</p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="mt-8 rounded-full bg-brand-accent px-6 py-3 text-sm font-bold text-brand-on-accent"
        >
          {defaultCopy.error.retry}
        </button>
      </div>
    </main>
  );
}
