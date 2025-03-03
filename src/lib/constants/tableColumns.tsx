import TooltipDiv from "@/components/share/tooltip/TooltipDiv";
import { ColumnDef } from "@tanstack/react-table";

export interface EditDataProps {
    name: string;
    email: string;
    gender: string;
}

export const getColumns = (handleEdit: (rowData: EditDataProps) => void): ColumnDef<EditDataProps>[] => [
    {
        header: "ID",
        accessorKey: "id",
        enableColumnFilter: false,
        enableSorting: false,
    },
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Action",
        accessorKey: "edit",
        enableSorting: false,
        cell: ({ row }) => (
            <div className="flex gap-3 justify-center items-center w-full">
                <button onClick={() => handleEdit(row.original)} className="flex">
                    <TooltipDiv name="Edit" />
                </button>
            </div>
        ),
    },
];