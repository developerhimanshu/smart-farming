import React, { useContext, useState } from 'react';
import Messages from './Messages'
import Input from './Input'
import add from '../Images/add.png'
import more from '../Images/more.png'
import video from '../Images/video.png'
import { ChatContext } from '../context/ChatContext';



const Chat = () => {
    const { data } = useContext(ChatContext);
    const userName = data.user?data.user.displayName:""
    console.log(userName)
    return (
      <div className="chat">
        <div className="chatInfo">
        <div>
          <img src={data.user.photoURL} alt="" className="user-img"/>
          <span>{userName}</span>
        </div>
          <div className="chatIcons">
            <img src={video} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
          </div>
        </div>
        <Messages />
        <Input/>
      </div>
    );
  };
  
  export default Chat;