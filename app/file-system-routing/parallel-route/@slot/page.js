import delay from "@/app/components/delayTool";

export default async function slot() {
  await delay(100);
  return <div className="emphasize">Slot 로딩 완료</div>;
}
