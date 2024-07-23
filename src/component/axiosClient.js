import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    // withCredentials: true,
    // credentials: 'include'
})

export default axiosClient;