import React from "react"
import s from './ChatMessage.module.css'

const ChatMessage = (props) => {
   return (
      <div className={s.dialog}>{props.message}</div>
   )
}

export default ChatMessage;