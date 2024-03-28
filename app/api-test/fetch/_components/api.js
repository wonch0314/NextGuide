"use server";
import { revalidatePath } from "next/cache";
import { setHeaders } from "./settings";

export const testTodoData = async (clientId) => {
  const url = `${process.env.SERVER_URL}/memo`;
  const headers = setHeaders(clientId);

  const data = JSON.stringify({
    title: "OKAY",
    body: "BODY from server-action",
  });
  const method = "POST";
  const body = { headers, body: data, method };

  const res = await fetch(url, body);
  const res_data = await res.json();
  // console.log(res_data);

  revalidatePath("/todo-list/home");
};
