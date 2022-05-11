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
         return { ...state, 
            messages: [...state.messages, {id: 5, message: state.newMessageText}],
            newMessageText: ""
         };
      
      case UPDATE_NEW_MESSAGE_TEXT:
         return  { ...state, newMessageText: action.newMessage };
      
      default:
         return state;
   }
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateNewMessageText = (text) => {
   return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text }
}

export default ChatPageReducer;