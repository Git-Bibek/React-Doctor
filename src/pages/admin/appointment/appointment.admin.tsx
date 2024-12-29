import {NavLink} from "react-router-dom";
import {IoIosAddCircle} from "react-icons/io";
import SearchComponent from "../../../components/form/search.input.tsx";
import TableSkeleton from "../../../components/skeleton/table.skeleton.tsx";
import Pagination from "../../../components/pagination/pagination.component.tsx";
import {useEffect, useState} from "react";
import {SearchParams} from "../../../config/app.constant.ts";
import authService from "../../auth/auth.service.ts";
import {deleteModal} from "../../../helper/ButtonModal.tsx";
import {MdDeleteForever} from "react-icons/md";
import {FaUserEdit} from "react-icons/fa";
import moment from 'moment';
import {toast} from "react-toastify";

const AppointmentAdmin = () => {
    const headings = ['Patient', 'Appointment Date', 'Appointment Doctor', 'Status'];
    const [loading, setLoading] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchAppointments = async ({page = 1, limit = 10, search = searchQuery}: SearchParams) => {
        try {
            setLoading(true)
            const response: any = await authService.getRequest('/appointment/', {
                params: {
                    limit: limit,
                    page: page,
                    search: search
                }
            });
            console.log(response)
            setAppointments(response.result);
            setTotalPages(response.meta.totalPages);
        } catch (exception) {
            console.log(exception);
        } finally {
            setLoading(false)
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);

    }
    const handleSearch = (event: any) => {
        setSearchQuery(event.target.value);
    }
    const handleDelete = (id: string) => {
        try {
            console.log('Delete doctor with id:', id);
            const response: any = authService.deleteRequest(`/appointment/${id}`);
            fetchAppointments({page: currentPage, limit: 10, search: searchQuery});
            toast.success(response.message);
        } catch (exception) {
            console.log(exception);
        }
    }
    useEffect(() => {
        fetchAppointments({page: currentPage, limit: 10, search: searchQuery});
    }, [currentPage, searchQuery]);

    return (
        <>
            <h1 className={'text-3xl font-medium text-gray-600 mx-10 uppercase mt-2 text-center'}>
                Appointments
            </h1>
            <hr className={'w-full mt-6 mb-6 border-red-300'}/>
            {/* Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div
                    className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className={'flex items-center gap-2 text-sm text-center text-black'}>
                        {/* Add Button */}
                        <NavLink to={'/book-appointment'}
                                 className={'inline-flex items-center text-gray-600 gap-2 bg-primary/20 p-3 rounded-xl hover:bg-primary/40 font-bold'}>
                            Add Appointment
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
                    <div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-black bg-white dark:bg-primary/70 dark:text-white">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>

                                {
                                    headings && headings.map((item: any, index: number) => (
                                        <th scope="col" className="px-2 py-3" key={index}>
                                            {item}
                                        </th>
                                    ))
                                }
                                <th scope="col" className="px-2 py-3">
                                    Action
                                </th>
                            </tr>

                            </thead>
                            <tbody>
                            {appointments.length > 0 && appointments ? appointments.map((item: any, index: number) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id={`checkbox-table-${item._id}`}
                                                type="checkbox"
                                                value={item._id}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label htmlFor={`checkbox-table-${item.id}`}
                                                   className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td scope="row"
                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                        <img className="w-10 h-10 rounded-full"
                                             src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
                                             alt="Jese image"/>
                                        <div className="ps-3">
                                            <div className=" text-sm  font-semibold">
                                                {item.patientName}
                                            </div>
                                            <div className="font-normal text-black text-sm">{item.email}</div>
                                        </div>
                                    </td>
                                    <td scope="row"
                                        className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        {
                                            item.date && moment(item.date).format('dddd, DD-MM-YYYY')
                                        }
                                    </td>
                                    <td scope="row"
                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                        <img className="w-10 h-10 rounded-full" src={item.doctor.profilePic}
                                             alt="Jese image"/>
                                        <div className="ps-3">
                                            <div className=" text-sm  font-semibold">
                                                {item.doctor.fullName}
                                            </div>
                                            <div
                                                className={' flex items-center gap-2 text-sm font-normal text-gray-500'}>
                                                {item.doctor.available === true ?
                                                    <>
                                                        <span className={' w-2 h-2 rounded-full bg-green-500'}> </span>
                                                        <p className={' text-sm text-center text-green-500'}> Available</p>
                                                    </>
                                                    :
                                                    <>
                                                        <span className={' w-2 h-2 rounded-full bg-red-500'}> </span>
                                                        <p className={' text-sm text-center text-red-500'}> Not
                                                            Available</p>
                                                    </>
                                                }
                                            </div>
                                            <div className="font-normal text-black text-sm">{item.email}</div>
                                        </div>
                                    </td>
                                    <td className={' ps-3'}>
                                        {item.status === 'Pending' ?
                                            <span className={' text-sm text-center text-red-500'}>Pending</span> :
                                            <span className={' text-sm text-center text-green-500'}>Approved</span>}
                                    </td>
                                    <td scope={"row"}
                                        className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                        <div className={' flex items-center gap-2 text-2xl font-normal text-gray-500'}>
                                            <button onClick={
                                                async () => {
                                                    const confirmed = await deleteModal()
                                                    if (confirmed) {
                                                        handleDelete(item._id)
                                                    }
                                                }
                                            }
                                                    className={'text-red-600 text-xl hover:text-red-800'}>
                                                <MdDeleteForever/>
                                            </button>
                                            <NavLink to={`/admin/doctors/edit/${item._id}`}
                                                     className={'text-blue-600 text-xl hover:text-blue-800'}>
                                                <FaUserEdit/>
                                            </NavLink>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <>
                                    <td colSpan={7} className="text-center p-4 text-black">
                                        No records found
                                    </td>
                                </>
                            )}
                            </tbody>
                        </table>
                    </div>
                    {/*pagination*/}
                    <div className={' mt-5 flex justify-end'}>
                        <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
                    </div>
                </>
            }
        </>
    )
}
export default AppointmentAdmin