import admin_logo from "../../assets/images/admin_logo.svg";
import {MdDashboard} from "react-icons/md";
import {FaBarsStaggered, FaUserDoctor, FaUsers} from "react-icons/fa6";
import {BsCalendar2Date} from "react-icons/bs";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";
import {NavLink, useNavigate} from "react-router-dom";

const AdminHeader = () => {
    const sidebarItems = [
        {name: "Dashboard", icon: MdDashboard, link: "/admin/"},
        {name: "Doctors", icon: FaUserDoctor, link: "/admin/doctors"},
        {name: "Appointments", icon: BsCalendar2Date, link: "/admin/appointments"},
        {name: "Users", icon: FaUsers, link: "/admin/user"},
    ]
    const navigate = useNavigate()
    const {user, isAuthenticated} = useSelector((state: RootState) => state.auth);
    return (
        <>
            {/* Admin Header */}
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-4 py-3 lg:px-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <FaBarsStaggered className="w-6 h-6"/>
                            </button>
                            <NavLink to="/admin" className="flex ms-2 md:me-24">
                                <img src={admin_logo} className="h-10 w-auto me-3" alt="Company Logo"/>
                            </NavLink>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <button
                                    type="button"
                                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    {isAuthenticated ? (
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={user?.profilePic}
                                                onError={(e) => {
                                                    e.currentTarget.src = 'https://www.placeholder.com/150x150/F0F0F0/000000';
                                                }}
                                                alt="user photo"
                                            />)
                                        : (
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
                                                alt="user photo"
                                            />
                                        )
                                    }
                                </button>
                                <div
                                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                                    id="dropdown-user"
                                >
                                    {isAuthenticated && user ? (
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-black" role="none">
                                                {user?.name}
                                            </p>
                                            <p
                                                className="text-sm font-medium text-black truncate"
                                                role="none"
                                            >
                                                {user?.email}
                                            </p>
                                        </div>
                                    ) : null}
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    localStorage.clear();
                                                    navigate("/login");
                                                }}

                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Admin Sidebar */}
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        {
                            sidebarItems && sidebarItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                                    >
                                        <item.icon
                                            className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"/>
                                        <span className="ms-3">{item.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AdminHeader;
