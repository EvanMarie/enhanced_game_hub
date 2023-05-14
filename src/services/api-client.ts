import axios, { AxiosRequestConfig } from "axios"

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c8ec0a603e934670b2bbbbd3f6d141c8"
    },
})

export interface GetResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

export class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<GetResponse<T>>(this.endpoint, config)
        .then(response => response.data)
    }
};

export default APIClient;
