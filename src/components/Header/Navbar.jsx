import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__item}>
        <NavLink to="/FeedPage" className="navbar__link">
          <img src="/" alt="" />Feed
        </NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/NetworkPage" className="navbar__link">
          <img src="/" alt="" />Network
        </NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/JobsPage" className="navbar__link">
          <img src="/" alt="" />Jobs
        </NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/ChatPage" className="navbar__link">
          <img src="/" alt="" />Chat
        </NavLink>
      </div>
      <div className={s.navbar__item}>
        <NavLink to="/NoticesPage" className="navbar__link">
          <img src="/" alt="" />Notices
        </NavLink>
      </div>
      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <textarea name="search" id="" cols="30" rows="1"></textarea>
      </div>
    </div>
  );
}


export default Navbar;