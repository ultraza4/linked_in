import React from "react";
import s from './Header.module.css';
import HeaderProfile from "./HeaderProfile";
import Navbar from "./Navbar";

const Header = () => {
   return (
      <header>
         <div className={s.header_logo}>
            <img src="/" alt="logo" />
         </div>
         <Navbar /> 
         <HeaderProfile />
         <div className={s.header_other}>
            <img src="/" alt="other" />
         </div>
      </header>
   )
}

export default Header;