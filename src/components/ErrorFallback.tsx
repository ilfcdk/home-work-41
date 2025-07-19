'use client';

import type { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function Fallback({ error }: { error: Error }) {
  return (
    <div style={{ color: "red", padding: "1rem", border: "1px solid red" }}>
      <h2>Сталася помилка</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={Fallback}>
      {children}
    </ReactErrorBoundary>
  );
}
