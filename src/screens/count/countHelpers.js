import axios from "axios";

export async function getCount() {
  const res = await axios.get("http://localhost:5777/api/sample/count");
  return res.data.count;
}
