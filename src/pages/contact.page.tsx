import {TextAreaField, TextInputField} from "../components/form/input.form.tsx";
import {FaMailBulk, FaPhone} from "react-icons/fa";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineAccessTime} from "react-icons/md";

const ContactPage = () => {
    const ContactDTO = Yup.object({
        fullName: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        message: Yup.string().required('Message is required'),
        phone: Yup.string().required('Phone number is required'),
        subject: Yup.string().required('Subject is required')
    });

    const {control, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(ContactDTO)
        }
    );

    const submitForm = async (data: any) => {
        console.log(data)
    }

    return (
        <>
            {/* Header Section */}
            <div className={' flex flex-col  gap-2 py-3 text-gray-600 w-full'}>
                <h1 className={' text-3xl font-medium text-center'}>Contact Us</h1>
                <p className={'text-normal  w-full text-black font-normal leading-tight  text-justify'}>
                    Our experienced team of doctors is here to provide exceptional care for all your medical needs.
                    Whether you're looking for a routine checkup, specialized treatment, or expert advice, we are
                    dedicated to ensuring your health and well-being. Reach out to us today for personalized medical
                    care you can trust.
                </p>
            </div>

            {/* Contact Info Section */}
            <div className={' flex justify-center items-center gap-4 py-8'}>
                <div className={' flex flex-col items-center '}>
                    <FaMailBulk className={' text-5xl text-primary/70'}/>
                    <h3 className={' text-2xl font-medium text-black mt-4'}> Email Us</h3>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        contact@medicalteam.com
                    </p>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        info@medicalteam.com
                    </p>
                </div>
                <div className={' flex flex-col items-center '}>
                    <FaPhone className={' text-5xl text-primary/70'}/>
                    <h3 className={' text-2xl font-medium text-black mt-4'}> Phone Number</h3>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        +977 9800000000
                    </p>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        +977 9800000000
                    </p>
                </div>
                <div className={' flex flex-col items-center '}>
                    <MdOutlineAccessTime className={' text-5xl text-primary/70'}/>
                    <h3 className={' text-2xl font-medium text-black mt-4 whitespace-nowrap '}> Work Days</h3>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        Mon-Fri: 10:00 AM - 06:00 PM
                    </p>
                    <p className={' text-xs text-black font-normal leading-tight whitespace-nowrap '}>
                        Sat: 10:00 AM - 02:00 PM
                    </p>
                </div>
                {/* Location */}
                <div className={' flex flex-col items-center '}>
                    <FaLocationDot className={' text-5xl text-primary/70'}/>
                    <h3 className={' text-2xl font-medium text-black mt-4'}> Our Clinics</h3>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        New York, USA
                    </p>
                    <p className={' text-xs text-black font-normal leading-tight '}>
                        California, USA
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center min-h-screen  p-8">
                <div className=" bg-white w-full max-w-6xl rounded-lg flex overflow-hidden">

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 p-8">
                        <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Contact</h3>
                        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Get In Touch With Us</h1>
                        <p className="text-gray-500 mb-8">
                            Our medical team is here to assist you with your health-related inquiries. Please fill out
                            the form below to reach out to us, and we will get back to you as soon as possible. Your
                            health and satisfaction are our top priorities.
                        </p>

                        {/* Form Inputs */}
                        <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
                            <div className="flex space-x-4">
                                {/* Name Input */}
                                <div className="w-1/2">
                                    <TextInputField
                                        control={control}
                                        name={'fullName'}
                                        type={'text'}
                                        placeholder={'Name'}
                                        errorMessage={errors.fullName?.message as string}
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="w-1/2">
                                    <TextInputField
                                        control={control}
                                        name={'email'}
                                        type={'email'}
                                        placeholder={'Email'}
                                        errorMessage={errors.email?.message as string}
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                {/* Subject Input */}
                                <div className="w-1/2">
                                    <TextInputField
                                        control={control}
                                        name={'subject'}
                                        type={'text'}
                                        placeholder={'Subject'}
                                        errorMessage={errors.subject?.message as string}
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="w-1/2">
                                    <TextInputField
                                        control={control}
                                        name={'phone'}
                                        type={'text'}
                                        placeholder={'Phone No.'}
                                        errorMessage={errors.phone?.message as string}
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <TextAreaField
                                    control={control}
                                    name={'message'}
                                    placeholder={'Message'}
                                    rows={5}
                                    errorMessage={errors.message?.message as string}
                                />
                            </div>

                            <button type="submit"
                                    className="w-full bg-primary/90 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div
                        className="w-full md:w-1/2 bg-cover bg-center relative rounded-tl-lg md:rounded-tr-none rounded-br-lg overflow-hidden">
                        <img src="https://images.pexels.com/photos/7580250/pexels-photo-7580250.jpeg" alt="Doctors"
                             className="w-full h-full object-cover rounded-br-lg"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
