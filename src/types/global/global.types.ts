/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

export type ApiResponse<T = any> = {
    data: T;
    message: string;
};

export type ApiError = {
    message: string;
};

export interface IAddComponentProps {
    setOpen: (open: boolean) => void;
    refetch: () => void;
}
