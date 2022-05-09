import { authAPI } from "../redux/api"
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
         return { ...state, ...action.data, isAuth: true };

      default:
         return state;
   }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const authUserThunkCreator = () => {
   return (dispatch) => {
      authAPI.authUser()
      .then(data => {
         if (data.resultCode === 0) {
            let { email, id, login } = data.data;
            dispatch(setUserData(email, id, login));
         }
      })
   }
}
export default authReducer;