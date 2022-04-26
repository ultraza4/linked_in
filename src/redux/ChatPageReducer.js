const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initState = {
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
   newMessageText: "ITS A NEW MESSAGE HERE"
}

const ChatPageReducer = (state = initState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessageText,
         };
         state.messages.push(newMessage);
         state.newMessageText = "";
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         return state;
      default:
         return state;
   }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => {
   return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}

export default ChatPageReducer;