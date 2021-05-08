import React, { useState } from "react";
import SubmitForm from "./SubmitForm";

function Navbar({ shownSub, setShownSub }) {
  const [colorChange, setColorchange] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 700) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="nav-container">
      <nav className={colorChange ? "nav colorChange" : "nav"}>
        <div className="logo-container">
          <a href="/">
            <span className="logo-title">Morchella Esculenta</span>
          </a>
        </div>
        {shownSub && (
          <SubmitForm shownSub={shownSub} setShownSub={setShownSub} />
        )}
        <div className="btnOpen">
          <button id="navOpen" onClick={() => setShownSub(!shownSub)}>
            book a table
          </button>
        </div>

        <div className="navbar">
          <div className="hamburger-icon" onClick={() => setSidebar(!sidebar)}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <span id="navbar-toggle" onClick={() => setSidebar(!sidebar)}>
              X
            </span>
            <ul className="nav-menu-items" onClick={() => setSidebar(!sidebar)}>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#menu">
                <li>Menu</li>
              </a>
              <a href="#footer">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
