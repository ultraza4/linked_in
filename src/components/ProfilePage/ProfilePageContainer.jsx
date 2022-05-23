import React, { useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { addPost, getProfileThunk, setProfileStatusThunk, updateStatusThunk } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfilePageAPI = (props) => {
    let { userId } = useParams();
    if(!userId) {
        userId = 2;
    }
    const setProfielStatus = props.setProfileStatusThunk;
    
    useEffect(()=>{
        setProfielStatus(userId);
    },[setProfielStatus,userId])
    
    if (props.ProfilePage.profile === null || parseInt(props.ProfilePage.profile.userId) !== parseInt(userId)) {
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
    withAuthRedirect,
    connect(mapStateToProps, {
        addPost, getProfileThunk,
        setProfileStatusThunk, updateStatusThunk
    })
)(ProfilePageAPI)