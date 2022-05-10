import React from "react";
import ProfilePage from "./ProfilePage";
import { addPost, updateNewPostText, getProfileThunk } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfilePageAPI = (props) => {
    let { userId } = useParams();

    if (props.ProfilePage.profile === null || props.ProfilePage.profile.userId != userId) {
        props.getProfileThunk(userId);
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

export default withAuthRedirect(connect(mapStateToProps, { addPost, updateNewPostText, getProfileThunk })(ProfilePageAPI));