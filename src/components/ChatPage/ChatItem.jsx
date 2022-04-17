import React from "react";
import { Link } from "react-router-dom";
import s from './ChatPage.module.css'

const ChatItem = (props) => {
   let path = "/ChatPage/" + props.id;

   return (
      <div className={s.chatItem}>
         <Link to={path}>{props.name}</Link >
      </div>
   )
}

export default ChatItem;