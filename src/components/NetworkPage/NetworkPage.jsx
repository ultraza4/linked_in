import React from "react";
import * as axios from "axios";
import s from "./NetworkPage.module.css"
import userPhoto from "../../assets/images/user.png.png";

const NetworkPage = (props) => {
    let usersGetter = () => {
        if (props.users.length == 0) {   
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    props.setUsers(response.data.items)
            })
                // { id: 1, subscribed: true, fullName: "Kagarman A.N", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Oskemen" } },
                // { id: 2, subscribed: true, fullName: "Rizabekov D.", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Almaty" } },
                // { id: 3, subscribed: false, fullName: "Sarsembaev R.", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Astana" } },
        }
    }
    

    return <div>
        <button onClick={usersGetter}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.user_avatar} src={u.photos.small != null ? u.photos.small : userPhoto }/>
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