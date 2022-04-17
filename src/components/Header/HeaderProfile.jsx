import React from "react";
import { NavLink } from "react-router-dom";

const HeaderProfile = () => {
    return (
        <div>
            <NavLink to='ProfilePage' className="navbar__link" style={({ isActive }) => isActive ?
                { textDecoration: 'underline', color: '#181818' } : { textDecoration: 'none', color: '#181818' }}>
                Profile
            </NavLink>
        </div>
    )
}

export default HeaderProfile;