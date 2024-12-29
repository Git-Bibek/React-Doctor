import {useEffect, useState} from 'react';
import doctorService from '../services/doctor.service.ts';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
    DateInputField,
    LabelField,
    SelectInputField,
    TextAreaField,
    TextInputField
} from '../components/form/input.form.tsx';
import "react-datepicker/dist/react-datepicker.css";
import authService from "./auth/auth.service.ts";
import {toast} from "react-toastify";


const BookAppointmentPage = () => {
    const AppointmentDTO = Yup.object({
        doctor: Yup.string().required('Doctor is required'),
        date: Yup.date().required('Date is required').nullable(),
        notes: Yup.string(),
        phone: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        patientName: Yup.string().required('Patient Name is required'),
    });

    const [doctors, setDoctors] = useState<any[]>([]);

    const {control, handleSubmit, formState: {errors}, watch,} = useForm({
        resolver: yupResolver(AppointmentDTO)
    });


    const fetchDoctors = async () => {
        try {
            const response: any = await doctorService.getRequest('/doctor/');
            setDoctors(response.result);
        } catch (error) {
            console.error(error);
        }
    };

    const selectDoctor = watch('doctor');
    const selectedDoctorInfo = doctors.find((doctor) => doctor._id === selectDoctor);

    const submitForm = async (data: any) => {
        try {
            console.log(data)
            const response: any = await authService.postRequest('/appointment/add', data);
            console.log(response)
            toast.success(response.message)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div className="container mx-auto items-center justify-center p-6">
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-3xl font-bold text-center mb-2">Book an Appointment</h1>
                <p className='text-center'>Please fill out the form below to book an appointment.</p>
            </div>
            <div className="flex items-center justify-center">
                <div className='flex flex-col w-[50%] justify-center'>
                    <form onSubmit={handleSubmit(submitForm)} className={' w-full'}>
                        <div className='mb-2'>
                            <LabelField label='Patient Name'/>
                            <TextInputField control={control} name='patientName' type='text'
                                            errorMessage={errors.patientName?.message}
                                            placeholder='Patient Name'/>
                        </div>
                        <div className='mb-2'>
                            <LabelField label='Select Doctor'/>
                            <SelectInputField
                                control={control}
                                name='doctor'
                                options={doctors.length > 0 ?
                                    doctors.map((doctor: any) => ({
                                        label: doctor.fullName,
                                        value: doctor._id
                                    })) : [{label: 'No doctor found', value: ''}]
                                }
                                errorMessage={errors.doctor?.message}
                                placeholder='Select Doctor'
                            />
                            <div className={' mt-2 flex flex-col justify-start items-start text-xs'}>
                                {selectDoctor && selectedDoctorInfo && (
                                    <>
                                        <p className=" text-primary">Specialty: {selectedDoctorInfo.speciality}</p>
                                        <p className=" text-primary">Experience: {selectedDoctorInfo.experience}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='mb-2'>
                            <LabelField label='Select Date'/>
                            <DateInputField name={'date'} control={control}
                                            errorMessage={errors.date?.message}/>
                        </div>
                        <div className='mb-2'>
                            <LabelField label='Email'/>
                            <TextInputField name={'email'} control={control} type={'text'}
                                            errorMessage={errors.email?.message}/>
                        </div>
                        <div className='mb-2'>
                            <LabelField label='Select Date'/>
                            <TextInputField name={'phone'} control={control} type={'text'}
                                            errorMessage={errors.phone?.message}/>
                        </div>
                        <div className='mb-2'>
                            <LabelField label='Notes'/>
                            <TextAreaField
                                control={control}
                                name='notes'
                                rows={4}
                                placeholder='Any notes...'
                                errorMessage={errors.notes?.message}
                            />
                        </div>
                        <div className='flex justify-center items-center w-full gap-4 mt-4'>
                            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Book Appointment
                            </button>
                            <button
                                type="reset"
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                                Cancel Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointmentPage;
