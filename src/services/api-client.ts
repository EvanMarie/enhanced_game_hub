import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c8ec0a603e934670b2bbbbd3f6d141c8"
    },
})

export interface GetResponse<T> {
    count: number;
    results: T[];
}