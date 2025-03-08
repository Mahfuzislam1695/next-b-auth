import Loader from "@/components/share/loader/Loader";
import dynamic from "next/dynamic";


export default function Page() {
    const DynamicAdmin = dynamic(
        () => import("@/components/dashboard/admin/Admin"),
        {
            loading: () => <Loader />
        }
    );
    return (
        <div><DynamicAdmin /></div>
    )
}
