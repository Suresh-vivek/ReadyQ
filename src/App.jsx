import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import InterviewChat from "./Pages/Interview";
import GithubChat from './Pages/GithubChat.jsx'

function App() {
  return (
   <BrowserRouter>
   
    <Routes>

      <Route path='/' element = {<GithubChat />} />

    </Routes>
    
   </BrowserRouter>
  );
}

export default App;