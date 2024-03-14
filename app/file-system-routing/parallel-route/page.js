export default function page() {
  return (
    <div>
      <h2>병렬 라우트</h2>
      <p>
        위에서 볼 수 있듯이, 페이지의 모든 요소가 loading 되지 않았음에도 다른
        부분이 먼저 렌더링된다.
      </p>
      <p>그 후에, slot들의 로딩이 완료되었을 때 화면에 표시해주게 된다.</p>
      <p>
        이 기능을 활용하여 조건부 렌더링, Modal 창 등 다양하게 쓰일 수 있다.
        (추후에 다른 페이지에서 설명을 이어가겠습니다.)
      </p>
      <p>
        *주의사항: 개발할 때 slot을 추가한 후에 `npm run dev`를 다시 해주어야
        한다.
      </p>
    </div>
  );
}
