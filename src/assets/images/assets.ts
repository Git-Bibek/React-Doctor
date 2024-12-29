import appointment_img from './appointment_img.png';
import header_img from './header_img.png';
import group_profiles from './group_profiles.png';
import profile_pic from './profile_pic.png';
import contact_image from './contact_image.png';
import about_image from './about_image.png';
import logo from './logo.svg';
import dropdown_icon from './dropdown_icon.svg';
import menu_icon from './menu_icon.svg';
import cross_icon from './cross_icon.png';
import chats_icon from './chats_icon.svg';
import verified_icon from './verified_icon.svg';
import arrow_icon from './arrow_icon.svg';
import info_icon from './info_icon.svg';
import upload_icon from './upload_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import Dermatologist from './Dermatologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Neurologist from './Neurologist.svg';
import Pediatricians from './Pediatricians.svg';
import add_icon from './add_icon.svg';
import admin_logo from './admin_logo.svg';
import appointment_icon from './appointment_icon.svg';
import cancel_icon from './cancel_icon.svg';
import doctor_icon from './doctor_icon.svg';
import home_icon from './home_icon.svg';
import people_icon from './people_icon.svg';
import upload_area from './upload_area.svg';
import list_icon from './list_icon.svg';
import tick_icon from './tick_icon.svg';
import appointments_icon from './appointments_icon.svg';
import earning_icon from './earning_icon.svg';
import patients_icon from './patients_icon.svg';
import imagePreview from './imagePreview.png';

// Define interfaces for types

interface DoctorAddress {
    line1: string;
    line2: string;
}

interface Doctor {
    _id: string;
    name: string;
    image: any;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: DoctorAddress;
}

interface Speciality {
    speciality: string;
    image: string;
}

interface AssetImages {
    appointment_img: string;
    header_img: string;
    group_profiles: string;
    logo: string;
    chats_icon: string;
    verified_icon: string;
    info_icon: string;
    profile_pic: string;
    arrow_icon: string;
    contact_image: string;
    about_image: string;
    menu_icon: string;
    cross_icon: string;
    dropdown_icon: string;
    upload_icon: string;
    stripe_logo: string;
    razorpay_logo: string;
    add_icon: string;
    admin_logo: string;
    appointment_icon: string;
    cancel_icon: string;
    doctor_icon: string;
    home_icon: string;
    people_icon: string;
    upload_area: string;
    list_icon: string;
    tick_icon: string;
    appointments_icon: string;
    earning_icon: string;
    patients_icon: string;
    doc1: string;
    doc2: string;
    doc3: string;
    doc4: string;
    doc5: string;
    doc6: string;
    doc7: string;
    doc8: string;
    doc9: string;
    doc10: string;
    doc11: string;
    doc12: string;
    doc13: string;
    doc14: string;
    doc15: string;
    Dermatologist: string;
    Gastroenterologist: string;
    General_physician: string;
    Gynecologist: string;
    Neurologist: string;
    Pediatricians: string;
    imagePreview: string;
}

// Assets object with strict typing
export const assets: AssetImages = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    add_icon,
    admin_logo,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    home_icon,
    people_icon,
    upload_area,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14,
    doc15,
    Dermatologist,
    Gastroenterologist,
    General_physician,
    Gynecologist,
    Neurologist,
    Pediatricians,
    imagePreview

};

// Speciality data with defined types
export const specialityData: Speciality[] = [
    {
        speciality: 'General physician',
        image: General_physician,
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist,
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist,
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians,
    },
    {
        speciality: 'Neurologist',
        image: Neurologist,
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
    },
];

// Doctors data with defined types
export const doctors: Doctor[] = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]
