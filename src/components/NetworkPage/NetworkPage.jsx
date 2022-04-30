import React from "react";
import * as axios from "axios";
import s from "./NetworkPage.module.css"
import userPhoto from "../../assets/images/user.png.png";

class NetworkPage extends React.Component {
   
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged =(pageNumber) => {
        this.props.setActivePage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
    })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        
        for(let i = 1;i <= pagesCount; i++ ){
            pages.push(i);
        }
        
        return <div>
            {pages.map( p => {
                return <span className={this.props.activePageNumber === p && s.activePage} 
                onClick= {(e) => this.onPageChanged(p)}> {p} </span>
            })}

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.user_avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default NetworkPage;