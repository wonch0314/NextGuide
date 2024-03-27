export default function layout({ slot1, slot2, children }) {
  return (
    <div>
      <h1>LAYOUT</h1>
      {children}
      {slot1}
      {slot2}
    </div>
  );
}
