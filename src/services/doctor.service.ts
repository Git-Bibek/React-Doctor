import HttpServices from "./http.service.ts";
import {toast} from "react-toastify";
import {SearchParams} from "../config/app.constant.ts";
import authService from "../pages/auth/auth.service.ts";

class DoctorService extends HttpServices {
    fetchDoctorsById = async (id: string) => {
        try {
            return await this.getRequest(`/doctor/${id}`)
        } catch (exception: any) {
            console.log(exception)
            if (exception?.response?.data?.message) {
                toast.error(exception?.response?.data?.message)
            }
            toast(exception.message)
        }
    }

    fetchDoctors = async ({page = 1, limit = 10, search = ''}: SearchParams) => {
        try {

            return await authService.getRequest('/doctor/', {
                params: {
                    limit: limit,
                    page: page,
                    search: search
                }
            });

        } catch (exception) {
            console.log(exception);
        }
    };

}

const doctorService = new DoctorService;
export default doctorService