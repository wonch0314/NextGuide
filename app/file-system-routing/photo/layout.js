export default function layout({ children }) {
  return (
    <div>
      <div className="layoutBox">
        <h2>Photo Component - layout.js</h2>
        <p className="directory">
          `현재 이 파일들의 위치는 /file-system-route/photo 입니다.`
        </p>
      </div>
      {children}
    </div>
  );
}
