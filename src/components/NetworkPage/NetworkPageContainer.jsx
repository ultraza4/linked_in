import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setActivePageAC, setTotalUsersCountAC } from "./../../redux/NetworkPageReducer"
import NetworkPage from "./NetworkPage";

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

export default connect(mapStateToProps, mapDispatchToProps)(NetworkPage);


