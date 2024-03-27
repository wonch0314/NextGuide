import InputForm from "./_components/InputForm";
import TodoTable from "./_components/TodoTable";

export default async function page() {
  const raw_res = await fetch("http://127.0.0.1:3001/memo");
  const data = await raw_res.json();
  data.reverse();

  console.log(data);
  return (
    <div>
      <h1>TODO LIST</h1>
      <h2>DATA</h2>
      <div
        style={{
          backgroundColor: "#F8F8F8",
          padding: "12px",
          border: "solid 2px",
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        {JSON.stringify(data)}
      </div>
      <InputForm />
      <TodoTable data={data} />
    </div>
  );
}
