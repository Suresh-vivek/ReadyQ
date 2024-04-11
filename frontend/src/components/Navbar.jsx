import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Home" },

    { path: "/Interview-buddy", title: "Code Sathi" },
    { path: "/code-sathi", title: "Interview Buddy" },
    {
      path: "/kitabi-keeda",
      title: "Kitabi Keeda",
    },
  ];
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="logo">
          <svg
            width="43"
            height="44"
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="23" cy="24" r="20" fill="url(#paint0_linear_5_36)" />
            <circle
              cx="20"
              cy="20"
              r="20"
              fill="url(#paint1_linear_5_36)"
              fill-opacity="0.6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_36"
                x1="35"
                y1="8"
                x2="10.5"
                y2="38.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A109EA" />
                <stop offset="1" stop-color="#B42CF5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5_36"
                x1="32"
                y1="4"
                x2="7.5"
                y2="34.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A109EA" />
                <stop offset="1" stop-color="#B42CF5" />
              </linearGradient>
            </defs>
          </svg>
          <span className="name">
            Ready<span className="q">Q</span>
          </span>
        </a>

        <ul className="nav-items">
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
