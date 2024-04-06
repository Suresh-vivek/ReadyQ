import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fitbotAction } from "../redux/slice/fitbotSlice";
import "./Github.css";

const MessagesCard = ({message, index}) => {
  if(!(index&1)){
    return ( 
      <div className="message-card message-card-left" >
      
      {message}

      </div>)
  }
  return (
    <div className= "message-card message-card-right">
        
        {message}

    </div>
)
}

const GithubChat = () => {

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [sendMessage, setSendMessage] = useState("");

  const chatRef = useRef("");

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);


  const {loading ,chat} = useSelector((state) => state.fitbotChat);


  useEffect(() => {
    setMessages([...messages, chat?.message])
  },[chat])
 

  const sendMessagefunction = async () => {
    messages.push(sendMessage);
    console.log(sendMessage)
    setSendMessage("");
    await dispatch(fitbotAction({message :sendMessage}))
  };

 

  return (
    < div className="fit-bot-body">

      <div class="chat-box">
        <div class="chat-box-header">CrossFit Chats</div>
          <div ref={chatRef} class="chat-box-body">
            {messages.map((item, i) => (
              <MessagesCard message={item} index={i} />
            ))}
          </div>
          <div class="chat-box-footer">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessagefunction();
                }
              }}
              value={sendMessage}
              onChange={(e) => {
                setSendMessage(e.target.value);
              }}
              type="text"
              placeholder="Ask a question..."
            />
           <button onClick={sendMessagefunction}>Send</button>
          </div>
        </div>
        <div className="fitbot-right">
            <h1 className="fitbot-right-head">FitBot</h1>
            <p className="fitbot-right-desc">Introducing FitBot - your personal AI assistant that can help you with all your fitness and day-to-day queries. With advanced machine learning algorithms, FotBot provides accurate and personalized solutions in real-time. Whether you need workout routines, healthy eating tips, or guidance on managing your daily schedule, FitBot has got you covered. Interact with FotBot through a simple and user-friendly interface, and customize your experience by setting your goals and preferences. FotBot is here to make your life easier, healthier, and more balanced.</p>
            <h3 className="fitbot-hashtag">#GetFitterWithFotBot</h3>
       </div>
      </div>
    
  );
};

export default GithubChat;