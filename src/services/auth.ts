import { axiosInstance } from "@/helpers/axios/axiosInstance";


export const authService = {
    login: async (credentials: { email: string; password: string }) => {
        console.log("login function called", credentials);
        const response = await axiosInstance.post("/auth/login", credentials);
        console.log("response", response);

        return response.data;
    },
};