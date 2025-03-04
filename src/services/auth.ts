import { axiosInstance } from "@/helpers/axios/axiosInstance";


export const authService = {
    login: async (credentials: { email: string; password: string }) => {
        const response = await axiosInstance.post("/auth/login", credentials);
        return response.data;
    },
};