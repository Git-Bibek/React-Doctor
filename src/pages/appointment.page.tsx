import {useEffect, useState} from "react";
import {ImageCard} from "../components/card/card.component";
import {doctors} from "../assets/images/assets";
import {NavLink, useParams} from "react-router-dom";
import doctorService from "../services/doctor.service.ts";
import {toast} from "react-toastify";
import {CiStar} from "react-icons/ci";


const AppointmentPage = () => {
    const [doctor, setDoctor] = useState<any>(null);
    const params = useParams();

    const fetchDoctorsById = async (id: string) => {
        try {
            const response: any = await doctorService.getRequest(`/doctor/${id}`);
            setDoctor(response.result);
        } catch (exception: any) {
            console.error(exception);
            const errorMessage = exception?.response?.data?.message || exception.message;
            toast.error(errorMessage);
        }
    };


    useEffect(() => {
        if (params.id) {
            fetchDoctorsById(params.id);
        }
    }, [params.id]);

    if (!doctor) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* Doctor Profile Section */}
            <div className="flex flex-col items-center justify-center mb-16">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg text-center">
                    <img
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        src={doctor.profilePic}
                        alt="Doctor Profile"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">{doctor.fullName}</h2>
                    <p className="text-gray-600">{doctor.speciality}</p>

                    {/* Degree and Experience */}
                    <div className="mt-4 text-gray-500">
                        <p className="text-sm font-medium">Degree: <span
                            className="text-gray-700">{doctor.degree}</span>
                        </p>
                        <p className="text-sm font-medium">Experience: <span
                            className="text-gray-700">{doctor.experience}</span>
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-500">Rating:</h3>
                        <div className="flex justify-center items-center">
                            {[...Array(5)].map((_, index) => (
                                <CiStar
                                    key={index}
                                    className={`w-6 h-6 cursor-pointer  text-xl font-bold ${index < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                                />

                            ))}
                            <span className="text-gray-700 ml-2">(4.0)</span>
                        </div>
                    </div>

                    {/* Doctor Bio */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">
                            Dr. John Doe has over 10 years of experience specializing in heart care, helping
                            patients
                            with
                            advanced heart conditions using the latest medical technology and personalized care.
                        </p>
                    </div>

                    {/* Available Dates Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Dates:</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['Oct 20', 'Oct 22', 'Oct 25', 'Oct 28', 'Oct 30'].map((date, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold"
                                >
                        {date}
                    </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                        <NavLink to={`/appointment/doctor/${doctor._id}`}
                                 className="bg-blue-100 text-blue-600 px-4 py-2 rounded hover:bg-blue-200 transition-all">
                            Book Appointment
                        </NavLink>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
                            onClick={() => {
                                document.getElementById('related-doctors')?.scrollIntoView({behavior: 'smooth'});
                            }}>
                            View Others Doctors
                        </button>
                    </div>
                </div>
            </div>


            {/* Related Doctors */}
            <div className="mt-10 flex flex-col items-center justify-center mb-16" id={'related-doctors'}>
                <strong
                    className="text-lg text-gray-800 font-semibold text-center mb-4 underline underline-offset-4">
                    Related Doctors
                </strong>
                <div className="flex gap-4">
                    {doctors.slice(0, 4).map((item, index) => (
                        <ImageCard
                            key={index}
                            image={item.image}
                            name={item.name}
                            speciality={item.speciality}
                            link={`/appointment/doctors/${item._id}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppointmentPage;
