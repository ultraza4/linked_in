import React from "react";
import s from "./NetworkPage.module.css"
import userPhoto from "../../assets/images/user.png.png";

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
            <span>
               <div>
                  <img className={s.user_avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => {
                        props.unfollow(u.id)
                     }}>Unfollow</button>
                     : <button onClick={() => {
                        props.follow(u.id)
                     }}>Follow</button>}

               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}


export default NetworkPage;