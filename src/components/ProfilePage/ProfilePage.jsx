import PostsItem from "./PostsItem";
import s from "./ProfilePage.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfilePage = (props) => {
    if (!props.ProfilePage.profile) {
        return "netu nifiga"
    }

    let Posts = props.ProfilePage.posts.map((m) => <PostsItem key={m.id} message={m.message} />)

    let AddPost = () => {
        props.addPost();
    }
    let onChangeText = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.ProfilePage}>
            <div className={s.Header}>
                <img src={props.ProfilePage.profile.photos.large} alt="profile large" />
                <div className={s.name}>{props.ProfilePage.profile.fullName}</div>
                <div className={s.status}>{props.ProfilePage.profile.lookingForAJobDescription}</div>
                <ProfileStatus {...props} userId={props.userId} />
            </div>
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