import { use } from "react";
import type { User } from "../lib/fetchUser";

type Props = {
  messagePromise: Promise<string>;
  userPromise: Promise<User>;
};

export default function MessageComponent({ messagePromise, userPromise }: Props) {
  const message = use(messagePromise);
  const user = use(userPromise);

  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: 400,
        padding: "1rem",
        border: "1px solid #bbb",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h3>Повідомлення:</h3>
      <p>{message}</p>

      <h3>Дані користувача:</h3>
      <ul>
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Ім'я:</strong> {user.name}</li>
        <li><strong>Email:</strong> {user.email}</li>
      </ul>
    </div>
  );
}
