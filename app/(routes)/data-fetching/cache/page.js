import { goGetData } from "@/actions/goGetData";
import CallAgain from "./CallAgain";

export default async function page() {
  // const data = await goGetData();

  return (
    <div>
      <h1>PAGE</h1>
      <CallAgain />
    </div>
  );
}
