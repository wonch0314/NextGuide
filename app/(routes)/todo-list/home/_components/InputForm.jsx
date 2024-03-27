"use client";

import { addTodo } from "@/actions/todo/addTodo";
import { useRouter } from "next/navigation";

export default function InputForm() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;
    const title = target.title.value;
    const body = target.body.value;
    console.log(title, body);
    await addTodo({ title, body });
  };

  return (
    <div>
      <h3>INPUT FORM AREA</h3>

      <form
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
        onSubmit={onSubmit}
      >
        <label htmlFor="title">Todo Title</label>
        <input type="text" name="title" id="title" defaultValue={"NEW TITLE"} />
        <label htmlFor="body">Todo Body</label>
        <input type="text" name="body" id="body" defaultValue={"NEW BODY"} />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
