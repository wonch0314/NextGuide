export default function layout({ slot, slot2, slot3, children }) {
  const routeContent =
    "이 layout.js의 위치는 /file-system-routing/parallel-route/layout.js 입니다.";
  return (
    <div>
      <div className="layoutBox">
        <h2>Parallel Route (병렬 라우트)</h2>

        {/* {slot} */}
        {slot2}
        {slot3}
        <p className="directory">{routeContent}</p>
      </div>
      {children}
    </div>
  );
}
