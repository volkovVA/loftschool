// import axios from "axios";

// const token = localStorage.getItem("token");

// if(!token) console.warn("Токен отсутствует");

// const requests = axios.create({
//   baseURL: "https://webdev-api.loftschool.com/",
//   headers: {
//     "Authorization": `Bearer ${token}`
//   }
// });

// export default requests;



import axios from 'axios';
import { getToken, setAuthHttpHeaderToAxios, setToken } from '../admin/helpers/token';

// const BASE_URL = 'https://webdev-api.loftschool.com/'
const BASE_URL = 'https://webdev-api.loftschool.com/'
const USER_ID = 267

axios.defaults.baseURL = process.env.BASE_URL;

const token = getToken();
if (token) setAuthHttpHeaderToAxios(axios, token);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return axios.post('/refreshToken').then((response) => {
        const token = response.data.token;
        setToken(token);
        setAuthHttpHeaderToAxios(axios, token);
        originalRequest.headers['Authorization'] = `Bearer ${token}`;

        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axios;
