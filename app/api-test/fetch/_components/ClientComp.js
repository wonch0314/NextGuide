"use client";
import { testTodoData } from "./api";

export default function ClientComp() {
  const clientId = { "devpro-client-id": "UUIDV4 VALUE" };
  return (
    <div>
      <h1>CLIENT AREA</h1>
      <button onClick={() => testTodoData(clientId)}>GO TEST</button>
    </div>
  );
}
