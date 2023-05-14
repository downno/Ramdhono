import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes () {
        //Dummy autentication
    let authentication = {
        token : "", //biasanya ini didapatkan dari data backend
    };

    return authentication.token ? <Outlet/> : <Navigate to="/login"/>
}