import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";

interface PaginationProps {
    currentPage: number;
    onPageChange: any;
    totalPages: number
}

const Pagination = ({currentPage, onPageChange, totalPages}: PaginationProps) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }
    return (
        <div className="flex justify-center my-6">
            <nav aria-label="Page navigation" className="flex items-center">
                <ul className="inline-flex space-x-1">
                    <button
                        onClick={handlePrevious}
                        className="flex items-center gap-2 justify-center px-4 h-10 text-black bg-white border border-gray-300 rounded-l-md transition duration-200 ">
                        <FaArrowLeft className="w-5 h-5"/> Previous
                    </button>
                    <li>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => onPageChange(index + 1)}
                                className={`flex items-center justify-center px-4 h-10 border border-gray-300 transition duration-200 rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 justify-center px-4 h-10 text-black bg-white border border-gray-300 rounded-l-md transition duration-200 ">
                            Next <FaArrowRight className="w-5 h-5"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
