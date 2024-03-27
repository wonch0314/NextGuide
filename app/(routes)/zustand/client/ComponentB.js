"use client";

import useBookStore from "@/lib/stores/myBook";
import { useEffect } from "react";

export default function ComponentA() {
  const { bookName, setBookName } = useBookStore();

  const changeName = () => {
    setBookName("CHANGED FROM SERVER");
  };

  useEffect(() => {
    setBookName("UseEffect");
  }, []);

  return (
    <div>
      <h1>Component B</h1>
      <h3>My Book Is {bookName}</h3>
      <button onClick={() => setBookName("CHANGED BOOK NAME")}>바꾸자!</button>
    </div>
  );
}
