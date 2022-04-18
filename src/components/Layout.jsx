import React from "react";
import { Outlet } from "react-router-dom";
import './../App.css';
import Header from "./Header/Header";

const Layout = () => {
   return (
      <>
         <Header />
         <main className="container">
            <Outlet />
         </main>
      </>
   )

}

export default Layout;