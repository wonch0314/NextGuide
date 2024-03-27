import Slot1 from "./component/slot1";
import Slot2 from "../layout-parallel/@slot2/page";

export default function layout({ children }) {
  return (
    <div>
      <h1>LAYOUT</h1>
      {children}
      <Slot1 />
      <Slot2 />
    </div>
  );
}
