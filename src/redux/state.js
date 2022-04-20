export let state = {
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
      ]
   },

   ProfilePage: {
      posts: [
         { id: 1, message: 'Hello im here to present my new web-paged site' },
         { id: 2, message: 'Heres example of the way to achive your goals' },
         { id: 3, message: 'Lorem ipsum dip set amet helosdj jooekjsaoo nlxoado' },
      ]
   }
}

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
   };

   state.ProfilePage.posts.push(newPost);
}