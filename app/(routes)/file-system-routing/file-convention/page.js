import Image from "next/image";

const contents = {
  "page.js":
    "app/dashboard/settings 디렉토리 내부에 page.js가 있다면, BASE_URL/dashboard/settings로 접근했을 때 라우팅 되는 페이지가 됩니다.",
  "layout.js":
    "특정 segment에 layout.js 를 만들 수 있다. 그러면 해당 segment에 포함되는 하위 segments와 children들에 공통된 Layout를 적용할 수 있다",
  "loading.js":
    "segment와 children 요소를 로딩하는 동안 화면에 표시할 컴포넌트 입니다.",
  "not-found.js":
    "segment와 children 요소가 존재하지 않을 때 화면에 표시할 컴포넌트 입니다. (루트 디렉토리 (app)에만 생성해야한다.)",
  "error.js":
    "segment와 children 요소를 불러오는 중에 에러가 발생했을 때 해당 페이지가 렌더링 됩니다.",
  기타: "route.js, default.js 등은 추후에 다루게 됩니다.",
};

export default function page() {
  return (
    <div>
      <h2>File Conventions</h2>
      <p className="directory">
        DIRECTORY: /file-system-routing/file-convention
      </p>
      <hr />
      <Image
        width="600"
        height="350"
        src="/images/file-convention.png"
        alt="file-convention"
      />
      {Object.entries(contents).map(([key, value]) => {
        return (
          <>
            <h3>{key}</h3>
            <p>{value}</p>
          </>
        );
      })}
    </div>
  );
}
