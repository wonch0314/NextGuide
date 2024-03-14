const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const GET = async () => {
  await delay(6000);
  return Response.json({ message: "HELLO WORLD" }, { status: 200 });
};
