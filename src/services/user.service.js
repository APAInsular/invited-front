import apiClient from "../config/axiosConfig";

export async function getUser() {
    const { data } = await apiClient.get('/api/user');
    return data;
}