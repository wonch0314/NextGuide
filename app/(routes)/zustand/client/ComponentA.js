import useBookStore from "@/lib/stores/myBook";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  const { bookName, setBookName } = useBookStore();

  return (
    <div>
      <h1>Component A</h1>
      <h3>My Book Is {bookName}</h3>
      <ComponentB />
    </div>
  );
}
