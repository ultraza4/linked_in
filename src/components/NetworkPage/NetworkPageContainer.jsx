import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setActivePage, setTotalUsersCount, toggleIsFetching } from "./../../redux/NetworkPageReducer"
import NetworkPage from "./NetworkPage";
import preLoader from "./../../assets/images/spinner.svg"
import usersAPI from "../../redux/api"
class NetworkPageAPI extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(this.props.activePageNumber, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
      })
   }

   onPageChanged = (pageNumber) => {
      this.props.setActivePage(pageNumber);
      this.props.toggleIsFetching(true);
   
      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
      })
   }

   render() {
      return <>
         {this.props.isFetching ? <img src={preLoader} /> : null}
         <NetworkPage activePageNumber={this.props.activePageNumber}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
         />
      </>
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.NetworkPage.users,
      pageSize: state.NetworkPage.pageSize,
      totalUsersCount: state.NetworkPage.totalUsersCount,
      activePageNumber: state.NetworkPage.activePageNumber,
      isFetching: state.NetworkPage.isFetching
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userID) => dispatch(followAC(userID)),
//       unfollow: (userID) => dispatch(unfollowAC(userID)),
//       setUsers: (users) => dispatch(setUsersAC(users)),
//       setActivePage: (page) => dispatch(setActivePageAC(page)),
//       setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
//       toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
//    }
// }



export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setActivePage,
   setTotalUsersCount,
   toggleIsFetching,
})(NetworkPageAPI);


