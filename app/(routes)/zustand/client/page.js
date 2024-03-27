"use client";

import MyButton from "@/components/button";
import useMyStore from "@/lib/stores/myStore";
import useBookStore from "@/lib/stores/myBook";
import { useEffect } from "react";
import ComponentA from "./ComponentA";

export default function page() {
  const { name, setName } = useMyStore();
  const { bookName, setBookName } = useBookStore();

  const changeName = () => {
    setName("CLIETN HAS CHANGED THIS NAME");
  };

  useEffect(() => {
    setTimeout(() => {
      setName("2초 지남");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>CLIENT PAGE</h1>
      <h2>My Name is {name}</h2>
      <MyButton onClick={changeName}>CHANGE NAME</MyButton>
      <hr />
      <h2>My Book is {bookName}</h2>
      <ComponentA />
    </div>
  );
}
