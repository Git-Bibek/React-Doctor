import axios, {AxiosResponse} from "axios";

const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
})
axiosConfig.interceptors.response.use((response: AxiosResponse) => {
   /* console.log("success from axios interceptor", response.data);*/
    return Promise.resolve(response.data)
}, (error: any) => {
    return Promise.reject(error)
})

export default axiosConfig