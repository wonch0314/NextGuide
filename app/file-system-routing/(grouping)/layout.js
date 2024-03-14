export default function layout({ children }) {
  const routeContent = `현재 이 Layuout의 디렉토리는 "/file-system-routing/(grouping)/layout.js" 입니다.`;
  return (
    <div>
      <div className="layoutBox">
        <h2>Route Group</h2>
        <ul>
          File System에서 Directory 이름을 괄호() 안에 작성하면 URL PATH에
          영향을 주지 않습니다.
        </ul>
        <ul>
          page.js를 만드는 것은 불가능하지만, layout.js는 만들 수 있습니다.
        </ul>
        <p className="directory">{routeContent}</p>
      </div>
      {children}
    </div>
  );
}
