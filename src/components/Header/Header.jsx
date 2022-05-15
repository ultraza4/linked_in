import React from "react";
import s from './Header.module.css';
import Navbar from "./Navbar";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
const Header = (props) => {
   return (
      <header>
         <div className={s.header_logo}>
            <img src={logo} alt="logo" />
         </div>
         <Navbar />
         <div className={s.header_login}>
            {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
               : <NavLink to={'/login'}>Login</NavLink >}
         </div>
      </header>
   )
}

export default Header;