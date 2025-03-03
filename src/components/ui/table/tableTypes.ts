import { ReactNode } from "react";

export interface IFilter {
    headerName: string;
    filtering: string;
    setFiltering: React.Dispatch<React.SetStateAction<string>>;
    table: object;
    data: [];
    children: ReactNode;
    buttonName: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    userName?: string;
    usersNumber?: number;
}