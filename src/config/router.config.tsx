import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "../layout/home.layout.tsx";
import HomePage from "../pages/home.page.tsx";
import DoctorsPage from "../pages/doctors.page.tsx";
import LoginPage from "../pages/auth/login/login.page.tsx";
import RegisterPage from "../pages/auth/register/register.page.tsx";
import AboutPage from "../pages/about.page.tsx";
import ContactPage from "../pages/contact.page.tsx";
import ProfilePage from "../pages/profile.page.tsx";
import AppointmentPage from "../pages/appointment.page.tsx";
import {ToastContainer} from "react-toastify";
import AdminLayout from "../layout/admin.layout.tsx";
import AdminPages from "../pages/admin/admin.pages.tsx";
import AuthContext from "../context/auth.context.tsx";
import DoctorsAdmin from "../pages/admin/doctors/doctors.admin.tsx";
import DoctorRegister from "../pages/admin/doctors/add-doctor.auth.tsx";
import UserDashboard from "../pages/admin/user/user.admin.tsx";
import AddUser from "../pages/admin/auth/add-user.auth.tsx";
import EditDoctorDoctor from "../pages/admin/doctors/edit-doctor.doctor.tsx";
import ErrorPage from "../pages/error.page.tsx";
import BookAppointmentPage from "../pages/book-appointment.page.tsx";
import {useEffect} from "react";
import {getLoggedInUserRedux} from "../redux/authSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import CheckPermission from "./rbac.config.tsx";
import {RootState} from "../redux/store.ts";


const RouterConfig = () => {
    const dispatch = useDispatch();
    const reduxUser = useSelector((state: RootState) => state.auth.user)
    const token = localStorage.getItem("_at");

    useEffect(() => {
        if (token && !reduxUser) {
            dispatch(getLoggedInUserRedux() as any);
        }
    }, [token, dispatch, reduxUser]);
    console.log(reduxUser, 'From RouterConfig');
    return (
        <AuthContext.Provider value={{user: reduxUser}}>
            <BrowserRouter>
                <ToastContainer position={"top-center"}/>
                <Routes>
                    {/* User Layout */}
                    <Route path='/' element={<UserLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='doctors' element={<DoctorsPage/>}/>
                        <Route path='doctors/:speciality' element={<DoctorsPage/>}/>
                        <Route path='about' element={<AboutPage/>}/>
                        <Route path='contact' element={<ContactPage/>}/>
                        <Route path='login' element={<LoginPage/>}/>
                        <Route path='register' element={<RegisterPage/>}/>
                        <Route path='profile' element={<ProfilePage/>}/>
                        <Route path='appointment' element={<AppointmentPage/>}/>
                        <Route path='appointment/doctors/:id' element={<AppointmentPage/>}/>
                        <Route path='book-appointment' element={<BookAppointmentPage/>}/>
                        <Route path='/appointment/doctor/:id' element={<BookAppointmentPage/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Route>
                    {/* Admin Layout */}
                    <Route path='admin' element={<CheckPermission allowedBy={'admin'}>{<AdminLayout />}</CheckPermission>}>
                        <Route index element={<AdminPages />} />
                        <Route path='doctors' element={<DoctorsAdmin/>}/>
                        <Route path='doctors/add' element={<DoctorRegister/>}/>
                        <Route path='doctors/edit/:id' element={<EditDoctorDoctor/>}/>
                        <Route path='users' element={<UserDashboard/>}/>
                        <Route path='users/add' element={<AddUser/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default RouterConfig;
