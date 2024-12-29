export interface SearchParams {
    page: number | 1;
    limit: number | null;
    search?: string | null;
}

export const Days = [{value: "SUN", label: 'Sunday'},
    {value: "MON", label: 'Monday'},
    {value: "TUE", label: 'Tuesday'}, {value: "WED", label: 'Wednesday'},
    {value: "THU", label: 'Thursday'}, {value: "FRI", label: 'Friday'},
    {value: "SAT", label: 'Saturday'}]
export const Time = [{value: "10:00 AM", label: '10:00 AM'}, {value: "11:00 AM", label: '11:00 AM'},
    {value: "12:00 PM", label: '12:00 PM'}, {value: "01:00 PM", label: '01:00 PM'},
    {value: "02:00 PM", label: '02:00 PM'}, {value: "05:00 PM", label: '05:00 PM'},
    {value: "06:00 AM", label: '06:00 AM'}]