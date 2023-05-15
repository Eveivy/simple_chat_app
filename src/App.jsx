import React, { createContext, useState } from 'react';
import FriendsList from './Components/FriendsList';
import Inbox from './Components/Inbox';
import { data } from './data'; 

export const MsgContext = createContext([]);

export default function App() {
  const [text, setText] = useState('');
  const [chats, setChats] = useState(data);
  const showMsg = chats.filter((el) => el.active === true);
  const id = showMsg[0].id;
  const name = showMsg[0].name

  function openMsg(ev) {
    const chatMsg = chats.map((el) => {
      if (ev.target.id === el.id) {
        el.active = true;
      } else {
        el.active = false;
      }
      return el;
    });

    setChats(chatMsg);
  }

  function sendMsg(ev, id) {
    ev.preventDefault();
    const newMsg = chats.map((textMsg) => {
      if (textMsg.id === id && text !== '') {
        textMsg.msg = [
          ...textMsg.msg,
          {
            id: textMsg.msg.length + 1,
            text: text,
            time: new Date().toLocaleTimeString(),
          },
        ];
      }
      return textMsg;
    });

    setChats(newMsg);
    setText('');
  }

  return (
    <div className="main">
      <MsgContext.Provider
        value={{ chats, showMsg, openMsg, setText, id, sendMsg, text, name }}
      >
        <FriendsList />
        <Inbox />
      </MsgContext.Provider>
    </div>
  );
}
