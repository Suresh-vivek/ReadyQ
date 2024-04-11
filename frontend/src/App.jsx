import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import InterviewChat from "./Pages/Interview";
import GithubChat from './Pages/GithubChat.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx';
import Kitabi from './Pages/Kitabi.jsx';
import Interview from './Pages/Interview.jsx'

import Footer from './components/Footer.jsx'

function App() {
  return (
   <BrowserRouter>
   
    <Routes>

      <Route path='/' 
        element =
        { <>
          <Navbar />
          <Home />
        </> }/>

        <Route path='/kitabi-keeda' 
        element =
        { <>
          <Navbar />
          <Kitabi />
        </> }/>

        <Route path='/code-sathi' 
        element =
        { <>
          <Navbar />
          <Interview />
          <Footer />
        </> }/>

        <Route path='/interview-buddy' 
        element =
        { <>
          <Navbar />
          <GithubChat />
          <Footer />
        </> }/>


    </Routes>
    
   </BrowserRouter>
  );
}

export default App;