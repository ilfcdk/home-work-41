import { fetchMessage } from "./lib/fetchMessage";
import { fetchUser } from "./lib/fetchUser";
import MessageComponent from "./components/MessageComponent";
import ErrorBoundary from "./components/ErrorFallback";
import { Suspense } from "react";

export default function HomePage() {
  const messagePromise = fetchMessage();
  const userPromise = fetchUser();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Домашнє завдання: use() + Suspense + ErrorBoundary</h1>

      <ErrorBoundary>
        <Suspense fallback={<p>Завантаження даних...</p>}>
          <MessageComponent
            messagePromise={messagePromise}
            userPromise={userPromise}
          />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
