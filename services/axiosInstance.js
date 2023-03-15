import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pantomime.iran.liara.run",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials:true
});

// axiosInstance.interceptors.request.use((config) => {

//     const token =typeof window !== 'undefined' && localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails'))['token'] : '';
//     config.params = config.params || {};
//     config.params['auth'] = token;
//     config.headers.common = { 'Authorization': 'Bearer ' + token }
//     return config;
// });

export default axiosInstance;