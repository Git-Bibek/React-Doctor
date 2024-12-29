import TableComponent from "../../../components/table/table.component.tsx";
import TableSkeleton from "../../../components/skeleton/table.skeleton.tsx";
import {NavLink} from "react-router-dom";
import {IoIosAddCircle} from "react-icons/io";
import {useEffect, useState} from "react";
import authService from "../../auth/auth.service.ts";
import {SearchParams} from "../../../config/app.constant.ts";
import SearchComponent from "../../../components/form/search.input.tsx";
import Pagination from "../../../components/pagination/pagination.component.tsx";
import {toast} from "react-toastify";

const DoctorsAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchDoctors = async ({page = 1, limit = 10, search = ''}: SearchParams) => {
        try {
            setLoading(true);
            const response: any = await authService.getRequest('/doctor/', {
                params: {
                    limit: limit,
                    page: page,
                    search: search
                }
            });
            setTotalPages(response.meta.totalPages);
            setDoctors(response.result);
        } catch (exception) {
            console.log(exception);
        } finally {
            setLoading(false);
        }
    };
    const handlePageChange = (page: number) => {
        setCurrentPage(page);

    }
    const handleSearch = (event: any) => {
        setSearchQuery(event.target.value);
    }
    const handleDelete = async (id: string) => {
        try {
            console.log('Delete doctor with id:', id);
            const response: any = await authService.deleteRequest(`/doctor/${id}`);
            fetchDoctors({page: currentPage, limit: 10, search: searchQuery});
            toast.success(response.message);
        } catch (exception) {
            console.log(exception);
        }
    }


    useEffect(() => {
        fetchDoctors({page: currentPage, limit: 10, search: searchQuery});
    }, [currentPage, searchQuery]);

    return (
        <>
            <h1 className={'text-3xl font-medium text-gray-600 mx-10 uppercase mt-2 text-center'}>
                Doctors Admin
            </h1>
            <hr className={'w-full mt-6 mb-6 border-red-300'}/>
            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div
                    className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className={'flex items-center gap-2 text-sm text-center text-black'}>
                        {/* Add Button */}
                        <NavLink to={'/admin/doctors/add'}
                                 className={'inline-flex items-center text-gray-600 gap-2 bg-primary/20 p-3 rounded-xl hover:bg-primary/40 font-bold'}>
                            Add Doctor
                            <IoIosAddCircle
                                className={'inline-block items-center text-primary/50 text-xl font-extrabold'}/>
                        </NavLink>
                    </div>

                    {/* Search Input */}
                    <div className={'flex items-center gap-2 text-sm text-center text-black'}>
                        <SearchComponent value={searchQuery} handleChange={handleSearch}/>
                    </div>
                </div>
            </div>
            {/* Table component */}
            {loading ?
                <TableSkeleton headings={['Name', 'Email', 'Speciality', 'Price']} row={6} column={6}/>
                :
                <>
                    <TableComponent data={doctors}
                                    headings={['Name', 'Degree', 'Speciality', 'Experience', 'Fees',]}
                                    deleteAction={handleDelete}/>
                    {/*pagination*/}
                    <div className={' mt-5 flex justify-end'}>
                        <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
                    </div>
                </>
            }
        </>
    );
};

export default DoctorsAdmin;
