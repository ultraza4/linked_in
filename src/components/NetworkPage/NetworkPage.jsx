import React from "react";
import s from "./NetworkPage.module.css"
import userPhoto from "../../assets/images/user.png.png";
import { Link } from "react-router-dom";
import * as axios from "axios";

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
                  ? <button onClick={() => {
                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "6243de51-8ec8-4a48-80dd-5ca6c2927c02"
                           }
                        })
                        .then(response => {
                           if (response.data.resultCode === 0) {
                              props.unfollow(u.id)
                           }
                        })
                  }}>Unfollow</button>
                  : <button onClick={() => {
                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                        {
                           withCredentials: true,
                           headers: {
                              "API-KEY": "6243de51-8ec8-4a48-80dd-5ca6c2927c02"
                           }
                        })
                        .then(response => {
                           if (response.data.resultCode === 0) {
                              props.follow(u.id)
                           }
                        })
                  }}>Follow</button>}
            </div>

            <div>{u.name}</div>
            <div>{u.status}</div>
         </div>)
      }
   </div>
}


export default NetworkPage;