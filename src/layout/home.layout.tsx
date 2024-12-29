import {Outlet} from "react-router-dom";
import Navbar from "../components/headers/navbar.header.tsx";
import FooterComponent from "../components/footer/footer.component.tsx";

const UserLayout = () => {
    return (<>
        <div className={'mx-4 sm:mx-[10%]'}>
        <Navbar/>
        <Outlet/>
        <FooterComponent/>
        </div>

    </>)
}
export default UserLayout