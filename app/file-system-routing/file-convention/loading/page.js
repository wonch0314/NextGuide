const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function page() {
  await delay(3000);
  return (
    <div>
      <h2>Loading 페이지 입니다.</h2>
      <p className="directory">
        DIRECTORY: /file-system-routing/file-convention/loading/page.js
      </p>
    </div>
  );
}
