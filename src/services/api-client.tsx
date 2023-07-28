import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "3e8201836bfa41969bc044b8ec2aebfe" },
});
