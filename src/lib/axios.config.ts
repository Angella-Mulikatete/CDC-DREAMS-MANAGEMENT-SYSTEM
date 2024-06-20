import axios from "axios";
import { API_URL } from "./apiEndpoint";

const axiosClient = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: API_URL,
    headers:{
        Accept: "application/json"
    },
})

export default axiosClient;