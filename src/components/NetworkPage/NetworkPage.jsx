import React from "react";
import s from "./NetworkPage.module.css"
import userPhoto from "../../assets/images/user.png.png";
import { Link } from "react-router-dom";

let NetworkPage = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return <div>
      {pages.map(p => {
         return <span className={props.activePageNumber === p && s.activePage}
            onClick={(e) => props.onPageChanged(p)}> {p} </span>
      })}

      {
         props.users.map(u => <div key={u.id}>
            <Link to={'/ProfilePageContainer/' + u.id}>
               <img alt="small profile" className={s.user_avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
            </Link>

            <div>
               {u.followed
                  ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                     props.followThunkCreator(u.id);
                  }}>Unfollow</button>
                  : <button disabled = {props.followingInProgress.some( id => id === u.id )} onClick={() => {
                     props.unfollowThunkCreator(u.id);
                  }}>Follow</button>}
            </div>

            <div>{u.name}</div>
            <div>{u.status}</div>
         </div>)
      }
   </div>
}


export default NetworkPage;