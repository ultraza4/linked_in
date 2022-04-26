import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import feed_logo from "./../../assets/images/feed_logo.png"
import network_logo from "./../../assets/images/network_logo.png"
import jobs_logo from "./../../assets/images/jobs_logo.png"
import chat_logo from "./../../assets/images/chat_logo.png"
import notices_logo from "./../../assets/images/notices_logo.png"

const NavbarItem = (props) => {

  const setActive = ({ isActive }) => isActive ? s.navbar__link + " " + s.active : s.navbar__link;

  return (
    <div className={s.navbar__item}>
      <NavLink to={props.path} className={setActive}>
        <img src={props.img_src} alt="" />{props.name}
      </NavLink>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <div className={s.navbar__pages}>
        <NavbarItem path='FeedPage' name='Feed' img_src={feed_logo} />
        <NavbarItem path='NetworkPage' name='Network' img_src={network_logo} />
        <NavbarItem path='JobsPage' name='Jobs' img_src={jobs_logo} />
        <NavbarItem path='ChatPage' name='Chat' img_src={chat_logo} />
        <NavbarItem path='NoticesPage' name='Notices' img_src={notices_logo} />
      </div>
      <div className={s.navbar__search}>
        <div className={s.searchArea}>
          <img src="/" alt="" />
          <input name="search" id="" placeholder="Search"></input>
        </div>
        <div className={s.profile}>
          <NavLink to="ProfilePageContainer" className="">
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}


export default Navbar;