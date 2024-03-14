import Link from "next/link";

export default function layout({ children }) {
  const BASE = "/file-system-routing/dynamic-routing";
  return (
    <div>
      <div className="layoutBox">
        <h2>Dynamic Routing</h2>
        <div className="flexBox" style={{ gap: 20 }}>
          <Link href={BASE}>home</Link>
          <Link href={BASE + "/1"}>Single Parameter: /1</Link>
          <Link href={BASE + "/12345"}>Single Parameter: /12345</Link>
          <Link href={BASE + "/chan/ryu/archi/junior"}>
            Multi Parameter: /chan/ryu/archi/junior
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
