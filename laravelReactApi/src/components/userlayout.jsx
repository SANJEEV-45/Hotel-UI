import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

function Userlayout() {
    const {user,token} = useStateContext();
    if(!token){
         return <Navigate to={'/login'}/>
    }
    const logOut = (e)=>{
        e.preventDefault();
    }
    
    return (
        <div id="defaultLayout">
        <div className="content">
           <header>
               <div>
                   Header
               </div>
               <div>
                   {user.name}
                   <a href="#" onClick={logOut} className="btn-logout"> Logout</a>
               </div>
           </header>
           <main>
           <Outlet />
           </main>
           </div>
       </div>
    );
};

export default Userlayout;
