import axios from "axios";

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

export default requests;