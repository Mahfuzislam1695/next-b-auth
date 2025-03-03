"use client";

import { useState } from "react";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState } from "@tanstack/react-table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import FilterTable from "@/components/ui/table/FilterTable";
import TableContent from "@/components/ui/table/TableContent";
import TablePagination from "@/components/ui/table/TablePagination";
import { useUserData } from "@/hooks/useUserData";
import { useAppDispatch } from "@/lib/redux/hooks";
import { EditDataProps, getColumns } from "@/lib/constants/tableColumns";
import { rowValue } from "@/lib/redux/features/user/userSlice";

const User = () => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [filtering, setFiltering] = useState("");
    const [columnVisibility, setColumnVisibility] = useState({});
    const dispatch = useAppDispatch();

    const { isLoading, data: allUserData, refetch } = useUserData();

    // Define handleEdit function
    const handleEdit = (rowData: EditDataProps) => {
        dispatch(rowValue(rowData)); // Dispatch the action to update Redux store
        setEditModalOpen(true); // Open the edit modal
    };

    // Get columns with handleEdit passed as a parameter
    const columns = getColumns(handleEdit);

    const table = useReactTable({
        data: allUserData ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
            columnVisibility,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
        onColumnVisibilityChange: setColumnVisibility,
    });

    return (
        <div className="">
            <p className="underline text-5xl font-bold text-sky-900">User</p>

            <FilterTable
                filtering={filtering}
                setFiltering={setFiltering}
                data={allUserData}
                table={table}
                buttonName="Add"
                headerName="Add User Information"
                open={filterModalOpen}
                setOpen={setFilterModalOpen}
                userName="User"
                usersNumber={allUserData?.length}
            >
                <AddUser setOpen={setFilterModalOpen} refetch={refetch} />
            </FilterTable>

            {isLoading ? <div>Loading...</div> : <TableContent table={table} />}

            {!isLoading && <TablePagination table={table} />}

            <CustomDialog
                open={editModalOpen}
                onOpenChange={setEditModalOpen}
                title="User Information Edit"
            >
                <EditUser setEditModalOpen={setEditModalOpen} refetch={refetch} />
            </CustomDialog>

            <ToastContainer />
        </div>
    );
};

export default User;