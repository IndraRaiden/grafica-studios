"use client";

import { useEffect } from "react";

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
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-[#EEF0FF]">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8B92C9]">
          Runtime recovered
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Something went wrong.</h1>
        <p className="mt-4 text-sm leading-6 text-[#C7CBEA]">
          Refresh the experience to load the latest version of the site.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="mt-8 rounded-full bg-[#8B5CF6] px-6 py-3 text-sm font-bold text-[#0A0E27]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
