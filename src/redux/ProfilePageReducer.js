const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initState = {
   posts: [
      { id: 1, message: 'Hello im here to present my new web-paged site' },
      { id: 2, message: 'Heres example of the way to achive your goals' },
      { id: 3, message: 'Lorem ipsum dip set amet helosdj jooekjsaoo nlxoado' },
   ],
   newPostText: "itkamasutra.com"
}

const ProfilePageReducer = (state = initState, action) => {

   switch (action.type) {

      case ADD_POST:
         let newPost = {
            id: 4,
            message: state.newPostText,
         };
         state.posts.push(newPost);
         state.newPostText = "";
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;

   }


}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export default ProfilePageReducer;