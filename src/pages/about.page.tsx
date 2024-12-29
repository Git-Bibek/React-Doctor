import {NavLink} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa6";

const AboutPage = () => {
    const background = 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const workflow = [
        {
            id: 1,
            title: 'Consultation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1600912877162-e4e820a5c5d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 2,
            title: 'Diagnosis',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 3,
            title: 'Treatment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1606208905863-902aefe03b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 4,
            title: 'Recovery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 5,
            title: 'Support',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1578496781985-1e019617363b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
        {
            id: 6,
            title: 'Investigation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet',
            image: 'https://images.unsplash.com/photo-1614202023760-d960a90dfd94?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                <div className="container mx-auto text-center py-14">
                    <h4 className="text-white text-center font-medium mt-12">Our Work Flow</h4>
                    <h1 className="text-3xl text-white text-center font-bold">How We Work</h1>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center p-4 text-gray-600">
                        {workflow.map((item, index) => (
                            <div key={index}
                                 className="bg-gray-100 rounded-md flex flex-col justify-center items-center p-4 gap-4 text-center">
                                <img src={item.image} alt={item.title}
                                     className="w-full min-h-md object-cover rounded-md"/>
                                <h2 className="text-2xl font-bold">{item.id}. {item.title}</h2>
                                <p className="text-sm text-gray-700">{item.description}</p>
                                <NavLink to={'#'} className="text-blue-800 font-bold underline underline-offset-4">Read
                                    More</NavLink>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <NavLink to={'#'}
                                 className="bg-primary text-white font-bold py-3 px-4 rounded-md  underline underline-offset-4">
                            Book an Appointment
                            <FaArrowRight className="inline-block ml-2"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
