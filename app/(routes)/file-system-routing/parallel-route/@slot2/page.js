import delay from "@/components/delayTool";

export default async function slot() {
  await delay(5000);
  return <div className="emphasize">Slot2 로딩 완료</div>;
}
