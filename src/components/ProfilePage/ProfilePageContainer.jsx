import React from "react";
import ProfilePage from "./ProfilePage";
import { addPost, getProfileThunk, setProfileStatusThunk, updateStatusThunk } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfilePageAPI = (props) => {
    let { userId } = useParams();

    if (props.ProfilePage.profile === null || props.ProfilePage.profile.userId != userId) {
        props.getProfileThunk(userId);
    }

    return <>
        <ProfilePage {...props} userId={userId} />
    </>
}

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        addPost, getProfileThunk,
        setProfileStatusThunk, updateStatusThunk
    })
)(ProfilePageAPI)