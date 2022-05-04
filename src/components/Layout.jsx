import React from "react";
import { Outlet } from "react-router-dom";
import './../App.css';
import HeaderContainer from "./Header/HeaderContainer";

const Layout = () => {
   return (
      <>
         <HeaderContainer />
         <main className="container">
            <Outlet />
         </main>
      </>
   )

}

export default Layout;