import {FaSearch} from "react-icons/fa";

const SearchComponent = ({value, handleChange}: { value: string, handleChange: any }) => {
    return (<>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div
                    className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <FaSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                </div>
                <input
                    type="text"
                    id="table-search"
                    className="block p-2 ps-10 text-sm text-black border border-primary rounded-lg w-80 bg-gray-50 dark:bg-white dark:border-gray-600 dark:text-black focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for items"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export default SearchComponent