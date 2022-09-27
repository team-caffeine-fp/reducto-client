import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../context";
import { MainLayout } from "../layouts";

export default function ProtectedRoute({ redirectTo }) {
    const { fetchOnReload, user } = useData()

    React.useEffect(() => {
        window.addEventListener("beforeunload", fetchOnReload)
        return () => {
          window.removeEventListener("beforeunload", fetchOnReload)
        };
      }, []);
    console.log(user)

    return user ? <MainLayout /> : <Navigate to={redirectTo} />
    
    
}
