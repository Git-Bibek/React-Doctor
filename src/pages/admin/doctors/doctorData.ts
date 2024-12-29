import * as Yup from "yup";

export const DoctorDTO = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required').label('Email'),
    password: Yup.string().required('Password is required'),
    profilePic: Yup.mixed().required('Profile picture is required'),
    speciality: Yup.string().required('Speciality is required'),
    degree: Yup.string().required('Degree is required'),
    experience: Yup.string().required('Experience is required'),
    about: Yup.string().required('About section is required'),
    available: Yup.boolean().default(true),
    fees: Yup.number().required('Fees are required').default(0).min(0, 'Fees cannot be negative'),
    address: Yup.object().shape({
        country: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        pinCode: Yup.string().required('ZIP code is required'),
    }).required('Address is required'),
    slot_Booked: Yup.object().shape({
        day: Yup.array().of(Yup.string()).required('At least one day must be selected'),
        time: Yup.array().of(Yup.string()).required('At least one time must be selected'),
    }).default({}),
});

export const UpdateDoctorDTO = Yup.object().shape({
    fullName: Yup.string().optional(),
    email: Yup.string().email('Invalid email format').optional(),
    password: Yup.string().optional(),
    profilePic: Yup.mixed(),
    speciality: Yup.string().optional(),
    degree: Yup.string().optional(),
    experience: Yup.string().optional(),
    about: Yup.string().optional(),
    available: Yup.boolean().optional(),
    fees: Yup.number().optional().min(0, 'Fees cannot be negative'),
    address: Yup.object().shape({
        country: Yup.string().optional(),
        city: Yup.string().optional(),
        state: Yup.string().optional(),
        pinCode: Yup.string().optional(),
    }).optional(),
    slot_Booked: Yup.object().shape({
        day: Yup.array().of(Yup.string()).optional(),
        time: Yup.array().of(Yup.string()).optional(),
    }).default({}),
});