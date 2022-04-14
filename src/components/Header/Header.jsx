import React from "react";
import s from './Header.module.css';

const Header = () => {
   return (
      <header>
         <div className={s.header_log}>
            <img src="./" alt="logo" />
         </div>
      </header>
   )
}

export default Header;