import {FaArrowLeft, FaRegSurprise} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            {/* 404 Error Section */}
            <div className="flex items-center justify-center relative space-x-2">
                {/* Large 404 Text */}
                <div className="flex items-center space-x-4 text-blue-500 font-extrabold">
                    <span className="text-9xl">4</span>
                    {/* Balloon Icon */}
                    <div className="relative">
                        <FaRegSurprise className="text-9xl text-blue-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg text-white">M</span> {/* Mimicking the basket or logo */}
                        </div>
                    </div>
                    <span className="text-9xl">4</span>
                </div>
            </div>

            {/* Message */}
            <p className="text-lg text-gray-600 mt-4 text-center">
                Oops! The page you're looking for doesn't exist.
            </p>

            {/* Go Back Button */}
            <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center hover:bg-blue-700 transition duration-300"
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className="mr-2" /> Go Back
            </button>
        </div>
    );
};

export default ErrorPage;
