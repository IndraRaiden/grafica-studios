"use client";

import { useEffect } from "react";

const RECOVERY_KEY = "blackstronghold:chunk-reload-attempted";
const RECOVERY_COOLDOWN_MS = 60_000;

function isRecoverableChunkError(reason: unknown): boolean {
  const message =
    reason instanceof Error
      ? reason.message
      : typeof reason === "string"
        ? reason
        : "";

  return /ChunkLoadError|Loading chunk|failed to fetch dynamically imported module|Importing a module script failed/i.test(
    message
  );
}

function reloadOnceForFreshAssets(reason: unknown) {
  if (!isRecoverableChunkError(reason)) return;

  try {
    const lastAttempt = Number(sessionStorage.getItem(RECOVERY_KEY) ?? 0);
    if (Date.now() - lastAttempt < RECOVERY_COOLDOWN_MS) return;
    sessionStorage.setItem(RECOVERY_KEY, String(Date.now()));
  } catch {
    // If storage is unavailable, still prefer a single best-effort reload.
  }

  window.location.reload();
}

export default function ClientRecovery() {
  useEffect(() => {
    const clearRecoveryFlag = window.setTimeout(() => {
      try {
        sessionStorage.removeItem(RECOVERY_KEY);
      } catch {}
    }, RECOVERY_COOLDOWN_MS);

    const onError = (event: ErrorEvent) => {
      reloadOnceForFreshAssets(event.error ?? event.message);
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      reloadOnceForFreshAssets(event.reason);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.clearTimeout(clearRecoveryFlag);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
