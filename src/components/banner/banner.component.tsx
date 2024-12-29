import groupAvatar from '../../assets/images/group_profiles.png'
import headerImage from '../../assets/images/header_img.png'
import {NavLink} from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";

interface BannerProps {
    title: string,
    description?: string
    image?: string,
    link: string,
    buttonText?: string

}

export const BannerComponent = () => {
    return (
        <>
            <div className={'flex flex-col md:flex-row flex-wrap bg-primary rounded-xl px-2   md:px-20 sm:px-3 '}>
                {/*left Side*/}
                <div
                    className={'md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]'}>
                    <p className={'text-xl text-white md:text-3xl lg:text-4xl font-semibold leading-tight  '}>
                        Book Appointment With Trusted Doctors
                    </p>
                    <div
                        className={' flex flex-col items-start justify-center md:flex-row  gap-2 text-white text-sm font-light'}>
                        <img src={groupAvatar} alt="" className={'w-28'}/>
                        <p>
                            Simply browse through our extensive list of trusted doctors,
                            schedule your appointment hassle-free.
                        </p>
                    </div>

                    <NavLink to={'/book-appointment'}
                             className={' flex flex-row items-center text-gray-600 gap-2 bg-white p-3 rounded-full mb-16 hover:scale-105 transition-all duration-300'}>
                        Book Appointment
                        <IoIosArrowRoundForward className={' text-2xl font-extrabold'}/>
                    </NavLink>

                </div>
                {/* Right Side */}
                <div className={'md:w-1/2 relative '}>
                    <img src={headerImage} className={'w-full bottom-0 h-auto rounded-lg'} alt=""/>
                </div>
            </div>
        </>
    )
}


export const BannerComponentUpdated = ({title, description, image, link, buttonText}: BannerProps) => {
    return (
        <>
            <div className={'flex flex-col md:flex-row  bg-primary rounded-xl px-2   md:px-20 sm:px-3 '}>
                {/*left Side*/}
                <div
                    className={'md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]'}>
                    <p className={'text-xl text-white md:text-3xl lg:text-4xl font-semibold leading-tight  '}>
                        {title}
                    </p>
                    {
                        description && <div
                            className={' flex flex-col items-start justify-center md:flex-row  gap-2 text-white text-sm font-light'}>
                            <img src={groupAvatar} alt="" className={'w-28'}/>
                            <p>
                                {description}
                            </p>
                        </div>
                    }

                    <NavLink to={link}
                             className={' flex flex-row items-center text-gray-600 gap-2 bg-white p-3 rounded-full mb-16 hover:scale-105 transition-all duration-300'}>
                        {buttonText}
                        <IoIosArrowRoundForward className={' text-2xl font-extrabold'}/>
                    </NavLink>

                </div>
                {/* Right Side */}
                <div className={'md:w-1/2 relative '}>
                    <img src={image} className={'w-full bottom-0 h-auto rounded-lg'} alt=""/>
                </div>
            </div>
        </>
    )
}