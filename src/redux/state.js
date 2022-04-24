import ProfilePageReducer from "./ProfilePageReducer"
import ChatPageReducer from "./ChatPageReducer"

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

      this._state.ProfilePage = ProfilePageReducer(this._state.ProfilePage, action);
      this._state.ChatPage = ChatPageReducer(this._state.ChatPage, action);
      this._callSubscriberRerender(this._state);

   }
}

export default store;
