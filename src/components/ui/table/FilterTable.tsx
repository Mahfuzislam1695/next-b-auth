"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { MdAdd } from "react-icons/md";
import { IFilter } from "./tableTypes";

export default function FilterTable({
    headerName,
    filtering,
    setFiltering,
    buttonName,
    children,
    open,
    setOpen,
    userName,
    usersNumber,
}: IFilter) {
    return (
        <section className="my-5 mx-2">
            <div className="flex justify-between items-center">
                <div>
                    <input
                        type="text"
                        placeholder="search .."
                        value={filtering || ""}
                        onChange={(e) => setFiltering(e.target.value)}
                        className="bg-[#FFFFFF] text-[#1E1E1E] text-sm placeholder:text-sm placeholder:text-[##11E1E] outline-none border border-[#D4D4D4] w-80 px-4 py-2.5 rounded-md"
                    />
                </div>
                {userName && usersNumber !== undefined && (
                    <p className="text-xl">
                        {userName} : <span className="font-semibold">{usersNumber}</span> users
                    </p>
                )}
                <div className="flex items-center gap-2">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger>
                            <div className="bg-[#388E3C] rounded-md text-base text-[#F5F5F5] font-medium px-8 py-2 border-4 flex justify-center items-center gap-2">
                                <MdAdd fontSize={20} />
                                {buttonName}
                            </div>
                        </DialogTrigger>
                        <DialogContent className="bg-white w-[80vw] max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{headerName}</DialogTitle>
                            </DialogHeader>
                            {children}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
};