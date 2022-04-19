import React from "react";
import s from "./ProfilePage.module.css"

const ProfilePage = () => {
    return (
        <div className={s.ProfilePage}>
            <div className={s.Header}>Header</div>
            <div className={s.Dashboard}>Dashboard</div>
        </div>
    )
}

export default ProfilePage;