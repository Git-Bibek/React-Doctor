import {specialityData} from "../assets/images/assets";
import {CircularCard} from "./card/card.component.tsx";

const SpecialityMenu = () => {
    return (
        <div className={'flex flex-col items-center gap-4 py-16 text-gray-600'}>
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
                            <CircularCard key={index} link={`/doctors/${item.speciality}`} image={item.image} name={item.speciality}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SpecialityMenu