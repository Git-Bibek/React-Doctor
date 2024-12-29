import {ReactNode} from "react";

export interface TextInputInterface {
    control: any;
    name: string;
    required?: boolean;
    errorMessage?: string | null;
    type: string;
    icon?: ReactNode,
    placeholder?: string
}

export interface FileInputInterface {
    control: any;
    name: string;
    errorMessage?: string | null;
    type: string;
    icon?: ReactNode,
    setValue?: any
}

export interface SelectInputInterface {
    control: any;
    name: string;
    options: { value: string; label: string }[];
    errorMessage?: string;
    placeholder?: string;
    isMulti?: boolean
    isClearable?: boolean
}
export interface Option {
    value: string;
    label: string;
}

export interface TextAreaInterface {
    control: any;
    name: string;
    errorMessage?: string;
    placeholder?: string;
    rows?: number
}
export interface DateFieldProps {
    control: any;
    name: string;
    placeholder?: string;
    errorMessage?: string;
    dateFormat?: string;
}