import React from "react"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/ChatPageReducer"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'

const ChatPage = (props) => {
    let ChatItems = props.ChatPage.dialogs.map(d => <ChatItem name={d.name} id={d.id} />)
    let ChatMessages = props.ChatPage.messages.map(m => <ChatMessage message={m.message} id={m.id} />)

    let SendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    let updateNewMessageText = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.ChatPage}>
            <div className={s.chatItems}>
                {ChatItems}
            </div>
            <div className={s.messages}>
                {ChatMessages}
                <textarea className={s.ChatPage__textarea}
                    onChange={updateNewMessageText} value={props.ChatPage.newMessageText} name="post" id="" cols="30" rows="2" />
                <button className={s.btn} onClick={SendMessage}>Add Post</button>
            </div>
        </div>
    )
}

export default ChatPage;