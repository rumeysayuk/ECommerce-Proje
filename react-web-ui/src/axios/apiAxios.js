import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://localhost:5000/api/",
});

apiAxios.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

apiAxios.interceptors.request.use((req) => {
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (profile) {
    req.headers.user = profile;
  }

  return req;
});

export default apiAxios;
