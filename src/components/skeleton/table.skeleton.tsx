interface TableSkeletonProps {
    column: number;
    row: number;
    headings: string[];

}

const TableSkeleton = ({column, row, headings}: TableSkeletonProps) => {

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-black bg-white dark:bg-primary/70 dark:text-white">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input
                            id="checkbox-all-search"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-primary rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                            aria-label="Select all"
                        />
                        <label htmlFor="checkbox-all-search" className="sr-only">Select all</label>
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

            {Array.from({length: row}).map((_, rowIndex) => (
                <tr
                    key={rowIndex}
                    className="bg-white border-b dark:text-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300"
                >
                    {Array.from({length: column}).map((_, colIndex) => (
                        <td key={colIndex} className="px-4 py-4">
                            <div className="h-1 bg-gray-300 rounded-full dark:bg-gray-600 w-auto animate-pulse"></div>
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TableSkeleton;
