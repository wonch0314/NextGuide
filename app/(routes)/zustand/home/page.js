import useMyStore from "@/lib/stores/myStore";

export default function page() {
  const { name } = useMyStore.getState();
  return (
    <div>
      <h1>Home Page</h1>
      <p>{name}</p>
    </div>
  );
}
