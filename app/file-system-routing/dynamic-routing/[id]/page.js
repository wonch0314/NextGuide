export default function page({ params }) {
  return (
    <div>
      <div style={{ fontSize: "24px" }}>
        Dynamic Parameter (Single): {params.id}
      </div>
      <p className="directory">
        현재 파일의 Directory는
        "/file-system-routing/dynamic-routing/[id]/page.js 입니다."
      </p>
    </div>
  );
}
