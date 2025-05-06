import React, { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div>
      <h1>AI Assistant</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default Home;
