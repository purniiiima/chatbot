import axios from "axios";

export const askBot = async (query) => {
  const res = await axios.post("http://localhost:5000/ask", { query });
  return res.data.answer;
};