import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.95.4.207:8001/api/v1",
    headers: {
        Accept: "application/json",
    },
});