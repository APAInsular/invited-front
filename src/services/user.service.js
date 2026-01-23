import apiClient from "../config/axiosConfig";

export async function getUser() {
    const result = await apiClient.get('/api/user');
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ", result);
    
    const { data } = result;
    return data;
}