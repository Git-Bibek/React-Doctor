import {useEffect, useState} from "react";
import {ImageCard} from "../components/card/card.component.tsx";
import {useNavigate} from "react-router-dom";
import {SearchParams} from "../config/app.constant.ts";
import authService from "./auth/auth.service.ts"; // Assuming you have a list of doctor objects

const DoctorsPage = () => {
    const specialities = [
        {id: 1, name: "General physician"},
        {id: 2, name: "Gynecologist"},
        {id: 3, name: "Dermatologist"},
        {id: 4, name: "Pediatricians"},
        {id: 5, name: "Neurologist"},
        {id: 6, name: "Gastroenterologist"}
    ];

    const [doctors, setDoctors] = useState<any>([]);
    const [activeSpeciality, setActiveSpeciality] = useState<string>("");
    const navigate = useNavigate()
    const fetchDoctors = async ({page = 1, limit = 10, search = ''}: SearchParams) => {
        try {

            const response: any = await authService.getRequest('/doctor/', {
                params: {
                    limit: limit,
                    page: page,
                    search: search
                }
            });
            console.log(response.result)
            setDoctors(response.result);
        } catch (exception) {
            console.log(exception);
        }
    };

    const filterBySpeciality = (speciality: string) => {
        setActiveSpeciality(speciality);
        console.log('speciality', speciality)
        if (speciality === " Show All") {
            fetchDoctors({page: 1, limit: 10, search: ''});
        } else {
            fetchDoctors({page: 1, limit: 10, search: `speciality=${speciality}`});
        }
    }
    useEffect(() => {
        fetchDoctors({page: 1, limit: 10, search: ''});
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <p className="font-medium text-gray-600 text-start">
                Browse through the doctors specialist.
            </p>
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar for Specialities */}
                <div className="lg:w-1/4 w-full">
                    <p className="font-bold text-xl mb-4">Specialities</p>
                    <ul className="space-y-3">
                        {specialities.map((speciality) => (
                            <li
                                key={speciality.id}
                                className={`cursor-pointer border border-gray-200 rounded-lg px-4 py-2 transition
                                ${
                                    activeSpeciality === speciality.name
                                        ? "bg-blue-100 text-blue-600 border-blue-500"
                                        : "hover:text-blue-500"
                                }`}
                                onClick={() => filterBySpeciality(speciality.name)}
                            >
                                {speciality.name}
                            </li>
                        ))}
                        <li
                            onClick={() => filterBySpeciality(" Show All")}
                            className={`cursor-pointer border border-gray-200 rounded-lg px-4 py-2 transition
                            ${
                                activeSpeciality === ""
                                    ? "bg-red-100 text-red-600 border-red-500"
                                    : "hover:text-red-500"
                            }`}
                        >
                            Show All
                        </li>
                    </ul>
                </div>

                {/* Doctors Grid */}
                <div className="lg:w-3/4  w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {doctors.length > 0 ? (
                            doctors.map((doctor: any) => (
                                <div key={doctor._id}
                                     className={" cursor-pointer border border-gray-200 rounded-lg shadow overflow-hidden hover:translate-y-[-10px] transition-all duration-300"}
                                     onClick={() => navigate(`/appointment/doctors/${doctor._id}`)}>
                                    <ImageCard
                                        image={doctor.profilePic}
                                        name={doctor.name}
                                        speciality={doctor.speciality}
                                        doctorId={doctor._id}
                                    />
                                </div>
                            ))
                        ) : (
                            <span className={' container mx-auto text-center text-black text-lg'}>
                               No doctors found
                           </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
