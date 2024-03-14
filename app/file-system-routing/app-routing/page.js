import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="layoutBox">
        <h2>App Routing</h2>
      </div>
      <hr />
      <p>프로젝트 생성 후, app 디렉토리에 있는 폴더는 Routing 대상이 됩니다.</p>
      <p>그림은 추후 추가 예정</p>

      <p>그림처럼 도메인/dashboard/settings이 URL Path가 됩니다.</p>

      <div>
        <p>예를 들어 현재 이 디렉토리에의 구조는 다음과 같습니다.</p>
        <div className="code-box">
          <p>/app-routing</p>
          <p>┗ /archi-team</p>
          <p>┗ /uiux-team</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link href="/file-system-routing/app-routing/archi-team">
            - ARCHI-TEAM
          </Link>
          <Link href="/file-system-routing/app-routing/uiux-team">
            - UIUX-TEAM
          </Link>
        </div>
      </div>
    </div>
  );
}
