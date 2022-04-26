import ProfilePage from "./ProfilePage";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/ProfilePageReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

export default ProfilePageContainer;