import delay from "@/components/delayTool";

export default async function slot() {
  await delay(3000);
  return <div className="emphasize">Slot 로딩 완료</div>;
}
