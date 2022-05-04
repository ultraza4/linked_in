import React from "react";
import s from './Header.module.css';
import Navbar from "./Navbar";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
   return (
      <header>
         <div className={s.header_logo}>
            <img src={logo} alt="logo" />
         </div>
         <Navbar />
         <div className={s.header_login}>
            <NavLink to={'/login'}>Login</NavLink >
         </div>
      </header>
   )
}

export default Header;