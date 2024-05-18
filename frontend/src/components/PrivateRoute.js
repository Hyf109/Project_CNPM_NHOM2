import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "hooks/useAuth";

//Wrap proctected pages using this components
const PrivateRoute = () => {

    const auth = useAuth();

    if (!auth.isAuth) {
        return <Navigate to="/signin" />;
    }

    return <Outlet/>
}

export default PrivateRoute;