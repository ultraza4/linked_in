import React from "react";
import { connect } from "react-redux";
import {
   follow, unfollow,
   setActivePage,
   getUsersThunk, followThunk,
   unfollowThunk
} from "./../../redux/NetworkPageReducer"
import NetworkPage from "./NetworkPage";
import preLoader from "./../../assets/images/spinner.svg"

class NetworkPageAPI extends React.Component {

   componentDidMount() {
      this.props.getUsersThunk(this.props.activePageNumber, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsersThunk(pageNumber, this.props.pageSize);
   }

   render() {
      return <>
         {this.props.isFetching ? <img src={preLoader} /> : null}

         <NetworkPage activePageNumber={this.props.activePageNumber}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            isFollowing={this.props.isFollowing}
            followingInProgress={this.props.followingInProgress}
            followThunkCreator={this.props.followThunkCreator}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
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
      isFetching: state.NetworkPage.isFetching,
      isFollowing: state.NetworkPage.isFollowing,
      followingInProgress: state.NetworkPage.followingInProgress
   }
}

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setActivePage,
   getUsersThunk,
   followThunk,
   unfollowThunk
})(NetworkPageAPI);


