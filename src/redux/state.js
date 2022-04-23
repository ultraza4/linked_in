const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
let store = {
   _state: {
      ChatPage: {
         dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Azamat' },
            { id: 3, name: 'Daut' },
            { id: 4, name: 'Chitos' }
         ],
         messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Azamat' },
            { id: 3, message: 'Mirza' },
         ],
         newMessageText: "ITS NEW MESSAGE HERE"
      },
   
      ProfilePage: {
         posts: [
            { id: 1, message: 'Hello im here to present my new web-paged site' },
            { id: 2, message: 'Heres example of the way to achive your goals' },
            { id: 3, message: 'Lorem ipsum dip set amet helosdj jooekjsaoo nlxoado' },
         ],
         newPostText: "itkamasutra.com"
      }
   },

   _callSubscriberRerender() {
      console.log('State changed')
   },
   
   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriberRerender = observer;
   },

   dispatch(action) {
      if(action.type == 'ADD-POST'){
         let newPost = {
            id: 4,
            message: this._state.ProfilePage.newPostText,
         };
      
         this._state.ProfilePage.posts.push(newPost);
         this._state.ProfilePage.newPostText = "";
         this._callSubscriberRerender(this._state);
      }else if(action.type == 'UPDATE-NEW-POST-TEXT') {
         this._state.ProfilePage.newPostText = action.newText;
         this._callSubscriberRerender(this._state);
      }else if(action.type == "SEND-MESSAGE" ) {
         let newMessage = {
            id: 5,
            message: this._state.ChatPage.newMessageText,
         };
         this._state.ChatPage.messages.push(newMessage);
         this._state.ChatPage.newMessageText = "";
         this._callSubscriberRerender(this._state);
      }else if(action.type == "UPDATE-NEW-MESSAGE-TEXT") {
         this._state.ChatPage.newMessageText = action.newMessage;
         this._callSubscriberRerender(this._state);
      }
   }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
   return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
   return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default store;
