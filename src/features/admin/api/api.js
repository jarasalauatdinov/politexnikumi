import { http } from "../../../http/http"

export const adminApi = {
    getLists: async () => {
        const res = await http.get("/"); 
        return res.data;
    }
}
