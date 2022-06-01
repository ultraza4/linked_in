import React, { useEffect, useState } from "react";
import s from "./ProfilePage.module.css";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.ProfilePage.userStatus);
    
    
    useEffect(() => {
        setStatus(props.ProfilePage.userStatus)
    },[props.ProfilePage.userStatus])

    // componentDidMount() {
    //     this.props.setProfileStatusThunk(this.props.userId);
    //     // this.setState({
    //     //     status: this.props.ProfilePage.userStatus
    //     // });
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.ProfilePage.userStatus !== this.props.ProfilePage.userStatus) {
    //         this.setState({
    //             status: this.props.ProfilePage.userStatus
    //         });
    //     }
    // }
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <>
        {!editMode &&
            <div className={s.status}>
                <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.ProfilePage.userStatus || "-------"}</span>
            </div>
        }
        {editMode &&
            <div className={s.status}>
               <b>Status: </b><input autoFocus={true}
                    onBlur={deActivateEditMode}
                    onChange={onStatusChange}
                    value={status}></input>
            </div>
        }
    </>
}

export default ProfileStatus;