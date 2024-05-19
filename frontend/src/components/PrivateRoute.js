import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "hooks/useAuth";

//Wrap proctected pages using this components
const PrivateRoute = () => {


    const user = JSON.parse(localStorage.getItem('user'));
    
    // if (!user) {
    //     return <Navigate to="/signin" />;
    // }

    return <Outlet/>
}

export default PrivateRoute;