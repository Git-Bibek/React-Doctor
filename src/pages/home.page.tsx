import {BannerComponent} from "../components/banner/banner.component.tsx";
import {assets, specialityData} from "../assets/images/assets.ts";
import {CircularCard, ImageCard} from "../components/card/card.component.tsx";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import authService from "./auth/auth.service.ts";

const HomePage = () => {
    const [topDoctor, setTopDoctor] = useState([])
    const fetchDoctors = async () => {
        try {
            const response: any = await authService.getRequest('/doctor/')
            setTopDoctor(response.result)
        } catch (exception) {
            console.log(exception)
        }
    }
    useEffect(() => {
        fetchDoctors()
    }, []);
    return (
        <>
            <BannerComponent/>
            {/* Speciality Menu*/}
            <div className={'flex flex-col items-center gap-4 py-16 text-gray-600'} id={'#speciality-menu'}>
                <h1 className={'text-3xl font-medium'}>
                    Find by Speciality
                </h1>
                <p className={' text-sm sm:w-1/3 text-center'}>
                    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                </p>
                <div className={' flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '}>
                    {
                        specialityData && specialityData.map((item: any, index: number) => {
                            return (
                                <CircularCard key={index} link={`/doctors/${item.speciality}`} image={item.image}
                                              name={item.speciality}/>
                            )
                        })
                    }
                </div>
            </div>
            {/*Top Doctors section*/}
            <div className={' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'}>
                <h1 className={'text-3xl font-medium'}>
                    Top Doctors to Book
                </h1>
                <p className={'sm:w-1/2 text-center text-sm leading-tight text-gray-600'}>
                    Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                </p>
                <div
                    className={'w-full grid gap-4 grid-cols-2  pt-5 gap-y-6 px-3 sm:px-0 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-4'}
                >
                    {
                        topDoctor && topDoctor.slice(0, 10).map((item: any, index: number) => {
                            return (
                                <NavLink to={ `appointment/doctors/${item._id}`} id={item._id} key={index}>
                                    <ImageCard key={index} image={item.profilePic} name={item.name}
                                               speciality={item.speciality}
                                               link={`appointment/doctors/${item._id}`}/>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <NavLink to={'/doctors'}
                         className={'bg-blue-50 px-12 py-3 rounded-full mt-10 text-lg text-blue-500'}> More</NavLink>
            </div>

            {/*Appointment Banner*/}
            <div className={'flex bg-primary rounded-lg px-6 sm:px-10 md:px-20 lg:px-12 my-20 md:mx-10'}>
                <div className={'flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 '}>
                    <div className={'text-white text-2xl md:text-3xl lg:text-4xl font-semibold'}>
                        <p>Book Appointment</p>
                        <p className={'mt-4 mb-6'}> With 100+ Trusted Doctors</p>
                    </div>
                    <NavLink to={'/register'}
                             className={'bg-blue-50 px-12 py-3 rounded-full mt-10 text-lg text-blue-500'}> Create a
                        Account
                    </NavLink>
                </div>
                {/* right side*/}
                <div className={'hidden md:block md:w-1/2 lg:w-[370px] relative'}>
                    <img src={assets.appointment_img} alt="" className={'w-full absolute bottom-0 right-0 max-w-md'}/>
                </div>
            </div>

        </>
    )
}

export default HomePage