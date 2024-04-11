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
        <div className="chat-box-header">Interview Buddy</div>
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
        <div className="fitbot-right fitbot-rightt">
            <h1 className="fitbot-right-head fitbot-right-headd">Interview Buddy</h1>
            <p className="fitbot-right-desc right-desc-2">This is for students from our team so they can learn in every minute by detailed analysis of everything they see , say or answer 💣</p>
           
            <div className="interview-bottom">
              <div>
              <input className="input-tag-int"
                
                value={githubUsername}
                onChange={(e) => {
                  setgithubUsername(e.target.value);
                }}
                type="text"
                placeholder="Github username"
              />
              <input className="input-tag-int"
                
                value={githubRepo}
                onChange={(e) => {
                  setgithubRepo(e.target.value);
                }}
                type="text"
                placeholder="Github repo"
              />
              </div>
            <button  className="sendbuttonin"  onClick={sendMessagefunction}>Send</button>
            <h3 className="fitbot-hashtag">#StartLearningStartBuilding</h3> 
            </div>
        </div>
    </div>
    
  );
};

export default InterviewChat;