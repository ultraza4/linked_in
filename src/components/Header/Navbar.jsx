import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const NavbarItem = (props) => {
  return (
    <div className={s.navbar__item}>
      <NavLink to={props.path} className="navbar__link"
        style={({ isActive }) => isActive ?
          { textDecoration: 'underline', color: '#181818' } : { textDecoration: 'none', color: '#181818' }}>
        <img src="/" alt="" />{props.name}
      </NavLink>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <NavbarItem path='FeedPage' name='Feed' />
      <NavbarItem path='NetworkPage' name='Network' />
      <NavbarItem path='JobsPage' name='Jobs' />
      <NavbarItem path='ChatPage' name='Chat' />
      <NavbarItem path='NoticesPage' name='Notices' />

      <div className={s.navbar__item}>
        <img src="/" alt="" />
        <textarea name="search" id="" cols="30" rows="1"></textarea>
      </div>
    </div>
  );
}


export default Navbar;