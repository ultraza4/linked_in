import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setActivePageAC, setTotalUsersCountAC } from "./../../redux/NetworkPageReducer"
import * as axios from "axios";
import NetworkPage from "./NetworkPage";

class NetworkPageAPI extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
      })
   }
   onPageChanged = (pageNumber) => {
      this.props.setActivePage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
      })
   }

   render() {
      return <NetworkPage activePageNumber={this.props.activePageNumber}
         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         users={this.props.users}
         onPageChanged={this.onPageChanged}
         follow={this.props.follow}
         unfollow={this.props.unfollow}
      />
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.NetworkPage.users,
      pageSize: state.NetworkPage.pageSize,
      totalUsersCount: state.NetworkPage.totalUsersCount,
      activePageNumber: state.NetworkPage.activePageNumber,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userID) => dispatch(followAC(userID)),
      unfollow: (userID) => dispatch(unfollowAC(userID)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      setActivePage: (page) => dispatch(setActivePageAC(page)),
      setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkPageAPI);


