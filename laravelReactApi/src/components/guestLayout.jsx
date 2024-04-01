import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

function GuestLayout(){
   const{user,token} = useStateContext();
   if(token){
      return <Navigate to={'/'}/>
    }
    return (
        <div>
            <div>
            Layout
            </div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
