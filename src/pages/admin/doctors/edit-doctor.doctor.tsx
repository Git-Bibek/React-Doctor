import {LabelField, SelectInputField, TextInputField, ToggleInputField} from "../../../components/form/input.form.tsx";
import {FaFlag, FaUser} from "react-icons/fa6";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {toast} from "react-toastify";
import {RiLockPasswordFill} from "react-icons/ri";
import {Days, Time} from "../../../config/app.constant.ts";
import {IoMdMail} from "react-icons/io";
import {UpdateDoctorDTO} from "./doctorData.ts";
import {useParams} from "react-router-dom";
import authService from "../../auth/auth.service.ts";
import {useEffect, useState} from "react";
import {assets} from "../../../assets/images/assets.ts";


const EditDoctorPage = () => {
    const params = useParams()
    const [profilePreview, setProfilePreview] = useState<string | null>(null);
    const {control, handleSubmit, setValue, reset, formState: {errors}} = useForm({
        resolver: yupResolver(UpdateDoctorDTO),
    });
    const fetchDoctorById = async () => {
        try {
            console.log(params.id)
            const response: any = await authService.getRequest(`/doctor/${params.id}`)
            reset(response.result)
            if (response.result.profilePic) {
                setProfilePreview(response.result.profilePic)
            }
            console.log(response)
        } catch (exception: any) {
            console.log(exception)
            if (exception?.response?.data?.message) {
                toast.error(exception?.response?.data?.message)
            }
            toast(exception.message)
        }

    }
    const submitForm = async (data: any) => {
        try {
            console.log(data)
            const response: any = await authService.putRequest(`/doctor/${params.id}`, data, {file: true})
            toast(response.message)
        } catch (exception: any) {
            console.log(exception)
            if (exception?.response?.data?.message) {
                toast.error(exception?.response?.data?.message)
            }
            toast(exception.message)
        }
    };

    useEffect(() => {
        fetchDoctorById();
    }, [params.id]);
    return (
        <div
            className={'shadow-2xl shadow-gray-300 rounded-2xl p-8 w-full mx-auto bg-white my-10 justify-center items-center'}>
            <h1 className={'text-3xl text-center font-medium text-gray-600'}>Doctor Profile</h1>
            <p className={'text-sm text-center font-medium text-gray-600'}>Update your Details</p>

            <div className={'flex flex-col justify-center items-center gap-4 py-8 text-black'}>
                <form onSubmit={handleSubmit(submitForm)} className={'w-full grid grid-cols-1 gap-4'}>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'mb-2'}>
                            <LabelField label={'Full Name'}/>
                            <TextInputField
                                control={control}
                                name={'fullName'}
                                type={'text'}
                                placeholder={'John Doe'}
                                icon={<FaUser/>}
                                errorMessage={errors.fullName?.message}
                            />
                        </div>
                        <div className={'mb-2'}>
                            <LabelField label={'Email'}/>
                            <TextInputField
                                control={control}
                                name={'email'}
                                type={'email'}
                                placeholder={'johnDoe@example.com'}
                                icon={<IoMdMail/>}
                                errorMessage={errors.email?.message}
                            />
                        </div>
                    </div>

                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'mb-2'}>
                            <LabelField label={'Degree'}/>
                            <TextInputField
                                control={control}
                                name={'degree'}
                                type={'text'}
                                placeholder={'MD'}
                                icon={<RiLockPasswordFill/>}
                                errorMessage={errors.degree?.message}
                            />
                        </div>
                        <div className={'mb-2'}>
                            <LabelField label={'Experience'}/>
                            <TextInputField
                                control={control}
                                name={'experience'}
                                type={'text'}
                                placeholder={'10 years'}
                                icon={<FaUser/>}
                                errorMessage={errors.experience?.message}
                            />
                        </div>
                    </div>

                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'mb-2'}>
                            <LabelField label={'Password'}/>
                            <TextInputField
                                control={control}
                                name={'password'}
                                type={'password'}
                                placeholder={'********'}
                                icon={<RiLockPasswordFill/>}
                                errorMessage={errors.password?.message}
                            />
                        </div>
                        <div className={'mb-2'}>
                            <LabelField label={'Specialization'}/>
                            <TextInputField
                                control={control}
                                name={'speciality'}
                                type={'text'}
                                placeholder={'Cardiology'}
                                icon={<FaUser/>}
                                errorMessage={errors.speciality?.message}
                            />
                        </div>
                    </div>

                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'mb-2 '}>
                            <LabelField label={'Profile Picture URL'}/>
                            <div className={' flex items-center justify-center gap-4 w-full'}>
                                <input
                                    name={'profilePic'}
                                    className="block w-full text-sm p-2.5 text-black dark:text-black border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer focus:outline-none focus:border-gray-500 dark:focus:border-gray-500"
                                    aria-describedby="file_input_help"
                                    onChange={(e: any) => {
                                        const file = e.target.files[0];
                                        setValue('profilePic', file)
                                        setProfilePreview(URL.createObjectURL(file))
                                        console.log(e.target.files[0])
                                    }}
                                    type={'file'}
                                />
                                {/*Image Preview on hover on profilePic */}
                                {profilePreview  ?
                                    (<div
                                        className="relative w-16 h-16 overflow-hidden rounded-md border-1 border-primary hover:scale-[500%]  hover:opacity-1 hover:z-10 cursor-pointer transition-transform duration-300 ease-in-out">
                                        <img
                                            src={profilePreview}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>)
                                    : (<>
                                            <div
                                                className="w-16 h-16 rounded-md border-1 border-primary flex items-center justify-center">
                                                {assets.imagePreview}
                                            </div>
                                        </>
                                    )
                                }
                            </div>

                        </div>
                        <div className={'mb-2'}>
                            <LabelField label={'Fees'}/>
                            <TextInputField
                                control={control}
                                name={'fees'}
                                type={'number'}
                                placeholder={'100'}
                                icon={<FaUser/>}
                                errorMessage={errors.fees?.message}
                            />
                        </div>
                    </div>
                    <div className={'grid grid-cols-3 gap-4'}>
                        {/* Available */}
                        <div className={'mb-2'}>
                            <LabelField label={'Available'}/>
                            <ToggleInputField control={control} name={'available'}
                                              errorMessage={errors.available?.message}/>
                        </div>
                        {/* Slot Booked */}
                        <div>
                            <LabelField label={'Slot Booked Day'}/>
                            <SelectInputField control={control} name={'slot_Booked.day'}
                                              errorMessage={errors.slot_Booked?.day?.message}
                                              options={Days}/>
                        </div>
                        <div>
                            <LabelField label={'Slot Booked Time'}/>
                            <SelectInputField control={control} name={'slot_Booked.time'}
                                              errorMessage={errors.slot_Booked?.time?.message}
                                              options={Time}/>
                        </div>
                    </div>
                    <div className={'mb-2 '}>
                        <LabelField label={'Address'}/>
                        <div className={'grid grid-cols-4 gap-3'}>
                            <div className={' mb-2'}>
                                <LabelField label={'country'}/>
                                <TextInputField
                                    control={control}
                                    name={'address.country'}
                                    type={'text'}
                                    placeholder={'Country'}
                                    icon={<FaFlag/>}
                                    errorMessage={errors.address?.country?.message}
                                />
                            </div>
                            <div className={'mb-2'}>
                                <LabelField label={'city'}/>
                                <TextInputField
                                    control={control}
                                    name={'address.city'}
                                    type={'text'}
                                    placeholder={'City'}
                                    icon={<FaUser/>}
                                    errorMessage={errors.address?.city?.message}
                                />
                            </div>
                            <div className={'mb-2'}>
                                <LabelField label={'state'}/>
                                <TextInputField
                                    control={control}
                                    name={'address.state'}
                                    type={'text'}
                                    placeholder={'State'}
                                    icon={<FaUser/>}
                                    errorMessage={errors.address?.state?.message}
                                />
                            </div>
                            <div className={'mb-2'}>
                                <LabelField label={'pinCode'}/>
                                <TextInputField
                                    control={control}
                                    name={'address.pinCode'}
                                    type={'text'}
                                    placeholder={' PinCode'}
                                    icon={<FaUser/>}
                                    errorMessage={errors.address?.pinCode?.message}
                                />
                            </div>
                        </div>

                    </div>

                    <div className={'mb-2'}>
                        <LabelField label={'About'}/>
                        <TextInputField
                            control={control}
                            name={'about'}
                            type={'text'}
                            placeholder={'Briefly introduce yourself...'}
                            icon={<FaUser/>}
                            errorMessage={errors.about?.message}
                        />
                    </div>

                    <div className={'grid grid-cols-2 gap-4 mt-4'}>
                        <button
                            className={'w-full bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'}
                            type={'submit'}
                        >
                            Register
                        </button>
                        <button
                            className={'w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded'}
                            type={'reset'}
                        >
                            Reset
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditDoctorPage