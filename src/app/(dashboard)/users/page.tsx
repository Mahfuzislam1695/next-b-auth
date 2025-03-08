import Loader from "@/components/share/loader/Loader";
import dynamic from "next/dynamic";


export default function Page() {
    const DynamicUser = dynamic(
        () => import("@/components/dashboard/user/User"),
        {
            loading: () => <Loader />,
        }
    );
    return (
        <div><DynamicUser /></div>
    )
}
