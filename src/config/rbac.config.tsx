import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store.ts";
import {toast} from "react-toastify";
import {useEffect} from "react";

interface PermissionType {
    allowedBy: string;
    children: JSX.Element;
    user?: any;
}

const CheckPermission = ({ allowedBy, children }: PermissionType) => {
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        if (!user) {
            toast.error('You need to log in to access this page');
        } else if (user.role !== allowedBy) {
            toast.error('You do not have permission to access this page');
        }
    }, [user, allowedBy]);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role === allowedBy) {
        return children;
    }

    return <Navigate to="/login" />;
};

export default CheckPermission;
