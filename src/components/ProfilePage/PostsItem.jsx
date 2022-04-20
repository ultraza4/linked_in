import React from "react";
import s from './ProfilePage.module.css'

const PostsItem = (props) => {
   return (
      <div className={s.PostsItem}>
         {props.message}
      </div>
   )
}

export default PostsItem;