import { useContext } from 'react';
import { MsgContext } from '../App';

export default function Inbox() {
  const data = useContext(MsgContext);

  return (
    <div className="chat">
      <div>
        {data.showMsg[0].msg.length === 0 ? (
          <div className="starter-msg">
            <span>
              This is the beginning of your conversation with {data.name} 🤩
            </span>
          </div>
        ) : (
          data.showMsg[0].msg.map((el) => {
            return (
              <div className="message" key={el.id} id={el.id}>
                <span>{el.text}</span>
                <small style={{ color: 'grey', marginTop: '2px' }}>
                  {el.time}
                </small>
              </div>
            );
          })
        )}
      </div>
      <div className="send-msg">
        <form action="">
          <input
            type="text"
            placeholder="Type a message"
            value={data.text}
            onChange={(ev) => data.setText(ev.target.value)}
          />
          <button onClick={(ev) => data.sendMsg(ev, data.id)}>Send</button>
        </form>
      </div>
    </div>
  );
}
