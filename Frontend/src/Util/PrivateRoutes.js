import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes () {
       
    let authentication = {
        token : "", 
    };

    return authentication.token ? <Outlet/> : <Navigate to="/login"/>
}
