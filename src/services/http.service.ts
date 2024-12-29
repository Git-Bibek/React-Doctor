import axiosConfig from "../config/axios.config.tsx";


interface HeaderConfigProps {
    auth?: boolean;
    file?: boolean;
    params?: any;
}

class HttpServices {

    private headers = {};
    private params = {};
    private setHeaders = (config: HeaderConfigProps) => {
        if (config && config.auth) {
            const token = localStorage.getItem("_at") || null;
            if (!token) {
                throw new Error("Login first to access this resource");
            } else {
                this.headers = {
                    ...this.headers,
                    "Authorization": `Bearer ${token}`
                }
            }
        }

        if (config && config.file) {
            this.headers = {
                ...this.headers,
                "Content-Type": "multipart/form-data"
            };
        }
        if (config && config.params) {
            this.params = {
                ...this.params,
                ...config.params
            }
        }
    }
    postRequest = async (url: string, data: any, config?: any) => {
        try {
            this.setHeaders(config)
            return await axiosConfig.post(url, data, {headers: this.headers, params: this.params});

        } catch (exception) {
            throw exception
        }
    }

    getRequest = async (url: string, config?: any) => {
        try {
            this.setHeaders(config)
            return await axiosConfig.get(url, {headers: this.headers, params: this.params});
        } catch (exception) {
            throw exception
        }
    }
    deleteRequest = async (url: string, config?: any) => {
        try {
            this.setHeaders(config)
            return await axiosConfig.delete(url, {headers: this.headers, params: this.params});
        } catch (exception) {
            throw exception
        }
    }
    putRequest = async (url: string, data: any, config?: any) => {
        try {
            this.setHeaders(config)
            return await axiosConfig.put(url, data, {headers: this.headers, params: this.params});
        } catch (exception) {
            throw exception
        }
    }
}

export default HttpServices;