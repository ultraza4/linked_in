import React from "react"
import { Outlet } from "react-router-dom"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'
import { useParams } from "react-router-dom"

const ChatPage = () => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Azamat' },
        { id: 3, name: 'Daut' },
        { id: 4, name: 'Chitos' }
    ]
    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Azamat' },
        { id: 3, message: 'Mirza' },
    ]

    let ChatItems = dialogs.map(d => <ChatItem name={d.name} id={d.id} />)
    let ChatMessages = messages.map(m => <ChatMessage message={m.message} id={m.id} />)

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