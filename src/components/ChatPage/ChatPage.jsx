import React from "react"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'
import { Form, Field } from 'react-final-form'

const ChatPage = (props) => {
    let ChatItems = props.ChatPage.dialogs.map(d => <ChatItem key={d.id} name={d.name} id={d.id} />)
    let ChatMessages = props.ChatPage.messages.map(m => <ChatMessage key={m.id} message={m.message} id={m.id} />)

    let SendMessage = (value) => {
        props.onSendMessage(value.newMessageText);
        console.log(value.newMessageText)
    }

    return (
        <div className={s.ChatPage}>
            <div className={s.chatItems}>
                {ChatItems}
            </div>
            <div className={s.messages}>
                {ChatMessages}
                <Form
                    onSubmit={SendMessage}
                    render = {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="newMessageText" component="textarea" placeholder="Enter your message" />
                            <button type="submit">Send</button>
                        </form>
                    )}
                />
            </div>
        </div>
    )
}

export default ChatPage;