export default function page() {
  return (
    <div>
      <h2>Fetching Data on ther Server with fetch</h2>
      <p>
        Next.js에서 fetch Web API를 이용해 캐싱과 revalidating 시간을 설정할 수
        있다.
      </p>
      <p>(샘플 이미지 영역 - 추후 추가)</p>
      <h2>Caching Data</h2>
      <p>
        fetch의 return 값을 캐싱하여, 같은 요청에 대해서는 매 요청마다 데이터
        소스 접근이 필요없다.
      </p>
      <p>
        * 추가 설정으로 특정 시간마다 새롭게 캐시하거나, 캐시를 하지 않거나
        선택할 수 있다.
      </p>
      <p>(샘플 코드 작성 영역 - 추후 추가)</p>
      <hr />
      <h2>Fetching Data on the Server</h2>
      <p>
        가능하면, 데이터 Fetching은 서버에서Server Component로 하는 것은 다음과
        같은 이유가 있습니다.
      </p>
      <ul>
        <li>백엔드 데이터 리소스(DB)에 직접 접근이 가능하다.</li>
        <li>민감한 정보의 노출을 방지할 수 있다. (API Key, Access Token 등)</li>
        <li>
          정보를 불러오는 작업, 렌더링 작업을 동일한 환경에서 수행할 수 있다.
        </li>
        <li>클라이언트 서버(Next 서버)의 waterfall을 줄일 수 있다.</li>
      </ul>
    </div>
  );
}
