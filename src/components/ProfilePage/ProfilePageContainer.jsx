import React from "react";
import ProfilePage from "./ProfilePage";
import { addPost, updateNewPostText, setUserProfile } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";
import * as axios from "axios";

class ProfilePageAPI extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            <ProfilePage {...this.props} profile={this.props.profile} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfilePageAPI);