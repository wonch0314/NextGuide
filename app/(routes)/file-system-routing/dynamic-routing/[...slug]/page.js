export default function page({ params }) {
  const { slug } = params;

  return (
    <div>
      <h2>Dynamic Parameter (Multi)</h2>
      {Object.entries(slug).map(([key, value]) => {
        return (
          <p style={{ fontSize: "24px" }}>
            - {key}번째 Parameter: {value}
          </p>
        );
      })}
      <p className="directory">
        현재 파일의 Directory는
        "/file-system-routing/dynamic-routing/[...slug]/page.js 입니다."
      </p>
    </div>
  );
}
