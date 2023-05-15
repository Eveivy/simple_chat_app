import { useContext } from 'react';
import { MsgContext } from '../App';

export default function FriendsList() {
  const data = useContext(MsgContext);

  return (
    <div className="sidebar">
      <h5 style={{ textAlign: 'center', fontSize: '20px', padding: '25px' }}>
        My Friends
      </h5>
      <ul>
        {data.chats.map((el) => (
          <li
            id={el.id}
            onClick={data.openMsg}
            key={el.id}
            className={`friend ${el.active ? 'active' : ''}`}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
