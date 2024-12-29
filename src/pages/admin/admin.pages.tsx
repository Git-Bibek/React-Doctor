import {assets} from "../../assets/images/assets.ts";
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center p-4 text-gray-600 mx-4">
                <div
                    onClick={() => navigate('/admin/doctors')}
                    className="flex items-center justify-center h-24 gap-4 bg-gray-200 text-black rounded-md hover:bg-gray-400 hover:text-white">
                    <img src={assets.General_physician} alt="Doctors" className="w-16 h-16"/>
                    <div className="flex flex-col items-start text-center">
                        <span className="text-3xl font-bold">15</span>
                        <span className="text-sm font-medium">Doctors</span>
                    </div>
                </div>
                <div
                    onClick={() => navigate('/admin/appointments')}
                    className="flex items-center justify-center h-24 gap-4 bg-gray-200 text-black rounded-md hover:bg-gray-400 hover:text-white">
                    <img src={assets.appointments_icon} alt="Appointments" className="w-16 h-16"/>
                    <div className="flex flex-col items-start text-center">
                        <span className="text-3xl font-bold">12</span>
                        <span className="text-sm font-medium">Appointments</span>
                    </div>
                </div>
                <div
                    onClick={() => navigate('/admin/user')}
                    className="flex items-center justify-center h-24 gap-4 bg-gray-200 text-black rounded-md hover:bg-gray-400 hover:text-white">
                    <img src={assets.patients_icon} alt="Patients" className="w-16 h-16"/>
                    <div className="flex flex-col items-start text-center">
                        <span className="text-3xl font-bold">30</span>
                        <span className="text-sm font-medium">User</span>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center h-24 gap-4 bg-gray-200 text-black rounded-md hover:bg-gray-400 hover:text-white">
                    <img src={assets.patients_icon} alt="Patients" className="w-16 h-16"/>
                    <div className="flex flex-col items-start text-center">
                        <span className="text-3xl font-bold">30</span>
                        <span className="text-sm font-medium">Patients</span>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AdminPage;
