import {NavLink, useNavigate} from "react-router-dom";
import {FiUploadCloud} from "react-icons/fi";
import {useState} from "react";
import {useController} from "react-hook-form";

interface cardProps {
    link: string
    image: string
    name: string
}

interface ProfileCardProps {
    name: string;
    control: any;
    setValue?: (name: string, value: any) => void
}

interface ImageCardProps {
    image: string
    name: string,
    speciality?: string,
    link: string | '#'
}

export const CircularCard = ({link, image, name}: cardProps) => {
    return (
        <NavLink to={link}
                 onClick={() => {
                     scrollTo(0, 0)
                 }}

                 className={'flex flex-col items-center gap-2 my-3 text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300'}>
            <img src={image} className={'w-16 sm:w-24 mb-2'} alt=""/>
            <p>
                {name}
            </p>
        </NavLink>
    )
}
export const ImageCard = ({image, name, speciality, link}: ImageCardProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    };
    return (
        <>
            <div
                onClick={handleClick}
                className="border border-blue-200 rounded-lg shadow overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300">
                <img className="rounded-lg w-full h-[250px] object-fill object-center p-2" src={image} alt=""/>
                <div className="p-3">
                    <div className={' flex items-center gap-2 text-sm text-center text-green-500'}>
                        <span className={' w-2 h-2 rounded-full bg-green-500'}> </span>
                        <span className={' text-sm text-center text-green-500'}> Available</span>
                    </div>
                    <p className={' font-medium '}>
                        {name}
                    </p>
                    <p className=" text-sm font-normal text-gray-700 dark:text-gray-400">
                        {speciality}
                    </p>
                </div>
            </div>
        </>
    )
}
export const ImageOnlyCard = ({image}: { image: string }) => {
    return (
        <>
            <img
                className={'w-full h-full object-cover rounded-lg bg-transparent'}
                src={image}
                alt=""/>

        </>
    )
}


export const ProfileCard = ({name, control}: ProfileCardProps) => {
    const [previewImg, setPreviewImg] = useState<string | null>(null)

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        field.onChange(file)
        setPreviewImg(URL.createObjectURL(file))
        console.log('from profileCard', file)
    }
    const {field} = useController({
        control: control,
        name: name,
    });
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mb-8">
                <label
                    className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center justify-center">

                        {
                            previewImg ?
                                (<>
                                    <img
                                        alt={previewImg}
                                        className={"object-cover  w-32 h-32 rounded-full "}
                                        src={previewImg}/>
                                </>)
                                :
                                (<>
                                    <FiUploadCloud
                                        className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"/>
                                    <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold"> Upload file</span>
                                    </p>
                                </>)
                        }
                    </div>
                    <input type="file" className="hidden" {...field} onChange={handleImageChange} name={name}/>
                </label>
                <div className={'mb-2 '}>

                    {!previewImg ? (<>
                        <p className={' text-black mt-2 font-medium'}>
                            <span className="font-semibold"> Upload Profile</span>
                        </p>
                    </>) : (<>
                        <p className={' text-black mt-2 font-medium'}>
                            <span className="font-semibold"> Change Profile</span>
                        </p>
                    </>)}
                </div>
            </div>
        </>)
}
