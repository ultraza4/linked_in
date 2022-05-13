import { usersAPI } from "../redux/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initState = {
   users: [
   ],
   pageSize: 5,
   totalUsersCount: 0,
   activePageNumber: 1,
   isFollowing: false,
   followingInProgress: []
}

const NetworkPageReducer = (state = initState, action) => {

   switch (action.type) {

      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: true };
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: false };
               }
               return u;
            })
         }

      case SET_USERS:
         return {
            ...state,
            users: action.users
         }

      case SET_ACTIVE_PAGE:
         return {
            ...state, activePageNumber: action.currentPage
         }

      case SET_TOTAL_USERS_COUNT:
         return {
            ...state, totalUsersCount: action.count
         }

      case TOGGLE_IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         }
      case TOGGLE_IS_FOLLOWING:
         return {
            ...state, followingInProgress:
               action.isFollowing
                  ? [...state.followingInProgress, action.userId]
                  : state.followingInProgress.filter(id => id != action.userId)
         }

      default:
         return state;
   }


}

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setActivePage = (currentPage) => ({ type: SET_ACTIVE_PAGE, currentPage })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowing = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFollowing, userId })

export const getUsersThunk = (activePageNumber, pageSize) => {
   return (dispatch) => {
      // dispatch(toggleIsFetching(true));

      usersAPI.getUsers(activePageNumber, pageSize).then(data => {
         dispatch(toggleIsFetching(false))
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
         dispatch(setActivePage(activePageNumber))
      })
   }
}
export const followThunk = (userId) => {
   return (dispatch) => {

      dispatch(toggleIsFollowing(true, userId));
      usersAPI.unfollowUser(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(unfollow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
         })
   }
}

export const unfollowThunk = (userId) => {
   return (dispatch) => {
      dispatch(toggleIsFollowing(true, userId));
      usersAPI.followUser(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
         })
   }
}
export default NetworkPageReducer;