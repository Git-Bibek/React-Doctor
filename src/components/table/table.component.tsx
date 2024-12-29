import {NavLink} from "react-router-dom";
import {MdDeleteForever} from "react-icons/md";
import {FaUserEdit} from "react-icons/fa";
import {deleteModal} from "../../helper/ButtonModal.tsx";

const TableComponent = ({data, headings, deleteAction}: any) => {
    return (
        <>
            {/*TableComponent */}
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
                    {data.length > 0 && data ? data.map((item: any, index: number) => (
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
                                    <label htmlFor={`checkbox-table-${item.id}`} className="sr-only">checkbox</label>
                                </div>
                            </td>

                            <th scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                <img className="w-10 h-10 rounded-full" src={item.profilePic}
                                     alt="Jese image"/>
                                <div className="ps-3">
                                    <div className=" text-sm  font-semibold">
                                        {item.fullName}
                                    </div>
                                    <div className={' flex items-center gap-2 text-sm font-normal text-gray-500'}>
                                        {item.available === true ?
                                            <>
                                                <span className={' w-2 h-2 rounded-full bg-green-500'}> </span>
                                                <p className={' text-sm text-center text-green-500'}> Available</p>
                                            </>
                                            :
                                            <>
                                                <span className={' w-2 h-2 rounded-full bg-red-500'}> </span>
                                                <p className={' text-sm text-center text-red-500'}> Not Available</p>
                                            </>
                                        }
                                    </div>
                                    <div className="font-normal text-black text-sm">{item.email}</div>
                                </div>
                            </th>
                            <th scope="row" className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                {item.degree}
                            </th>
                            <td className="p-2">{item.speciality}</td>
                            <td className="p-2">{item.experience}</td>
                            <td className="p-2">{item.fees}</td>
                            <td className="p-2 flex items-center text-center gap-2 my-1">
                                <button onClick={
                                    async () => {
                                        const confirmed = await deleteModal()
                                        if (confirmed) {
                                            deleteAction(item._id)
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
        </>
    );
};

export default TableComponent;
