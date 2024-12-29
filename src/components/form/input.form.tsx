import {useController} from "react-hook-form";
import {
    DateFieldProps,
    FileInputInterface,
    SelectInputInterface,
    TextAreaInterface,
    TextInputInterface
} from "./formInterface.ts";
import Select from "react-select";
import DatePicker from "react-datepicker";

export const LabelField = ({label}: { label: string }) => {
    return (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            {label}
        </label>
    );
};


export const TextInputField = ({
                                   control,
                                   name,
                                   type,
                                   errorMessage,
                                   placeholder,
                                   icon,
                               }: TextInputInterface) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    return (
        <>
            <div className="relative">
                {icon && (
                    <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    {...field}
                    name={name}
                    className={`border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 block w-full ps-10 p-2.5 dark:bg-white dark:placeholder-gray-400`}
                    placeholder={placeholder}
                />
            </div>
            {errorMessage && errorMessage.length > 0 && (
                <p
                    id="filled_error_help"
                    className="text-sm text-red-600 dark:text-red-400 font-medium px-1 py-1"
                >
                    {errorMessage}
                </p>
            )}
        </>
    );
};

export const FileInputField = ({
                                   control,
                                   name,
                                   type,
                                   errorMessage,
                                   setValue,
                               }: FileInputInterface) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    return (
        <>
            <input
                {...field}
                name={name}
                className="block w-full text-sm p-2.5 text-black dark:text-black border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer focus:outline-none focus:border-gray-500 dark:focus:border-gray-500"
                aria-describedby="file_input_help"
                onChange={(e: any) => {
                    setValue(name, e.target.files[0]);
                    const file = e.target.files[0];
                    if (file) {
                        field.onChange(file);
                    }
                }}
                type={type}
            />
            {errorMessage && errorMessage.length > 0 && (
                <p
                    id="filled_error_help"
                    className="text-sm text-red-600 dark:text-red-400 font-medium"
                >
                    {errorMessage}
                </p>
            )}
        </>
    );
};


export const SelectInputField = ({
                                     control,
                                     name,
                                     options,
                                     errorMessage,
                                     isMulti,
                                     placeholder,
                                 }: SelectInputInterface) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    return (
        <>
            <div className="relative">
                <Select
                    {...field}
                    name={name}
                    options={options}
                    isMulti={isMulti}
                    placeholder={placeholder}
                    classNamePrefix="react-select"
                    className="w-full text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 block  dark:bg-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 dark:text-black"
                    getOptionValue={(option) => option.value}
                    getOptionLabel={(option) => option.label}
                    value={
                        isMulti ?
                            Array.isArray(field.value) ? options.filter((option) => field.value.includes(option.value))
                                : [] :
                            options.find((option) => option.value === field.value)

                    }
                    isClearable

                    onChange={(option: any) => {
                        if (isMulti) {
                            field.onChange(option.map((item: any) => item.value));
                            console.log(option.map((item: any) => item.value));
                        } else {
                            field.onChange(option.value);
                        }
                    }}
                />
            </div>
            {errorMessage && errorMessage.length > 0 && (
                <p
                    id="filled_error_help"
                    className="text-sm text-red-600 dark:text-red-400 font-medium px-1 py-1"
                >
                    {errorMessage}
                </p>
            )}
        </>
    );
};

export const ToggleInputField = ({control, name, errorMessage}: {
    control: any,
    name: string,
    label?: string,
    errorMessage?: string
}) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    const handleToggle = () => {
        field.onChange(!field.value);
        console.log(!field.value);
    };

    return (
        <>
            <label className="flex items-center cursor-pointer">
                <div className="flex items-center gap-2" onClick={handleToggle}>

                    {/* Toggle Switch */}
                    <div
                        className={`relative w-11 h-6 rounded-full transition-colors 
                        ${field.value ? 'bg-green-600' : 'bg-red-800'} 
                        peer-focus:ring-4 peer-focus:ring-green-300 
                        dark:peer-focus:ring-green-800`}>
                        <div
                            className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white border transition-transform
                            ${field.value ? 'translate-x-full bg-green-600' : 'translate-x-0 bg-red-800'}`}
                        />
                    </div>

                </div>
            </label>

            {/* Display error message */}
            {errorMessage && (
                <p id="filled_error_help" className="text-sm text-red-600 dark:text-red-400 font-medium px-1 py-1">
                    {errorMessage}
                </p>
            )}
        </>
    );
};


export const TextAreaField = ({control, name, errorMessage, placeholder, rows}: TextAreaInterface) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    return (
        <>
            <textarea
                {...field}
                name={name}
                rows={rows}
                placeholder={placeholder}
                className="w-full text-sm p-2.5 text-black dark:text-black border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-500"
            />
            {errorMessage && errorMessage.length > 0 && (
                <p
                    id="filled_error_help"
                    className="text-sm text-red-600 dark:text-red-400 font-medium"
                >
                    {errorMessage}
                </p>
            )}
        </>
    );
}

export const DateInputField = ({
                                    control,
                                    name,
                                    errorMessage,
                                    placeholder = "Select applicable date",
                                    dateFormat = "MMMM d, yyyy"
                                }: DateFieldProps) => {
    const {field} = useController({
        control: control,
        name: name,
    });

    return (<>
            <div className="relative">
                <DatePicker
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => field.onChange(date)}
                    placeholderText={placeholder}
                    dateFormat={dateFormat}
                    isClearable
                    className="w-full text-sm p-2.5 text-black dark:text-black border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-500 dark:focus:border-gray-500"
                />
            </div>
            {errorMessage && errorMessage.length > 0 && (
                <p id="filled_error_help" className="text-sm text-red-600 dark:text-red-400 font-medium">
                    {errorMessage}
                </p>
            )}
        </>
    );
}