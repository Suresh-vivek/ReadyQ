import React, { useRef, useState } from "react";
import "./kitabi.css";



const Kitabi = () => {
 
  
  const handleSubmit = () => {
    const url = document.getElementById("inputUrl").value;

    const requestData = { url };
    console.log(url);

    fetch("http://localhost:5001/process-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(requestData), 
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => console.log("Response data:", data))
      .catch((error) => console.error("Error:", error));
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
      </div>


      </div>
  );
};

export default Kitabi;
