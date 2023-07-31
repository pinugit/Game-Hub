import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "4d5094b670284c238030c4d71c3ef4f3" },
});
