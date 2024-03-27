"use server";

import { revalidatePath } from "next/cache";

export const addTodo = async (todoData) => {
  const res = await fetch("http://127.0.0.1:3001/memo", {
    method: "POST",
    body: JSON.stringify(todoData),
  });
  revalidatePath("/todo-list/home");
};
