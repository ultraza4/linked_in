import React from "react"
import ChatItem from './ChatItem/ChatItem'
import ChatMessage from './ChatMessage/ChatMessage'
import s from './ChatPage.module.css'
import { Form, Field } from 'react-final-form'
import { TextareaField } from "../../common/TextareaField"
import { maxLenghtCreator, requiredField } from "../../common/validators";

const ChatPage = (props) => {
    let ChatItems = props.ChatPage.dialogs.map(d => <ChatItem key={d.id} name={d.name} id={d.id} />)
    let ChatMessages = props.ChatPage.messages.map(m => <ChatMessage key={m.id} message={m.message} id={m.id} />)

    let SendMessage = (value) => {
        props.onSendMessage(value.newMessageText);
    }
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <div className={s.ChatPage}>
            <div className={s.chatItems}>
                {ChatItems}
            </div>
            <div className={s.messages}>
                {ChatMessages}
                <Form
                    onSubmit={SendMessage}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="newMessageText"
                                component={TextareaField} placeholder="Enter your message"
                                validate={composeValidators(requiredField, maxLenghtCreator(20))}
                                buttonName="Send Message" />

                        </form>
                    )}
                />
            </div>
        </div>
    )
}

export default ChatPage;