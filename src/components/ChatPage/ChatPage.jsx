import React from "react"
import { Outlet } from "react-router-dom"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'

const ChatPage = (props) => {


    let ChatItems = props.state.dialogs.map(d => <ChatItem name={d.name} id={d.id} />)
    let ChatMessages = props.state.messages.map(m => <ChatMessage message={m.message} id={m.id} />)

    return (
        <div className={s.ChatPage}>
            <div className={s.chatItems}>
                {ChatItems}
            </div>
            <div className={s.messages}>
                <Outlet />{ChatMessages}
            </div>
            <Outlet />
        </div>
    )
}

export default ChatPage;