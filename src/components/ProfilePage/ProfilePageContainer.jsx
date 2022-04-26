import ProfilePage from "./ProfilePage";
import PostsItem from "./PostsItem";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/ProfilePageReducer";

const ProfilePageContainer = (props) => {
    let state = props.store.getState();
    let Posts = state.ProfilePage.posts.map(p => <PostsItem message={p.message} />);

    let AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onChangeText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (<ProfilePage 
        posts = {Posts} 
        AddPost = {AddPost} 
        updateNewPostText = {onChangeText} 
        ProfilePage = {state.ProfilePage}
        />)
}

export default ProfilePageContainer;