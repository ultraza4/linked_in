import React from "react";
import ProfilePage from "./ProfilePage";
import { addPost, updateNewPostText, setUserProfile } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";
import * as axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePageAPI = (props) => {
    let { userId } = useParams();
    
    if (props.ProfilePage.profile === null || props.ProfilePage.profile.userId !== userId) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            props.setUserProfile(response.data)
        })
    }

    return <>
        <ProfilePage {...props} profile={props.profile} />
    </>
}

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfilePageAPI);