// Interface for EditUser component
export interface IUserEditProps {
    setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: () => void;
}

// Interface for AddUser component
export interface IUserAddProps {
    setOpen: (open: boolean) => void;
    refetch: () => void;
}

export interface IUserTableProps {
    table: object;
    isLoading: boolean;
    filtering: string;
    setFiltering: React.Dispatch<React.SetStateAction<string>>;
    filterModalOpen: boolean;
    setFilterModalOpen: (value: boolean) => void;
    allUserData: [];
    refetch: () => void;
}

export interface EditDataProps {
    name: string;
    email: string;
    gender: string;
}

// export interface IFilter {
//     headerName: string;
//     filtering: string;
//     setFiltering: React.Dispatch<React.SetStateAction<string>>;
//     table: object;
//     data: [];
//     children: ReactNode;
//     buttonName: string;
//     open: boolean;
//     setOpen: (open: boolean) => void;
//     userName?: string;
//     usersNumber?: number;
// }