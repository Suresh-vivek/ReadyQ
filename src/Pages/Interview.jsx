import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fitbotAction } from "../redux/slice/fitbotSlice";
import "./Interview.css";

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

const InterviewChat = () => {

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);
  const [githubUsername, setgithubUsername] = useState("");
  const [githubRepo, setgithubRepo] = useState("");
  const [questionAnswer, setquestionAnswer] = useState("");
  

  const chatRef = useRef("");

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);


  const {chat} = useSelector((state) => state.interView);
 

  useEffect(() => {
    setMessages([...messages, chat?.message])
  },[chat])
 

  const sendMessagefunction = async () => {
    if(questionAnswer.length>0)messages.push(questionAnswer);
    await dispatch(fitbotAction({questionAnswer,githubRepo,githubUsername}));
    setgithubUsername("");
    setquestionAnswer("");
    setgithubRepo("");
  };

 

  return (
    < div className="fit-bot-body">
    
        <div className="chat-box">
        <div className="chat-box-header">CrossFit Chats</div>
          <div ref={chatRef} className="chat-box-body">
            {messages.map((item, i) => (
              <MessagesCard key = {i} message={item} index={i} />
            ))}
          </div>
          <div className="chat-box-footer">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessagefunction();
                }
              }}
              value={questionAnswer}
              onChange={(e) => {
                setquestionAnswer(e.target.value);
              }}
              type="text"
              placeholder="Ask a question..."
            />
           <button onClick={sendMessagefunction}>Send</button>
          </div>
        </div>
        <div className="fitbot-right">
            <h1 className="fitbot-right-head">Interview Buddy</h1>
            <p className="fitbot-right-desc">Introducing FitBot - your personal AI assistant that can help you with all your fitness and day-to-day queries. With advanced machine learning algorithms, FotBot provides accurate and personalized solutions in real-time. Whether you need workout routines, healthy eating tips, or guidance on managing your daily schedule, FitBot has got you covered. Interact with FotBot through a simple and user-friendly interface, and customize your experience by setting your goals and preferences. FotBot is here to make your life easier, healthier, and more balanced.</p>
            <h3 className="fitbot-hashtag">#GetFitterWithFotBot</h3>
            <div>
              <input
                
                value={githubUsername}
                onChange={(e) => {
                  setgithubUsername(e.target.value);
                }}
                type="text"
                placeholder="Github username"
              />
              <input
                
                value={githubRepo}
                onChange={(e) => {
                  setgithubRepo(e.target.value);
                }}
                type="text"
                placeholder="Github repo"
              />
            <button onClick={sendMessagefunction}>Send</button>
              
            </div>
        </div>
    </div>
    
  );
};

export default InterviewChat;