import React from "react";
import { NavLink } from "react-router-dom";

const HeaderProfile = () => {
    return (
        <div>
            <NavLink to='ProfilePage' className="navbar__link">Profile</NavLink>
        </div>
    )
}

export default HeaderProfile;