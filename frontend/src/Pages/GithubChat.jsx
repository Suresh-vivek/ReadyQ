import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { interviewAction } from "../redux/slice/interviewSlice";
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
  const [level , setLevel] = useState("");
  const [stack , setStack] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const chatRef = useRef("");

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);


  const {chat} = useSelector((state) => state.fitbotChat);


  useEffect(() => {
    setMessages([...messages, chat?.message])
  },[chat])
 

  const sendMessagefunction = async () => {
    if(questionAnswer.length>0)messages.push(questionAnswer);
    setQuestionAnswer("");
    console.log(questionAnswer, stack, level);
    await dispatch(interviewAction({questionAnswer,stack,level}));
    setLevel("");
    setStack(""); 
  };

 

  return (
    < div className="fit-bot-body"> 
    <div className="csleft">
    <div className="chat-box">
        <div className="chat-box-header"><span className="code-class">Code</span> Sathi</div>
          <div ref={chatRef} className="chat-box-body">
            {messages.map((item, i) => (
              <MessagesCard key ={i} message={item} index={i} />
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
                setQuestionAnswer(e.target.value);
              }}
              type="text"
              placeholder="Ask a question..."
            />
           <button onClick={sendMessagefunction} className="csbutton">Send</button>
          </div>
      </div>
    </div>

    <div className="csright">
    <div className="fitbot-righttt">
            <h1 className="fitbot-right-head">Code Saathi</h1>
            <p className="fitbot-right-desc">This as the name suggest is your code teacher , friend , or interviewer.Yeah Interviewer !!! Sounds Amazing , Why not try it out then.</p>
          
      </div>

      <div className="container2">
        <div className="csoptions">
        <div  >
            <select className="csdrop1"
              onChange={(e) => {
                setStack(e.target.value);
              }} value ={stack}>
                <option value="Full Stack Dev">Full Stack Developer</option>
                <option value="Backend Dev">Backend</option>
                <option value="Frontend Dev">Frontend</option>
                <option value="Software Developer Engieer">Software Developer</option>
                <option value="Machine learning Dev">Machine learning</option>
            </select>
        </div>
        <div  >
            <select  className="csdrop"
              onChange={(e) => {
                setLevel(e.target.value);
              }} value ={level}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advances">Advanced</option>
            </select>
        </div>
       

        </div>
       
        <button onClick={sendMessagefunction} className="code-submit">Submit</button>
        
    </div>
    
    </div>
    

      
      
     
      
      </div>
    
  );
};

export default GithubChat;