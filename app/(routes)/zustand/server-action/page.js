"use server";
import MyButton from "@/components/button";
import useMyStore from "@/lib/stores/myStore";

export default async function page() {
  const { name, setName } = useMyStore.getState();

  const changeName = async () => {
    fetch("http://127.0.0.1:3000/api/name");
    setName("내맘이야");
  };

  await changeName();
  // setName("내맘이야");

  return (
    <div>
      <h1>Server-Action PAGE</h1>
      <h2>My Name is {name}</h2>
    </div>
  );
}
