import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { LabelField, TextInputField } from "../../../components/form/input.form.tsx";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { socialMedia } from "../../../data.ts";
import authService from "../auth.service.ts";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../../../redux/authSlice.ts";
import { useEffect } from "react";
import { RootState } from "../../../redux/store.ts";


const LoginPage = () => {

    const LoginDTO = Yup.object({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    })
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginDTO)
    });
    const dispatch = useDispatch()
    const submitForm = async (data: any) => {
        try {
            const response: any = await authService.postRequest('/auth/login', data)
            localStorage.setItem("_at", response.result.token)
            dispatch(setLoggedInUser({
                user: response.result.userDetails,
            }))

            if (response.result.userDetails.role == 'user') {
                navigate(`/`)
            } else {

                navigate(`/${response.result.userDetails.role}`)
            }
            toast.success('Login successful')
        } catch (exception: any) {
            console.log(exception)
            toast.warn(exception?.response?.data?.message || exception.message)
        }
    }
    const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser)
    console.log(loggedInUser, 'loggedInUser')
    useEffect(() => {
        if (loggedInUser) {
            navigate(`/${loggedInUser.role}`)
        }
    }, [loggedInUser, navigate]);
    return (
        <>
            <section
                className={'w-full flex items-center justify-center min-h-screen'}>
                <div
                    className={' shadow-2xl rounded-2xl p-8 w-1/2 mx-auto bg-white my-10 justify-center items-center '}>
                    <h1 className={'text-3xl text-center font-medium text-gray-600'}>Login</h1>
                    <p className={' text-sm text-center font-medium text-gray-600'}>Please login to book appointment</p>

                    <div className={' flex flex-col justify-center items-center gap-4 py-8 text-gray-600'}>
                        <form onSubmit={handleSubmit(submitForm)} className={'w-full'}>
                            <div className={'mb-2'}>
                                <LabelField label={'Email'} />
                                <TextInputField control={control} name={'email'} type={'email'}
                                    placeholder={'johnDoe@example.com'}
                                    icon={<IoMdMail />}
                                    errorMessage={errors.email?.message} />
                            </div>

                            <div className={'mb-2'}>
                                <LabelField label={'Password'} />
                                <TextInputField control={control} name={'password'} type={'password'}
                                    placeholder={'**********'}
                                    icon={<RiLockPasswordFill />}
                                    errorMessage={errors.password?.message} />
                            </div>
                            <div className={' w-full mt-4'}>
                                <button
                                    className={'w-full bg-red-600/80 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'}
                                    type={'submit'}>
                                    Login
                                </button>
                            </div>
                            {/* Sign up  with social account */}
                            <div className={' w-full mt-4 flex flex-row items-center justify-center gap-2 '}>
                                {
                                    socialMedia && socialMedia.map((item, index) => {
                                        return (
                                            <a href={item.link} target={'_blank'} key={index}
                                                className={'text-3xl cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-[#1da1f2]/90 hover:text-white w-10 h-10 rounded-full flex items-center justify-center'}>
                                                <item.icon />
                                            </a>)
                                    })
                                }
                            </div>
                            <div className={' w-full mt-4'}>
                                <p className={' text-center font-semibold text-gray-600 '}>
                                    Don't have an account?
                                    <NavLink
                                        to={'/register'}
                                        className={'text-blue-500  ml-3 font-medium cursor-pointer hover:text-blue-600 hover:translate-y-[-5px] transition-all duration-300 inline-block'}>
                                        Register
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

export default LoginPage