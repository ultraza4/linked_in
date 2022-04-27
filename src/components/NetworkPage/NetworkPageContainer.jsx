import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "./../../redux/NetworkPageReducer"
import NetworkPage from "./NetworkPage";

const mapStateToProps = (state) => {
   return {
      users: state.NetworkPage.users
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userID) => dispatch(followAC(userID)),
      unfollow: (userID) => dispatch(unfollowAC(userID)),
      setUsers: (users) => dispatch(setUsersAC(users))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkPage);


