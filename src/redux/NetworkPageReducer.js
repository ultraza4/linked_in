const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initState = {
   users: [
      { id: 1, subscribed: true, fullName: "Kagarman A.N", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Oskemen" } },
      { id: 2, subscribed: true, fullName: "Rizabekov D.", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Almaty" } },
      { id: 3, subscribed: false, fullName: "Sarsembaev R.", status: "Hello World Bitches", location: { country: "Kazakhstan", city: "Astana" } },
   ]
}

const NetworkPageReducer = (state = initState, action) => {

   switch (action.type) {

      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, subscribed: true };
               }
               return u;
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userID) {
                  return { ...u, subscribed: false };
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state;
   }


}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default NetworkPageReducer;