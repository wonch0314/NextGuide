import delay from "@/app/components/delayTool";

export default async function slot() {
  await delay(7000);
  return <div className="emphasize">Slot3 로딩 완료</div>;
}
