const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function page() {
  await delay(3000);
  return (
    <div>
      <h2>로딩 완료! /loading/page.js 입니다.</h2>
      <p className="directory">
        DIRECTORY: /file-system-routing/file-convention/loading/page.js
      </p>
    </div>
  );
}
