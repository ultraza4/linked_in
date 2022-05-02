const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let initState = {
   users: [
   ],
   pageSize: 5,
   totalUsersCount: 0,
   activePageNumber: 1,
   isFetching: true,
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

      default:
         return state;
   }


}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setActivePageAC = (currentPage) => ({ type: SET_ACTIVE_PAGE, currentPage })
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default NetworkPageReducer;