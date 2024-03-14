export const goGetDataFetch = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/wait", {
    method: "GET",
    cache: "force-cache",
  });
  const jsonRes = await res.json();
  console.table(jsonRes);
  return jsonRes;
};
