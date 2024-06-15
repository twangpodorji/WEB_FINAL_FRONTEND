import React from 'react';

const InputField = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="flex p-4 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border rounded mr-2"
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">
        Send
      </button>
      
    </div>
  );
};

export default InputField;
