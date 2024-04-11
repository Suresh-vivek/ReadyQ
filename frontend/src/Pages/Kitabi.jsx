import React, { useState } from "react";
import "./kitabi.css";
import axios from 'axios';

const Kitabi = () => {

  const [messages , setMessages] = useState([]);
  const [inputValue , setInputValue] = useState('');

  const handleSubmit = () => {
    const url = document.getElementById("inputUrl").value;

    // Create an object with the URL
    const requestData = { url };
    console.log(url);

    // Send a POST request to your Flask server with JSON data
    fetch("http://localhost:5000/process-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(requestData), // Convert object to JSON string
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => console.log("Response data:", data))
      .catch((error) => console.error("Error:", error));
  };
  
  const handleMessageSend = async () => {
    
    if (inputValue.trim() === '') return;
    const newMessage = { text: inputValue, sender: 'user' };
     // Append user message to messages
     setMessages([...messages, newMessage]);
    setInputValue('');

    try {
        const logChainResponse = await axios.post('http://localhost:5001/process-message', { message: inputValue });
        const responseData = logChainResponse.data;
        const botResponse = { text: responseData.answer, sender: 'bot' };
        
        setMessages([...messages, botResponse]); // Append bot response to messages
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
  return (
    <div className="kitabi-main">
      <div className="info1">
        <h1 className="title">
          Kitabi<span className="q"> KEEDA</span>
        </h1>
        <p className="kdesc"> Streamlined Document Navigation</p>
        <p className="description">
          Kitabi Keeda streamlines document navigation and querying for
          companies. Simply provide a document link, and it automatically
          scrapes data from all sublinks. Using advanced lagchain models, it
          organizes and analyzes information for quick retrieval. Perfect for
          onboarding, Kitabi Keeda allows users to ask questions and get
          accurate answers from the documentation, saving time on manual
          searches.
        </p>

        <p className="kurl">Enter URL</p>
        <div>
          <form onSubmit={handleSubmit} className="kurl1">
            <input
              className="kinput"
              type="text"
              placeholder="Enter a doc link"
              id="inputUrl"
            />
            <button type="submit" className="kbtn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="ranking1">
        <div className="chat-container">
        <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
          


        </div>

      </div>
    </div>
  );
};

export default Kitabi;