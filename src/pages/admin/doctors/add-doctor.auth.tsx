import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LabelField, SelectInputField, TextInputField, ToggleInputField} from "../../../components/form/input.form.tsx";
import {FaFlag, FaUser} from "react-icons/fa6";
import {IoMdMail} from "react-icons/io";
import {RiLockPasswordFill} from "react-icons/ri";
import authService from "../../auth/auth.service.ts";
import {toast} from "react-toastify";
import {Days, Time} from "../../../config/app.constant.ts";
import {DoctorDTO} from "./doctorData.ts";
import {useState} from "react";
import {FiUploadCloud} from "react-icons/fi";


const DoctorRegister = () => {
    const [previewImg, setPreviewImg] = useState<string | null>(null)
    const {control, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: yupResolver(DoctorDTO),
    });
    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        setValue('profilePic', file)
        setPreviewImg(URL.createObjectURL(file))
        console.log(file)
    };
    const submitForm = async (data: any) => {
        try {
            console.log(data)
            const response: any = await authService.postRequest('/admin/doctor/add-doctor', data, {file: true})
            console.log(response)
            toast.success(response.message)
        } catch (exception: any) {
            console.log(exception)
            if (exception?.response?.data?.message) {
                toast.error(exception?.response?.data?.message)
            }
            toast(exception.message)
        }
    };


    return (
        <>
            <div className={'shadow-2xl rounded-2xl p-8 w-full mx-auto bg-white my-10 justify-center items-center'}>
                <h1 className={'text-3xl text-center font-medium text-gray-600'}>Doctor Registration</h1>
                <p className={'text-sm text-center font-medium text-gray-600'}>Add new Doctor</p>

                <div className={'flex flex-col justify-center items-center gap-4 py-8 text-gray-600'}>
                    <form onSubmit={handleSubmit(submitForm)} className={'w-full'}>


                        {/*Profile Picture Handler*/}
                        <div className="flex flex-col items-center justify-center w-full mb-8">
                            <label
                                className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                                <input type="file" className="hidden" onChange={handleImageChange}/>
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
                            <div className={'mb-2 flex justify-center items-center gap-4'}>
                                <LabelField label={'Available'}/>
                                <ToggleInputField control={control} name={'available'}
                                                  errorMessage={errors.available?.message}/>
                            </div>
                        </div>
                        <div className={'grid grid-cols-2 gap-4'}>


                            {/* Slot Booked */}
                            <div>
                                <LabelField label={'Slot Booked Day'}/>
                                <SelectInputField control={control} name={'slot_Booked.day'}
                                                  isMulti={true}
                                                  errorMessage={errors.slot_Booked?.day?.message}
                                                  options={Days}/>
                            </div>
                            <div>
                                <LabelField label={'Slot Booked Time'}/>
                                <SelectInputField control={control} name={'slot_Booked.time'}
                                                  isMulti={true}
                                                  errorMessage={errors.slot_Booked?.time?.message}
                                                  options={Time}/>
                            </div>
                        </div>
                        <div className={'mb-2'}>
                            <LabelField label={'Address'}/>
                            <div className={'grid grid-cols-4 gap-3'}>
                                <TextInputField
                                    control={control}
                                    name={'address.country'}
                                    type={'text'}
                                    placeholder={'Country'}
                                    icon={<FaFlag/>}
                                    errorMessage={errors.address?.country?.message}
                                />
                                <TextInputField
                                    control={control}
                                    name={'address.city'}
                                    type={'text'}
                                    placeholder={'City'}
                                    icon={<FaUser/>}
                                    errorMessage={errors.address?.city?.message}
                                />
                                <TextInputField
                                    control={control}
                                    name={'address.state'}
                                    type={'text'}
                                    placeholder={'State'}
                                    icon={<FaUser/>}
                                    errorMessage={errors.address?.state?.message}
                                />
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
        </>
    );
};

export default DoctorRegister;
