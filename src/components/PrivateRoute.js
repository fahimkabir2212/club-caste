import { Outlet, useLocation, Navigate} from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import React, { Children } from 'react'

export default function PrivateRoute({children}) {
  const {user} = useAuth();
    if(!user){
      return <Navigate to = '/login'></Navigate>
    }
  return (
    children 
  )
}

