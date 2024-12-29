import {Outlet} from "react-router-dom";
import AdminHeader from "../components/headers/admin.header.tsx";

const AdminLayout = () => {
    return (<>
        <AdminHeader/>
        <div className="p-5 ml-[15rem] mt-12 mx-auto ">
            <Outlet/>
        </div>
    </>)
}
export default AdminLayout