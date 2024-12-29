import {LabelField, TextInputField} from "../../../components/form/input.form.tsx";
import {IoMdMail} from "react-icons/io";
import {RiLockPasswordFill} from "react-icons/ri";
import {NavLink, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa6";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {socialMedia} from "../../../data.ts";
import authService from "../auth.service.ts";
import {toast} from "react-toastify";

const RegisterPage = () => {

    const RegisterDTO = Yup.object({
        fullName: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        role: Yup.string().default('user').required('Role is required')
    })

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(RegisterDTO)
    });
    const navigate = useNavigate()
    const submitForm = async (data: any) => {
        try {

            const response: any = await authService.postRequest(`/user/`, data, {auth: false})
            navigate('/login')
            toast.success(response.message)
        } catch (exception) {
            console.log(exception)
        }
    }
    return (
        <>
            <section
                className={'w-full flex items-center justify-center min-h-screen'}
                style={{
                    background: "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
                }}>
                <div
                    className={' shadow-2xl rounded-2xl p-8 w-1/2 mx-auto bg-white my-10 justify-center items-center '}>
                    <h1 className={'text-3xl text-center font-medium text-gray-600'}>Register</h1>
                    <p className={' text-sm text-center font-medium text-gray-600'}>Register to book appointment</p>

                    <div className={' flex flex-col justify-center items-center gap-4 py-8 text-gray-600'}>
                        <form onSubmit={handleSubmit(submitForm)} className={'w-full'}>
                            <div className={'mb-2'}>
                                <LabelField label={'FullName'}/>
                                <TextInputField control={control} name={'fullName'} type={'text'}
                                                placeholder={'John Doe'}
                                                icon={<FaUser/>}
                                                errorMessage={errors.email?.message}/>
                            </div>
                            <div className={'mb-2'}>
                                <LabelField label={'Email'}/>
                                <TextInputField control={control} name={'email'} type={'email'}
                                                placeholder={'johnDoe@example.com'}
                                                icon={<IoMdMail/>}
                                                errorMessage={errors.email?.message}/>
                            </div>

                            <div className={'mb-2'}>
                                <LabelField label={'Password'}/>
                                <TextInputField control={control} name={'password'} type={'password'}
                                                placeholder={'**********'}
                                                icon={<RiLockPasswordFill/>}
                                                errorMessage={errors.password?.message}/>
                            </div>
                            {/*Select Field*/}
                            {/*<div className={'mb-2 '}>*/}
                            {/*    <LabelField label={'Role'}/>*/}
                            {/*    <SelectInputField control={control} name={'role'}*/}
                            {/*                      options={role} placeholder={'Select Role'}*/}
                            {/*                      errorMessage={errors.role?.message}/>*/}
                            {/*</div>*/}

                            <div className={' w-full mt-4'}>
                                <button
                                    className={'w-full bg-primary hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'}
                                    type={'submit'}>
                                    Register
                                </button>
                            </div>
                            {/* Sign up  with social account */}
                            <div className={' w-full mt-4 flex flex-row items-center justify-center gap-2 '}>
                                {
                                    socialMedia && socialMedia.map((item, index) => {
                                        return (
                                            <a href={item.link} target={'_blank'} key={index}
                                               className={'text-3xl cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-[#1da1f2]/90 hover:text-white w-10 h-10 rounded-full flex items-center justify-center'}>
                                                <item.icon/>
                                            </a>)
                                    })
                                }
                            </div>
                            <div className={' w-full mt-4'}>
                                <p className={' text-center font-semibold text-gray-600 '}>
                                    Already have an account?
                                    <NavLink
                                        to={'/login'}
                                        className={'text-primary text-xl leading-tight font-monospace  ml-3 font-medium cursor-pointer hover:text-blue-600 hover:translate-y-[-5px] transition-all duration-300 inline-block'}>
                                        Login
                                    </NavLink>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPage