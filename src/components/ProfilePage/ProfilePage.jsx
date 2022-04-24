import s from "./ProfilePage.module.css"
import PostsItem from "./PostsItem";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/ProfilePageReducer";

const ProfilePage = (props) => {

    let Posts = props.ProfilePage.posts.map(p => <PostsItem message={p.message} />);

    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onChangeText = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.ProfilePage}>
            <div className={s.Header}>Header</div>
            <div className={s.Dashboard}>Dashboard</div>
            <div className={s.AddPost}>
                <textarea className={s.ProfilePage__textarea} onChange={onChangeText} value={props.ProfilePage.newPostText} name="post" id="" cols="30" rows="2" />
                <button className={s.btn} onClick={AddPost}>Add Post</button>
            </div>
            <div className={s.ProfilePage__posts}>
                {Posts}
            </div>
        </div>
    )
}

export default ProfilePage;