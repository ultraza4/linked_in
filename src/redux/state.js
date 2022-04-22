let store = {
   _state: {
      ChatPage: {
         dialogs: [
            { id: 1, name: 'Dimych', messages: ["hello","my friend","how are you"]},
            { id: 2, name: 'Azamat', messages: ["hello","my friend","how are you"] },
            { id: 3, name: 'Daut', messages: ["hello","my friend","how are you"] },
            { id: 4, name: 'Chitos', messages: ["hello","my friend","how are you"] }
         ],
         messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Azamat' },
            { id: 3, message: 'Mirza' },
         ]
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

   getState() {
      return this._state;
   },

   _callSubscriber() {
      console.log('State changed')
   },

   addPost() {
      let newPost = {
         id: 4,
         message: this._state.ProfilePage.newPostText,
      };
   
      this._state.ProfilePage.posts.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._callSubscriber(this._state);
   },

   updateNewPostText(newText) {
      this._state.ProfilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
}

export default store;
