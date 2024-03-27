export default function page() {
  const routeContent = `현재 이 page.js의 위치는 "/file-system-routing/(grouping)/route-group/page.js 입니다."`;
  return (
    <div>
      <h2>Route Group의 page.js 입니다.</h2>
      <p>
        Directory를 보면 알 수 있듯이 (grouping)으로 디렉토리를 생성했음에도 URL
        PATH 에는 "(grouping)이 없는 것을 확인할 수 있습니다."
      </p>
      <p className="directory">{routeContent}</p>
    </div>
  );
}
