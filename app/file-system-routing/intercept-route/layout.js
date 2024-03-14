export default function layout({ children }) {
  return (
    <div>
      <div className="layoutBox">
        <h2>Intercept Route</h2>
        <p className="directory">
          `현재 이 파일들의 위치는 /file-system-route/intercept-route 입니다.`
        </p>
      </div>
      {children}
    </div>
  );
}
