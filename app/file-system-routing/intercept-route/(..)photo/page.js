export default function page() {
  const content = `
        원래 Route 대로면 /file-system-routing/photo/page.js가 열려야 하지만,
        Routing을 가로채 현재 페이지가 열렸습니다. \n
        현재 페이지에서 새로고침을 한다면 현재 페이지가 아닌 원래 Route 대로 열렸어야 할 Component가 열립니다.
        \n\n
        비슷한 예로, PC 인스타그램에서 게시글을 클릭한 후에, 새로고침을 하면 원래처럼 Popup이 아닌 게시글 형태로 열리게 됩니다.
    `;
  return (
    <div>
      <h3>Intercepted Component - Photo's page.js</h3>
      <p>{content}</p>
    </div>
  );
}
