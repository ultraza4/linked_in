const SET_USER_DATA = 'SET_USER_DATA'

let initState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initState, action) => {

   switch (action.type) {
      case SET_USER_DATA:
         return { ...state, ...action.data };

      default:
         return state;
   }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export default authReducer;