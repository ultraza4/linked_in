import React from "react";
import s from "./Header.module.css"

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <span className="navbar__text">feed</span>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <span className="navbar__text">network</span>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <span className="navbar__text">jobs</span>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <span className="navbar__text">chat</span>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <span className="navbar__text">notices</span>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <textarea name="search" id="" cols="30" rows="1"></textarea>
      </div>
    </div>
  );
}


export default Navbar;