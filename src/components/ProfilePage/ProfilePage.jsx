import s from "./ProfilePage.module.css"

const ProfilePage = (props) => {

    let AddPost = () => {
        props.AddPost();
    }
    let onChangeText = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
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
                {props.posts}
            </div>
        </div>
    )
}

export default ProfilePage;