import "./Home.css";
import React, { useState, useEffect } from "react";
import service_card from "../components/service_card";
import doc from "../assets/doc.svg";
import code from "../assets/code.svg";
import interview from "../assets/interview.svg";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Home = () => {
  const [containerItems, setContainerItems] = useState([
    {
      username: "Globus",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Marcus",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Synonym",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Phantom",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Kakashi",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Electron",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
    {
      username: "Proton",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rem. Rerum consequuntur laboriosam",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setContainerItems((prevItems) => {
        const rotatedItems = [...prevItems];
        const firstItem = rotatedItems.shift();
        rotatedItems.push(firstItem);
        return rotatedItems;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleMouseMove = (e) => {
    const container = document.querySelector(".container");
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;
    container.style.setProperty("--mouse-x", mouseX + "px");
    container.style.setProperty("--mouse-y", mouseY + "px");
  };
  const handleMouseLeave = () => {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    container.style.setProperty("--mouse-x", `-${containerRect.width}px`);
    container.style.setProperty("--mouse-y", `-${containerRect.height}px`);
  };

  const handleMouseMove1 = (e) => {
    const cardb = document.querySelector(".card-boundary");
    const mouseX = e.clientX - cardb.offsetLeft;
    const mouseY = e.clientY - cardb.offsetTop;
    cardb.style.setProperty("--mouse-x1", mouseX + "px");
    cardb.style.setProperty("--mouse-y1", mouseY + "px");
  };
  const handleMouseLeave1 = () => {
    const cardb = document.querySelector(".card-boundary");
    const containerRect = cardb.getBoundingClientRect();
    cardb.style.setProperty("--mouse-x1", `-${containerRect.width}px`);
    cardb.style.setProperty("--mouse-y1", `-${containerRect.height}px`);
  };
  return (
    <div className="main">
      <div className="home">
        <div className="info">
          <h1 className="title">
            Ready<span className="q">Q</span>
          </h1>
          <div className="han">
            <div id="priority">
              Let's Start{" "}
              <TypeAnimation
                sequence={["Learning", 1000, "Building", 1000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
                style={{ fontSize: "2rem", TextColor: "#e96c05" }}
              />{" "}
            </div>
          </div>
          <p className="description">
            We at readyQ is transforming interview experience and all the bogus
            debugging the documentation at your fingerprints. This is an app
            using Large Language model's power embracing the technologies like
          </p>
          <ul className="list">
            <li>LangChain</li>
            <li>OpenAI API</li>
            <li>ReactJS</li>
            <li>ExpresJS</li>
            <li>NodeJs</li>
          </ul>
        </div>
        <div className="ranking">
          <div
            className="container"
            id="container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="cards-wrapper">
              <div className="container-items">
                <div className="username">Globus</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>

              <div className="container-items">
                <div className="username">Marcus</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
              <div className="container-items">
                <div className="username">Synonym</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
              <div className="container-items">
                <div className="username">Phantom</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
              <div className="container-items">
                <div className="username">Kakashi</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
              <div className="container-items">
                <div className="username">Electron</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
              <div className="container-items">
                <div className="username">Proton</div>
                <div className="user-bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  rem. Rerum consequuntur laboriosam
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <header className="title ">
          <span>
            Our <span className="q1">Microservices</span>
          </span>
        </header>

        <div
          className="card-boundary"
          id="card-boundary"
          onMouseMove={handleMouseMove1}
          onMouseLeave={handleMouseLeave1}
        >
          <div className="cards-wrapper1">
            <div className="service_card">
              <div className="service-img">
                <img src={doc} alt="doc" />
              </div>
              <div className="sname">
                <span className="stitle">Kitabi</span>{" "}
                <span className="q2">Keeda</span>
              </div>
              <div className="sdesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                eius ullam nam sequi sit vel, repudiandae deserunt quod earum
                officia? Odio commodi tenetur nemo. Doloribus, odit iure.
                Voluptatum, porro mollitia.
              </div>
              <Link to="/kitabi-keeda" className="sbutton">
                <button className="btn">Try Now</button>
              </Link>
            </div>
            <div className="service_card">
              <div className="service-img">
                <img src={code} alt="doc" />
              </div>
              <div className="sname">
                <span className="stitle">Code</span>{" "}
                <span className="q2">Saathi</span>
              </div>
              <div className="sdesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                eius ullam nam sequi sit vel, repudiandae deserunt quod earum
                officia? Odio commodi tenetur nemo. Doloribus, odit iure.
                Voluptatum, porro mollitia.
              </div>
              <div className="sbutton">
                <button className="btn">Try Now</button>
              </div>
            </div>
            <div className="service_card">
              <div className="service-img">
                <img src={interview} alt="doc" />
              </div>
              <div className="sname">
                <span className="stitle">Interview</span>{" "}
                <span className="q2">Buddy</span>
              </div>
              <div className="sdesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                eius ullam nam sequi sit vel, repudiandae deserunt quod earum
                officia? Odio commodi tenetur nemo. Doloribus, odit iure.
                Voluptatum, porro mollitia.
              </div>
              <div className="sbutton">
                <button className="btn">Try Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
