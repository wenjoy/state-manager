import { useState } from 'react';

const FirstPerson = () => {
  const [chatState, setChatState] = useState()

  return <div className='container'>
    <h2>Mycraft</h2>
    <div className="chat-box">
      {chatState.data.map((message, index) => {
        return <div>
          <p key={index}>{message.person} {message.content}</p>
          <div className="clear"></div>
        </div>
      })}
      <form id='messageForm'>
        <input type="text" id='messageInput' name='messageInput' placeholder="Type a message..." />
        <button type="submit">Send message</button>
      </form>
    </div>
  </div>
}

export default FirstPerson