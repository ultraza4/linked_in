import { profileAPI } from '../redux/api'

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initState = {
   posts: [
      { id: 1, message: 'Hello im here to present my new web-paged site' },
      { id: 2, message: 'Heres example of the way to achive your goals' },
      { id: 3, message: 'Lorem ipsum dip set amet helosdj jooekjsaoo nlxoado' },
   ],
   profile: null,
   userStatus: ""
}

const ProfilePageReducer = (state = initState, action) => {

   switch (action.type) {

      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts, { id: 4, message: action.newPostText }]
         };
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile };
      case SET_PROFILE_STATUS:
         return { ...state, userStatus: action.userStatus };
      default:
         return state;

   }


}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (userStatus) => ({ type: SET_PROFILE_STATUS, userStatus })
export const getProfileThunk = (userId) => {
   return (dispatch) => {
      profileAPI.getProfile(userId)
         .then(data => {
            dispatch(setUserProfile(data));
         })
   }
}
export const setProfileStatusThunk = (userId) => {
   return (dispatch) => {
      profileAPI.getProfileStatus(userId)
         .then(response => {
            dispatch(setProfileStatus(response.data));
         })
   }
}
export const updateStatusThunk = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode == 0) {
               dispatch(setProfileStatus(status))
            }
         })
   }
}
export default ProfilePageReducer;