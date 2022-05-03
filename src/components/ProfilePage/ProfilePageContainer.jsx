import React from "react";
import ProfilePage from "./ProfilePage";
import { addPost, updateNewPostText } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";

class ProfilePageAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
           this.props.setUserProfile(response.data)
        })
     }

    render() {
        return <>
            <ProfilePage {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

export default connect(mapStateToProps, {addPost, updateNewPostText})(ProfilePageAPI);