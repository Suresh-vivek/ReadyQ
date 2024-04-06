import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GithubChat from "./Pages/GithubChat";


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
