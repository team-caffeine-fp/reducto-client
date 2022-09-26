import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../context";
import { MainLayout } from "../layouts";

export default function ProtectedRoute({ redirectTo }) {
    const {user} = useData();
    console.log(user)

    return user ? <Outlet /> : <Navigate to={redirectTo} />
    
    
}
