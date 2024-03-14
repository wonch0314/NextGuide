export default function page() {
  const content = `"/user/12" 혹은 "/post/9"와 같이 특정 ID를 Parameter로 가지는 경우, Dynamic Routing이 필요하다.`;
  return (
    <div>
      <h2>Dynamic Routing</h2>
      <p>{content}</p>
    </div>
  );
}
