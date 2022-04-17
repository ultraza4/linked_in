import React from "react";
import ChatItem from './ChatItem'
import ChatMessage from './ChatMessage'
import s from './ChatPage.module.css'

const ChatPage = () => {
    return (
        <div className={s.ChatPage}>
            <div className={s.chatItems}>
                <ChatItem name="Dimych" id="1" />
                <ChatItem name="Azamat" id="2" />
                <ChatItem name="Daut" id="3" />
            </div>
            <div className={s.messages}>
                <ChatMessage message="Hello" />
                <ChatMessage message="Azamat" />
                <ChatMessage message="Nurlanovich" />
            </div>
        </div>
    )
}

export default ChatPage;