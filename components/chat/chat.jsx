import React from "react";
import { BsChat } from "react-icons/bs";
import style from "./chat.module.css";
const Chat = () => {
  return (
    <div className={style.chat}>
      <BsChat className={style.icon} />
    </div>
  );
};

export default Chat;
