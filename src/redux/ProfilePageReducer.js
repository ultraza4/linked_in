const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initState = {
   posts: [
      { id: 1, message: 'Hello im here to present my new web-paged site' },
      { id: 2, message: 'Heres example of the way to achive your goals' },
      { id: 3, message: 'Lorem ipsum dip set amet helosdj jooekjsaoo nlxoado' },
   ],
   newPostText: "itkamasutra.com",
   profile: null
}

const ProfilePageReducer = (state = initState, action) => {

   switch (action.type) {

      case ADD_POST:
         return {
            ...state,
            newPostText: "",
            posts: [...state.posts, { id: 4, message: state.newPostText }]
         };

      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.newText };
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      default:
         return state;

   }


}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default ProfilePageReducer;