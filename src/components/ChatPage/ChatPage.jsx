import React from "react"
import { Outlet, Routes } from "react-router-dom"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'

const ChatPage = (props) => {
    let ChatItems = props.ChatPage.dialogs.map(d => <ChatItem name={d.name} id={d.id} />)
    let ChatMessages = props.ChatPage.messages.map(m => <ChatMessage message={m.message} id={m.id} />)
    
    let newMessageElement = React.createRef();
    let SendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.ChatPage}>
                <div className={s.chatItems}>
                    {ChatItems}
                </div>
                <div className={s.messages}>
                    {ChatMessages}
                    <textarea className={s.ChatPage__textarea} ref ={newMessageElement} 
                    onChange = {updateNewMessageText} value = {props.ChatPage.newMessageText} name="post" id="" cols="30" rows="2" />
                    <button className={s.btn} onClick = {SendMessage}>Add Post</button>
                </div>
        </div>
    )
}

export default ChatPage;