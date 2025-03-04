import { IUserTableProps } from "@/types/user/user.types";
import FilterTable from "@/components/ui/table/FilterTable";
import TableContent from "@/components/ui/table/TableContent";
import TablePagination from "@/components/ui/table/TablePagination";
import AddUser from "./AddUser";

const UserTable = ({
    table,
    isLoading,
    filtering,
    setFiltering,
    filterModalOpen,
    setFilterModalOpen,
    allUserData,
    refetch,
}: IUserTableProps) => {
    return (
        <>
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
        </>
    );
};

export default UserTable;