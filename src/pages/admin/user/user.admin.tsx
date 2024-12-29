import {NavLink} from "react-router-dom";
import {IoIosAddCircle} from "react-icons/io";
import SearchComponent from "../../../components/form/search.input.tsx";
import {useEffect, useState} from "react";
import TableSkeleton from "../../../components/skeleton/table.skeleton.tsx";
import authService from "../../auth/auth.service.ts";
import {SearchParams} from "../../../config/app.constant.ts";
import {MdDeleteForever} from "react-icons/md";
import {FaUserEdit} from "react-icons/fa";
import {toast} from "react-toastify";
import {deleteModal} from "../../../helper/ButtonModal.tsx";
import Pagination from "../../../components/pagination/pagination.component.tsx";

const UserDashboard = () => {
    const headings = [' Name', 'Password', 'Role'];

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const fetchUsers = async ({page = 1, limit = 10, search = ''}: SearchParams) => {
        try {
            const response: any = await authService.getRequest('/user/', {
                params: {
                    limit: limit,
                    page: page,
                    search: search
                }
            });
            setUsers(response.result);
            setTotalPages(response.meta.totalPages);
            console.log(response)
        } catch (exception) {
            console.log(exception);
        } finally {
            setLoading(false);
        }
    }


    const handlePageChange = (page: number) => {
        setCurrentPage(page)

    }
    const deleteAction = async (id: string) => {
        try {
            console.log('Delete doctor with id:', id);
            const response: any = await authService.deleteRequest(`/user/${id}`);
            fetchUsers({page: currentPage, limit: 10, search: searchQuery});
            toast.success(response.message);
        } catch (exception) {
            console.log(exception);
        }
    }
    useEffect(() => {
        fetchUsers({page: currentPage, limit: 10, search: searchQuery});
    }, [searchQuery, currentPage]);
    return (
        <>
            <h1 className={'text-3xl font-medium text-gray-600 mx-10 uppercase mt-2 text-center'}>
                Doctors Admin
            </h1>
            <hr className={'w-full mt-6 mb-6 border-red-300'}/>
            {/* Table */}
            <div className="relative overflow-x-auto  sm:rounded-lg px-2">
                <div
                    className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className={'flex items-center gap-2 text-sm text-center text-black'}>
                        {/* Add Button */}
                        <NavLink to={'/admin/user/add'}
                                 className={'inline-flex items-center text-gray-600 gap-2 bg-primary/20 p-3 rounded-xl hover:bg-primary/40 font-bold'}>
                            Add User
                            <IoIosAddCircle
                                className={'inline-block items-center text-primary/50 text-xl font-extrabold'}/>
                        </NavLink>
                    </div>
                    {/* Search Input */}
                    <div className={'flex items-center gap-2 text-sm text-center text-black'}>
                        <SearchComponent value={searchQuery} handleChange={(e: any) => setSearchQuery(e.target.value)}/>
                    </div>
                </div>
            </div>

            {/* */}
            {
                loading ?
                    <>
                        <TableSkeleton column={5} row={5} headings={headings}/>
                    </>
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

                                {users.length > 0 && users ? users.map((item: any, index: number) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
                                    >
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id={`checkbox-table-${item._id}`}
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor={`checkbox-table-${item._id}`}
                                                       className="sr-only">checkbox</label>
                                            </div>
                                        </td>

                                        <th scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                            <img className="w-10 h-10 rounded-full" src={item.profilePic}
                                                 onError={(e: any) => e.target.src = 'https://www.placeholder.com/60x40.png/CCCCCC/999999?text=No+Image'}
                                                 alt="Jese image"/>
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{item.fullName}</div>
                                                <div className="font-normal text-gray-500">{item.email}</div>
                                            </div>
                                        </th>
                                        <td className="p-2">{
                                            item.password ? '******' : 'Not Set'
                                        }</td>
                                        <td className="p-2">{item.role}</td>

                                        <td className="p-2 flex items-center text-center gap-2 my-1">
                                            <button onClick={async () => {
                                                const confirmed = await deleteModal();
                                                if (confirmed) {
                                                    await deleteAction(item._id);
                                                }
                                            }}
                                                    className={'text-red-600 text-xl hover:text-red-800'}>
                                                <MdDeleteForever/>
                                            </button>
                                            <NavLink to={'#'} className={'text-blue-600 text-xl hover:text-blue-800'}>
                                                <FaUserEdit/>
                                            </NavLink>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr className={' text-center font-bold text-black text-xl py-2'}>
                                        <td colSpan={6} className={'text-center '}>
                                            No Data Found
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        {/* pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
            }
        </>
    )
}

export default UserDashboard