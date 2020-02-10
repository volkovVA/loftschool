import axios from "axios";

const token = localStorage.getItem("token");

if(!token) console.warn("Токен отсутствует");

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export default requests;