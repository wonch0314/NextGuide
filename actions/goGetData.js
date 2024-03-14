import axios from "axios";

export const goGetData = async () => {
  const res = await axios.get("http://127.0.0.1:3000/api/wait");
  return res.data;
};
