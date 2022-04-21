let rerenderEntireTree = () => {
   console.log('Hello mf')
}
export let state = {
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
}

export let addPost = () => {
   let newPost = {
      id: 4,
      message: state.ProfilePage.newPostText,
   };

   state.ProfilePage.posts.push(newPost);
   state.ProfilePage.newPostText = "";
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.ProfilePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let subscribe = (observer) => {
   rerenderEntireTree = observer;
}
