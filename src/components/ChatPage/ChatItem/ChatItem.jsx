import React from "react";
import s from './ChatItem.module.css'
import { NavLink } from "react-router-dom";

const ChatItem = (props) => {
   let path = '/ChatPage/' + props.id;

   return (
      <div className={s.chatItem}>
         <NavLink to={path}>{props.name}</NavLink >
      </div>
   )
}

export default ChatItem;