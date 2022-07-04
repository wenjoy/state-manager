import { useState, useLayoutEffect } from 'react';
import chatStore from '../store/chat';

const SecondPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => { 
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = e => {
    e.preventDefault()
    const messageObject = {
      person: 'second-person',
      text: e.target.elements.messageInput.value.trim()
    }
    chatStore.sendMessage(messageObject)
    document.getElementById('messageForm').reset()
  }

  return <div className='container'>
    <h2 style={{float: 'right'}}>Cotana</h2>
    <div className="chat-box">
      {chatState.data.map((message, index) => {
        return <div key={index}>
          <p className={message.person}> {message.text}</p>
          <div className="clear"></div>
        </div>
      })}
      <form id='messageForm' onSubmit={onFormSubmit}>
        <input type="text" id='messageInput' name='messageInput' placeholder="Type a message..." />
        <button type="submit">Send message</button>
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>Clear chat</button>
    </div>
  </div>
}

export default SecondPerson
