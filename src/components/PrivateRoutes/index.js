import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const isLogin = false;
    return (
        <>
           {isLogin ? (<Outlet />) : (<Navigate to= "/" />)}
        </>
    )
}

export default PrivateRoute