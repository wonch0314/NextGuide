import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <div>
        <h1>FILE-CONVENTION의 Layout입니다.</h1>
        <p>file-convention 디렉토리 내에 있는 페이지에는 모두 표시됩니다.</p>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/file-system-routing/file-convention">home</Link>
          <Link href="/file-system-routing/file-convention/loading">
            loading.js
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
