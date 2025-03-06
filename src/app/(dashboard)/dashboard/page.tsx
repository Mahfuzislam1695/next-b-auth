"use client"

import { getUsers } from "@/api/users";
import { getUserInfo } from "@/services/auth.service";
import { toast } from "react-toastify";

export default function Page() {
    const user = getUserInfo();

    console.log("user", user);

    const fetchUsers = async () => {
        try {
            const users = await getUsers();
            toast.success("Users fetched successfully!");
            console.log(users);
        } catch (error) {
            toast.error("Failed to fetch users!");
            console.error(error);
        }
    };


    return <button className="cursor-pointer" onClick={fetchUsers}>Fetch Users</button>
}