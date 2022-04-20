import React, { createRef } from "react";
import s from "./ProfilePage.module.css"
import PostsItem from "./PostsItem";

const ProfilePage = (props) => {

    let Posts = props.state.posts.map(p => <PostsItem message={p.message} />);
    let newPostElement = React.createRef();
    const AddPost = () => {
        let text = newPostElement.current.value;
        props.AddPost(text);
    }
    return (
        <div className={s.ProfilePage}>
            <div className={s.Header}>Header</div>
            <div className={s.Dashboard}>Dashboard</div>
            <div className={s.AddPost}>
                <textarea ref={newPostElement} className={s.ProfilePage__textarea} name="post" id="" cols="30" rows="2"></textarea>
                <button className={s.btn} onClick={AddPost}>Add Post</button>
            </div>
            <div className={s.ProfilePage__posts}>
                {Posts}
            </div>
        </div>
    )
}

export default ProfilePage;