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
         return {
            ...state,
            ...action.data
         };

      default:
         return state;
   }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const authMeThunkCreator = () => (dispatch) => {
   authAPI.authMe()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserData(id, email, login, true));
         }
      })
}

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe)
      .then(response => {
         if (response.resultCode === 0) {
            dispatch(authMeThunkCreator())
         }
      })
}

export const logout = () => (dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
         }
      })
}
export default authReducer;