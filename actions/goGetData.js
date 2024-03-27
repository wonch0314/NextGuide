import axios from "axios";
import { redirect } from "next/navigation";

export const goGetData = async () => {
  const res = await axios.get("http://127.0.0.1:3000/api/wait", {
    method: "GET",
    cache: "force-cache",
  });
  redirect("#");
  return res.data;
};
