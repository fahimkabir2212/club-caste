import { Outlet, useLocation, Navigate} from "react-router-dom";
import { projectAuth } from "firebase/auth";

import React from 'react'

export const PrivateRoute = () => {
    const location = useLocation();
    // let auth = { 'token':false};
    return projectAuth.currentUser ? (
        <Outlet />
      ) : (
        // keep the previous navigation stack
        <Navigate to="/login" state={{ from: location }} replace />
      );
}
