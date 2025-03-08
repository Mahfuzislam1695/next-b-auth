import axios from "axios";
import { getBaseUrl } from "@/config/envConfig";
import { axiosInstance } from "@/helpers/axios/axiosInstance";

const url = "https://jsonplaceholder.typicode.com";



export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};

export const getUserAdmin = async () => {
    try {
        const response = await axiosInstance.get(`${getBaseUrl()}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};

