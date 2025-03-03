// src/hooks/useUserData.ts
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/api";

export const useUserData = () => {
    return useQuery({
        queryKey: ["allUserData"],
        queryFn: () => getUsers(),
    });
};