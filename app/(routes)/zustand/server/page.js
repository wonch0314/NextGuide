import MyButton from "@/components/button";
import useMyStore from "@/lib/stores/myStore";

export default function page() {
  const { name, setName } = useMyStore.getState();

  setName("SERVER SERVER SERVER");

  return (
    <div>
      <h1>Server PAGE</h1>
      <h2>My Name is {name}</h2>
    </div>
  );
}
