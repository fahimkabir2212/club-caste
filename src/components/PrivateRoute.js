import { Outlet, useLocation, Navigate} from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import React, { Children } from 'react'

export default function PrivateRoute({children}) {
  const {currentUser} = useAuth();
    if(!currentUser){    
      return(
        <Navigate to = '/login'></Navigate>
      )
    }else{
      <Navigate to = '/'></Navigate>
    }
  return (
    children 
  )
}

