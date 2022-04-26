import React from "react"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/ChatPageReducer"
import ChatPage from "./ChatPage"

const ChatPageContainer = (props) => {
    let state = props.store.getState();

    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onUpdateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<ChatPage 
        ChatPage = {state.ChatPage} 
        onSendMessage = {onSendMessage} 
        onUpdateNewMessageText ={onUpdateNewMessageText}/>)
}

export default ChatPageContainer;